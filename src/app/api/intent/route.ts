import { NextRequest, NextResponse } from 'next/server';
import { IntentCategory, IntentResult, intentResponses } from '@/lib/intent/taxonomy';
import { classifyIntent } from '@/lib/intent/classifier';

// Intent categories for AI classification
const INTENT_DESCRIPTIONS = `
Available intent categories:
- PERFORMANCE_VELOCITY: User wants to throw harder, more velocity, more mph
- PERFORMANCE_POWER: User wants to hit harder, more exit velo, bat speed
- PERFORMANCE_GENERAL: General training/improvement goals
- INJURY_ARM: Arm pain, elbow issues, shoulder problems, UCL, Tommy John
- INJURY_GENERAL: Other injury or health concerns
- LOGISTICS_LOCAL: User is local to Knoxville, TN
- LOGISTICS_REMOTE: User can't travel, needs virtual training
- LOGISTICS_TRAVEL: User asking about travel/flying in
- STAGE_YOUTH: Parent asking for child (12-13 years old)
- STAGE_HIGH_SCHOOL: High school athlete (14-18)
- STAGE_COLLEGE: College recruiting, D1/D2/D3, NCAA
- STAGE_DRAFT: MLB draft prep, scouts, showcases
- STAGE_PRO: Professional athlete
- COACH_LEARN: Coach wants to learn the 108 system
- COACH_TEAM: Coach wants to train their team
- COACH_LICENSE: Coach wants to license/franchise
- PRICING: Questions about cost/price
- UNKNOWN: Cannot determine intent
`;

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    // First, try client-side classification
    const clientResult = classifyIntent(query);

    // If good confidence, return client result
    if (clientResult.confidence >= 0.5) {
      return NextResponse.json(clientResult);
    }

    // Try Claude (Anthropic) fallback if available
    const anthropicKey = process.env.ANTHROPIC_API_KEY;

    if (!anthropicKey) {
      // No API key, return best client result
      return NextResponse.json(clientResult);
    }

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': anthropicKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-3-haiku-20240307',
          max_tokens: 50,
          messages: [
            {
              role: 'user',
              content: `You are an intent classifier for 108 Performance, a baseball/softball training facility. Classify this user query into one of the categories below. Return ONLY the category name, nothing else.

${INTENT_DESCRIPTIONS}

Examples:
"I want to throw 90mph" -> PERFORMANCE_VELOCITY
"my elbow has been sore" -> INJURY_ARM
"training for my 12 year old" -> STAGE_YOUTH
"I'm a pitching coach" -> COACH_LEARN
"how much does it cost" -> PRICING
"i live in tennessee" -> LOGISTICS_LOCAL

User query: "${query}"

Category:`,
            },
          ],
        }),
      });

      if (!response.ok) {
        console.error('Anthropic API error:', response.status);
        return NextResponse.json(clientResult);
      }

      const data = await response.json();
      const aiCategory = data.content?.[0]?.text?.trim() as IntentCategory;

      // Validate the category
      if (aiCategory && intentResponses[aiCategory]) {
        const result: IntentResult = {
          category: aiCategory,
          confidence: 0.85, // AI classification confidence
          ...intentResponses[aiCategory],
        };
        return NextResponse.json(result);
      }

      // Fall back to client result if AI returns invalid category
      return NextResponse.json(clientResult);
    } catch (aiError) {
      console.error('AI classification error:', aiError);
      return NextResponse.json(clientResult);
    }
  } catch (error) {
    console.error('Intent API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey: API_KEY });

export interface BiomechanicsPlan {
  focusArea: string;
  mechanicalAdjustment: string;
  recommendedDrills: string[];
  expectedGain: string;
}

export const generateBiomechanicsPlan = async (sport: string, goal: string): Promise<BiomechanicsPlan> => {
  const prompt = `Act as an elite biomechanics coach at 108 Performance. 
  A student-athlete focuses on ${sport} and has the goal: "${goal}". 
  Provide a highly technical, data-driven training focus.
  The style should be elite, intense, and scientific.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          focusArea: { type: Type.STRING, description: 'Primary physiological focus' },
          mechanicalAdjustment: { type: Type.STRING, description: 'The specific biomechanical change needed' },
          recommendedDrills: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: 'List of 3 advanced drills'
          },
          expectedGain: { type: Type.STRING, description: 'The metric improvement expected' }
        },
        required: ['focusArea', 'mechanicalAdjustment', 'recommendedDrills', 'expectedGain']
      }
    }
  });

  return JSON.parse(response.text || '{}');
};

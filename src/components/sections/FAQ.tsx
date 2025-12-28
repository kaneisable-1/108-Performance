'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';

const faqs = [
  {
    question: 'What is the 108 Experience?',
    answer: '2-5 days where we learn your wiring before we touch your mechanics. You leave with YOUR system—cues that click for you, not a cookie-cutter template.',
  },
  {
    question: 'Do I have to start with the 108 Experience?',
    answer: 'Yes. Every path starts at the same door. We need to understand how you think before we can help you move.',
  },
  {
    question: 'What if I\'m not local to Knoxville?',
    answer: 'Most of our athletes aren\'t. After the initial Experience, you can continue with Virtual Experience ($550/mo) or Virtual Pro ($1,000/mo) which includes 6 trips per year.',
  },
  {
    question: 'What ages do you work with?',
    answer: 'From 12 to MLB. Youth athletes, high schoolers, college players, and professionals all train under one roof with the same methodology.',
  },
  {
    question: 'Do you work with softball players?',
    answer: 'Yes. We have dedicated softball training built specifically for how women move, led by 4-time All-American Jamie Bleecker.',
  },
  {
    question: 'How much does it cost?',
    answer: 'The 108 Experience starts at $2,000. Ongoing training ranges from $499/mo (Tri-Star) to $1,500/mo (Draft Prep). Every path starts with the Experience.',
  },
  {
    question: 'What makes 108 different?',
    answer: 'Most facilities teach you THEIR system. We help you find YOURS. We start with how you think, then build movement and skills on that foundation.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-4">
              Questions Answered
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              Common questions
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              <div className="border border-black/10 bg-white">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-black pr-4">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl text-black/50 flex-shrink-0"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-black/60 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

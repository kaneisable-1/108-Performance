'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface PageFAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  variant?: 'light' | 'dark';
}

export function PageFAQ({
  faqs,
  title = 'Common questions',
  subtitle = 'Questions Answered',
  variant = 'light'
}: PageFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const isDark = variant === 'dark';

  return (
    <section className={`py-24 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className={`text-xs uppercase tracking-[0.3em] mb-4 ${isDark ? 'text-white/40' : 'text-black/40'}`}>
            {subtitle}
          </p>
          <h2 className={`text-3xl md:text-4xl font-black ${isDark ? 'text-white' : 'text-black'}`}>
            {title}
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
              className={`border ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className={`font-semibold pr-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`text-2xl flex-shrink-0 ${isDark ? 'text-white/50' : 'text-black/50'}`}
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
                    <p className={`px-6 pb-5 leading-relaxed ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';
import Script from 'next/script';

const steps = [
  { id: 1, title: 'Contact', description: 'Basic information' },
  { id: 2, title: 'Background', description: 'Experience & education' },
  { id: 3, title: 'Philosophy', description: 'Your approach to coaching' },
  { id: 4, title: 'Scenarios', description: 'Practical applications' },
  { id: 5, title: 'Personal', description: 'Who you are' },
  { id: 6, title: 'Final', description: 'Wrap up' },
];

export default function CareersPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const updateField = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    try {
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSd_TDdqoEG1V-XWvmbzok7lxBt9bPPjQMrPy0_TWynLtcyxvg/formResponse',
        {
          method: 'POST',
          body: form,
          mode: 'no-cors',
        }
      );
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-200 focus:border-black focus:ring-0 focus:outline-none transition-colors bg-white";
  const textareaClasses = "w-full px-4 py-3 border border-gray-200 focus:border-black focus:ring-0 focus:outline-none transition-colors resize-none bg-white";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <>
      <Navigation />
      <main className="pt-20 bg-gray-50 min-h-screen">
        {/* Hero */}
        <section className="bg-black text-white py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
                Careers at 108
              </p>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                Join the lab.
              </h1>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                We're looking for curious minds who question everything about player development.
                If you think differently about the game, we want to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Application */}
       <section className="py-16">
  <iframe
    src="https://link.apisystem.tech/widget/survey/KgHi7oYZH43591lN4tH4"
    style={{ border: 'none', width: '100%' }}
    scrolling="no"
    id="KgHi7oYZH43591lN4tH4"
    title="survey"
  />

  <Script
    src="https://link.msgsndr.com/js/form_embed.js"
    strategy="afterInteractive"
  />
</section>

      </main>
      <Footer />
    </>
  );
}

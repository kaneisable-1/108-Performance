'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';

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
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-black mx-auto mb-6 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black mb-3">Application received.</h2>
                <p className="text-gray-500 mb-6">
                  We'll review your responses carefully. If there's a fit, we'll reach out within 2 weeks.
                </p>
                <p className="text-sm text-gray-400">
                  In the meantime, follow us on social media to see what we're about.
                </p>
              </motion.div>
            ) : (
              <>
                {/* Progress Indicator */}
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-4">
                    {steps.map((step, index) => (
                      <div key={step.id} className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                            currentStep >= step.id
                              ? 'bg-black text-white'
                              : 'bg-gray-200 text-gray-400'
                          }`}
                        >
                          {step.id}
                        </div>
                        {index < steps.length - 1 && (
                          <div
                            className={`w-8 md:w-16 h-0.5 mx-1 transition-colors ${
                              currentStep > step.id ? 'bg-black' : 'bg-gray-200'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">{steps[currentStep - 1].title}</p>
                    <p className="text-sm text-gray-500">{steps[currentStep - 1].description}</p>
                  </div>
                </div>

                {/* Form Steps */}
                <div className="bg-white p-8 md:p-12 shadow-lg">
                  <AnimatePresence mode="wait">
                    {/* Step 1: Contact */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className={labelClasses}>First Name</label>
                            <input
                              type="text"
                              className={inputClasses}
                              value={formData['entry.337061613'] || ''}
                              onChange={(e) => updateField('entry.337061613', e.target.value)}
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label className={labelClasses}>Last Name</label>
                            <input
                              type="text"
                              className={inputClasses}
                              value={formData['entry.491410754'] || ''}
                              onChange={(e) => updateField('entry.491410754', e.target.value)}
                              placeholder="Smith"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className={labelClasses}>Phone Number</label>
                            <input
                              type="tel"
                              className={inputClasses}
                              value={formData['entry.1276882401'] || ''}
                              onChange={(e) => updateField('entry.1276882401', e.target.value)}
                              placeholder="(555) 555-5555"
                            />
                          </div>
                          <div>
                            <label className={labelClasses}>Email</label>
                            <input
                              type="email"
                              className={inputClasses}
                              value={formData['entry.784680804'] || ''}
                              onChange={(e) => updateField('entry.784680804', e.target.value)}
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className={labelClasses}>Date of Birth</label>
                            <input
                              type="date"
                              className={inputClasses}
                              value={formData['entry.1428290406'] || ''}
                              onChange={(e) => updateField('entry.1428290406', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className={labelClasses}>How did you hear about 108?</label>
                            <input
                              type="text"
                              className={inputClasses}
                              value={formData['entry.1581213823'] || ''}
                              onChange={(e) => updateField('entry.1581213823', e.target.value)}
                              placeholder="Social media, referral, etc."
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Background */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className={labelClasses}>Previous training or coaching experience</label>
                          <textarea
                            rows={4}
                            className={textareaClasses}
                            value={formData['entry.1000002028'] || ''}
                            onChange={(e) => updateField('entry.1000002028', e.target.value)}
                            placeholder="Describe your background in baseball/softball training..."
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>Education background</label>
                          <input
                            type="text"
                            className={inputClasses}
                            value={formData['entry.1679863802'] || ''}
                            onChange={(e) => updateField('entry.1679863802', e.target.value)}
                            placeholder="Degree, certifications, etc."
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>What are you currently studying?</label>
                          <input
                            type="text"
                            className={inputClasses}
                            value={formData['entry.1979925008'] || ''}
                            onChange={(e) => updateField('entry.1979925008', e.target.value)}
                            placeholder="Books, courses, topics..."
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>What products, tools, or programs do you currently use?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.1086169164'] || ''}
                            onChange={(e) => updateField('entry.1086169164', e.target.value)}
                            placeholder="Training tools, software, methodologies..."
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>Have you taken any of our courses or used our products?</label>
                          <textarea
                            rows={2}
                            className={textareaClasses}
                            value={formData['entry.2071126135'] || ''}
                            onChange={(e) => updateField('entry.2071126135', e.target.value)}
                            placeholder="If so, which ones and what did you learn?"
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Philosophy */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className={labelClasses}>What are your greatest strengths as a coach?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.1034369996'] || ''}
                            onChange={(e) => updateField('entry.1034369996', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>What are your greatest weaknesses as a coach?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.498697862'] || ''}
                            onChange={(e) => updateField('entry.498697862', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>What is wrong with the game of baseball today?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.2064897861'] || ''}
                            onChange={(e) => updateField('entry.2064897861', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>Youth participation in baseball is declining. Why? How do we fix it?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.1528993402'] || ''}
                            onChange={(e) => updateField('entry.1528993402', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>Are hitting and pitching more mental or physical?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.191008726'] || ''}
                            onChange={(e) => updateField('entry.191008726', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>What is the biggest challenge hitters face today?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.915851938'] || ''}
                            onChange={(e) => updateField('entry.915851938', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>Do you feel more comfortable coaching hitters or pitchers?</label>
                          <input
                            type="text"
                            className={inputClasses}
                            value={formData['entry.30438630'] || ''}
                            onChange={(e) => updateField('entry.30438630', e.target.value)}
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Step 4: Scenarios */}
                    {currentStep === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="bg-gray-50 p-6 mb-6">
                          <p className="text-sm text-gray-600 mb-4">
                            <strong>Scenario:</strong> 12-year-old Johnny comes to 108. He's a right-handed pitcher/shortstop
                            who throws in the low 60s and hits from the right side. He has a goal of playing in a
                            top-level travel league by age 14. Dad mentioned some elbow soreness after games.
                          </p>
                        </div>
                        <div>
                          <label className={labelClasses}>Design a one-week program for Johnny</label>
                          <textarea
                            rows={5}
                            className={textareaClasses}
                            value={formData['entry.1252499121'] || ''}
                            onChange={(e) => updateField('entry.1252499121', e.target.value)}
                            placeholder="What would you focus on? How would you structure the week?"
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>Injury rates are at an all-time high. Why?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.387222795'] || ''}
                            onChange={(e) => updateField('entry.387222795', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>How does the weight room transfer to the field?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.1112010165'] || ''}
                            onChange={(e) => updateField('entry.1112010165', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>What do you need to know about a player to improve them?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.1254704652'] || ''}
                            onChange={(e) => updateField('entry.1254704652', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>What would a typical training session look like for you?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.1427814697'] || ''}
                            onChange={(e) => updateField('entry.1427814697', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>How do you handle interfering parents?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.766948855'] || ''}
                            onChange={(e) => updateField('entry.766948855', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>What should a player do after a game?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.1751688191'] || ''}
                            onChange={(e) => updateField('entry.1751688191', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>What are some fundamental truths to baseball?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.431020951'] || ''}
                            onChange={(e) => updateField('entry.431020951', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>Where is the future of player development headed?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.2135991155'] || ''}
                            onChange={(e) => updateField('entry.2135991155', e.target.value)}
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Step 5: Personal */}
                    {currentStep === 5 && (
                      <motion.div
                        key="step5"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className={labelClasses}>What kind of player were you?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.1782718618'] || ''}
                            onChange={(e) => updateField('entry.1782718618', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>What kind of teammate were you?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.1169377855'] || ''}
                            onChange={(e) => updateField('entry.1169377855', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>Which coach impacted you the most and why?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.726679691'] || ''}
                            onChange={(e) => updateField('entry.726679691', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>In your coaching career, what has been the biggest moment so far?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.729423857'] || ''}
                            onChange={(e) => updateField('entry.729423857', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>In your coaching career, what has been the most disappointing moment?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.1801740836'] || ''}
                            onChange={(e) => updateField('entry.1801740836', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>Looking back at your career, how could you have done better?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.1617842805'] || ''}
                            onChange={(e) => updateField('entry.1617842805', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>Why would someone NOT recommend you for this job?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.304292158'] || ''}
                            onChange={(e) => updateField('entry.304292158', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>How do you handle failure?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.402084252'] || ''}
                            onChange={(e) => updateField('entry.402084252', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>How do you handle success?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.344138553'] || ''}
                            onChange={(e) => updateField('entry.344138553', e.target.value)}
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Step 6: Final */}
                    {currentStep === 6 && (
                      <motion.div
                        key="step6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className={labelClasses}>What is your favorite book and why?</label>
                          <textarea
                            rows={2}
                            className={textareaClasses}
                            value={formData['entry.826887208'] || ''}
                            onChange={(e) => updateField('entry.826887208', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>What is your favorite movie and why?</label>
                          <textarea
                            rows={2}
                            className={textareaClasses}
                            value={formData['entry.963837373'] || ''}
                            onChange={(e) => updateField('entry.963837373', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>What hobbies do you enjoy?</label>
                          <input
                            type="text"
                            className={inputClasses}
                            value={formData['entry.1017782681'] || ''}
                            onChange={(e) => updateField('entry.1017782681', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>If you had an off day, how would you spend it?</label>
                          <textarea
                            rows={2}
                            className={textareaClasses}
                            value={formData['entry.906920512'] || ''}
                            onChange={(e) => updateField('entry.906920512', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>What has been the greatest moment of your life?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.1761525448'] || ''}
                            onChange={(e) => updateField('entry.1761525448', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>We've all hit rock bottom. If you could go back, what would you tell yourself?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.664851078'] || ''}
                            onChange={(e) => updateField('entry.664851078', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>Why do you want to train baseball players?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.1942038055'] || ''}
                            onChange={(e) => updateField('entry.1942038055', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>What are your career aspirations?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.1743607640'] || ''}
                            onChange={(e) => updateField('entry.1743607640', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>How will 108 help you achieve those?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.957823639'] || ''}
                            onChange={(e) => updateField('entry.957823639', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>For a business to succeed, what core principles do they need?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.1400630696'] || ''}
                            onChange={(e) => updateField('entry.1400630696', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>Who is your favorite baseball player? What makes them successful?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.840336903'] || ''}
                            onChange={(e) => updateField('entry.840336903', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>Is there anything else we should know about you?</label>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.1803944175'] || ''}
                            onChange={(e) => updateField('entry.1803944175', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>Link to content you've created (videos, articles, etc.)</label>
                          <input
                            type="url"
                            className={inputClasses}
                            value={formData['entry.1121261619'] || ''}
                            onChange={(e) => updateField('entry.1121261619', e.target.value)}
                            placeholder="https://"
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>When is the earliest you could start?</label>
                          <input
                            type="date"
                            className={inputClasses}
                            value={formData['entry.364979187'] || ''}
                            onChange={(e) => updateField('entry.364979187', e.target.value)}
                          />
                        </div>
                        <div className="bg-gray-50 p-6">
                          <p className="text-sm text-gray-600 mb-4">
                            <strong>Final thought:</strong> "Ego is the enemy of what we could become."
                            How does this quote relate to player development?
                          </p>
                          <textarea
                            rows={3}
                            className={textareaClasses}
                            value={formData['entry.1849845272'] || ''}
                            onChange={(e) => updateField('entry.1849845272', e.target.value)}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-100">
                    {currentStep > 1 ? (
                      <button
                        onClick={prevStep}
                        className="px-6 py-3 text-gray-500 hover:text-black transition-colors font-medium"
                      >
                        Back
                      </button>
                    ) : (
                      <div />
                    )}

                    {currentStep < steps.length ? (
                      <motion.button
                        onClick={nextStep}
                        whileHover={{ y: 2 }}
                        whileTap={{ y: 4 }}
                        className="bg-black text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                      >
                        Continue
                      </motion.button>
                    ) : (
                      <motion.button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        whileHover={{ y: isSubmitting ? 0 : 2 }}
                        whileTap={{ y: isSubmitting ? 0 : 4 }}
                        className={`px-8 py-3 font-bold uppercase tracking-wider transition-colors ${
                          isSubmitting
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-black text-white hover:bg-gray-900'
                        }`}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* Step Counter */}
                <p className="text-center text-sm text-gray-400 mt-6">
                  Step {currentStep} of {steps.length}
                </p>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

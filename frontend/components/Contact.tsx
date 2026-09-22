'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const PROJECT_TYPES = [
  'Agentic AI',
  'Generative AI',
  'AI SaaS',
  'Web Application',
  'Mobile Application',
  'Automation',
  'AI Integration',
  'Other',
];

const BUDGET_RANGES = [
  '< $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  '$50,000+',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Agentic AI',
    budget: '$5,000 - $15,000',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    /* 
      FUTURE BACKEND INTEGRATION HANDOFF:
      Expected API Endpoint: POST /api/contact
      Payload: { name, email, company, projectType, budget, message }
    */

    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E50914]">
            Start a Conversation
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mt-2 mb-4">
            LET&apos;S DISCUSS YOUR PROJECT.
          </h2>
          <p className="text-base text-foreground/75 leading-relaxed font-normal">
            Tell us about your objectives, timeline, and vision. We&apos;ll analyze your requirements and follow up promptly.
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="rounded-2xl border border-border bg-muted/20 p-6 sm:p-10 shadow-xs">
          {status === 'success' ? (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-10 w-10 text-[#E50914]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Message Received</h3>
              <p className="text-sm text-foreground/75 max-w-md mx-auto mb-8 font-normal">
                Thank you for reaching out to CODEXK7. Our engineering team will review your inquiry and get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setStatus('idle');
                  setFormData({
                    name: '',
                    email: '',
                    company: '',
                    projectType: 'Agentic AI',
                    budget: '$5,000 - $15,000',
                    message: '',
                  });
                }}
                className="px-6 py-2.5 rounded-xl border border-border bg-white text-xs font-mono font-bold text-foreground hover:bg-muted cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 shrink-0 text-[#E50914]" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold text-foreground/80 uppercase mb-2">
                    Name <span className="text-[#E50914]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-[#E50914] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-foreground/80 uppercase mb-2">
                    Email <span className="text-[#E50914]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    required
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-[#E50914] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Company & Project Type Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold text-foreground/80 uppercase mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-[#E50914] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-foreground/80 uppercase mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground focus:border-[#E50914] focus:outline-none transition-colors cursor-pointer"
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget Selector */}
              <div>
                <label className="block text-xs font-mono font-bold text-foreground/80 uppercase mb-2">
                  Budget Expectation
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {BUDGET_RANGES.map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: range })}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-mono font-semibold transition-all cursor-pointer ${
                        formData.budget === range
                          ? 'border-[#E50914] bg-[#E50914] text-white shadow-xs'
                          : 'border-border bg-white text-foreground/70 hover:border-foreground/30'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-xs font-mono font-bold text-foreground/80 uppercase mb-2">
                  Project Description <span className="text-[#E50914]">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline your goal, timeline, technical context, or key requirements..."
                  required
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-[#E50914] focus:outline-none transition-colors resize-y"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full min-h-[3.25rem] rounded-xl bg-foreground text-white font-mono font-bold text-sm tracking-wider uppercase hover:bg-[#E50914] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-xs"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-white" />
                      <span>SENDING INQUIRY...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT PROJECT INQUIRY</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

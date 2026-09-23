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

    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 border-b relative overflow-hidden" style={{ borderColor: 'var(--border)', background: 'var(--background)' }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-editorial inline-block mb-3">
            Start a Conversation
          </span>
          <h2 className="mt-2 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Let&apos;s discuss your{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>Project.</em>
          </h2>
          <p className="text-base leading-relaxed font-normal" style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}>
            Tell us about your objectives, timeline, and vision. We&apos;ll analyze your requirements and follow up promptly.
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="card-editorial p-6 sm:p-10 shadow-xs">
          {status === 'success' ? (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <div
                className="h-16 w-16 rounded-full flex items-center justify-center mb-6"
                style={{
                  background: 'rgba(168,32,32,0.08)',
                  border: '1px solid rgba(168,32,32,0.25)',
                  color: 'var(--primary)',
                }}
              >
                <CheckCircle2 className="h-10 w-10" style={{ color: 'var(--primary)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--foreground)' }}>
                Message Received
              </h3>
              <p className="text-sm max-w-md mx-auto mb-8 font-normal" style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}>
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
                className="btn-outline px-6 py-2.5 rounded-lg text-xs font-semibold cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'error' && (
                <div
                  className="p-4 rounded-xl text-xs font-mono flex items-center gap-2"
                  style={{
                    background: 'rgba(168,32,32,0.08)',
                    border: '1px solid rgba(168,32,32,0.3)',
                    color: 'var(--primary)',
                  }}
                >
                  <AlertCircle className="h-4 w-4 shrink-0" style={{ color: 'var(--primary)' }} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase mb-2" style={{ color: 'var(--muted-fg)', letterSpacing: '0.05em', fontFamily: "'Inter', sans-serif" }}>
                    Name <span style={{ color: 'var(--primary)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--foreground)',
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase mb-2" style={{ color: 'var(--muted-fg)', letterSpacing: '0.05em', fontFamily: "'Inter', sans-serif" }}>
                    Email <span style={{ color: 'var(--primary)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    required
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--foreground)',
                    }}
                  />
                </div>
              </div>

              {/* Company & Project Type Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase mb-2" style={{ color: 'var(--muted-fg)', letterSpacing: '0.05em', fontFamily: "'Inter', sans-serif" }}>
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--foreground)',
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase mb-2" style={{ color: 'var(--muted-fg)', letterSpacing: '0.05em', fontFamily: "'Inter', sans-serif" }}>
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors cursor-pointer"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--foreground)',
                    }}
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type} style={{ background: 'var(--card)', color: 'var(--foreground)' }}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase mb-2" style={{ color: 'var(--muted-fg)', letterSpacing: '0.05em', fontFamily: "'Inter', sans-serif" }}>
                  Budget Expectation
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {BUDGET_RANGES.map((range) => {
                    const isSelected = formData.budget === range;
                    return (
                      <button
                        key={range}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: range })}
                        className="py-2.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          border: `1px solid ${isSelected ? 'var(--primary)' : 'var(--border)'}`,
                          background: isSelected ? 'var(--primary)' : 'var(--surface)',
                          color: isSelected ? '#ffffff' : 'var(--muted-fg)',
                        }}
                      >
                        {range}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-xs font-semibold uppercase mb-2" style={{ color: 'var(--muted-fg)', letterSpacing: '0.05em', fontFamily: "'Inter', sans-serif" }}>
                  Project Description <span style={{ color: 'var(--primary)' }}>*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline your goal, timeline, technical context, or key requirements..."
                  required
                  className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors resize-y"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    color: 'var(--foreground)',
                  }}
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full min-h-[3.25rem] rounded-lg text-white font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
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

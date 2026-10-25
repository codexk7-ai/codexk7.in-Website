
import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { BudgetSelector, CurrencyToggle, type BudgetRange, type Currency } from '@/site/components/ui/budget-selector';
import { submitLead } from '@/site/server/lead.functions';

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

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: 'Agentic AI',
  linkedin: '',
  currency: 'INR' as Currency,
  budgetRange: '' as BudgetRange | '',
  projectDescription: '',
  website: '', // honeypot, hidden from humans
};
type FormState = typeof EMPTY_FORM;
type Errors = Partial<Record<'name' | 'email' | 'phone' | 'linkedin' | 'budgetRange' | 'projectDescription', string>>;

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = 'Please enter your name.';
  if (!f.email.trim()) e.email = 'Please enter your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = 'Please enter a valid email address.';
  const digits = f.phone.replace(/\D/g, '');
  if (!f.phone.trim()) e.phone = 'Please enter your phone number.';
  else if (!/^\+?[\d\s\-()]+$/.test(f.phone.trim()) || digits.length < 7 || digits.length > 15)
    e.phone = 'Please enter a valid phone number, e.g. +91 98765 43210.';
  if (f.linkedin.trim()) {
    try {
      const u = new URL(f.linkedin.trim());
      if (!/^https?:$/.test(u.protocol)) throw new Error();
    } catch {
      e.linkedin = 'Please enter a full URL, e.g. https://linkedin.com/in/your-name.';
    }
  }
  if (!f.budgetRange) e.budgetRange = 'Please select a budget range.';
  if (!f.projectDescription.trim()) e.projectDescription = 'Please describe your project.';
  return e;
}

function FieldError({ msg }: { msg?: string | undefined }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 text-[11px]" role="alert" style={{ color: 'var(--primary)', fontFamily: "'Inter', sans-serif" }}>
      {msg}
    </p>
  );
}

const labelCls = 'block text-xs font-semibold uppercase mb-2';
const labelStyle = { color: 'var(--muted-fg)', letterSpacing: '0.05em', fontFamily: "'Inter', sans-serif" };
const inputCls = 'w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors';
const inputStyle = (err?: string | undefined) => ({
  background: 'var(--surface)',
  border: `1px solid ${err ? 'var(--primary)' : 'var(--border)'}`,
  color: 'var(--foreground)',
});

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const update = (patch: Partial<FormState>) => {
    const next = { ...formData, ...patch };
    setFormData(next);
    if (submitted) setErrors(validate(next));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    update({ [e.target.name]: e.target.value } as Partial<FormState>);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus('error');
      setErrorMessage('Please fix the highlighted fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');
    try {
      await submitLead({
        data: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          projectType: formData.projectType,
          linkedin: formData.linkedin.trim(),
          currency: formData.currency,
          budgetRange: formData.budgetRange as BudgetRange,
          projectDescription: formData.projectDescription.trim(),
          website: formData.website,
        },
      });
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('We could not send your message right now. Please try again in a few minutes.');
    }
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
                  setFormData(EMPTY_FORM);
                  setErrors({});
                  setSubmitted(false);
                }}
                className="btn-outline px-6 py-2.5 rounded-lg text-xs font-semibold cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6" style={{ position: 'relative' }}>
              <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
                <label>
                  Leave this field empty
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </label>
              </div>
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
                    aria-invalid={!!errors.name}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={inputStyle(errors.name)}
                  />
                  <FieldError msg={errors.name} />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase mb-2" style={{ color: 'var(--muted-fg)', letterSpacing: '0.05em', fontFamily: "'Inter', sans-serif" }}>
                    Email <span style={{ color: 'var(--primary)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    aria-invalid={!!errors.email}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    required
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={inputStyle(errors.email)}
                  />
                  <FieldError msg={errors.email} />
                </div>
              </div>

              {/* Phone & LinkedIn Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-phone" className={labelCls} style={labelStyle}>
                    Phone Number <span style={{ color: 'var(--primary)' }}>*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    inputMode="tel"
                    autoComplete="tel"
                    aria-invalid={!!errors.phone}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className={inputCls}
                    style={inputStyle(errors.phone)}
                  />
                  <FieldError msg={errors.phone} />
                </div>
                <div>
                  <label htmlFor="contact-linkedin" className={labelCls} style={labelStyle}>
                    LinkedIn Profile
                  </label>
                  <input
                    id="contact-linkedin"
                    type="url"
                    name="linkedin"
                    autoComplete="url"
                    aria-invalid={!!errors.linkedin}
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/your-name"
                    className={inputCls}
                    style={inputStyle(errors.linkedin)}
                  />
                  <FieldError msg={errors.linkedin} />
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
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="block text-xs font-semibold uppercase" style={labelStyle}>
                    Budget Expectation <span style={{ color: 'var(--primary)' }}>*</span>
                  </span>
                  <CurrencyToggle value={formData.currency} onChange={(currency) => update({ currency })} />
                </div>
                <BudgetSelector
                  currency={formData.currency}
                  value={formData.budgetRange}
                  onChange={(budgetRange) => update({ budgetRange })}
                />
                <FieldError msg={errors.budgetRange} />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-xs font-semibold uppercase mb-2" style={{ color: 'var(--muted-fg)', letterSpacing: '0.05em', fontFamily: "'Inter', sans-serif" }}>
                  Project Description <span style={{ color: 'var(--primary)' }}>*</span>
                </label>
                <textarea
                  name="projectDescription"
                  rows={4}
                  aria-invalid={!!errors.projectDescription}
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Outline your goal, timeline, technical context, or key requirements..."
                  required
                  className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors resize-y"
                  style={inputStyle(errors.projectDescription)}
                />
                <FieldError msg={errors.projectDescription} />
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

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, RotateCcw } from 'lucide-react';
import { soundEngine } from '../../utils/audio';

interface ProjectInquiryFormProps {
  initialRequirement?: string;
}

const NEED_OPTIONS = [
  'Website',
  'Social Media Management',
  'Website + Social Media',
  'Content / Editing',
  'Meta / Instagram Ads',
  'Something Else',
];

const GOAL_OPTIONS = [
  'Build a digital presence',
  'Get a new website',
  'Improve an existing website',
  'Improve social media',
  'Generate more inquiries',
  'Launch a new brand',
  'Other',
];

const RANGE_OPTIONS = [
  { id: 'exploring', label: 'Exploring', note: 'Early discovery & scoping' },
  { id: 'starting', label: 'Starting Out', note: 'Emerging brand or venture' },
  { id: 'established', label: 'Established Business', note: 'Scaling existing presence' },
  { id: 'custom', label: 'Custom Requirement', note: 'Bespoke multi-platform brief' },
];

export const ProjectInquiryForm: React.FC<ProjectInquiryFormProps> = ({
  initialRequirement = 'Website',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    need: initialRequirement,
    goal: 'Build a digital presence',
    details: '',
    reference: '',
    range: 'Starting Out',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialRequirement) {
      setFormData((prev) => ({ ...prev, need: initialRequirement }));
    }
  }, [initialRequirement]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoalSelect = (goal: string) => {
    soundEngine.playChime();
    setFormData((prev) => ({ ...prev, goal }));
  };

  const handleRangeSelect = (range: string) => {
    soundEngine.playChime();
    setFormData((prev) => ({ ...prev, range }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playChime();
    setIsSubmitting(true);



    // Simulate brief transition into submission confirmation state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      soundEngine.playChime();
    }, 600);
  };

  const handleReset = () => {
    soundEngine.playChime();
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      brand: '',
      need: 'Website',
      goal: 'Build a digital presence',
      details: '',
      reference: '',
      range: 'Starting Out',
    });
  };

  return (
    <div
      id="inquiry-form"
      className="relative p-6 sm:p-10 rounded-2xl bg-[#08060f]/85 border border-white/[0.09] backdrop-blur-xl shadow-[0_25px_70px_-20px_rgba(0,0,0,0.95)] overflow-hidden transition-all duration-500"
      style={{
        boxShadow:
          '0 25px 70px -20px rgba(0,0,0,0.95), 0 0 35px rgba(109,40,217,0.18), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      {/* Ambient background light */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-purple-600/12 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-rose-600/10 blur-3xl pointer-events-none" />

      {submitted ? (
        <div className="py-12 md:py-16 text-center flex flex-col items-center animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-purple-900/30 border border-amber-400/50 flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(202,166,105,0.25)]">
            <CheckCircle2 className="w-8 h-8 text-amber-400" />
          </div>

          <p className="text-[10px] tracking-[0.4em] uppercase font-cinzel text-neutral-500 mb-2">
            Inquiry Logged
          </p>

          <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-white mb-4">
            MESSAGE RECEIVED.
          </h3>

          <div className="max-w-md mx-auto space-y-3 text-neutral-300 font-sans text-xs sm:text-sm leading-relaxed mb-8">
            <p className="text-base font-cormorant italic text-neutral-200">
              We&apos;ve got the details.
            </p>
            <p className="text-neutral-400">
              We&apos;ll get back to you through the contact information you provided (
              <span className="text-neutral-200 font-medium">{formData.email}</span>
              {formData.phone ? ` / ${formData.phone}` : ''}).
            </p>
            <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left text-[11px] text-neutral-400">
              <p className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-1">
                Captured Brief Overview
              </p>
              <p>
                <strong className="text-neutral-300">Name:</strong> {formData.name}
              </p>
              {formData.brand && (
                <p>
                  <strong className="text-neutral-300">Brand:</strong> {formData.brand}
                </p>
              )}
              <p>
                <strong className="text-neutral-300">Requirement:</strong> {formData.need}
              </p>
              <p>
                <strong className="text-neutral-300">Objective:</strong> {formData.goal}
              </p>
            </div>
            <p className="text-[10px] font-mono text-neutral-500 pt-2">
              Ready for client email / CRM connection.
            </p>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="px-7 py-3 rounded-full border border-white/15 hover:border-amber-400/60 text-xs font-cinzel tracking-[0.22em] text-neutral-300 hover:text-white transition-all inline-flex items-center gap-2"
          >
            <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
            <span>SUBMIT ANOTHER INQUIRY</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <p className="text-[10px] tracking-[0.38em] uppercase font-cinzel text-neutral-500 mb-2">
              Project Brief
            </p>
            <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-white tracking-[0.04em] leading-tight">
              <span className="block text-neutral-300">TELL US</span>
              <span className="block metallic-silver-text">WHAT YOU&apos;RE BUILDING.</span>
            </h2>
          </div>

          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="inquiry-name"
                className="block text-[10px] font-cinzel tracking-[0.22em] uppercase text-neutral-400"
              >
                NAME <span className="text-rose-500">*</span>
              </label>
              <input
                id="inquiry-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Elena Vance"
                className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.09] text-white placeholder-neutral-600 text-xs sm:text-sm font-sans focus:outline-none focus:border-amber-400/70 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(202,166,105,0.15)] transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="inquiry-email"
                className="block text-[10px] font-cinzel tracking-[0.22em] uppercase text-neutral-400"
              >
                EMAIL <span className="text-rose-500">*</span>
              </label>
              <input
                id="inquiry-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="elena@domain.com"
                className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.09] text-white placeholder-neutral-600 text-xs sm:text-sm font-sans focus:outline-none focus:border-amber-400/70 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(202,166,105,0.15)] transition-all"
              />
            </div>
          </div>

          {/* Row 2: Phone/WhatsApp + Brand Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="inquiry-phone"
                className="block text-[10px] font-cinzel tracking-[0.22em] uppercase text-neutral-400"
              >
                PHONE / WHATSAPP
              </label>
              <input
                id="inquiry-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 00000 00000"
                className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.09] text-white placeholder-neutral-600 text-xs sm:text-sm font-sans focus:outline-none focus:border-amber-400/70 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(202,166,105,0.15)] transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="inquiry-brand"
                className="block text-[10px] font-cinzel tracking-[0.22em] uppercase text-neutral-400"
              >
                BUSINESS / BRAND NAME
              </label>
              <input
                id="inquiry-brand"
                name="brand"
                type="text"
                autoComplete="organization"
                value={formData.brand}
                onChange={handleChange}
                placeholder="Brand, Studio or Entity"
                className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.09] text-white placeholder-neutral-600 text-xs sm:text-sm font-sans focus:outline-none focus:border-amber-400/70 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(202,166,105,0.15)] transition-all"
              />
            </div>
          </div>

          {/* WHAT DO YOU NEED? Dropdown */}
          <div className="space-y-1.5">
            <label
              htmlFor="inquiry-need"
              className="block text-[10px] font-cinzel tracking-[0.22em] uppercase text-neutral-400"
            >
              WHAT DO YOU NEED? <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <select
                id="inquiry-need"
                name="need"
                value={formData.need}
                onChange={handleChange}
                className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#0c0916] border border-white/[0.09] text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-amber-400/70 focus:shadow-[0_0_20px_rgba(202,166,105,0.15)] transition-all appearance-none cursor-pointer"
              >
                {NEED_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#0c0916] text-white py-2">
                    {opt}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* QUESTION: WHAT ARE YOU LOOKING TO ACHIEVE? Options */}
          <div className="space-y-2">
            <label className="block text-[10px] font-cinzel tracking-[0.22em] uppercase text-neutral-400">
              WHAT ARE YOU LOOKING TO ACHIEVE?
            </label>
            <div className="flex flex-wrap gap-2">
              {GOAL_OPTIONS.map((goal) => {
                const selected = formData.goal === goal;
                return (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => handleGoalSelect(goal)}
                    className={`px-3 py-2 rounded-lg text-xs font-sans border transition-all text-left ${
                      selected
                        ? 'border-amber-400/60 bg-purple-950/40 text-white shadow-[0_0_15px_rgba(202,166,105,0.18)]'
                        : 'border-white/[0.08] bg-white/[0.02] text-neutral-400 hover:border-white/20 hover:text-neutral-200'
                    }`}
                  >
                    {goal}
                  </button>
                );
              })}
            </div>
          </div>

          {/* PROJECT RANGE (Qualification - no ₹ pricing) */}
          <div className="space-y-2">
            <label className="block text-[10px] font-cinzel tracking-[0.22em] uppercase text-neutral-400">
              PROJECT RANGE
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {RANGE_OPTIONS.map((r) => {
                const selected = formData.range === r.label;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => handleRangeSelect(r.label)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      selected
                        ? 'border-amber-400/60 bg-purple-950/40 text-white shadow-[0_0_15px_rgba(202,166,105,0.18)]'
                        : 'border-white/[0.08] bg-white/[0.02] text-neutral-400 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-cinzel font-semibold tracking-wide text-white">
                      {r.label}
                    </div>
                    <div className="text-[10px] text-neutral-400 font-sans mt-0.5">{r.note}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optional: REFERENCE / WEBSITE LINK */}
          <div className="space-y-1.5">
            <label
              htmlFor="inquiry-reference"
              className="block text-[10px] font-cinzel tracking-[0.22em] uppercase text-neutral-400"
            >
              REFERENCE / WEBSITE LINK <span className="text-neutral-600">(OPTIONAL)</span>
            </label>
            <input
              id="inquiry-reference"
              name="reference"
              type="url"
              inputMode="url"
              value={formData.reference}
              onChange={handleChange}
              placeholder="https://yourbrand.com or reference link"
              className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.09] text-white placeholder-neutral-600 text-xs sm:text-sm font-sans focus:outline-none focus:border-amber-400/70 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(202,166,105,0.15)] transition-all"
            />
          </div>

          {/* PROJECT DETAILS (Large textarea) */}
          <div className="space-y-1.5">
            <label
              htmlFor="inquiry-details"
              className="block text-[10px] font-cinzel tracking-[0.22em] uppercase text-neutral-400"
            >
              PROJECT DETAILS <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="inquiry-details"
              name="details"
              required
              rows={4}
              value={formData.details}
              onChange={handleChange}
              placeholder="Tell us what you're working on, your ambitions, your current state, and what you want to achieve..."
              className="w-full min-h-[110px] px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.09] text-white placeholder-neutral-600 text-xs sm:text-sm font-sans focus:outline-none focus:border-amber-400/70 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(202,166,105,0.15)] transition-all resize-none"
            />
          </div>

          {/* CTA Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full min-h-[52px] py-4 rounded-full bg-gradient-to-r from-purple-900 via-rose-950 to-purple-900 border border-purple-500/40 hover:border-amber-400 text-xs font-cinzel font-semibold tracking-[0.25em] text-white shadow-[0_0_25px_rgba(109,40,217,0.3)] hover:shadow-[0_0_35px_rgba(202,166,105,0.4)] transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-amber-400 outline-none"
            aria-label="Send Project Inquiry to Managed By Luna"
          >
            <span>{isSubmitting ? 'PREPARING BRIEF...' : 'SEND PROJECT INQUIRY →'}</span>
            <Send className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      )}
    </div>
  );
};

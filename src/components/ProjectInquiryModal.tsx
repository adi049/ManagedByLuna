import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [tier, setTier] = useState('Full Creative & Digital Ecosystem');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    vision: '',
  });

  if (!isOpen) return null;

  const projectTypes = [
    'Custom Luxury Website & WebGL Experience',
    'Full Creative & Digital Ecosystem',
    'Social Media Management & Aesthetic Branding',
    'Brand Identity & Motion Design',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playChime();

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-[#090710] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden"
        style={{
          boxShadow: '0 25px 60px -15px rgba(0,0,0,0.9), 0 0 40px rgba(109, 40, 217, 0.25)',
        }}
      >
        {/* Glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-purple-700/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-rose-700/15 blur-3xl pointer-events-none" />

        <button
          onClick={() => {
            soundEngine.playChime();
            onClose();
            setSubmitted(false);
          }}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-purple-900/30 border border-amber-400/50 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(202,166,105,0.3)]">
              <CheckCircle2 className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-white mb-2">
              Project Brief Received
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm font-sans mb-6">
              Your inquiry has entered the Managed By Luna private studio queue. Our executive team will review your objectives.
            </p>
            <button
              onClick={() => {
                onClose();
                setSubmitted(false);
              }}
              className="px-6 py-2 rounded-full border border-white/15 text-xs font-cinzel tracking-widest text-neutral-300 hover:text-white hover:border-amber-400/50 transition-all"
            >
              RETURN TO EXPLORATION
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-cinzel text-neutral-400">
                  New Engagement
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-white tracking-wide">
                Start A Project
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Architecting unforgettable digital presence that commands authority.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-cinzel text-neutral-400 mb-2">
                  Scope of Work
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {projectTypes.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => {
                        soundEngine.playChime();
                        setTier(t);
                      }}
                      className={`px-3 py-2 text-left rounded-lg text-xs font-sans border transition-all ${
                        tier === t
                          ? 'border-amber-400/60 bg-purple-950/40 text-white shadow-[0_0_15px_rgba(202,166,105,0.15)]'
                          : 'border-white/5 bg-white/[0.02] text-neutral-400 hover:border-white/15'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-cinzel text-neutral-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. Julian Kane"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-xs sm:text-sm focus:outline-none focus:border-amber-400/60 focus-visible:ring-2 focus-visible:ring-amber-400/80"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-cinzel text-neutral-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="julian@venture.com"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-xs sm:text-sm focus:outline-none focus:border-amber-400/60 focus-visible:ring-2 focus-visible:ring-amber-400/80"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-cinzel text-neutral-400 mb-1">
                  Brief Overview / Vision
                </label>
                <textarea
                  rows={2}
                  value={formData.vision}
                  onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                  placeholder="Outline your ambition, timeline, and current presence..."
                  className="w-full min-h-[70px] px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-xs sm:text-sm focus:outline-none focus:border-amber-400/60 resize-none focus-visible:ring-2 focus-visible:ring-amber-400/80"
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] py-3.5 rounded-full mt-2 bg-gradient-to-r from-purple-900 via-rose-950 to-purple-900 border border-purple-500/40 hover:border-amber-400 text-xs font-cinzel font-semibold tracking-[0.25em] text-white shadow-[0_0_20px_rgba(109,40,217,0.3)] hover:shadow-[0_0_25px_rgba(202,166,105,0.4)] transition-all flex items-center justify-center gap-2 group focus-visible:ring-2 focus-visible:ring-amber-400 outline-none"
                aria-label="Initiate Project Inquiry with Managed By Luna"
              >
                <span>INITIATE PROJECT INQUIRY</span>
                <Send className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

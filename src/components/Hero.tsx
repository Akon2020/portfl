import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowDown, Download, Sparkles, Terminal, Shield, CheckCircle2, FileText, ExternalLink } from 'lucide-react';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const { lang, profile, stats, recordResumeDownload } = useApp();
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Cyberpunk Radial Glows (Inspired by Kardyo) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] pointer-events-none -z-10 opacity-70"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,107,0,0.12) 0%, rgba(0,240,255,0.04) 40%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Status Badge (Zero-Pill Discipline: Unboxed clean text with subtle separator) */}
            <div className="flex items-center gap-2.5 text-xs font-mono mb-6 text-slate-300 dark:text-slate-300 light:text-slate-600 bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100 px-3 py-1.5 rounded border border-[#FF6B00]/25">
              <span className="w-2 h-2 rounded-full bg-[#00E599] shrink-0" />
              <span className="text-[#00F0FF] font-semibold uppercase tracking-wider">
                {lang === 'fr' ? 'Statut Actif' : 'Active Status'}
              </span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-slate-200 dark:text-slate-200 light:text-slate-700">
                {lang === 'fr' ? profile.availabilityFr : profile.availabilityEn}
              </span>
            </div>

            {/* Main Headline (Barlow Condensed, Bold, Impactful) */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[0.98] uppercase tracking-tight text-white dark:text-white light:text-slate-900 text-balance mb-6">
              {lang === 'fr' ? (
                <>
                  Architectures <span className="text-[#FF6B00]">Résilientes</span>, Applications Mobiles & <span className="text-[#00F0FF]">IA Éthique</span>
                </>
              ) : (
                <>
                  Resilient <span className="text-[#FF6B00]">Architectures</span>, High-Impact Mobile & <span className="text-[#00F0FF]">Applied AI</span>
                </>
              )}
            </h1>

            {/* Subtitle / Bio summary */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-normal max-w-2xl mb-8">
              {lang === 'fr' ? (
                <>
                  Ingénieur logiciel diplômé avec <strong>Très Grande Distinction (82,5%)</strong> de l’Université Catholique de Bukavu. Concepteur de systèmes distribués sécurisés, d’applications mobiles React Native performantes et auditeur en cybersécurité offensive (Hack The Box).
                </>
              ) : (
                <>
                  Software engineer graduated with <strong>Highest Distinction (82.5%)</strong> from the Catholic University of Bukavu. Crafting resilient distributed systems, fluid React Native mobile apps, and auditing web security (Hack The Box certified).
                </>
              )}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#FF6B00] hover:bg-[#FF7700] text-black font-display font-extrabold uppercase tracking-wider text-sm text-center transition-all duration-200 hover:shadow-[0_0_25px_rgba(255,107,0,0.45)]"
              >
                {lang === 'fr' ? 'Explorer les Réalisations (10+)' : 'Explore Featured Projects (10+)'}
              </a>

              <button
                onClick={() => {
                  recordResumeDownload();
                  onOpenCvModal();
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-white hover:bg-slate-800 text-slate-200 dark:text-slate-200 light:text-slate-800 font-display font-bold uppercase tracking-wider text-sm border border-slate-700 dark:border-slate-700 light:border-slate-300 hover:border-[#00F0FF]/50 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#00F0FF]" />
                <span>{lang === 'fr' ? 'Consulter & Télécharger CV' : 'View & Download CV'}</span>
              </button>
            </div>

            {/* Key Skill Tags (Quiet unboxed inline list) */}
            <div className="mt-8 pt-6 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono text-slate-400">
              <span className="text-[#FF6B00] font-semibold">{lang === 'fr' ? 'Stack Maîtresse :' : 'Core Stack:'}</span>
              <span>Next.js / React</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>React Native (Expo)</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Node.js / Express</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Python & FastApi / ML</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Bug Bounty & Pentest</span>
            </div>
          </div>

          {/* Right Column (High-End Frame & Portrait) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] group">
              {/* Corner Cyberpunk Decorative Markers */}
              <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-[#FF6B00] z-20 pointer-events-none" />
              <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-[#00F0FF] z-20 pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-[#00F0FF] z-20 pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-[#FF6B00] z-20 pointer-events-none" />

              {/* Main Card Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#111724] to-[#0A0D15] p-1 border border-[#FF6B00]/25 shadow-[0_10px_35px_-10px_rgba(255,107,0,0.2)] transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 flex flex-col justify-between">
                  {/* Portrait representation with fallback container */}
                  {profile.heroImage && !imageError ? (
                    <img
                      src={profile.heroImage}
                      alt="Isaac Akonkwa portrait"
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#0E1524] via-[#090D17] to-[#060810] relative">
                      {/* Ambient Cyber Rings */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.15)_0,transparent_70%)] pointer-events-none" />
                      
                      {/* Avatar Graphic */}
                      <div className="relative w-32 h-32 mb-6 rounded-full p-1 bg-gradient-to-tr from-[#FF6B00] via-[#00F0FF] to-[#FF8C33] shadow-[0_0_30px_rgba(255,107,0,0.3)]">
                        <div className="w-full h-full rounded-full bg-[#07090E] flex flex-col items-center justify-center overflow-hidden">
                          <span className="font-display font-black text-4xl text-[#FF6B00]">IA</span>
                          <span className="text-[10px] font-mono text-[#00F0FF] tracking-wider uppercase">BUKAVU, RDC</span>
                        </div>
                      </div>

                      <div className="z-10">
                        <h3 className="font-display font-bold text-2xl uppercase tracking-wide text-white">
                          Isaac Akonkwa
                        </h3>
                        <p className="text-xs font-mono text-[#FFA043] mt-1">
                          Ingénieur Logiciel & Co-Organizer GDG
                        </p>
                        <p className="text-[11px] text-slate-400 mt-3 max-w-[240px] leading-relaxed mx-auto">
                          {lang === 'fr'
                            ? 'Université Catholique de Bukavu (82,5% TGD) · Founder Akon Tech'
                            : 'Catholic University of Bukavu (82.5% Honors) · Founder Akon Tech'}
                        </p>
                      </div>

                      <div className="z-10 mt-6 flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">
                          CYBERSEC
                        </span>
                        <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30">
                          MOBILE & IA
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Scrim Overlay & Floating Spec Kicker */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#07090E] via-[#07090E]/80 to-transparent flex items-center justify-between">
                    <div>
                      <p className="text-xs font-display font-bold uppercase tracking-wider text-white">
                        Isaac Akonkwa
                      </p>
                      <p className="text-[11px] font-mono text-[#00F0FF]">
                        akonkwaushindi@gmail.com
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black/60 px-2 py-1 rounded border border-[#FF6B00]/30 text-[10px] font-mono text-[#FFA043]">
                      <span>+243 970 137 369</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Quantitative Metrics Strip (Below the Split, per Guidelines) */}
        <div className="mt-16 pt-10 border-t border-[#FF6B00]/20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="p-5 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
            <div className="font-display font-black text-3xl sm:text-4xl text-[#FF6B00] tabular-nums">
              4+ Ans
            </div>
            <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">
              {lang === 'fr' ? 'Expérience & Lead Tech' : 'Experience & Tech Lead'}
            </div>
            <div className="text-[11px] text-slate-500 mt-2">
              {lang === 'fr' ? 'CGA, GDG on Campus, Akon Tech' : 'CGA, GDG on Campus, Akon Tech'}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
            <div className="font-display font-black text-3xl sm:text-4xl text-[#00F0FF] tabular-nums">
              10+ Projets
            </div>
            <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">
              {lang === 'fr' ? 'Systèmes Déployés' : 'Deployed Systems'}
            </div>
            <div className="text-[11px] text-slate-500 mt-2">
              {lang === 'fr' ? 'Medicure, DiaSmart, Chat With PDF' : 'Medicure, DiaSmart, Chat With PDF'}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
            <div className="font-display font-black text-3xl sm:text-4xl text-[#FFA043] tabular-nums">
              13 Titres
            </div>
            <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">
              {lang === 'fr' ? 'Certifications Vérifiées' : 'Verified Certifications'}
            </div>
            <div className="text-[11px] text-slate-500 mt-2">
              Google, Hack The Box, Meta, ALX, LinkedIn
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
            <div className="font-display font-black text-3xl sm:text-4xl text-[#00E599] tabular-nums">
              82,5% TGD
            </div>
            <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">
              {lang === 'fr' ? 'Très Grande Distinction UCB' : 'Highest Honors Degree UCB'}
            </div>
            <div className="text-[11px] text-slate-500 mt-2">
              {lang === 'fr' ? 'Baccalauréat en Génie Logiciel (Bac+4)' : 'Software Engineering B.S. (Bac+4)'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

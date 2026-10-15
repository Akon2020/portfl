import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Layers, Smartphone, Database, Cpu, Shield, Terminal, Award, CheckCircle, ExternalLink } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { lang, skills, certifications } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [certFilter, setCertFilter] = useState<string>('all');

  const categoryIcons: Record<string, React.ElementType> = {
    fullstack: Layers,
    mobile: Smartphone,
    database: Database,
    'ai-python': Cpu,
    cybersecurity: Shield,
    'devops-tools': Terminal,
  };

  const displayedCategories =
    activeCategory === 'all'
      ? skills
      : skills.filter((c) => c.id === activeCategory);

  const displayedCerts =
    certFilter === 'all'
      ? certifications
      : certifications.filter((c) => c.category === certFilter);

  return (
    <section id="skills" className="py-20 bg-[#07090E] dark:bg-[#07090E] light:bg-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] mb-2">
            {lang === 'fr' ? '02. Expertise & Certifications' : '02. Technical Competencies & Credentials'}
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white dark:text-white light:text-slate-900 text-balance">
            {lang === 'fr' ? (
              <>
                Arsenal Technique <span className="text-[#FF6B00]">Éprouvé</span> en Production
              </>
            ) : (
              <>
                Production-Tested <span className="text-[#FF6B00]">Engineering</span> Stack
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-2xl">
            {lang === 'fr'
              ? 'Chaque compétence est issue d’expériences concrètes en entreprise (CGA), de projets primés (DiaSmart, Medicure) et de certifications officielles.'
              : 'Every capability stems from enterprise engineering (CGA), high-distinction research (DiaSmart, Medicure), and verified credentials.'}
          </p>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Control, not static pills) */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 overflow-x-auto mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all ${
              activeCategory === 'all'
                ? 'bg-[#FF6B00] text-black font-bold shadow-[0_0_15px_rgba(255,107,0,0.3)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {lang === 'fr' ? 'Tous les Domaines (6)' : 'All Domains (6)'}
          </button>
          {skills.map((cat) => {
            const Icon = categoryIcons[cat.id] || Layers;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#FF6B00] text-black font-bold shadow-[0_0_15px_rgba(255,107,0,0.3)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{lang === 'fr' ? cat.titleFr : cat.titleEn}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {displayedCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layers;
            return (
              <div
                key={category.id}
                className="rounded-xl bg-[#0E131F] dark:bg-[#0E131F] light:bg-slate-50 p-6 border border-slate-800 hover:border-[#FF6B00]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg uppercase tracking-wide text-white dark:text-white light:text-slate-900">
                        {lang === 'fr' ? category.titleFr : category.titleEn}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500">
                        {category.skills.length} {lang === 'fr' ? 'compétences clés' : 'core skills'}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="pb-3 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                            {skill.name}
                          </span>
                          <span className={`text-[10px] font-mono uppercase font-bold tracking-wider ${
                            skill.level === 'Expert' ? 'text-[#00F0FF]' : 'text-[#FFA043]'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-snug">
                          {lang === 'fr' ? skill.detailFr : skill.detailEn}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 13 Official Certifications Section */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FFA043] mb-1">
                <Award className="w-4 h-4 text-[#FFA043]" />
                <span>{lang === 'fr' ? 'Preuves & Accréditations' : 'Verified Accreditations'}</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white dark:text-white light:text-slate-900">
                13 Certifications Internationales Vérifiées
              </h3>
            </div>

            {/* Sub-filter for certs */}
            <div className="flex items-center gap-1 bg-slate-900/60 p-1 rounded-lg border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setCertFilter('all')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  certFilter === 'all' ? 'bg-[#00F0FF] text-black font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang === 'fr' ? 'Toutes (13)' : 'All (13)'}
              </button>
              <button
                onClick={() => setCertFilter('cyber')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  certFilter === 'cyber' ? 'bg-[#00F0FF] text-black font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Cyber (4)
              </button>
              <button
                onClick={() => setCertFilter('devops')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  certFilter === 'devops' ? 'bg-[#00F0FF] text-black font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                DevOps & ALX
              </button>
              <button
                onClick={() => setCertFilter('frontend')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  certFilter === 'frontend' ? 'bg-[#00F0FF] text-black font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Frontend & UI
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedCerts.map((cert, index) => (
              <div
                key={cert.id}
                className="p-4 rounded-xl bg-[#0E131F] dark:bg-[#0E131F] light:bg-slate-50 border border-slate-800 hover:border-[#00F0FF]/40 transition-all duration-200 flex items-start justify-between gap-3"
              >
                <div>
                  <div className="text-[11px] font-mono text-slate-500 mb-1">
                    {String(index + 1).padStart(2, '0')}. {cert.year} · {cert.issuer}
                  </div>
                  <h4 className="font-display font-bold text-base text-white dark:text-white light:text-slate-900 leading-snug">
                    {cert.title}
                  </h4>
                </div>
                <span className="p-1.5 rounded bg-[#00F0FF]/10 text-[#00F0FF] shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

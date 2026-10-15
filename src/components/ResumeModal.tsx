import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { lang, profile, timeline, skills, certifications, projects } = useApp();
  const [resumeLang, setResumeLang] = useState<'fr' | 'en'>(lang);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#0B0F17] dark:bg-[#0B0F17] light:bg-white border border-[#FF6B00]/40 p-6 sm:p-10 max-h-[92vh] overflow-y-auto shadow-2xl print:border-none print:shadow-none print:max-h-none print:p-0">
        {/* Modal Controls (Hidden in print) */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400">
              {resumeLang === 'fr' ? 'Langue du document :' : 'Resume Language:'}
            </span>
            <div className="flex bg-slate-900 rounded p-0.5 border border-slate-700 text-xs font-mono">
              <button
                onClick={() => setResumeLang('fr')}
                className={`px-2 py-0.5 rounded ${resumeLang === 'fr' ? 'bg-[#FF6B00] text-black font-bold' : 'text-slate-400'}`}
              >
                FR
              </button>
              <button
                onClick={() => setResumeLang('en')}
                className={`px-2 py-0.5 rounded ${resumeLang === 'en' ? 'bg-[#FF6B00] text-black font-bold' : 'text-slate-400'}`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-[#FF6B00] hover:bg-[#FF7700] text-black font-display font-bold uppercase text-xs flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{resumeLang === 'fr' ? 'Imprimer / Exporter PDF' : 'Print / Export PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="pt-6 space-y-8 font-sans text-slate-200 dark:text-slate-200 light:text-slate-800 print:text-black">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div>
              <h1 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white dark:text-white light:text-slate-900 print:text-black">
                AKONKWA USHINDI <span className="text-[#FF6B00] print:text-black">Isaac</span>
              </h1>
              <p className="text-sm font-mono text-[#00F0FF] print:text-slate-700 mt-1 uppercase font-bold">
                {resumeLang === 'fr'
                  ? 'Ingénieur Logiciel | Fullstack, Mobile, IA & Cybersécurité'
                  : 'Software Engineer | Fullstack, Mobile, AI & Cybersecurity'}
              </p>
              <p className="text-xs text-slate-400 print:text-slate-600 mt-2 max-w-xl">
                {resumeLang === 'fr' ? profile.bioFr : profile.bioEn}
              </p>
            </div>

            {/* Coordinates */}
            <div className="text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 print:text-black space-y-1.5 shrink-0 bg-slate-900/60 p-4 rounded-xl border border-slate-800 print:bg-transparent print:p-0 print:border-none">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>258, Patrice Emery Lumumba, Bukavu, RDC</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>akonkwaushindi@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>+243 970 137 369</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>https://github.com/Akon2020</span>
              </div>
            </div>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h2 className="font-display font-black text-xl uppercase tracking-wider text-[#FF6B00] print:text-black mb-4">
              {resumeLang === 'fr' ? 'Compétences Techniques Clés' : 'Key Technical Proficiencies'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((cat) => (
                <div key={cat.id} className="p-3.5 rounded-lg bg-slate-900/40 border border-slate-800 print:bg-transparent print:border-slate-300">
                  <div className="font-display font-bold text-sm text-[#00F0FF] print:text-black uppercase mb-1">
                    {resumeLang === 'fr' ? cat.titleFr : cat.titleEn}
                  </div>
                  <div className="text-xs text-slate-300 print:text-slate-800 space-y-1">
                    {cat.skills.map((s) => (
                      <div key={s.name}>
                        <strong>{s.name}</strong> — {resumeLang === 'fr' ? s.detailFr : s.detailEn}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience & Leadership */}
          <div>
            <h2 className="font-display font-black text-xl uppercase tracking-wider text-[#FF6B00] print:text-black mb-4">
              {resumeLang === 'fr' ? 'Expérience Professionnelle & Responsabilités' : 'Professional Experience & Leadership'}
            </h2>
            <div className="space-y-6">
              {timeline.map((item) => (
                <div key={item.id} className="pb-4 border-b border-slate-800/60 last:border-0 print:border-slate-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="font-display font-bold text-base text-white dark:text-white light:text-slate-900 print:text-black">
                      {resumeLang === 'fr' ? item.roleFr : item.roleEn} — {item.organization}
                    </span>
                    <span className="text-xs font-mono text-[#00F0FF] print:text-slate-700">
                      {item.period} · {item.location}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 print:text-slate-600 mb-2">
                    {resumeLang === 'fr' ? item.descriptionFr : item.descriptionEn}
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-800 space-y-0.5">
                    {(resumeLang === 'fr' ? item.achievementsFr : item.achievementsEn).map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Major Projects Showcase */}
          <div>
            <h2 className="font-display font-black text-xl uppercase tracking-wider text-[#FF6B00] print:text-black mb-4">
              {resumeLang === 'fr' ? 'Projets Majeurs Réalisés' : 'Major Engineering Projects'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.slice(0, 6).map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-lg bg-slate-900/40 border border-slate-800 print:bg-transparent print:border-slate-300">
                  <div className="font-display font-bold text-sm text-white print:text-black">
                    {proj.title}
                  </div>
                  <div className="text-[11px] font-mono text-[#FFA043] print:text-slate-700 mb-1">
                    {proj.technologies.slice(0, 4).join(' · ')}
                  </div>
                  <p className="text-xs text-slate-400 print:text-slate-700 line-clamp-2">
                    {resumeLang === 'fr' ? proj.descriptionFr : proj.descriptionEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (13) */}
          <div>
            <h2 className="font-display font-black text-xl uppercase tracking-wider text-[#FF6B00] print:text-black mb-4">
              {resumeLang === 'fr' ? '13 Certifications Internationales Vérifiées' : '13 Verified International Certifications'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300 print:text-slate-800">
              {certifications.map((c, idx) => (
                <div key={c.id} className="flex items-center gap-2">
                  <span className="text-[#FF6B00] font-bold">{idx + 1}.</span>
                  <span>{c.title} — <strong>{c.issuer}</strong> ({c.year})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="pt-4 border-t border-slate-800 print:border-slate-300 text-xs font-mono text-slate-400 print:text-slate-700">
            <strong>{resumeLang === 'fr' ? 'Langues :' : 'Languages:'}</strong> Français (Courant) · English (Technique & Pro) · Swahili (Courant) · Lingala (Courant)
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Briefcase, GraduationCap, Users, Award, MapPin, Calendar, CheckCircle } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const { lang, timeline } = useApp();
  const [filterType, setFilterType] = useState<string>('all');

  const filterOptions = [
    { id: 'all', labelFr: 'Tout le Parcours', labelEn: 'All Milestones' },
    { id: 'experience', labelFr: 'Expériences Pro', labelEn: 'Work Experience' },
    { id: 'leadership', labelFr: 'Leadership & GDG', labelEn: 'Tech Leadership' },
    { id: 'education', labelFr: 'Formation Académique', labelEn: 'Education' },
  ];

  const filteredTimeline = timeline.filter((item) => {
    if (filterType === 'all') return true;
    if (filterType === 'leadership') return item.type === 'leadership' || item.type === 'community';
    return item.type === filterType;
  });

  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'experience':
        return Briefcase;
      case 'education':
        return GraduationCap;
      case 'leadership':
      case 'community':
        return Users;
      default:
        return Award;
    }
  };

  return (
    <section id="timeline" className="py-20 bg-[#07090E] dark:bg-[#07090E] light:bg-white border-t border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] mb-2">
            {lang === 'fr' ? '04. Chronologie Professionnelle' : '04. Career & Academic Trajectory'}
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white dark:text-white light:text-slate-900 text-balance">
            {lang === 'fr' ? (
              <>
                Un Parcours d’Excellence de <span className="text-[#FF6B00]">2013</span> à Aujourd’hui
              </>
            ) : (
              <>
                A Trajectory of Excellence from <span className="text-[#FF6B00]">2013</span> to Date
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-2xl">
            {lang === 'fr'
              ? 'Timeline officielle extraite de mon dossier professionnel, associant rigueur universitaire, responsabilités de mentorat et réalisations logicielles concrètes.'
              : 'Official timeline documented from my professional record, uniting academic distinction, community mentorship, and concrete software deliverables.'}
          </p>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 overflow-x-auto mb-14">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilterType(opt.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all ${
                filterType === opt.id
                  ? 'bg-[#FF6B00] text-black font-bold shadow-[0_0_15px_rgba(255,107,0,0.3)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'fr' ? opt.labelFr : opt.labelEn}
            </button>
          ))}
        </div>

        {/* Timeline Stream */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#FF6B00]/30 space-y-12">
          {filteredTimeline.map((item, index) => {
            const Icon = getBadgeIcon(item.type);
            return (
              <div key={item.id} className="relative group">
                {/* Node Dot with Neon Accent */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#07090E] border-2 border-[#FF6B00] flex items-center justify-center group-hover:scale-125 group-hover:bg-[#FF6B00] transition-all duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                </div>

                {/* Timeline Card */}
                <div className="rounded-2xl bg-[#0E131F] dark:bg-[#0E131F] light:bg-slate-50 p-6 sm:p-7 border border-slate-800 hover:border-[#FF6B00]/40 transition-all duration-300">
                  {/* Period & Organization Kickers */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF] font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-[#FFA043]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Role & Org */}
                  <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wide text-white dark:text-white light:text-slate-900">
                    {lang === 'fr' ? item.roleFr : item.roleEn}
                  </h3>

                  <div className="text-sm font-semibold text-[#FFA043] mb-4">
                    {item.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-5 leading-relaxed">
                    {lang === 'fr' ? item.descriptionFr : item.descriptionEn}
                  </p>

                  {/* Bullet achievements */}
                  <div className="space-y-2 pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                    {(lang === 'fr' ? item.achievementsFr : item.achievementsEn).map((ach, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-normal">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00E599] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

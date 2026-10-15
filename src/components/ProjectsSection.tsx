import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Project } from '../types';
import { ExternalLink, Github, Search, Layers, ArrowUpRight, X, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { lang, projects, recordProjectView } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = [
    { id: 'all', labelFr: 'Tous les Projets', labelEn: 'All Projects' },
    { id: 'fullstack', labelFr: 'Web FullStack & APIs', labelEn: 'Web FullStack & APIs' },
    { id: 'mobile', labelFr: 'Applications Mobiles', labelEn: 'Mobile Apps' },
    { id: 'ai', labelFr: 'Intelligence Artificielle', labelEn: 'Artificial Intelligence' },
    { id: 'cybersecurity', labelFr: 'Cybersécurité', labelEn: 'Cybersecurity' },
    { id: 'tools', labelFr: 'Utilitaires & Outils', labelEn: 'Tools & Utilities' },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(q) ||
      project.subtitleFr.toLowerCase().includes(q) ||
      project.subtitleEn.toLowerCase().includes(q) ||
      project.technologies.some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const handleOpenModal = (p: Project) => {
    setActiveProjectModal(p);
    recordProjectView();
  };

  return (
    <section id="projects" className="py-20 bg-[#090C14] dark:bg-[#090C14] light:bg-slate-50 border-t border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] mb-2">
              {lang === 'fr' ? '03. Travaux & Réalisations' : '03. Selected Works & Case Studies'}
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white dark:text-white light:text-slate-900 text-balance">
              {lang === 'fr' ? (
                <>
                  Systèmes en <span className="text-[#FF6B00]">Production</span> & Études de Cas
                </>
              ) : (
                <>
                  Production <span className="text-[#FF6B00]">Deployments</span> & Architectures
                </>
              )}
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'fr' ? 'Rechercher techno, projet...' : 'Search tech, project...'}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs font-mono text-slate-200 dark:text-slate-200 light:text-slate-800 placeholder-slate-500 focus:outline-none focus:border-[#FF6B00]"
            />
          </div>
        </div>

        {/* Category Tabs (Segmented Controls) */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-200 border border-slate-800 overflow-x-auto mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#FF6B00] text-black font-bold shadow-[0_0_15px_rgba(255,107,0,0.3)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'fr' ? cat.labelFr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Projects Grid (Bento style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-2xl overflow-hidden bg-[#0E131F] dark:bg-[#0E131F] light:bg-white border border-slate-800 hover:border-[#FF6B00]/40 transition-all duration-300 flex flex-col justify-between ${
                project.featured ? 'lg:col-span-1 shadow-[0_0_20px_rgba(255,107,0,0.06)]' : ''
              }`}
            >
              {/* Project Card Image & Header */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-transparent to-transparent opacity-80" />
                  
                  {/* Category & Date Kickers */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[#FF6B00] border border-[#FF6B00]/30 font-bold uppercase">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-slate-300">
                      {project.date}
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40 font-bold uppercase backdrop-blur-md">
                      ★ Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-black text-xl uppercase tracking-wide text-white dark:text-white light:text-slate-900 mb-1 group-hover:text-[#FFA043] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-[#00F0FF] mb-3">
                    {lang === 'fr' ? project.subtitleFr : project.subtitleEn}
                  </p>

                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {lang === 'fr' ? project.descriptionFr : project.descriptionEn}
                  </p>

                  {/* Tech stack inline */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-slate-400">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {i < Math.min(project.technologies.length, 4) - 1 && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[#FFA043]">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleOpenModal(project)}
                  className="text-xs font-display font-bold uppercase tracking-wider text-[#FF6B00] hover:text-[#FFA043] transition-colors flex items-center gap-1.5"
                >
                  <span>{lang === 'fr' ? 'Étude de cas détaillée' : 'Deep Case Study'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                      title="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-900 text-[#00F0FF] hover:text-white border border-slate-800"
                      title={lang === 'fr' ? 'Voir en ligne' : 'Visit Live App'}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800">
            <p className="text-sm font-mono text-slate-400">
              {lang === 'fr' ? 'Aucun projet ne correspond à vos critères.' : 'No projects matched your criteria.'}
            </p>
          </div>
        )}
      </div>

      {/* Deep-Dive Case Study Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl rounded-2xl bg-[#0D121D] border border-[#FF6B00]/40 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(255,107,0,0.25)]">
            {/* Close Button */}
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white transition-colors border border-slate-700"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="text-xs font-mono uppercase text-[#00F0FF] mb-2 flex items-center gap-2">
              <span>{activeProjectModal.category}</span>
              <span>·</span>
              <span>{activeProjectModal.date}</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-2">
              {activeProjectModal.title}
            </h2>

            <p className="text-sm font-mono text-[#FFA043] mb-6">
              {lang === 'fr' ? activeProjectModal.subtitleFr : activeProjectModal.subtitleEn}
            </p>

            {/* Tech badges inline */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {activeProjectModal.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Problem & Solution Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 mb-2">
                  {lang === 'fr' ? 'Problématique Ciblée' : 'Problem Addressed'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'fr' ? activeProjectModal.problemFr : activeProjectModal.problemEn}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E599] mb-2">
                  {lang === 'fr' ? 'Solution Architecturée' : 'Engineered Solution'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'fr' ? activeProjectModal.solutionFr : activeProjectModal.solutionEn}
                </p>
              </div>
            </div>

            {/* My Role */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B00] mb-1">
                {lang === 'fr' ? 'Mon Rôle & Responsabilité' : 'My Role & Core Contributions'}
              </h4>
              <p className="text-xs text-slate-200">
                {lang === 'fr' ? activeProjectModal.myRoleFr : activeProjectModal.myRoleEn}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3">
                {lang === 'fr' ? 'Points Forts & Métriques Clés' : 'Technical Highlights & Metrics'}
              </h4>
              <div className="space-y-2">
                {(lang === 'fr' ? activeProjectModal.highlightsFr : activeProjectModal.highlightsEn).map(
                  (hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Modal CTAs */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                {activeProjectModal.liveUrl && (
                  <a
                    href={activeProjectModal.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#FF6B00] hover:bg-[#FF7700] text-black font-display font-bold uppercase tracking-wider text-xs flex items-center gap-1.5"
                  >
                    <span>{lang === 'fr' ? 'Tester la Solution' : 'Launch Demo'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {activeProjectModal.githubUrl && (
                  <a
                    href={activeProjectModal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-display font-bold uppercase tracking-wider text-xs flex items-center gap-1.5 border border-slate-700"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setActiveProjectModal(null)}
                className="text-xs font-mono text-slate-400 hover:text-white"
              >
                {lang === 'fr' ? 'Fermer la vue' : 'Close view'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

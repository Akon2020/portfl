import React from 'react';
import { useApp } from '../context/AppContext';
import { Shield, Cpu, Code2, Globe2, Compass, Award, Users, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  const { lang, profile } = useApp();

  const languagePillars = [
    { name: 'Français', levelFr: 'Langue officielle · Maîtrise courante', levelEn: 'Official Language · Native fluency' },
    { name: 'English', levelFr: 'Technique & professionnel avancé', levelEn: 'Advanced technical & professional' },
    { name: 'Swahili', levelFr: 'Courant · Communication régionale', levelEn: 'Fluent · Regional business & community' },
    { name: 'Lingala', levelFr: 'Courant · Communication nationale', levelEn: 'Fluent · National communication' },
  ];

  const engineeringPrinciples = [
    {
      titleFr: 'Clean Architecture & MVC',
      titleEn: 'Clean Architecture & MVC',
      descFr: 'Découplage strict entre la logique métier, les adaptateurs d’accès aux données et les contrôleurs d’API pour garantir pérennité et testabilité.',
      descEn: 'Strict separation of business domain rules from data persistence adapters and API transport layers for lasting maintainability.',
      icon: Code2,
    },
    {
      titleFr: 'Sécurité Offensive Proactive',
      titleEn: 'Proactive Offensive Security',
      descFr: 'Application concrète des méthodologies Bug Bounty (Hack The Box) pour éliminer les failles d’injection et de permissions dès la conception.',
      descEn: 'Applying hands-on Bug Bounty audit techniques (Hack The Box) to eliminate injection and broken authorization flaws at inception.',
      icon: Shield,
    },
    {
      titleFr: 'IA & Modèles Pragmatiques',
      titleEn: 'Pragmatic AI & Edge Inference',
      descFr: 'Intégration de modèles de Machine Learning et Computer Vision compacts, capables de fonctionner sur mobile et dans des zones à faible débit.',
      descEn: 'Deploying compact Machine Learning and Computer Vision models tailored for edge mobile performance in constrained networks.',
      icon: Cpu,
    },
    {
      titleFr: 'Leadership & Transmission',
      titleEn: 'Community Leadership & Mentoring',
      descFr: 'Direction d’Akon Tech et organisation d’ateliers GDG / GDSC pour former et inspirer la prochaine génération d’ingénieurs en RDC.',
      descEn: 'Steering Akon Tech and orchestrating GDG / GDSC technical workshops to elevate regional software engineering talents.',
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#090C14] dark:bg-[#090C14] light:bg-slate-50 border-t border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] mb-2">
            {lang === 'fr' ? '01. Parcours & Philosophie' : '01. Background & Philosophy'}
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white dark:text-white light:text-slate-900 text-balance">
            {lang === 'fr' ? (
              <>
                Bâtir des Systèmes <span className="text-[#FF6B00]">Pérennes</span> avec Rigueur et Éthique
              </>
            ) : (
              <>
                Engineering <span className="text-[#FF6B00]">Resilient</span> Systems with Discipline & Ethics
              </>
            )}
          </h2>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Deep Bio Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed text-base">
            <p>
              {lang === 'fr' ? (
                <>
                  Basé à <strong>Bukavu (République Démocratique du Congo)</strong>, je combine une solide formation académique en <strong>Génie Logiciel (Bac+4, Université Catholique de Bukavu)</strong> couronnée par la mention <em>Très Grande Distinction (82,5%)</em> avec une pratique assidue du développement fullstack en environnement de production chez <strong>Code, Growth Alive (CGA)</strong>.
                </>
              ) : (
                <>
                  Based in <strong>Bukavu (Democratic Republic of Congo)</strong>, I unite a rigorous academic grounding in <strong>Software Engineering (UCB Bac+4)</strong> awarded with <em>Highest Distinction (82.5%)</em> with battle-tested production engineering at <strong>Code, Growth Alive (CGA)</strong>.
                </>
              )}
            </p>

            <p>
              {lang === 'fr' ? (
                <>
                  Ma vision du développement logiciel repose sur la résolution de problèmes réels du continent africain et au-delà : des applications médicales comme <strong>DiaSmart</strong> pour automatiser le suivi des diabétiques, aux architectures hospitalières comme <strong>Medicure</strong>, jusqu’à des outils IA documentaires comme <strong>Chat With PDF</strong>.
                </>
              ) : (
                <>
                  My approach to software engineering centers on solving concrete, high-leverage challenges: from medical mobile systems like <strong>DiaSmart</strong> automating diabetic care workflows, to clinical hospital backends like <strong>Medicure</strong>, to semantic document AI platforms like <strong>Chat With PDF</strong>.
                </>
              )}
            </p>

            <p>
              {lang === 'fr' ? (
                <>
                  Titulaire de la certification <strong>Certified Bug Bounty Hunter</strong> sur Hack The Box et de multiples distinctions Google et Meta, j’intègre la sécurité informatique non pas comme un audit tardif, mais comme un prérequis strict dans chaque ligne d’API et composant d’interface.
                </>
              ) : (
                <>
                  Certified as a <strong>Bug Bounty Hunter</strong> on Hack The Box and holder of recognized Google and Meta credentials, I treat cybersecurity not as an afterthought, but as an uncompromising design invariant from day one.
                </>
              )}
            </p>

            {/* Language Skills Matrix (Unboxed clean layout) */}
            <div className="pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
              <h3 className="font-display font-bold text-lg uppercase tracking-wider text-white dark:text-white light:text-slate-900 mb-4 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#00F0FF]" />
                <span>{lang === 'fr' ? 'Compétences Linguistiques' : 'Language Proficiencies'}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {languagePillars.map((item) => (
                  <div key={item.name} className="p-3.5 rounded-lg bg-[#0E131F] dark:bg-[#0E131F] light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200">
                    <div className="font-display font-bold text-base text-[#FFA043]">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {lang === 'fr' ? item.levelFr : item.levelEn}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Architectural Principles (Kardyo-inspired Cards) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {engineeringPrinciples.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.titleEn}
                  className="p-5 rounded-xl bg-[#0E131F] dark:bg-[#0E131F] light:bg-white border border-slate-800 hover:border-[#FF6B00]/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg uppercase tracking-wide text-white dark:text-white light:text-slate-900">
                      {lang === 'fr' ? pillar.titleFr : pillar.titleEn}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                    {lang === 'fr' ? pillar.descFr : pillar.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowUp, Lock, Heart, Shield } from 'lucide-react';

interface FooterProps {
  onOpenAdminLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdminLogin }) => {
  const { lang, isAdmin } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#05070B] dark:bg-[#05070B] light:bg-slate-900 border-t border-slate-800/80 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand & Mission */}
          <div className="text-center md:text-left">
            <span className="font-display font-black text-xl uppercase tracking-tight text-white">
              Isaac <span className="text-[#FF6B00]">Akonkwa</span>
            </span>
            <p className="text-xs font-mono text-slate-400 mt-1">
              {lang === 'fr'
                ? 'Ingénieur Logiciel · Bukavu, République Démocratique du Congo'
                : 'Software Engineer · Bukavu, Democratic Republic of Congo'}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-[#FF6B00] transition-colors">{lang === 'fr' ? 'À propos' : 'About'}</a>
            <a href="#projects" className="hover:text-[#FF6B00] transition-colors">{lang === 'fr' ? 'Projets' : 'Projects'}</a>
            <a href="#skills" className="hover:text-[#FF6B00] transition-colors">{lang === 'fr' ? 'Compétences' : 'Skills'}</a>
            <a href="#timeline" className="hover:text-[#FF6B00] transition-colors">{lang === 'fr' ? 'Parcours' : 'Timeline'}</a>
            <a href="#blog" className="hover:text-[#FF6B00] transition-colors">{lang === 'fr' ? 'Blog' : 'Blog'}</a>
            <a href="#contact" className="hover:text-[#FF6B00] transition-colors">{lang === 'fr' ? 'Contact' : 'Contact'}</a>
            <a href="#support" className="hover:text-[#FF6B00] transition-colors">{lang === 'fr' ? 'Dons & Soutien' : 'Sponsor'}</a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 text-xs font-mono"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF6B00]" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Isaac Akonkwa. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdminLogin}
              className="hover:text-[#FFA043] transition-colors flex items-center gap-1"
            >
              <Lock className="w-3 h-3" />
              <span>{isAdmin ? (lang === 'fr' ? 'Espace Admin (Connecté)' : 'Admin Space (Logged in)') : (lang === 'fr' ? 'Administration' : 'Admin Portal')}</span>
            </button>
            <span>·</span>
            <span>WCAG AA & Clean Code</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

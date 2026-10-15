import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sun, Moon, Lock, Unlock, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenAdminLogin: () => void;
  currentView: 'public' | 'admin';
  setCurrentView: (view: 'public' | 'admin') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAdminLogin,
  currentView,
  setCurrentView,
}) => {
  const { lang, setLang, theme, toggleTheme, isAdmin, adminLogout } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', labelFr: 'À propos', labelEn: 'About' },
    { href: '#projects', labelFr: 'Projets', labelEn: 'Projects' },
    { href: '#skills', labelFr: 'Compétences', labelEn: 'Skills' },
    { href: '#timeline', labelFr: 'Parcours', labelEn: 'Timeline' },
    { href: '#blog', labelFr: 'Blog', labelEn: 'Blog' },
    { href: '#gallery', labelFr: 'Galerie', labelEn: 'Gallery' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#07090E]/85 dark:bg-[#07090E]/90 light:bg-white/90 border-b border-[#FF6B00]/15 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            onClick={(e) => {
              if (currentView === 'admin') {
                e.preventDefault();
                setCurrentView('public');
              }
            }}
            className="group flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B00] to-[#00F0FF] p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#07090E] dark:bg-[#07090E] light:bg-slate-900 rounded-[7px] flex items-center justify-center font-display font-extrabold text-sm text-[#FF6B00]">
                IA
              </div>
            </div>
            <span className="font-display font-black text-2xl tracking-tight text-white dark:text-white light:text-slate-900 uppercase">
              Isaac <span className="text-[#FF6B00]">Akonkwa</span>
            </span>
          </a>

          {currentView === 'admin' && (
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 uppercase font-semibold">
              Admin CMS
            </span>
          )}
        </div>

        {/* Zone 2: Navigation Links (Desktop) */}
        {currentView === 'public' ? (
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-[#FF6B00] dark:hover:text-[#FF6B00] light:hover:text-[#EA580C] transition-colors whitespace-nowrap"
              >
                {lang === 'fr' ? link.labelFr : link.labelEn}
              </a>
            ))}
          </nav>
        ) : (
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setCurrentView('public')}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              {lang === 'fr' ? '← Revenir au site public' : '← Back to public site'}
            </button>
          </div>
        )}

        {/* Zone 3: Actions & Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 p-0.5 rounded-lg border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs font-mono">
            <button
              onClick={() => setLang('fr')}
              className={`px-2 py-1 rounded transition-colors ${
                lang === 'fr'
                  ? 'bg-[#FF6B00] text-black font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Français"
            >
              FR
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded transition-colors ${
                lang === 'en'
                  ? 'bg-[#FF6B00] text-black font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-[#FF6B00] transition-colors"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Mode Clair' : 'Mode Sombre'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#FFA043]" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Admin Lock / Toggle */}
          {isAdmin ? (
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentView(currentView === 'admin' ? 'public' : 'admin')}
                className={`p-2 rounded-lg border text-xs font-mono transition-colors flex items-center gap-1.5 ${
                  currentView === 'admin'
                    ? 'bg-[#00F0FF]/15 border-[#00F0FF]/40 text-[#00F0FF]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-[#FF6B00]/40 hover:text-[#FF6B00]'
                }`}
                title={lang === 'fr' ? 'Basculer vers l’administration' : 'Toggle Admin Panel'}
              >
                <Unlock className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span className="hidden sm:inline font-bold">CMS</span>
              </button>
              <button
                onClick={adminLogout}
                className="px-2 py-1 text-[11px] font-mono text-rose-400 hover:text-rose-300 rounded border border-rose-500/20"
                title={lang === 'fr' ? 'Se déconnecter de l’administration' : 'Log out from admin'}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAdminLogin}
              className="p-2 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-400 hover:text-[#FF6B00] hover:border-[#FF6B00]/40 transition-colors"
              title={lang === 'fr' ? 'Accès Administrateur' : 'Admin Login'}
            >
              <Lock className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Primary CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FF6B00] hover:bg-[#FF7700] text-black font-semibold text-xs tracking-wider uppercase font-display transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] whitespace-nowrap"
          >
            <span>{lang === 'fr' ? 'Me Contacter' : 'Contact Me'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900/60 text-slate-300 hover:text-white border border-slate-800"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07090E]/98 dark:bg-[#07090E]/98 light:bg-white border-b border-[#FF6B00]/20 px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-base font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-[#FF6B00] border-b border-slate-800/40"
              >
                {lang === 'fr' ? link.labelFr : link.labelEn}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-[#FF6B00] text-black font-display font-bold uppercase tracking-wider text-sm shadow-[0_0_15px_rgba(255,107,0,0.3)]"
            >
              {lang === 'fr' ? 'Me Contacter' : 'Contact Me'}
            </a>

            {isAdmin ? (
              <button
                onClick={() => {
                  setCurrentView(currentView === 'admin' ? 'public' : 'admin');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 rounded-lg bg-slate-800/80 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono"
              >
                {currentView === 'admin' ? '← Voir le site public' : 'Ouvrir l’administration (CMS)'}
              </button>
            ) : (
              <button
                onClick={() => {
                  onOpenAdminLogin();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 rounded-lg bg-slate-800/60 text-slate-400 text-xs font-mono"
              >
                {lang === 'fr' ? 'Connexion Espace Admin' : 'Admin Login'}
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

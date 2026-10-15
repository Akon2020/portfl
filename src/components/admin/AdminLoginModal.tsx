import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Lock, X, KeyRound, AlertCircle, ShieldCheck } from 'lucide-react';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const { lang, adminLogin } = useApp();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    const success = adminLogin(password);
    if (success) {
      setPassword('');
      onLoginSuccess();
      onClose();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-md rounded-2xl bg-[#0D121D] border border-[#FF6B00]/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(255,107,0,0.25)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-display font-black text-2xl uppercase tracking-wider text-white">
              {lang === 'fr' ? 'Accès Espace Admin' : 'Admin Portal Login'}
            </h2>
            <p className="text-xs font-mono text-[#00F0FF]">
              Isaac Akonkwa Portfolio CMS
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-400 mb-6 leading-relaxed">
          {lang === 'fr'
            ? 'Veuillez saisir votre clé de sécurité administrateur pour gérer vos projets, articles, messages et paramètres.'
            : 'Enter your administrator security passkey to edit projects, articles, messages, and settings.'}
        </p>

        {error && (
          <div className="p-3 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs font-mono mb-5 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>
              {lang === 'fr'
                ? 'Clé incorrecte. Indication : mot de passe par défaut "admin2026"'
                : 'Incorrect passkey. Default passkey: "admin2026"'}
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
              {lang === 'fr' ? 'Clé de sécurité / Passkey' : 'Administrator Passkey'}
            </label>
            <div className="relative">
              <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="password"
                required
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900 text-sm font-mono text-white border border-slate-700 focus:outline-none focus:border-[#FF6B00]"
              />
            </div>
            <p className="text-[11px] font-mono text-slate-500 mt-1.5">
              {lang === 'fr' ? 'Clé par défaut : admin2026' : 'Default passkey: admin2026'}
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#FF6B00] hover:bg-[#FF7700] text-black font-display font-black uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(255,107,0,0.35)] transition-all"
          >
            {lang === 'fr' ? 'Ouvrir la Console Admin' : 'Access Admin Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
};

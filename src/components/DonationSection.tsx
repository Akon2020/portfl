import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Heart, Smartphone, Coffee, CreditCard, ShieldCheck, Check, Copy } from 'lucide-react';

export const DonationSection: React.FC = () => {
  const { lang } = useApp();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  const supportMethods = [
    {
      id: 'mobile-money',
      name: 'Mobile Money (RDC & Afrique Centrale)',
      icon: Smartphone,
      color: '#FF6B00',
      descriptionFr: 'Idéal pour le soutien direct local (Airtel Money & M-Pesa RDC).',
      descriptionEn: 'Direct local mobile transfers (Airtel Money & M-Pesa DRC).',
      details: [
        { label: 'Airtel Money', value: '+243 970 137 369' },
        { label: 'Bénéficiaire', value: 'Akonkwa Ushindi Isaac' },
      ],
    },
    {
      id: 'github-sponsor',
      name: 'GitHub Sponsors & Open Source',
      icon: Coffee,
      color: '#00F0FF',
      descriptionFr: 'Soutenez mes contributions open source, mes librairies et mentorats.',
      descriptionEn: 'Sponsor my open-source libraries, tooling, and youth coding mentorship.',
      url: 'https://github.com/Akon2020',
      actionLabelFr: 'Rejoindre sur GitHub Sponsors',
      actionLabelEn: 'Join GitHub Sponsors',
    },
    {
      id: 'crypto',
      name: 'Crypto (USDT / ETH)',
      icon: CreditCard,
      color: '#FFA043',
      descriptionFr: 'Transferts internationaux sans friction via stablecoins.',
      descriptionEn: 'Frictionless international backing via stablecoin networks.',
      details: [
        { label: 'USDT (TRC-20)', value: 'TNP8wDqj7hTzS9j2Qx4kLmY6u8ZvKp1nRa' },
      ],
    },
  ];

  return (
    <section id="support" className="py-20 bg-[#090C14] dark:bg-[#090C14] light:bg-slate-50 border-t border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] mb-2 flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>{lang === 'fr' ? '08. Soutien & Mécénat Technologique' : '08. Sponsorship & Support'}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white dark:text-white light:text-slate-900 text-balance">
            {lang === 'fr' ? (
              <>
                Accélérer nos <span className="text-[#FF6B00]">Initiatives</span> Open Source & d’Éducation
              </>
            ) : (
              <>
                Backing <span className="text-[#FF6B00]">Open-Source</span> & Regional Tech Education
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-2xl">
            {lang === 'fr'
              ? 'Vos contributions financent l’hébergement de projets communautaires (DiaSmart, plateformes de mentorat) et les bourses de formation pour les jeunes développeurs à Bukavu.'
              : 'Your backing directly powers cloud hosting for public tools (DiaSmart, open APIs) and micro-grants for emerging software learners in Bukavu.'}
          </p>
        </div>

        {/* Support Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.id}
                className="p-6 rounded-2xl bg-[#0E131F] dark:bg-[#0E131F] light:bg-white border border-slate-800 hover:border-[#FF6B00]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white"
                      style={{ color: method.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg uppercase tracking-wider text-white dark:text-white light:text-slate-900">
                      {method.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 mb-6">
                    {lang === 'fr' ? method.descriptionFr : method.descriptionEn}
                  </p>

                  {method.details && (
                    <div className="space-y-3 mb-6">
                      {method.details.map((d) => (
                        <div key={d.label} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                          <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">{d.label}</div>
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-mono text-[#00F0FF] truncate">{d.value}</span>
                            <button
                              onClick={() => copyToClipboard(d.value, `${method.id}-${d.label}`)}
                              className="p-1 rounded text-slate-400 hover:text-white"
                              title="Copier"
                            >
                              {copiedKey === `${method.id}-${d.label}` ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {method.url && (
                  <a
                    href={method.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-lg bg-[#FF6B00] hover:bg-[#FF7700] text-black font-display font-bold uppercase tracking-wider text-xs text-center transition-all"
                  >
                    {lang === 'fr' ? method.actionLabelFr : method.actionLabelEn}
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Security / Ethics Notice */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center gap-3 text-xs font-mono text-slate-400">
          <ShieldCheck className="w-5 h-5 text-[#00E599] shrink-0" />
          <span>
            {lang === 'fr'
              ? 'Transparence & Sécurité : Aucune donnée de paiement bancaire n’est stockée sur nos serveurs. Tous les canaux utilisent des protocoles officiels vérifiés.'
              : 'Security Guarantee: Zero financial credentials are held in our application state. All contribution paths rely strictly on verified endpoints.'}
          </span>
        </div>
      </div>
    </section>
  );
};

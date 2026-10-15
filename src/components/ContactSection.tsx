import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { lang, profile, addMessage, subscribeNewsletter, unsubscribeNewsletter } = useApp();

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<{ message: string; isError: boolean } | null>(null);
  const [showUnsubscribe, setShowUnsubscribe] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError(lang === 'fr' ? 'Veuillez remplir tous les champs obligatoires.' : 'Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      addMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || (lang === 'fr' ? 'Prise de contact' : 'Direct Inquiry'),
        message: formData.message.trim(),
      });
      setIsSubmitting(false);
      setFormSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormSuccess(false), 5000);
    }, 400);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (showUnsubscribe) {
      const res = unsubscribeNewsletter(newsletterEmail);
      setNewsletterStatus({ message: res.message, isError: !res.success });
    } else {
      const res = subscribeNewsletter(newsletterEmail);
      setNewsletterStatus({ message: res.message, isError: !res.success });
    }
    setNewsletterEmail('');
    setTimeout(() => setNewsletterStatus(null), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#07090E] dark:bg-[#07090E] light:bg-slate-50 border-t border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] mb-2">
            {lang === 'fr' ? '07. Collaboration & Échange' : '07. Contact & Collaboration'}
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white dark:text-white light:text-slate-900 text-balance">
            {lang === 'fr' ? (
              <>
                Donnons Vie à vos <span className="text-[#FF6B00]">Visions</span> Logicielles
              </>
            ) : (
              <>
                Let’s Build <span className="text-[#FF6B00]">Impactful</span> Digital Products
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-2xl">
            {lang === 'fr'
              ? 'Disponible pour opportunités de recrutement (CDI / Contrats), missions de consulting architectural, développement mobile React Native ou audits de sécurité.'
              : 'Available for full-time software engineering roles, architecture consulting contracts, React Native mobile apps, or security audits.'}
          </p>
        </div>

        {/* 2-Column Split: Direct Coordinates vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Coordinates & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0E131F] dark:bg-[#0E131F] light:bg-white border border-slate-800 space-y-5">
              <h3 className="font-display font-bold text-xl uppercase tracking-wider text-white dark:text-white light:text-slate-900">
                {lang === 'fr' ? 'Coordonnées Officielles' : 'Direct Channels'}
              </h3>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">{lang === 'fr' ? 'Email Direct' : 'Email Address'}</div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-mono text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-[#FF6B00] transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">{lang === 'fr' ? 'Téléphone & WhatsApp' : 'Phone & WhatsApp'}</div>
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-sm font-mono text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-[#00F0FF] transition-colors"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#FFA043]/10 text-[#FFA043] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">{lang === 'fr' ? 'Localisation Principale' : 'Location'}</div>
                  <div className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {profile.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="p-6 rounded-2xl bg-[#0E131F] dark:bg-[#0E131F] light:bg-white border border-slate-800">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
                {lang === 'fr' ? 'Réseaux Professionnels' : 'Professional Networks'}
              </h4>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 flex items-center gap-2 text-xs font-mono"
                >
                  <Github className="w-4 h-4 text-[#FF6B00]" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 flex items-center gap-2 text-xs font-mono"
                >
                  <Linkedin className="w-4 h-4 text-[#00F0FF]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profile.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 flex items-center gap-2 text-xs font-mono"
                >
                  <Twitter className="w-4 h-4 text-[#00F0FF]" />
                  <span>Twitter / X</span>
                </a>
                <a
                  href={profile.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 flex items-center gap-2 text-xs font-mono"
                >
                  <Instagram className="w-4 h-4 text-[#FFA043]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="p-6 rounded-2xl bg-[#0E131F] dark:bg-[#0E131F] light:bg-white border border-[#FF6B00]/25">
              <div className="text-xs font-mono text-[#FF6B00] uppercase font-bold mb-1">
                Newsletter Tech & IA
              </div>
              <h4 className="font-display font-bold text-lg uppercase text-white dark:text-white light:text-slate-900 mb-2">
                {lang === 'fr' ? 'Restez Informé des Prochaines Publications' : 'Subscribe to Technical Dispatches'}
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                {lang === 'fr'
                  ? 'Recevez nos études de cas d’ingénierie logicielle, retours de bug bounty et innovations mobiles. Pas de spam, désinscription en 1 clic.'
                  : 'Engineering insights on mobile architectures, offensive security, and healthtech systems. No spam, 1-click unsubscribe.'}
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={lang === 'fr' ? 'Votre adresse email' : 'Your email address'}
                    className="flex-1 px-3.5 py-2 rounded-lg bg-slate-900 text-xs font-mono text-slate-200 border border-slate-800 focus:outline-none focus:border-[#FF6B00]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#FF6B00] hover:bg-[#FF7700] text-black font-display font-bold uppercase text-xs tracking-wider"
                  >
                    {showUnsubscribe
                      ? (lang === 'fr' ? 'Désinscrire' : 'Unsubscribe')
                      : (lang === 'fr' ? 'S’abonner' : 'Join')}
                  </button>
                </div>

                {newsletterStatus && (
                  <div
                    className={`text-xs font-mono p-2 rounded ${
                      newsletterStatus.isError
                        ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    }`}
                  >
                    {newsletterStatus.message}
                  </div>
                )}

                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    onClick={() => setShowUnsubscribe(!showUnsubscribe)}
                    className="text-[11px] font-mono text-slate-500 hover:text-slate-300 underline"
                  >
                    {showUnsubscribe
                      ? (lang === 'fr' ? '← Revenir à l’inscription' : '← Back to subscribe')
                      : (lang === 'fr' ? 'Vous souhaitez vous désinscrire ?' : 'Want to unsubscribe?')}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#0E131F] dark:bg-[#0E131F] light:bg-white border border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
              <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-white dark:text-white light:text-slate-900 mb-2">
                {lang === 'fr' ? 'Envoyez un Message Direct' : 'Send a Direct Message'}
              </h3>
              <p className="text-xs text-slate-400 mb-8">
                {lang === 'fr'
                  ? 'Votre message sera immédiatement enregistré dans ma boîte de réception d’administration et je vous répondrai sous 24 à 48 heures.'
                  : 'Your message will be safely stored in my administration inbox and I will get back to you within 24–48 hours.'}
              </p>

              {formSuccess && (
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>
                    {lang === 'fr'
                      ? 'Message transmis avec succès ! Il a été consigné dans mon tableau de bord administrateur.'
                      : 'Message sent successfully! It has been recorded in my admin dashboard.'}
                  </span>
                </div>
              )}

              {formError && (
                <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs font-mono mb-6 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                      {lang === 'fr' ? 'Nom ou Organisation *' : 'Name / Company *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'fr' ? 'Ex: Sarah Kabila' : 'e.g., Alex Johnson'}
                      className="w-full px-4 py-3 rounded-lg bg-slate-900 text-xs font-mono text-slate-200 border border-slate-800 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                      {lang === 'fr' ? 'Email de Réponse *' : 'Your Email *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@enterprise.com"
                      className="w-full px-4 py-3 rounded-lg bg-slate-900 text-xs font-mono text-slate-200 border border-slate-800 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    {lang === 'fr' ? 'Objet de la Demande' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={lang === 'fr' ? 'Ex: Mission d’architecture Next.js / Mobile' : 'e.g., Senior Fullstack Engineering Role'}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 text-xs font-mono text-slate-200 border border-slate-800 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    {lang === 'fr' ? 'Votre Message & Détails *' : 'Your Message & Details *'}
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'fr' ? 'Décrivez votre projet, vos objectifs ou vos disponibilités...' : 'Describe your project scope, timeline, or open role requirements...'}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 text-xs font-mono text-slate-200 border border-slate-800 focus:outline-none focus:border-[#FF6B00] resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#FF6B00] hover:bg-[#FF7700] text-black font-display font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,107,0,0.35)] transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? (lang === 'fr' ? 'Envoi en cours...' : 'Dispatching...') : (lang === 'fr' ? 'Transmettre le Message' : 'Send Message')}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

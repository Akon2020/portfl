import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BlogPost } from '../types';
import { BookOpen, Clock, ArrowUpRight, Search, X, Share2, Tag } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const { lang, blogPosts, recordBlogView } = useApp();
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [copiedShare, setCopiedShare] = useState(false);

  // Extract all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap((b) => b.tags)));

  const filteredPosts = blogPosts.filter((post) => {
    if (post.status !== 'published') return false;
    if (selectedTag === 'all') return true;
    return post.tags.includes(selectedTag);
  });

  const handleOpenArticle = (post: BlogPost) => {
    setActiveArticle(post);
    recordBlogView();
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <section id="blog" className="py-20 bg-[#090C14] dark:bg-[#090C14] light:bg-slate-50 border-t border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FFA043] mb-2">
            {lang === 'fr' ? '05. Publications & Retours d’Expérience' : '05. Technical Insights & Writings'}
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white dark:text-white light:text-slate-900 text-balance">
            {lang === 'fr' ? (
              <>
                Analyses <span className="text-[#FF6B00]">Architecturales</span>, Santé & Cybersécurité
              </>
            ) : (
              <>
                Architectural <span className="text-[#FF6B00]">Analyses</span>, HealthTech & Cybersecurity
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-2xl">
            {lang === 'fr'
              ? 'Articles rédigés à partir de déploiements réels en production et de nos travaux de recherche en génie logiciel.'
              : 'Engineering essays distilled from actual production releases and software engineering research.'}
          </p>
        </div>

        {/* Tag Filters (Segmented) */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-200 border border-slate-800 overflow-x-auto mb-10">
          <button
            onClick={() => setSelectedTag('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
              selectedTag === 'all'
                ? 'bg-[#FF6B00] text-black font-bold shadow-[0_0_15px_rgba(255,107,0,0.3)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {lang === 'fr' ? 'Tous les Thèmes' : 'All Topics'}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                selectedTag === tag
                  ? 'bg-[#FF6B00] text-black font-bold shadow-[0_0_15px_rgba(255,107,0,0.3)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl overflow-hidden bg-[#0E131F] dark:bg-[#0E131F] light:bg-white border border-slate-800 hover:border-[#FF6B00]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={post.coverImage}
                    alt={post.titleFr}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#00F0FF] uppercase border border-[#00F0FF]/30">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  {/* Metadata line (Zero-pill text) */}
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
                    <span>{post.publishedAt}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 text-[#FFA043]">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl uppercase tracking-wide text-white dark:text-white light:text-slate-900 mb-3 group-hover:text-[#FFA043] transition-colors leading-snug">
                    {lang === 'fr' ? post.titleFr : post.titleEn}
                  </h3>

                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {lang === 'fr' ? post.excerptFr : post.excerptEn}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 mt-2 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                  {post.tags.slice(0, 2).map((t) => (
                    <span key={t}>#{t} </span>
                  ))}
                </div>

                <button
                  onClick={() => handleOpenArticle(post)}
                  className="text-xs font-display font-bold uppercase tracking-wider text-[#FF6B00] hover:text-[#FFA043] transition-colors flex items-center gap-1"
                >
                  <span>{lang === 'fr' ? 'Lire l’article' : 'Read Article'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl rounded-2xl bg-[#0D121D] border border-[#FF6B00]/40 p-6 sm:p-10 max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(255,107,0,0.25)]">
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white transition-colors border border-slate-700"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-4">
              <span className="text-[#00F0FF]">{activeArticle.category}</span>
              <span>·</span>
              <span>{activeArticle.publishedAt}</span>
              <span>·</span>
              <span className="text-[#FFA043]">{activeArticle.readTime}</span>
            </div>

            <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white mb-6">
              {lang === 'fr' ? activeArticle.titleFr : activeArticle.titleEn}
            </h1>

            {/* Article Content Rendered */}
            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line border-t border-b border-slate-800/80 py-6 mb-6">
              {lang === 'fr' ? activeArticle.contentFr : activeArticle.contentEn}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={handleShare}
                className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-2 border border-slate-700"
              >
                <Share2 className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>{copiedShare ? (lang === 'fr' ? 'Lien copié !' : 'Link copied!') : (lang === 'fr' ? 'Partager l’article' : 'Share link')}</span>
              </button>

              <button
                onClick={() => setActiveArticle(null)}
                className="text-xs font-mono text-slate-400 hover:text-white"
              >
                {lang === 'fr' ? 'Fermer la lecture' : 'Close reader'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

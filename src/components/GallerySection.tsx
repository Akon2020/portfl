import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { GalleryItem } from '../types';
import { Image as ImageIcon, X, Maximize2, Calendar, Tag } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { lang, gallery } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', labelFr: 'Tous les Médias', labelEn: 'All Media' },
    { id: 'speaking', labelFr: 'Soutenances & Talk', labelEn: 'Defenses & Talks' },
    { id: 'community', labelFr: 'GDG & Akon Tech', labelEn: 'GDG & Community' },
    { id: 'dev', labelFr: 'Labs & Pentest', labelEn: 'Labs & Pentesting' },
  ];

  const filteredItems = gallery.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="gallery" className="py-20 bg-[#07090E] dark:bg-[#07090E] light:bg-white border-t border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] mb-2">
            {lang === 'fr' ? '06. Galerie Média & Événements' : '06. Visual Archives & Field Events'}
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white dark:text-white light:text-slate-900 text-balance">
            {lang === 'fr' ? (
              <>
                Moments Forts sur le <span className="text-[#FF6B00]">Terrain</span> & Communauté
              </>
            ) : (
              <>
                Field Moments & <span className="text-[#FF6B00]">Community</span> Highlights
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-2xl">
            {lang === 'fr'
              ? 'Archives visuelles retraçant les conférences Google Developer Group, les hackathons d’Akon Tech et les soutenances universitaires.'
              : 'Visual archives capturing Google Developer Group masterclasses, Akon Tech programming sprints, and academic milestones.'}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 overflow-x-auto mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                selectedCategory === c.id
                  ? 'bg-[#FF6B00] text-black font-bold shadow-[0_0_15px_rgba(255,107,0,0.3)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'fr' ? c.labelFr : c.labelEn}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-[#00F0FF]/50 transition-all duration-300 cursor-pointer aspect-square"
            >
              <img
                src={item.imageUrl}
                alt={item.titleFr}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-[#00F0FF] uppercase mb-1">
                  {item.category} · {item.date}
                </span>
                <h4 className="font-display font-bold text-sm uppercase text-white line-clamp-2">
                  {lang === 'fr' ? item.titleFr : item.titleEn}
                </h4>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-[#FFA043]">
                  <Maximize2 className="w-3 h-3" />
                  <span>{lang === 'fr' ? 'Agrandir' : 'Expand'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl rounded-2xl bg-[#0D121D] border border-slate-700 overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.titleFr}
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-[#0E131F]">
              <div className="flex items-center gap-3 text-xs font-mono text-[#00F0FF] mb-2">
                <span>{activeItem.category}</span>
                <span>·</span>
                <span>{activeItem.date}</span>
              </div>
              <h3 className="font-display font-bold text-xl uppercase text-white mb-2">
                {lang === 'fr' ? activeItem.titleFr : activeItem.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {lang === 'fr' ? activeItem.descriptionFr : activeItem.descriptionEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

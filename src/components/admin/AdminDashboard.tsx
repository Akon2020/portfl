import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Project, BlogPost, TimelineItem, GalleryItem } from '../../types';
import {
  LayoutDashboard,
  Layers,
  BookOpen,
  Calendar,
  Mail,
  Users,
  Image as ImageIcon,
  Settings,
  Plus,
  Trash2,
  Edit,
  Eye,
  Check,
  X,
  Download,
  ExternalLink,
  ShieldAlert,
  Save,
  RotateCcw,
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    lang,
    profile,
    updateProfile,
    projects,
    addProject,
    updateProject,
    deleteProject,
    blogPosts,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    timeline,
    addTimelineItem,
    updateTimelineItem,
    deleteTimelineItem,
    gallery,
    addGalleryItem,
    deleteGalleryItem,
    messages,
    markMessageRead,
    deleteMessage,
    subscribers,
    unsubscribeNewsletter,
    stats,
    resetAllData,
  } = useApp();

  const [activeTab, setActiveTab] = useState<
    'overview' | 'projects' | 'blog' | 'timeline' | 'messages' | 'subscribers' | 'gallery' | 'settings'
  >('overview');

  // Modals for CRUD
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isCreatingProject, setIsCreatingProject] = useState(false);

  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [isCreatingBlog, setIsCreatingBlog] = useState(false);

  const [editingTimeline, setEditingTimeline] = useState<TimelineItem | null>(null);
  const [isCreatingTimeline, setIsCreatingTimeline] = useState(false);

  const [newGallery, setNewGallery] = useState<{
    titleFr: string;
    titleEn: string;
    category: 'community' | 'projects' | 'speaking' | 'dev';
    imageUrl: string;
    date: string;
    descriptionFr: string;
    descriptionEn: string;
  }>({
    titleFr: '',
    titleEn: '',
    category: 'community',
    imageUrl: '',
    date: '2026',
    descriptionFr: '',
    descriptionEn: '',
  });

  // Settings form state
  const [settingsForm, setSettingsForm] = useState(profile);
  const [settingsSaved, setSettingsSaved] = useState(false);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(settingsForm);
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 3000);
  };

  // Export CSV for subscribers
  const handleExportSubscribersCSV = () => {
    const headers = 'ID,Email,Date,Status\n';
    const rows = subscribers.map((s) => `"${s.id}","${s.email}","${s.date}","${s.status}"`).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `subscribers_isaac_akonkwa_${new Date().toISOString().substring(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-pulse" />
              <span className="text-xs font-mono uppercase text-[#00F0FF] tracking-wider">
                Console de Gestion Intégrée (CMS)
              </span>
            </div>
            <h1 className="font-display font-black text-3xl uppercase tracking-tight text-white mt-1">
              Tableau de Bord Administrateur
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              Session active : <strong className="text-white">Isaac Akonkwa</strong>
            </span>
          </div>
        </div>

        {/* Admin Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 overflow-x-auto mb-8">
          {[
            { id: 'overview', labelFr: 'Vue d’ensemble', labelEn: 'Overview', icon: LayoutDashboard },
            { id: 'projects', labelFr: `Projets (${projects.length})`, labelEn: `Projects (${projects.length})`, icon: Layers },
            { id: 'blog', labelFr: `Blog (${blogPosts.length})`, labelEn: `Blog (${blogPosts.length})`, icon: BookOpen },
            { id: 'timeline', labelFr: `Parcours (${timeline.length})`, labelEn: `Timeline (${timeline.length})`, icon: Calendar },
            { id: 'messages', labelFr: `Messages (${messages.filter(m => !m.read).length} non lus)`, labelEn: `Inquiries (${messages.filter(m => !m.read).length})`, icon: Mail },
            { id: 'subscribers', labelFr: `Abonnés (${subscribers.length})`, labelEn: `Subscribers (${subscribers.length})`, icon: Users },
            { id: 'gallery', labelFr: `Galerie (${gallery.length})`, labelEn: `Gallery (${gallery.length})`, icon: ImageIcon },
            { id: 'settings', labelFr: 'Paramètres du Profil', labelEn: 'Profile Settings', icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#FF6B00] text-black font-bold shadow-[0_0_15px_rgba(255,107,0,0.3)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{lang === 'fr' ? tab.labelFr : tab.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="p-5 rounded-2xl bg-[#0E131F] border border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-1">Vues de Projets</div>
                <div className="font-display font-black text-3xl text-[#FF6B00] tabular-nums">
                  {stats.projectViews}
                </div>
                <div className="text-[11px] text-slate-500 mt-2">Consultations détaillées</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0E131F] border border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-1">Lectures Articles</div>
                <div className="font-display font-black text-3xl text-[#00F0FF] tabular-nums">
                  {stats.blogViews}
                </div>
                <div className="text-[11px] text-slate-500 mt-2">Sessions d’analyse tech</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0E131F] border border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-1">Téléchargements CV</div>
                <div className="font-display font-black text-3xl text-[#FFA043] tabular-nums">
                  {stats.resumeDownloads}
                </div>
                <div className="text-[11px] text-slate-500 mt-2">Dossier PDF exporté</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0E131F] border border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-1">Messages Reçus</div>
                <div className="font-display font-black text-3xl text-[#00E599] tabular-nums">
                  {messages.length}
                </div>
                <div className="text-[11px] text-slate-500 mt-2">
                  {messages.filter((m) => !m.read).length} en attente de lecture
                </div>
              </div>
            </div>

            {/* Recent Messages & Quick Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 p-6 rounded-2xl bg-[#0E131F] border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-lg uppercase text-white">
                    Derniers Messages Reçus
                  </h3>
                  <button
                    onClick={() => setActiveTab('messages')}
                    className="text-xs font-mono text-[#FF6B00] hover:underline"
                  >
                    Voir tous ({messages.length}) →
                  </button>
                </div>

                {messages.length === 0 ? (
                  <p className="text-xs font-mono text-slate-500 py-6 text-center">
                    Aucun message pour le moment.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {messages.slice(0, 4).map((msg) => (
                      <div
                        key={msg.id}
                        className={`p-3.5 rounded-xl border text-xs ${
                          msg.read
                            ? 'bg-slate-900/40 border-slate-800 text-slate-400'
                            : 'bg-[#FF6B00]/10 border-[#FF6B00]/30 text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-bold text-slate-200">{msg.name}</span>
                          <span className="font-mono text-[10px] text-slate-400">{msg.date}</span>
                        </div>
                        <div className="font-semibold text-[#FFA043]">{msg.subject}</div>
                        <p className="line-clamp-2 mt-1 text-slate-300">{msg.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0E131F] border border-slate-800 space-y-4">
                <h3 className="font-display font-bold text-lg uppercase text-white">
                  Statut & Action Rapide
                </h3>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 text-xs font-mono">
                  <div>
                    <span className="text-slate-500">Disponibilité actuelle :</span>
                    <div className="text-[#00E599] font-bold mt-0.5">{profile.availabilityFr}</div>
                  </div>
                  <div>
                    <span className="text-slate-500">Abonnés Newsletter :</span>
                    <div className="text-white font-bold mt-0.5">{subscribers.filter(s => s.status === 'active').length} actifs</div>
                  </div>
                  <div>
                    <span className="text-slate-500">Projets Mis en Avant :</span>
                    <div className="text-[#FF6B00] font-bold mt-0.5">
                      {projects.filter((p) => p.featured).map((p) => p.title).join(', ')}
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setIsCreatingProject(true);
                      setActiveTab('projects');
                    }}
                    className="w-full py-2.5 rounded-lg bg-[#FF6B00] text-black font-display font-bold uppercase text-xs flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Créer un Nouveau Projet</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsCreatingBlog(true);
                      setActiveTab('blog');
                    }}
                    className="w-full py-2.5 rounded-lg bg-slate-800 text-white font-display font-bold uppercase text-xs flex items-center justify-center gap-2 border border-slate-700"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Rédiger un Article Technique</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PROJECTS MANAGER */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="font-display font-bold text-xl uppercase text-white">
                  Gestion des Projets ({projects.length})
                </h2>
                <p className="text-xs font-mono text-slate-400">
                  Ajoutez, modifiez ou organisez vos réalisations techniques.
                </p>
              </div>
              <button
                onClick={() => setIsCreatingProject(true)}
                className="px-4 py-2 rounded-lg bg-[#FF6B00] hover:bg-[#FF7700] text-black font-display font-bold uppercase text-xs flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Nouveau Projet</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-5 rounded-xl bg-[#0E131F] border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-700 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-[#00F0FF] uppercase border border-slate-800">
                        {proj.category}
                      </span>
                      {proj.featured && (
                        <span className="px-2 py-0.5 rounded bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 font-bold uppercase">
                          ★ Featured
                        </span>
                      )}
                      <span className="text-slate-500">{proj.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">{proj.title}</h3>
                    <p className="text-xs text-slate-400 line-clamp-1">{proj.subtitleFr}</p>
                    <div className="text-[11px] font-mono text-slate-500">
                      {proj.technologies.join(' · ')}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() =>
                        updateProject({ ...proj, featured: !proj.featured })
                      }
                      className={`px-3 py-1.5 rounded text-xs font-mono border ${
                        proj.featured
                          ? 'bg-[#FF6B00]/20 border-[#FF6B00]/40 text-[#FF6B00]'
                          : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                      title="Mettre en avant"
                    >
                      {proj.featured ? 'Featured' : 'Mettre en avant'}
                    </button>
                    <button
                      onClick={() => setEditingProject(proj)}
                      className="p-2 rounded bg-slate-800 text-slate-300 hover:text-white"
                      title="Modifier"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Supprimer le projet "${proj.title}" ?`)) {
                          deleteProject(proj.id);
                        }
                      }}
                      className="p-2 rounded bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                      title="Supprimer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Create/Edit Modal */}
        {(isCreatingProject || editingProject) && (
          <ProjectFormModal
            project={editingProject}
            onClose={() => {
              setIsCreatingProject(false);
              setEditingProject(null);
            }}
            onSave={(savedProject) => {
              if (editingProject) {
                updateProject(savedProject);
              } else {
                addProject(savedProject);
              }
              setIsCreatingProject(false);
              setEditingProject(null);
            }}
          />
        )}

        {/* TAB 3: BLOG MANAGER */}
        {activeTab === 'blog' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="font-display font-bold text-xl uppercase text-white">
                  Gestion du Blog & Publications ({blogPosts.length})
                </h2>
                <p className="text-xs font-mono text-slate-400">
                  Rédigez, modifiez ou programmez vos articles bilingues.
                </p>
              </div>
              <button
                onClick={() => setIsCreatingBlog(true)}
                className="px-4 py-2 rounded-lg bg-[#FF6B00] hover:bg-[#FF7700] text-black font-display font-bold uppercase text-xs flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Nouvel Article</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-5 rounded-xl bg-[#0E131F] border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span
                        className={`px-2 py-0.5 rounded uppercase font-bold ${
                          post.status === 'published'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        }`}
                      >
                        {post.status}
                      </span>
                      <span className="text-[#00F0FF]">{post.category}</span>
                      <span className="text-slate-500">{post.publishedAt}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">{post.titleFr}</h3>
                    <div className="text-[11px] font-mono text-slate-500">
                      Tags : {post.tags.join(', ')} · Lecture : {post.readTime}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() =>
                        updateBlogPost({
                          ...post,
                          status: post.status === 'published' ? 'draft' : 'published',
                        })
                      }
                      className="px-3 py-1.5 rounded text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {post.status === 'published' ? 'Dépublier' : 'Publier'}
                    </button>
                    <button
                      onClick={() => setEditingBlog(post)}
                      className="p-2 rounded bg-slate-800 text-slate-300 hover:text-white"
                      title="Modifier"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Supprimer l’article "${post.titleFr}" ?`)) {
                          deleteBlogPost(post.id);
                        }
                      }}
                      className="p-2 rounded bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                      title="Supprimer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Blog Create/Edit Modal */}
        {(isCreatingBlog || editingBlog) && (
          <BlogFormModal
            post={editingBlog}
            onClose={() => {
              setIsCreatingBlog(false);
              setEditingBlog(null);
            }}
            onSave={(saved) => {
              if (editingBlog) {
                updateBlogPost(saved);
              } else {
                addBlogPost(saved);
              }
              setIsCreatingBlog(false);
              setEditingBlog(null);
            }}
          />
        )}

        {/* TAB 4: TIMELINE */}
        {activeTab === 'timeline' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="font-display font-bold text-xl uppercase text-white">
                  Gestion du Parcours ({timeline.length})
                </h2>
                <p className="text-xs font-mono text-slate-400">
                  Étapes professionnelles, responsabilités communautaires et diplômes.
                </p>
              </div>
              <button
                onClick={() => setIsCreatingTimeline(true)}
                className="px-4 py-2 rounded-lg bg-[#FF6B00] hover:bg-[#FF7700] text-black font-display font-bold uppercase text-xs flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Ajouter une Étape</span>
              </button>
            </div>

            <div className="space-y-4">
              {timeline.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-xl bg-[#0E131F] border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-[#00F0FF]">
                      {item.period} · {item.location} ({item.type})
                    </div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {item.roleFr} — <span className="text-[#FFA043]">{item.organization}</span>
                    </h3>
                    <p className="text-xs text-slate-400">{item.descriptionFr}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setEditingTimeline(item)}
                      className="p-2 rounded bg-slate-800 text-slate-300 hover:text-white"
                      title="Modifier"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Supprimer l'étape "${item.roleFr}" ?`)) {
                          deleteTimelineItem(item.id);
                        }
                      }}
                      className="p-2 rounded bg-rose-500/10 text-rose-400"
                      title="Supprimer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timeline Edit Modal */}
        {(isCreatingTimeline || editingTimeline) && (
          <TimelineFormModal
            item={editingTimeline}
            onClose={() => {
              setIsCreatingTimeline(false);
              setEditingTimeline(null);
            }}
            onSave={(saved) => {
              if (editingTimeline) {
                updateTimelineItem(saved);
              } else {
                addTimelineItem(saved);
              }
              setIsCreatingTimeline(false);
              setEditingTimeline(null);
            }}
          />
        )}

        {/* TAB 5: MESSAGES */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display font-bold text-xl uppercase text-white">
                Boîte de Réception ({messages.length})
              </h2>
              <p className="text-xs font-mono text-slate-400">
                Messages envoyés depuis le formulaire de contact public.
              </p>
            </div>

            {messages.length === 0 ? (
              <div className="p-8 text-center rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                Aucun message reçu.
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-5 rounded-xl border ${
                      msg.read
                        ? 'bg-[#0E131F] border-slate-800'
                        : 'bg-[#FF6B00]/10 border-[#FF6B00]/40'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <span className="font-bold text-white text-sm">{msg.name}</span>
                        <span className="text-xs font-mono text-slate-400 ml-2">({msg.email})</span>
                      </div>
                      <div className="text-xs font-mono text-slate-400 flex items-center gap-3">
                        <span>{msg.date}</span>
                        {!msg.read && (
                          <span className="px-2 py-0.5 rounded bg-[#FF6B00] text-black font-bold text-[10px] uppercase">
                            Nouveau
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="font-semibold text-[#FFA043] text-sm mb-2">{msg.subject}</div>
                    <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed mb-4">
                      {msg.message}
                    </p>

                    <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                      <a
                        href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`}
                        className="px-3 py-1.5 rounded-lg bg-[#FF6B00] text-black font-display font-bold text-xs uppercase"
                      >
                        Répondre par Email
                      </a>
                      {!msg.read && (
                        <button
                          onClick={() => markMessageRead(msg.id)}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-mono hover:text-white"
                        >
                          Marquer comme lu
                        </button>
                      )}
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="p-1.5 rounded text-rose-400 hover:text-rose-300"
                        title="Supprimer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 6: SUBSCRIBERS */}
        {activeTab === 'subscribers' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="font-display font-bold text-xl uppercase text-white">
                  Abonnés Newsletter ({subscribers.length})
                </h2>
                <p className="text-xs font-mono text-slate-400">
                  Liste des adresses inscrites aux publications techniques.
                </p>
              </div>
              <button
                onClick={handleExportSubscribersCSV}
                className="px-4 py-2 rounded-lg bg-[#00F0FF] hover:bg-[#00D2FF] text-black font-display font-bold uppercase text-xs flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Exporter CSV</span>
              </button>
            </div>

            <div className="rounded-xl bg-[#0E131F] border border-slate-800 overflow-hidden">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-900/80 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Email</th>
                    <th className="p-3.5">Date Inscription</th>
                    <th className="p-3.5">Statut</th>
                    <th className="p-3.5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {subscribers.map((sub) => (
                    <tr key={sub.id} className="hover:bg-slate-900/40">
                      <td className="p-3.5 text-slate-200 font-semibold">{sub.email}</td>
                      <td className="p-3.5 text-slate-400">{sub.date}</td>
                      <td className="p-3.5">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                            sub.status === 'active'
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {sub.status}
                        </span>
                      </td>
                      <td className="p-3.5 text-right">
                        {sub.status === 'active' && (
                          <button
                            onClick={() => unsubscribeNewsletter(sub.email)}
                            className="text-rose-400 hover:underline text-[11px]"
                          >
                            Désinscrire
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 7: GALLERY */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display font-bold text-xl uppercase text-white">
                Archives Visuelles & Médias ({gallery.length})
              </h2>
              <p className="text-xs font-mono text-slate-400">
                Gérez les photos des conférences GDG, soutenances et labs.
              </p>
            </div>

            {/* Add Image Form */}
            <div className="p-5 rounded-xl bg-[#0E131F] border border-slate-800 space-y-4">
              <h3 className="font-display font-bold text-base text-white uppercase">
                Ajouter une Nouvelle Photo
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="URL de l'image (https://...)"
                  value={newGallery.imageUrl}
                  onChange={(e) => setNewGallery({ ...newGallery, imageUrl: e.target.value })}
                  className="px-3 py-2 rounded bg-slate-900 text-xs font-mono text-white border border-slate-800"
                />
                <input
                  type="text"
                  placeholder="Titre en Français"
                  value={newGallery.titleFr}
                  onChange={(e) => setNewGallery({ ...newGallery, titleFr: e.target.value })}
                  className="px-3 py-2 rounded bg-slate-900 text-xs font-mono text-white border border-slate-800"
                />
                <input
                  type="text"
                  placeholder="Titre en Anglais"
                  value={newGallery.titleEn}
                  onChange={(e) => setNewGallery({ ...newGallery, titleEn: e.target.value })}
                  className="px-3 py-2 rounded bg-slate-900 text-xs font-mono text-white border border-slate-800"
                />
                <select
                  value={newGallery.category}
                  onChange={(e) => setNewGallery({ ...newGallery, category: e.target.value as any })}
                  className="px-3 py-2 rounded bg-slate-900 text-xs font-mono text-white border border-slate-800"
                >
                  <option value="community">GDG & Akon Tech</option>
                  <option value="speaking">Soutenances & Talks</option>
                  <option value="dev">Labs & Pentest</option>
                  <option value="projects">Projets</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (!newGallery.imageUrl.trim() || !newGallery.titleFr.trim()) {
                    alert('Veuillez renseigner au moins l’URL et le titre.');
                    return;
                  }
                  addGalleryItem({
                    ...newGallery,
                    id: `gal-${Date.now()}`,
                  });
                  setNewGallery({
                    titleFr: '',
                    titleEn: '',
                    category: 'community',
                    imageUrl: '',
                    date: '2026',
                    descriptionFr: '',
                    descriptionEn: '',
                  });
                }}
                className="px-4 py-2 rounded-lg bg-[#FF6B00] text-black font-display font-bold uppercase text-xs"
              >
                Ajouter au Portfolio
              </button>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((g) => (
                <div key={g.id} className="p-3 rounded-xl bg-[#0E131F] border border-slate-800">
                  <img src={g.imageUrl} alt={g.titleFr} className="w-full aspect-video object-cover rounded mb-2" />
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white truncate">{g.titleFr}</span>
                    <button onClick={() => deleteGalleryItem(g.id)} className="text-rose-400 p-1">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 8: PROFILE SETTINGS */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display font-bold text-xl uppercase text-white">
                Paramètres du Profil & Métadonnées
              </h2>
              <p className="text-xs font-mono text-slate-400">
                Personnalisez vos coordonnées, votre statut de disponibilité et vos réseaux sans coder.
              </p>
            </div>

            {settingsSaved && (
              <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                Modifications enregistrées avec succès !
              </div>
            )}

            <form onSubmit={handleSaveSettings} className="p-6 rounded-2xl bg-[#0E131F] border border-slate-800 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Nom Public</label>
                  <input
                    type="text"
                    value={settingsForm.name}
                    onChange={(e) => setSettingsForm({ ...settingsForm, name: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-slate-900 text-xs font-mono text-white border border-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Email Officiel</label>
                  <input
                    type="email"
                    value={settingsForm.email}
                    onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-slate-900 text-xs font-mono text-white border border-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Téléphone</label>
                  <input
                    type="text"
                    value={settingsForm.phone}
                    onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-slate-900 text-xs font-mono text-white border border-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Localisation</label>
                  <input
                    type="text"
                    value={settingsForm.location}
                    onChange={(e) => setSettingsForm({ ...settingsForm, location: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-slate-900 text-xs font-mono text-white border border-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Statut Disponibilité (FR)</label>
                <input
                  type="text"
                  value={settingsForm.availabilityFr}
                  onChange={(e) => setSettingsForm({ ...settingsForm, availabilityFr: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-slate-900 text-xs font-mono text-white border border-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Statut Disponibilité (EN)</label>
                <input
                  type="text"
                  value={settingsForm.availabilityEn}
                  onChange={(e) => setSettingsForm({ ...settingsForm, availabilityEn: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-slate-900 text-xs font-mono text-white border border-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Bio Courte (FR)</label>
                  <textarea
                    rows={3}
                    value={settingsForm.bioFr}
                    onChange={(e) => setSettingsForm({ ...settingsForm, bioFr: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-slate-900 text-xs text-white border border-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Bio Courte (EN)</label>
                  <textarea
                    rows={3}
                    value={settingsForm.bioEn}
                    onChange={(e) => setSettingsForm({ ...settingsForm, bioEn: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-slate-900 text-xs text-white border border-slate-800"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-[#FF6B00] hover:bg-[#FF7700] text-black font-display font-bold uppercase text-xs flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Enregistrer les Paramètres</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (confirm('Voulez-vous réinitialiser toutes les données aux valeurs par défaut du CV ?')) {
                      resetAllData();
                      alert('Données réinitialisées avec succès.');
                    }
                  }}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white text-xs font-mono flex items-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restaurer Données du CV</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// Sub-components: Project Form Modal
const ProjectFormModal: React.FC<{
  project: Project | null;
  onClose: () => void;
  onSave: (p: Project) => void;
}> = ({ project, onClose, onSave }) => {
  const [form, setForm] = useState<Project>(
    project || {
      id: `proj-${Date.now()}`,
      title: '',
      subtitleFr: '',
      subtitleEn: '',
      category: 'fullstack',
      technologies: ['React', 'TypeScript', 'Node.js'],
      descriptionFr: '',
      descriptionEn: '',
      problemFr: '',
      problemEn: '',
      solutionFr: '',
      solutionEn: '',
      myRoleFr: '',
      myRoleEn: '',
      highlightsFr: ['Haute performance', 'Architecture scalable'],
      highlightsEn: ['High performance', 'Scalable architecture'],
      featured: false,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      date: '2026',
    }
  );

  const [techInput, setTechInput] = useState(form.technologies.join(', '));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#0D121D] border border-slate-700 p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-xs">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-display font-bold text-xl uppercase text-white mb-4">
          {project ? 'Modifier le Projet' : 'Créer un Nouveau Projet'}
        </h3>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 mb-1">Titre du Projet</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Catégorie</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value as any })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              >
                <option value="fullstack">Web FullStack</option>
                <option value="mobile">Mobile (React Native)</option>
                <option value="ai">Intelligence Artificielle</option>
                <option value="cybersecurity">Cybersécurité</option>
                <option value="tools">Outils & Utilitaires</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 mb-1">Sous-titre (FR)</label>
              <input
                type="text"
                value={form.subtitleFr}
                onChange={(e) => setForm({ ...form, subtitleFr: e.target.value })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Sous-titre (EN)</label>
              <input
                type="text"
                value={form.subtitleEn}
                onChange={(e) => setForm({ ...form, subtitleEn: e.target.value })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-400 mb-1">Technologies (séparées par virgules)</label>
            <input
              type="text"
              value={techInput}
              onChange={(e) => {
                setTechInput(e.target.value);
                setForm({
                  ...form,
                  technologies: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                });
              }}
              className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 mb-1">Lien Démo / Live</label>
              <input
                type="text"
                value={form.liveUrl || ''}
                onChange={(e) => setForm({ ...form, liveUrl: e.target.value })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Lien GitHub</label>
              <input
                type="text"
                value={form.githubUrl || ''}
                onChange={(e) => setForm({ ...form, githubUrl: e.target.value })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-400 mb-1">URL Image de Couverture</label>
            <input
              type="text"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 mb-1">Description (FR)</label>
              <textarea
                rows={3}
                value={form.descriptionFr}
                onChange={(e) => setForm({ ...form, descriptionFr: e.target.value })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Description (EN)</label>
              <textarea
                rows={3}
                value={form.descriptionEn}
                onChange={(e) => setForm({ ...form, descriptionEn: e.target.value })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              id="featuredCheck"
              checked={form.featured}
              onChange={(e) => setForm({ ...form, featured: e.target.checked })}
              className="rounded"
            />
            <label htmlFor="featuredCheck" className="text-white">Mettre ce projet en avant (Featured)</label>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
            <button onClick={onClose} className="px-4 py-2 rounded bg-slate-800 text-slate-300">
              Annuler
            </button>
            <button
              onClick={() => onSave(form)}
              className="px-5 py-2 rounded bg-[#FF6B00] text-black font-display font-bold uppercase"
            >
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-components: Blog Form Modal
const BlogFormModal: React.FC<{
  post: BlogPost | null;
  onClose: () => void;
  onSave: (b: BlogPost) => void;
}> = ({ post, onClose, onSave }) => {
  const [form, setForm] = useState<BlogPost>(
    post || {
      id: `art-${Date.now()}`,
      slug: `article-${Date.now()}`,
      titleFr: '',
      titleEn: '',
      excerptFr: '',
      excerptEn: '',
      contentFr: '',
      contentEn: '',
      category: 'Architecture',
      tags: ['TypeScript', 'Architecture'],
      publishedAt: new Date().toISOString().substring(0, 10),
      readTime: '5 min',
      coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      status: 'published',
    }
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#0D121D] border border-slate-700 p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-xs">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-display font-bold text-xl uppercase text-white mb-4">
          {post ? 'Modifier l’Article' : 'Rédiger un Nouvel Article'}
        </h3>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 mb-1">Titre (FR)</label>
              <input
                type="text"
                value={form.titleFr}
                onChange={(e) => setForm({ ...form, titleFr: e.target.value })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Titre (EN)</label>
              <input
                type="text"
                value={form.titleEn}
                onChange={(e) => setForm({ ...form, titleEn: e.target.value })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-slate-400 mb-1">Catégorie</label>
              <input
                type="text"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Temps de lecture</label>
              <input
                type="text"
                value={form.readTime}
                onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Statut</label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value as any })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              >
                <option value="published">Publié</option>
                <option value="draft">Brouillon</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-400 mb-1">Contenu Complet (FR - Markdown)</label>
            <textarea
              rows={8}
              value={form.contentFr}
              onChange={(e) => setForm({ ...form, contentFr: e.target.value })}
              className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white font-mono"
            />
          </div>

          <div>
            <label className="block text-slate-400 mb-1">Contenu Complet (EN - Markdown)</label>
            <textarea
              rows={6}
              value={form.contentEn}
              onChange={(e) => setForm({ ...form, contentEn: e.target.value })}
              className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white font-mono"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
            <button onClick={onClose} className="px-4 py-2 rounded bg-slate-800 text-slate-300">
              Annuler
            </button>
            <button
              onClick={() => onSave(form)}
              className="px-5 py-2 rounded bg-[#FF6B00] text-black font-display font-bold uppercase"
            >
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-components: Timeline Form Modal
const TimelineFormModal: React.FC<{
  item: TimelineItem | null;
  onClose: () => void;
  onSave: (t: TimelineItem) => void;
}> = ({ item, onClose, onSave }) => {
  const [form, setForm] = useState<TimelineItem>(
    item || {
      id: `step-${Date.now()}`,
      period: '2026 — Présent',
      roleFr: '',
      roleEn: '',
      organization: '',
      location: 'Bukavu, RDC',
      type: 'experience',
      descriptionFr: '',
      descriptionEn: '',
      achievementsFr: ['Réalisation clé 1', 'Réalisation clé 2'],
      achievementsEn: ['Key achievement 1', 'Key achievement 2'],
    }
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0D121D] border border-slate-700 p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-xs">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-display font-bold text-xl uppercase text-white mb-4">
          {item ? 'Modifier l’Étape' : 'Ajouter une Étape au Parcours'}
        </h3>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-400 mb-1">Rôle (FR)</label>
              <input
                type="text"
                value={form.roleFr}
                onChange={(e) => setForm({ ...form, roleFr: e.target.value })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Organisation</label>
              <input
                type="text"
                value={form.organization}
                onChange={(e) => setForm({ ...form, organization: e.target.value })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-slate-400 mb-1">Période</label>
              <input
                type="text"
                value={form.period}
                onChange={(e) => setForm({ ...form, period: e.target.value })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Localisation</label>
              <input
                type="text"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Type</label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value as any })}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
              >
                <option value="experience">Expérience Pro</option>
                <option value="leadership">Leadership / GDG</option>
                <option value="education">Formation & Diplôme</option>
                <option value="community">Communauté Tech</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-400 mb-1">Description Synthétique</label>
            <textarea
              rows={3}
              value={form.descriptionFr}
              onChange={(e) => setForm({ ...form, descriptionFr: e.target.value })}
              className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 text-white"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
            <button onClick={onClose} className="px-4 py-2 rounded bg-slate-800 text-slate-300">
              Annuler
            </button>
            <button
              onClick={() => onSave(form)}
              className="px-5 py-2 rounded bg-[#FF6B00] text-black font-display font-bold uppercase"
            >
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

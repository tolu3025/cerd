import React, { useState, useEffect } from 'react';
import { PageTransition } from '../components/shared/PageTransition';
import { FadeIn } from '../components/shared/FadeIn';
import { NEWS_CONTENT } from '../data/content';
import type { NewsArticleItem } from '../data/content';
import { Lock, Plus, Trash2, Edit3, Image, Calendar, Tag, CheckCircle2, ShieldAlert } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'cerd_dynamic_blog_posts';

export const Admin: React.FC = () => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');

  // Blog Posts Management State
  const [posts, setPosts] = useState<NewsArticleItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form Fields
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Event');
  const [date, setDate] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Load posts on mount
  useEffect(() => {
    // Check session auth
    const authSession = sessionStorage.getItem('cerd_admin_auth');
    if (authSession === 'true') {
      setIsAuthenticated(true);
    }

    // Load custom posts from localStorage
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        setPosts(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved blog posts', e);
        setPosts(NEWS_CONTENT.articles);
      }
    } else {
      setPosts(NEWS_CONTENT.articles);
    }
  }, []);

  // Save posts to localStorage
  const savePosts = (updatedPosts: NewsArticleItem[]) => {
    setPosts(updatedPosts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedPosts));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'admin123' || passwordInput === 'cerd2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem('cerd_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Invalid administrator passcode. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('cerd_admin_auth');
  };

  const resetForm = () => {
    setTitle('');
    setCategory('Event');
    setDate(new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }));
    setSummary('');
    setContent('');
    setLocation('CERD OAU Ile-Ife');
    setImageUrl('');
    setEditingId(null);
  };

  const handleEdit = (post: NewsArticleItem) => {
    setEditingId(post.id);
    setTitle(post.title);
    setCategory(post.category);
    setDate(post.date);
    setSummary(post.summary);
    setContent(post.content || '');
    setLocation(post.location || '');
    setImageUrl((post as any).image || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      const updated = posts.filter(p => p.id !== id);
      savePosts(updated);
      setSuccessMsg('Post deleted successfully!');
      setTimeout(() => setSuccessMsg(''), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !summary.trim()) {
      alert('Please fill out the post title and summary.');
      return;
    }

    const postObj: NewsArticleItem & { image?: string } = {
      id: editingId || `post-${Date.now()}`,
      title,
      category,
      date: date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      summary,
      content,
      location,
      image: imageUrl.trim() || 'https://framerusercontent.com/images/ILa9NdPyVozIvcteVlNAP1sPFzI.jpeg?width=1470&height=980',
    };

    if (editingId) {
      const updated = posts.map(p => (p.id === editingId ? postObj : p));
      savePosts(updated);
      setSuccessMsg('Blog post updated successfully!');
    } else {
      const updated = [postObj, ...posts];
      savePosts(updated);
      setSuccessMsg('New blog post published successfully!');
    }

    resetForm();
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  // 1. Password Protection Modal Screen
  if (!isAuthenticated) {
    return (
      <PageTransition className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 pt-28 pb-20">
        <FadeIn className="w-full max-w-md">
          <div className="bg-[#141414] border border-white/10 rounded-2xl p-8 shadow-2xl text-center">
            <div className="w-14 h-14 bg-[#1a2bc3]/20 border border-[#1a2bc3]/40 rounded-full flex items-center justify-center mx-auto mb-6 text-[#6f8bff]">
              <Lock size={28} />
            </div>

            <h1 className="font-display font-semibold text-2xl text-white mb-2">
              CERD Admin Portal
            </h1>
            <p className="font-sans text-sm text-white/60 mb-8">
              Enter administrator password to post and manage news & research articles.
            </p>

            {authError && (
              <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-sans text-xs flex items-center gap-2 text-left">
                <ShieldAlert size={16} className="flex-shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <div>
                <label className="font-sans text-xs text-white/70 font-medium block mb-1.5 uppercase tracking-wider">
                  Passcode
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter admin passcode..."
                  className="w-full bg-[#0a0a0a] border border-white/15 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#6f8bff] transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a2bc3] hover:bg-[#2539e0] text-white font-sans text-sm font-medium py-3 rounded-lg transition-colors shadow-lg shadow-[#1a2bc3]/30"
              >
                Access Admin Portal
              </button>
            </form>

            <p className="font-sans text-xs text-white/40 mt-6">
              Default passcode: <code className="text-white/70 bg-white/10 px-1.5 py-0.5 rounded">admin123</code>
            </p>
          </div>
        </FadeIn>
      </PageTransition>
    );
  }

  // 2. Admin Dashboard Screen
  return (
    <PageTransition className="min-h-screen bg-canvas pt-32 pb-24 border-b border-black/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-10 border-b border-black/10">
          <div>
            <div className="inline-flex items-center border border-[#0a0a0a] rounded-[8px] px-3 py-1 mb-2 font-sans text-[11px] tracking-widest uppercase font-semibold">
              ADMIN DASHBOARD
            </div>
            <h1 className="font-display font-semibold text-3xl sm:text-4xl text-[#0a0a0a]">
              Blog & News Publishing Portal
            </h1>
          </div>

          <button
            onClick={handleLogout}
            className="w-fit bg-red-600/10 hover:bg-red-600/20 text-red-600 font-sans text-xs font-semibold px-4 py-2 rounded-lg border border-red-600/20 transition-colors"
          >
            Logout Administrator
          </button>
        </div>

        {/* Success Alert */}
        {successMsg && (
          <div className="mb-8 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 font-sans text-sm flex items-center gap-3">
            <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Post Creator/Editor Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 shadow-card sticky top-28">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/10">
                <h2 className="font-display font-semibold text-xl text-[#0a0a0a] flex items-center gap-2">
                  {editingId ? <Edit3 size={20} className="text-[#1a2bc3]" /> : <Plus size={20} className="text-[#1a2bc3]" />}
                  <span>{editingId ? 'Edit Article' : 'Create New Article'}</span>
                </h2>
                {editingId && (
                  <button
                    onClick={resetForm}
                    className="font-sans text-xs text-muted hover:text-dark underline"
                  >
                    Cancel Edit
                  </button>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                  <label className="font-sans text-xs font-semibold text-[#0a0a0a] block mb-1">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. CERD Host 50th Anniversary Symposium"
                    className="w-full bg-canvas border border-black/15 rounded-lg px-3.5 py-2.5 text-dark text-sm focus:outline-none focus:border-[#1a2bc3]"
                    required
                  />
                </div>

                {/* Category & Date */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-sans text-xs font-semibold text-[#0a0a0a] block mb-1 flex items-center gap-1">
                      <Tag size={12} />
                      <span>Category</span>
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-canvas border border-black/15 rounded-lg px-3 py-2.5 text-dark text-sm focus:outline-none focus:border-[#1a2bc3]"
                    >
                      <option value="Event">Event</option>
                      <option value="Symposium">Symposium</option>
                      <option value="Obituary">Obituary</option>
                      <option value="Infrastructure">Infrastructure</option>
                      <option value="Research">Research</option>
                      <option value="Seminar">Seminar</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-sans text-xs font-semibold text-[#0a0a0a] block mb-1 flex items-center gap-1">
                      <Calendar size={12} />
                      <span>Publish Date</span>
                    </label>
                    <input
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      placeholder="e.g. May 18, 2026"
                      className="w-full bg-canvas border border-black/15 rounded-lg px-3 py-2.5 text-dark text-sm focus:outline-none focus:border-[#1a2bc3]"
                    />
                  </div>
                </div>

                {/* Image URL */}
                <div>
                  <label className="font-sans text-xs font-semibold text-[#0a0a0a] block mb-1 flex items-center gap-1">
                    <Image size={12} />
                    <span>Featured Image URL</span>
                  </label>
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://framerusercontent.com/images/..."
                    className="w-full bg-canvas border border-black/15 rounded-lg px-3.5 py-2.5 text-dark text-sm focus:outline-none focus:border-[#1a2bc3]"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="font-sans text-xs font-semibold text-[#0a0a0a] block mb-1">
                    Event Venue / Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. CERD Conference Hall, OAU Ile-Ife"
                    className="w-full bg-canvas border border-black/15 rounded-lg px-3.5 py-2.5 text-dark text-sm focus:outline-none focus:border-[#1a2bc3]"
                  />
                </div>

                {/* Summary */}
                <div>
                  <label className="font-sans text-xs font-semibold text-[#0a0a0a] block mb-1">
                    Short Summary / Excerpt *
                  </label>
                  <textarea
                    rows={3}
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Brief 2-3 sentence overview for card preview..."
                    className="w-full bg-canvas border border-black/15 rounded-lg px-3.5 py-2.5 text-dark text-sm focus:outline-none focus:border-[#1a2bc3]"
                    required
                  />
                </div>

                {/* Full Body Content */}
                <div>
                  <label className="font-sans text-xs font-semibold text-[#0a0a0a] block mb-1">
                    Full Article Content
                  </label>
                  <textarea
                    rows={5}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Detailed body text for the full blog post..."
                    className="w-full bg-canvas border border-black/15 rounded-lg px-3.5 py-2.5 text-dark text-sm focus:outline-none focus:border-[#1a2bc3]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a2bc3] hover:bg-[#2539e0] text-white font-sans text-sm font-medium py-3 rounded-lg transition-colors shadow-md mt-2"
                >
                  {editingId ? 'Save Changes' : 'Publish Article'}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Existing Posts Management List (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-semibold text-xl text-[#0a0a0a]">
                Published Articles ({posts.length})
              </h2>
              <span className="font-sans text-xs text-muted">
                Changes persist in local browser storage
              </span>
            </div>

            <div className="space-y-4">
              {posts.map((post) => {
                const img = (post as any).image || 'https://framerusercontent.com/images/ILa9NdPyVozIvcteVlNAP1sPFzI.jpeg?width=1470&height=980';
                return (
                  <div
                    key={post.id}
                    className="bg-white border border-black/10 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between hover:shadow-card transition-shadow"
                  >
                    <div className="flex gap-4 items-center flex-1">
                      <img
                        src={img}
                        alt={post.title}
                        className="w-20 h-20 rounded-xl object-cover border border-black/5 flex-shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-[#1a2bc3] bg-[#1a2bc3]/10 px-2 py-0.5 rounded">
                            {post.category}
                          </span>
                          <span className="font-sans text-xs text-muted">
                            {post.date}
                          </span>
                        </div>
                        <h3 className="font-display font-semibold text-base text-dark line-clamp-1">
                          {post.title}
                        </h3>
                        <p className="font-sans text-xs text-muted line-clamp-1 mt-0.5">
                          {post.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
                      <button
                        onClick={() => handleEdit(post)}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-[#1a2bc3]/10 text-muted hover:text-[#1a2bc3] transition-colors"
                        title="Edit Article"
                      >
                        <Edit3 size={16} />
                      </button>

                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors"
                        title="Delete Article"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </PageTransition>
  );
};

export default Admin;

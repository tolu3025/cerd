import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Tag } from 'lucide-react';
import { PageTransition } from '../components/shared/PageTransition';
import { FadeIn } from '../components/shared/FadeIn';
import { supabase } from '../lib/supabase';

// Static articles full content for the 3 default articles
const STATIC_ARTICLES: Record<string, any> = {
  '50th-anniversary-nuclear-science': {
    id: '50th-anniversary-nuclear-science',
    title: 'CERD organises 50th Anniversary of Nuclear Science and Technological Education in Nigeria',
    date: 'November 10-12, 2026',
    category: 'Event',
    location: 'CERD Conference Hall, OAU Ile-Ife',
    summary:
      'CERD host a national symposium commemorating 50 years of peaceful nuclear of science and technological research achievement in Nigeria.',
    content:
      'The Centre for Energy Research and Development (CERD) at Obafemi Awolowo University, Ile-Ife, proudly commemorates its 50th Anniversary with a landmark national symposium on Nuclear Science and Technological Education in Nigeria. The three-day event (November 10–12, 2026) will bring together leading scientists, government officials, international partners, and academic institutions to reflect on five decades of peaceful nuclear research, celebrate significant milestones, and chart a bold path for the next 50 years.\n\nThe symposium will feature keynote addresses, technical sessions, exhibition of research breakthroughs, and the inauguration of newly renovated laboratory facilities. Guests from the International Atomic Energy Agency (IAEA), national nuclear regulatory authorities, and partner universities across Africa are expected to attend.\n\nThis golden jubilee marks a defining moment in the history of energy research in Nigeria. CERD remains committed to advancing nuclear technology for the benefit of all Nigerians.',
    image: '/images/news/50th-anniversary-flyer.png',
  },
  'transition-pioneer-nuclear-scientists': {
    id: 'transition-pioneer-nuclear-scientists',
    title: 'CERD Mourns the Transition of Two Pioneer Nuclear Scientists',
    date: 'May 10, 2026',
    category: 'Obituary',
    location: 'OAU Ile-Ife, Nigeria',
    summary:
      'The management and staff of CERD mourn the passing of two pioneer nuclear scientists who laid the foundation for energy research in Nigeria.',
    content:
      'It is with profound sorrow and deep respect that the management and staff of the Centre for Energy Research and Development (CERD), Obafemi Awolowo University, Ile-Ife, announce the passing of two of our founding pioneers who dedicated their lives to advancing nuclear science and energy research in Nigeria.\n\nThese distinguished scholars were instrumental in establishing the research culture, laboratory infrastructure, and international partnerships that have defined CERD for nearly half a century. Their contributions to nuclear spectroscopy, radiation physics, and manpower development in Nigeria remain an enduring legacy.\n\nA remembrance service will be held at the CERD Conference Hall. The institution extends its heartfelt condolences to the families, colleagues, and all who were touched by their exceptional service to science and humanity.',
    image: 'https://framerusercontent.com/images/XtZWdLIRgvd7bKFftKp1gEKPSqE.png?width=1536&height=1024',
  },
  'research-service-building-renovation': {
    id: 'research-service-building-renovation',
    title: 'CERD Research and Service Building Wears a New Look',
    date: 'April 18, 2026',
    category: 'Infrastructure',
    location: 'CERD Complex, OAU Ile-Ife',
    summary:
      'The Research and Service building has been completely renovated and upgraded with modern laboratories, offices, and smart seminar halls.',
    content:
      `The Centre for Energy Research and Development (CERD) is proud to unveil the complete renovation and modernisation of its Research and Service Building. Following a comprehensive infrastructural upgrade funded through federal allocations and institutional grants, the facility now boasts state-of-the-art laboratories, redesigned office spaces, smart seminar rooms, and improved power and data infrastructure.\n\nThe renovation includes the installation of advanced instrumentation bays, climate-controlled analytical chambers, improved ventilation systems in all chemical and radiation laboratories, and fully networked digital workstations for computational research.\n\nThis upgrade directly supports CERD's strategic goal of providing world-class research infrastructure to our scientists and postgraduate students. The Director of CERD stated that this investment signals a new chapter of excellence and will significantly enhance CERD's capacity to attract international research collaborations and funding.`,
    image: 'https://framerusercontent.com/images/jy9yG3PyRCsDOb2Dx45CUSZ93tg.png?width=1672&height=941',
  },
};

const getCategoryColor = (category: string) => {
  const lower = category.toLowerCase();
  if (lower === 'event' || lower === 'symposium') return 'bg-[#1a2bc3]/10 text-[#1a2bc3]';
  if (lower === 'obituary') return 'bg-gray-100 text-gray-700';
  if (lower === 'infrastructure') return 'bg-green-100 text-green-700';
  if (lower === 'seminar') return 'bg-purple-100 text-purple-700';
  if (lower === 'research') return 'bg-cyan-100 text-cyan-700';
  return 'bg-[#1a2bc3]/10 text-[#1a2bc3]';
};

export const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      // 1. Check static articles first
      if (id && STATIC_ARTICLES[id]) {
        setArticle(STATIC_ARTICLES[id]);
        setLoading(false);
        return;
      }

      // 2. Try Supabase for admin-published posts
      if (id) {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('id', id)
          .single();

        if (!error && data) {
          setArticle(data);
        } else {
          setNotFound(true);
        }
      }

      setLoading(false);
    };

    load();
  }, [id]);

  if (loading) {
    return (
      <PageTransition className="min-h-screen bg-canvas pt-32 pb-24 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-muted">
          <div className="w-8 h-8 border-2 border-[#1a2bc3] border-t-transparent rounded-full animate-spin" />
          <span className="font-sans text-sm">Loading article...</span>
        </div>
      </PageTransition>
    );
  }

  if (notFound || !article) {
    return (
      <PageTransition className="min-h-screen bg-canvas pt-32 pb-24 flex items-center justify-center">
        <FadeIn className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-6">📰</div>
          <h1 className="font-display font-semibold text-2xl text-dark mb-3">Article Not Found</h1>
          <p className="font-sans text-sm text-muted mb-8">
            This article may have been removed or the link is incorrect.
          </p>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 bg-[#1a2bc3] text-white font-sans text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#2539e0] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to News
          </Link>
        </FadeIn>
      </PageTransition>
    );
  }

  return (
    <PageTransition className="min-h-screen bg-canvas pt-32 pb-24">
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <FadeIn>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-muted hover:text-[#1a2bc3] font-sans text-sm transition-colors mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to News &amp; Events
          </Link>
        </FadeIn>

        {/* Hero Image */}
        {article.image && (
          <FadeIn>
            <div className="w-full aspect-video rounded-2xl overflow-hidden mb-10 border border-black/5 shadow-card">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        )}

        {/* Meta */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-sans font-semibold uppercase tracking-wider ${getCategoryColor(article.category)}`}>
              <Tag size={11} />
              {article.category}
            </span>

            <span className="inline-flex items-center gap-1.5 font-sans text-xs text-muted">
              <Calendar size={13} />
              {article.date}
            </span>

            {article.location && (
              <span className="inline-flex items-center gap-1.5 font-sans text-xs text-muted">
                <MapPin size={13} />
                {article.location}
              </span>
            )}
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.15}>
          <h1 className="font-display font-semibold text-3xl sm:text-4xl text-dark leading-tight mb-6">
            {article.title}
          </h1>
        </FadeIn>

        {/* Summary / Lead */}
        <FadeIn delay={0.2}>
          <p className="font-sans text-lg text-body leading-relaxed border-l-4 border-[#1a2bc3] pl-5 mb-10 text-dark/80 italic">
            {article.summary}
          </p>
        </FadeIn>

        {/* Body Content */}
        {article.content && (
          <FadeIn delay={0.25}>
            <div className="prose prose-slate max-w-none">
              {article.content.split('\n\n').map((paragraph: string, i: number) => (
                <p key={i} className="font-sans text-base text-body leading-[1.85] mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Divider */}
        <FadeIn delay={0.3}>
          <div className="border-t border-black/10 mt-14 pt-8 flex items-center justify-between flex-wrap gap-4">
            <span className="font-sans text-xs text-muted uppercase tracking-widest">
              Centre for Energy Research and Development — OAU Ile-Ife
            </span>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-[#1a2bc3] font-sans text-sm font-semibold hover:underline"
            >
              <ArrowLeft size={14} />
              All News
            </Link>
          </div>
        </FadeIn>

      </div>
    </PageTransition>
  );
};

export default NewsDetail;

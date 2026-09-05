import React from 'react';
import { NEWS_CONTENT } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { NewsCard } from '../components/ui/NewsCard';
import { PageTransition } from '../components/shared/PageTransition';
import { FadeIn } from '../components/shared/FadeIn';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';

const STATIC_ARTICLES = [
  {
    id: '50th-anniversary-nuclear-science',
    title: 'CERD organises 50th Anniversary of Nuclear Science and Technological Education in Nigeria',
    date: 'November 10-12, 2026',
    category: 'Event',
    categoryClass: 'bg-[#1a2bc3]/10 text-[#1a2bc3]',
    summary:
      'CERD host a national symposium commemorating 50 years of peaceful nuclear science and technological research achievement in Nigeria.',
    href: '/news/50th-anniversary-nuclear-science',
    image: '/images/news/50th-anniversary-flyer.png',
    imagePosition: 'object-top',
  },
  {
    id: 'transition-pioneer-nuclear-scientists',
    title: 'CERD Mourns the Transition of Two Pioneer Nuclear Scientists',
    date: 'May 10, 2026',
    category: 'Obituary',
    categoryClass: 'bg-gray-100 text-gray-600',
    summary:
      'The management and staff of CERD mourn the passing of two pioneer nuclear scientists who laid the foundation for energy research in Nigeria.',
    href: '/news/transition-pioneer-nuclear-scientists',
    image: 'https://framerusercontent.com/images/XtZWdLIRgvd7bKFftKp1gEKPSqE.png?width=1536&height=1024',
  },
  {
    id: 'research-service-building-renovation',
    title: 'CERD Research and Service Building Wears a New Look',
    date: 'April 18, 2026',
    category: 'Infrastructure',
    categoryClass: 'bg-green-100 text-green-700',
    summary:
      'The Research and Service building has been completely renovated and upgraded with modern laboratories, offices, and smart seminar halls.',
    href: '/news/research-service-building-renovation',
    image: 'https://framerusercontent.com/images/jy9yG3PyRCsDOb2Dx45CUSZ93tg.png?width=1672&height=941',
  },
];

export const News: React.FC = () => {
  const { hero } = NEWS_CONTENT;

  const [articles, setArticles] = React.useState<any[]>(STATIC_ARTICLES);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;

    const loadArticles = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .order('created_at', { ascending: false });

        if (cancelled) return;

        if (!error && data && data.length > 0) {
          // Merge: DB posts first, then static articles not already in DB
          const dbIds = new Set(data.map((p: any) => p.id));
          const uniqueStatic = STATIC_ARTICLES.filter((a) => !dbIds.has(a.id));
          setArticles([...data, ...uniqueStatic]);
        }
        // If error or empty DB, keep the default STATIC_ARTICLES already set
      } catch (_) {
        // Network error — keep static articles
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadArticles();
    return () => { cancelled = true; };
  }, []);

  return (
    <PageTransition className="w-full bg-canvas pt-32 pb-24 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn>
          <SectionHeading
            badge="NEWS & UPDATE"
            title="News & Updates"
            subtitle={hero.subheading}
            align="center"
            className="max-w-3xl mb-12 sm:mb-16"
          />
        </FadeIn>

        {/* News Cards Grid — plain grid, no scroll-trigger animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <NewsCard
                title={article.title}
                date={article.date}
                category={article.category}
                categoryClassName={article.categoryClass || 'bg-[#1a2bc3]/10 text-[#1a2bc3]'}
                summary={article.summary}
                href={article.href || `/news/${article.id}`}
                image={article.image}
                imagePosition={article.imagePosition}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </PageTransition>
  );
};

export default News;

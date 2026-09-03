import React from 'react';
import { NEWS_CONTENT } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { NewsCard } from '../components/ui/NewsCard';
import { PageTransition } from '../components/shared/PageTransition';
import { StaggerContainer, StaggerItem } from '../components/shared/StaggerContainer';
import { FadeIn } from '../components/shared/FadeIn';

export const News: React.FC = () => {
  const { hero } = NEWS_CONTENT;

  const [articles, setArticles] = React.useState<any[]>([]);

  React.useEffect(() => {
    const saved = localStorage.getItem('cerd_dynamic_blog_posts');
    if (saved) {
      try {
        setArticles(JSON.parse(saved));
        return;
      } catch (e) {
        console.error('Failed to parse saved blog posts', e);
      }
    }
    
    setArticles([
      {
        id: '50th-anniversary-nuclear-science',
        title: 'CERD organises 50th Anniversary of Nuclear Science and Technological Education in Nigeria',
        date: 'November 10-12, 2026',
        category: 'Event',
        categoryClass: 'bg-[#1a2bc3]/10 text-[#1a2bc3]',
        summary:
          'CERD host a national symposium commemorating 50 years of peaceful nuclear of science and technological research achievement in Nigeria.',
        href: '/news#50th-anniversary',
        image: '/images/news/50th-anniversary-flyer.png',
        imagePosition: 'object-top',
      },
      {
        id: 'transition-pioneer-nuclear-scientists',
        title: 'CERD Mourns the transition of Two Forecast Nuclear  Scientist',
        date: 'May 10, 2026',
        category: 'Obituary',
        categoryClass: 'bg-gray-100 text-gray-600',
        summary:
          'The management and staff of CERD mourn the passing of two pioneer nuclear scientists who laid the foundation for energy research in Nigeria',
        href: '/news#transition-scientists',
        image: 'https://framerusercontent.com/images/XtZWdLIRgvd7bKFftKp1gEKPSqE.png?width=1536&height=1024',
      },
      {
        id: 'research-service-building-renovation',
        title: 'CERD Research and Service Wear New Look',
        date: 'April 18, 2026',
        category: 'Infrastructure',
        categoryClass: 'bg-green-100 text-green-700',
        summary:
          'The Research and Service building has been completely renovated and upgraded with modern laboratories, offices, and smart seminar halls.',
        href: '/news#building-renovation',
        image: 'https://framerusercontent.com/images/jy9yG3PyRCsDOb2Dx45CUSZ93tg.png?width=1672&height=941',
      },
    ]);
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

        {/* NewsCards in 3-Column Responsive Grid */}
        <StaggerContainer
          stagger={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {articles.map((article) => (
            <StaggerItem key={article.id}>
              <NewsCard
                title={article.title}
                date={article.date}
                category={article.category}
                categoryClassName={article.categoryClass || 'bg-[#1a2bc3]/10 text-[#1a2bc3]'}
                summary={article.summary}
                href={article.href || `/news#${article.id}`}
                image={article.image}
                imagePosition={article.imagePosition}
                className="h-full"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </PageTransition>
  );
};

export default News;

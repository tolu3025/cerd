import React from 'react';
import { NEWS_CONTENT } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { NewsCard } from '../components/ui/NewsCard';
import { PageTransition } from '../components/shared/PageTransition';
import { StaggerContainer, StaggerItem } from '../components/shared/StaggerContainer';
import { FadeIn } from '../components/shared/FadeIn';

export const News: React.FC = () => {
  const { hero } = NEWS_CONTENT;

  const allArticles = [
    {
      id: '50th-anniversary-nuclear-science',
      title: 'CERD Organizes 50th Anniversary of Nuclear Science in Nigeria',
      date: 'May 18, 2026',
      category: 'Event',
      categoryClass: 'bg-cerd-blue/10 text-cerd-blue',
      summary:
        'CERD hosts a national symposium commemorating 50 years of peaceful nuclear science and technological research achievements in Nigeria, gathering IAEA delegates and national energy policy makers.',
      href: '/news#50th-anniversary',
    },
    {
      id: 'transition-pioneer-nuclear-scientists',
      title: 'CERD Mourns the Transition of Two Nuclear Scientists',
      date: 'May 10, 2026',
      category: 'Obituary',
      categoryClass: 'bg-gray-100 text-gray-600',
      summary:
        'The management and staff of CERD mourn the passing of two pioneer nuclear scientists who laid the foundation for atomic spectroscopy and particle accelerator operations in Nigeria.',
      href: '/news#transition-scientists',
    },
    {
      id: 'research-service-building-renovation',
      title: 'CERD Research and Service Building Renovated',
      date: 'April 18, 2026',
      category: 'Infrastructure',
      categoryClass: 'bg-green-100 text-green-700',
      summary:
        'The Research and Service complex has been completely upgraded with climate-controlled spectrometry suites, enhanced electromagnetic shielding, and smart collaborative seminar halls.',
      href: '/news#building-renovation',
    },
    {
      id: 'seminar-series-resumption',
      title: 'Bi-Weekly Atomic & Energy Seminar Series Resumes',
      date: 'April 15, 2026',
      category: 'Seminar',
      categoryClass: 'bg-purple-100 text-purple-700',
      summary:
        'The Directorate announces the resumption of the departmental technical seminar series featuring guest lectures from IAEA visiting fellows and Nigerian university faculties.',
      href: '/news#seminar-series',
    },
    {
      id: 'perovskite-solar-cell-breakthrough',
      title: 'Radiation-Tolerant Perovskite Solar Cell Breakthrough',
      date: 'Dec 28, 2025',
      category: 'Research',
      categoryClass: 'bg-cyan-100 text-cyan-700',
      summary:
        'Materials Division researchers synthesize novel passivating thin films achieving 21.4% conversion efficiency with negligible degradation under intense ultraviolet and gamma exposure.',
      href: '/news#perovskite-breakthrough',
    },
  ];

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

        {/* 5 NewsCards in 3-Column Responsive Grid */}
        <StaggerContainer
          stagger={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {allArticles.map((article) => (
            <StaggerItem key={article.id}>
              <NewsCard
                title={article.title}
                date={article.date}
                category={article.category}
                categoryClassName={article.categoryClass}
                summary={article.summary}
                href={article.href}
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

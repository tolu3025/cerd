import React from 'react';
import { HOME_CONTENT } from '../../../data/content';
import { SectionHeading } from '../../ui/SectionHeading';
import { NewsCard } from '../../ui/NewsCard';
import { StaggerContainer, StaggerItem } from '../../shared/StaggerContainer';
import { FadeIn } from '../../shared/FadeIn';

export const NewsSection: React.FC = () => {
  const { news } = HOME_CONTENT;

  return (
    <section id="news" className="bg-canvas py-20 sm:py-24 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge="HAPPENING NOW"
            title="Featured News & Events"
            subtitle="Symposia, academic transitions, and infrastructure upgrades shaping the future of atomic and clean energy research."
          />
        </FadeIn>

        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {news.map((item, idx) => (
            <StaggerItem key={idx}>
              <NewsCard
                title={item.title}
                date={item.date}
                category={item.badge}
                summary={item.summary}
                href={item.href}
                className="h-full"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

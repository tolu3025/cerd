import React, { useState, useMemo } from 'react';
import { Search, BookOpen, ExternalLink, FileText } from 'lucide-react';
import { PUBLICATIONS_CONTENT, type PublicationItem } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { PageTransition } from '../components/shared/PageTransition';
import { StaggerContainer, StaggerItem } from '../components/shared/StaggerContainer';
import { FadeIn } from '../components/shared/FadeIn';

export const Publications: React.FC = () => {
  const { hero, publications } = PUBLICATIONS_CONTENT;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(publications.map((p) => p.category)));
    return ['All', ...cats];
  }, [publications]);

  const filteredPublications = useMemo(() => {
    return publications.filter((pub: PublicationItem) => {
      const matchesCategory =
        selectedCategory === 'All' || pub.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesQuery =
        pub.title.toLowerCase().includes(query) ||
        pub.authors.toLowerCase().includes(query) ||
        pub.journal.toLowerCase().includes(query) ||
        pub.abstract.toLowerCase().includes(query) ||
        pub.year.includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [publications, searchQuery, selectedCategory]);

  return (
    <PageTransition className="w-full bg-canvas pt-32 pb-24 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <FadeIn>
          <SectionHeading
            badge="KNOWLEDGE HUB"
            title="Scientific Publication"
            subtitle={hero.subheading}
            align="center"
            className="max-w-3xl mb-10 sm:mb-12"
          />
        </FadeIn>

        {/* Large Search & Filter Bar */}
        <FadeIn delay={0.15} className="max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="relative flex items-center mb-5">
            <Search
              size={20}
              className="absolute left-5 text-muted pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Title, Author and keyword"
              className="w-full bg-white rounded-xl border border-black/10 pl-13 pr-5 py-4 font-sans text-sm sm:text-base text-dark placeholder:text-muted/70 shadow-sm focus:outline-none focus:ring-2 focus:ring-cerd-blue focus:border-cerd-blue transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 font-ui text-xs text-muted hover:text-dark px-2 py-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-ui text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                    active
                      ? 'bg-cerd-blue text-white shadow-button'
                      : 'bg-white text-muted border border-black/5 hover:text-dark hover:border-black/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Publications List */}
        <div className="max-w-4xl mx-auto">
          {filteredPublications.length === 0 ? (
            <FadeIn>
              <div className="text-center py-16 bg-white rounded-2xl border border-black/5 p-8 shadow-card">
                <BookOpen size={40} className="mx-auto text-muted/50 mb-4" />
                <h3 className="font-sans font-semibold text-lg text-dark mb-2">
                  No Matching Publications Found
                </h3>
                <p className="font-sans text-sm text-muted max-w-md mx-auto mb-6">
                  We couldn't find any articles matching "{searchQuery}". Try searching by another keyword, author surname, or resetting your filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="font-ui text-xs uppercase tracking-wider font-semibold text-cerd-blue hover:underline"
                >
                  Reset All Filters
                </button>
              </div>
            </FadeIn>
          ) : (
            <StaggerContainer stagger={0.08} className="space-y-6">
              {filteredPublications.map((pub: PublicationItem, idx: number) => (
                <StaggerItem key={idx}>
                  <GlassCard hover className="p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      {/* Top Row: Year badge + Category Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="font-ui text-xs font-semibold text-muted px-3 py-1 rounded-full bg-canvas border border-black/5">
                            {pub.year}
                          </span>
                          <Badge variant="blue">{pub.category}</Badge>
                        </div>

                        {pub.doi && (
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-ui text-xs text-muted hover:text-cerd-blue flex items-center gap-1 transition-colors"
                            title={`DOI: ${pub.doi}`}
                          >
                            <span>DOI: {pub.doi}</span>
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-sans font-semibold text-lg sm:text-xl text-dark leading-snug mb-2">
                        {pub.title}
                      </h3>

                      {/* Journal */}
                      <div className="flex items-center gap-2 font-ui text-xs uppercase text-muted tracking-wider mb-2 font-medium">
                        <FileText size={13} className="text-cerd-blue" />
                        <span>{pub.journal}</span>
                      </div>

                      {/* Authors */}
                      <p className="font-sans text-sm text-body font-medium mb-4">
                        {pub.authors}
                      </p>

                      {/* Abstract */}
                      <div className="border-t border-black/5 pt-3">
                        <span className="font-ui text-[11px] font-semibold uppercase tracking-wider text-muted block mb-1">
                          Abstract:
                        </span>
                        <p className="font-sans text-sm text-body leading-relaxed line-clamp-3">
                          {pub.abstract}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>

      </div>
    </PageTransition>
  );
};

export default Publications;

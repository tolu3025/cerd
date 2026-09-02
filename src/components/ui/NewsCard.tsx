import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface NewsCardProps {
  title: string;
  date: string;
  category: string;
  summary: string;
  image?: string;
  href?: string;
  className?: string;
  categoryClassName?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  category,
  summary,
  image,
  href = '#',
  className,
  categoryClassName,
}) => {
  const getCategoryBadgeClass = (cat: string) => {
    if (categoryClassName) return categoryClassName;
    const lower = cat.toLowerCase();
    if (lower.includes('event') || lower.includes('symposium')) {
      return 'bg-cerd-blue/10 text-cerd-blue';
    }
    if (lower.includes('obituary') || lower.includes('memoriam')) {
      return 'bg-gray-100 text-gray-600';
    }
    if (lower.includes('infrastructure') || lower.includes('upgrade')) {
      return 'bg-green-100 text-green-700';
    }
    if (lower.includes('seminar') || lower.includes('colloquium')) {
      return 'bg-purple-100 text-purple-700';
    }
    if (lower.includes('research') || lower.includes('breakthrough')) {
      return 'bg-cyan-100 text-cyan-700';
    }
    return 'bg-cerd-blue/10 text-cerd-blue';
  };

  return (
    <article
      className={cn(
        'bg-surface border border-black/5 rounded-2xl shadow-card p-6 sm:p-7 flex flex-col justify-between',
        'hover:-translate-y-1 hover:shadow-lg transition-all duration-300',
        className
      )}
    >
      <div>
        {/* Media Placeholder or Image */}
        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden mb-5 relative flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cerd-blue/5 to-cerd-cyan/10">
              <span className="font-ui text-xs text-muted tracking-wider uppercase">
                CERD Dispatch
              </span>
            </div>
          )}
        </div>

        {/* Metadata Header */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <span
            className={cn(
              'rounded-full px-3 py-1 text-[11px] font-ui font-semibold uppercase tracking-wider inline-flex items-center gap-1.5',
              getCategoryBadgeClass(category)
            )}
          >
            {category}
          </span>
          <div className="flex items-center gap-1.5 font-ui text-xs sm:text-sm text-muted">
            <Calendar size={13} />
            <span>{date}</span>
          </div>
        </div>

        {/* Article Title */}
        <h3 className="font-sans font-semibold text-lg text-dark leading-snug mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Article Summary */}
        <p className="font-sans text-sm text-body leading-relaxed mb-6 line-clamp-3">
          {summary}
        </p>
      </div>

      {/* Action Link */}
      <div className="pt-4 border-t border-black/5">
        <Link
          to={href}
          className="inline-flex items-center gap-1.5 text-cerd-blue font-ui text-sm font-semibold uppercase tracking-wider hover:text-cerd-blue-dark group transition-colors"
        >
          <span>READ MORE</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};

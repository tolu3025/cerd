import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home as HomeIcon } from 'lucide-react';
import { PageTransition } from '../components/shared/PageTransition';
import { FadeIn } from '../components/shared/FadeIn';
import { GradientButton } from '../components/ui/GradientButton';

export const NotFound: React.FC = () => {
  return (
    <PageTransition className="w-full min-h-[70vh] flex items-center justify-center bg-canvas pt-32 pb-24">
      <div className="max-w-md mx-auto px-4 text-center">
        <FadeIn>
          <div className="font-display text-7xl sm:text-8xl font-bold text-cerd-blue leading-none mb-4">
            404
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-dark font-medium mb-3">
            Page Not Found
          </h1>
          <p className="font-sans text-sm sm:text-base text-body leading-relaxed mb-8">
            The page you are looking for does not exist, has been removed, or is temporarily unavailable.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <GradientButton href="/">
              <HomeIcon size={16} />
              <span>Return Home</span>
            </GradientButton>
            <Link
              to="/about-us"
              className="inline-flex items-center gap-1.5 font-ui text-xs font-semibold uppercase tracking-wider text-muted hover:text-dark px-4 py-3"
            >
              <ArrowLeft size={14} />
              <span>About CERD</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
};

export default NotFound;

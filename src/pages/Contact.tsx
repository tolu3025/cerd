import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { GradientButton } from '../components/ui/GradientButton';
import { PageTransition } from '../components/shared/PageTransition';
import { FadeIn } from '../components/shared/FadeIn';

interface FormData {
  name: string;
  email: string;
  category: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  category?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    category: 'General Inquiry',
    message: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (field: keyof FormData, value: string): string | undefined => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Please enter your full name';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Please enter your email address';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Please enter your inquiry details';
        if (value.trim().length < 10) return 'Inquiry must be at least 10 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const messageError = validateField('message', formData.message);

    const newErrors = {
      name: nameError,
      email: emailError,
      message: messageError,
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, category: true, message: true });

    if (!nameError && !emailError && !messageError) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      category: 'General Inquiry',
      message: '',
    });
    setTouched({});
    setErrors({});
  };

  return (
    <PageTransition className="w-full bg-canvas pt-32 pb-24 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <FadeIn>
          <SectionHeading
            badge="COMMUNICATION CHANNEL"
            title="Connect with CERD"
            subtitle="How can we assist your research today? Connect with our research coordinators, schedule laboratory testing services, or inquire about masterclasses."
            align="center"
            className="max-w-3xl mb-12 sm:mb-16"
          />
        </FadeIn>

        {/* 2-Column Content Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-5">
            <FadeIn delay={0.1}>
              {/* Address Block */}
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cerd-blue/10 flex items-center justify-center text-cerd-blue flex-shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-ui text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                      Physical Location
                    </h4>
                    <p className="font-sans text-dark font-medium text-sm sm:text-base leading-snug">
                      CERD, Main Campus, Obafemi Awolowo University
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-body mt-0.5">
                      Road 1, Academic Sector, Ile-Ife, Osun State, Nigeria
                    </p>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.2}>
              {/* Phone Lines Block */}
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cerd-blue/10 flex items-center justify-center text-cerd-blue flex-shrink-0">
                    <Phone size={22} />
                  </div>
                  <div className="w-full">
                    <h4 className="font-ui text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                      Direct Telephone Lines
                    </h4>
                    <div className="space-y-1.5 font-sans text-sm text-dark">
                      <div className="flex items-center justify-between">
                        <span className="text-muted text-xs">Research & Labs:</span>
                        <a href="tel:+2348025550199" className="font-medium hover:text-cerd-blue transition-colors">
                          +234 802 555 0199
                        </a>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted text-xs">Directorate / Admin:</span>
                        <a href="tel:+2348031234567" className="font-medium hover:text-cerd-blue transition-colors">
                          +234 803 123 4567
                        </a>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted text-xs">Facility Tours & Testing:</span>
                        <a href="tel:+2348059876543" className="font-medium hover:text-cerd-blue transition-colors">
                          +234 805 987 6543
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.3}>
              {/* Operating Hours Block */}
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cerd-blue/10 flex items-center justify-center text-cerd-blue flex-shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="font-ui text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                      Operating Hours
                    </h4>
                    <p className="font-sans text-dark font-medium text-sm sm:text-base">
                      Monday – Friday: 8:00 AM – 4:00 PM (WAT)
                    </p>
                    <p className="font-sans text-xs text-muted mt-1">
                      Weekends: Closed (Authorized Lab Research Personnel Only)
                    </p>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.4}>
              {/* Official Email Block */}
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cerd-blue/10 flex items-center justify-center text-cerd-blue flex-shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-ui text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                      Official Email Dispatches
                    </h4>
                    <a
                      href="mailto:Info@cerd.oau.edu.ng"
                      className="font-sans text-dark font-semibold text-sm sm:text-base hover:text-cerd-blue transition-colors block"
                    >
                      Info@cerd.oau.edu.ng
                    </a>
                    <a
                      href="mailto:directorate@cerd.oau.edu.ng"
                      className="font-sans text-xs text-muted hover:text-cerd-blue transition-colors mt-0.5 block"
                    >
                      directorate@cerd.oau.edu.ng
                    </a>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} direction="left">
              <GlassCard className="p-8 sm:p-10 shadow-card">
                {submitted ? (
                  <div className="text-center py-10 sm:py-14">
                    <div className="w-16 h-16 rounded-full bg-cerd-blue/10 text-cerd-blue flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={36} />
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-dark font-medium mb-3">
                      Inquiry Dispatched Successfully
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-body max-w-md mx-auto leading-relaxed mb-8">
                      Thank you, <strong>{formData.name}</strong>. Your message regarding <strong>{formData.category}</strong> has been routed to our technical coordinators. We will reply to <strong>{formData.email}</strong> within 24 hours.
                    </p>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="font-ui text-xs uppercase tracking-wider font-semibold text-cerd-blue hover:underline cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 size={18} className="text-cerd-blue" />
                      <span className="font-ui text-xs font-semibold uppercase tracking-widest text-cerd-blue">
                        DIRECT COMMUNICATION
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-dark font-medium mb-2">
                      Send an Inquiry
                    </h3>

                    <p className="font-sans text-sm text-muted leading-relaxed mb-8">
                      Use the form below to connect with our research coordinators or schedule analytical services. We typically respond within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-ui text-xs font-semibold uppercase tracking-wider text-dark mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          onBlur={() => handleBlur('name')}
                          placeholder="Your full name"
                          className={`w-full bg-white rounded-xl border px-4 py-3 font-sans text-sm text-dark placeholder:text-muted/60 transition-all outline-none ${
                            touched.name && errors.name
                              ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                              : 'border-black/10 focus:ring-2 focus:ring-cerd-blue focus:border-transparent'
                          }`}
                        />
                        {touched.name && errors.name && (
                          <p className="flex items-center gap-1 font-ui text-xs text-red-500 mt-1">
                            <AlertCircle size={12} />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-ui text-xs font-semibold uppercase tracking-wider text-dark mb-1.5"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          onBlur={() => handleBlur('email')}
                          placeholder="your@email.com"
                          className={`w-full bg-white rounded-xl border px-4 py-3 font-sans text-sm text-dark placeholder:text-muted/60 transition-all outline-none ${
                            touched.email && errors.email
                              ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                              : 'border-black/10 focus:ring-2 focus:ring-cerd-blue focus:border-transparent'
                          }`}
                        />
                        {touched.email && errors.email && (
                          <p className="flex items-center gap-1 font-ui text-xs text-red-500 mt-1">
                            <AlertCircle size={12} />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      {/* Category Dropdown Field */}
                      <div>
                        <label
                          htmlFor="category"
                          className="block font-ui text-xs font-semibold uppercase tracking-wider text-dark mb-1.5"
                        >
                          Inquiry Category
                        </label>
                        <select
                          id="category"
                          value={formData.category}
                          onChange={(e) => handleChange('category', e.target.value)}
                          className="w-full bg-white rounded-xl border border-black/10 px-4 py-3 font-sans text-sm text-dark transition-all outline-none focus:ring-2 focus:ring-cerd-blue focus:border-transparent cursor-pointer"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Research Partnership">Research Partnership</option>
                          <option value="Facility Tour & Beam Time">Facility Tour & Beam Time</option>
                          <option value="Media & Press">Media & Press</option>
                          <option value="Academic Masterclass & Fellowships">Academic Masterclass & Fellowships</option>
                        </select>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block font-ui text-xs font-semibold uppercase tracking-wider text-dark mb-1.5"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          onBlur={() => handleBlur('message')}
                          placeholder="How can we help?"
                          className={`w-full bg-white rounded-xl border px-4 py-3 font-sans text-sm text-dark placeholder:text-muted/60 transition-all outline-none resize-none ${
                            touched.message && errors.message
                              ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                              : 'border-black/10 focus:ring-2 focus:ring-cerd-blue focus:border-transparent'
                          }`}
                        />
                        {touched.message && errors.message && (
                          <p className="flex items-center gap-1 font-ui text-xs text-red-500 mt-1">
                            <AlertCircle size={12} />
                            <span>{errors.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Full-width Submit Button */}
                      <div className="pt-2">
                        <GradientButton
                          type="submit"
                          className="w-full py-3.5 shadow-button"
                        >
                          <span>Submit Inquiry</span>
                          <Send size={15} />
                        </GradientButton>
                      </div>
                    </form>
                  </div>
                )}
              </GlassCard>
            </FadeIn>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;

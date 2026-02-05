import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-[hsl(var(--charcoal))]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left Column - CTA */}
          <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
          >
            <span className="text-[hsl(var(--terracotta))] text-sm tracking-[0.25em] uppercase font-body mb-6 block">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
              Let's create something
              <span className="italic text-[hsl(var(--sand))]"> extraordinary</span>
              together
            </h2>
            <p className="text-white/60 text-lg font-body font-light leading-relaxed mb-10 max-w-lg">
              Whether you're planning a new project or looking to transform an existing space,
              we'd love to hear from you. Let's discuss how we can bring your vision to life.
            </p>

            <div className="flex flex-col gap-8">
              {/* Shama */}
              <div>
                <h3 className="text-white text-lg font-display mb-4">Shama G Palimar</h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/shamaaa_g?igsh=cGs3eWN0Y2I1dzhw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-white/20 hover:border-[hsl(var(--terracotta))] hover:bg-[hsl(var(--terracotta))] flex items-center justify-center transition-all duration-300 group"
                    aria-label="Shama's Instagram"
                  >
                    <Instagram className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="http://linkedin.com/in/shama-g-palimar221999/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-white/20 hover:border-[hsl(var(--terracotta))] hover:bg-[hsl(var(--terracotta))] flex items-center justify-center transition-all duration-300 group"
                    aria-label="Shama's LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

              {/* Veronie */}
              <div>
                <h3 className="text-white text-lg font-display mb-4">Veronie Mrithula</h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/veronie._/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-white/20 hover:border-[hsl(var(--terracotta))] hover:bg-[hsl(var(--terracotta))] flex items-center justify-center transition-all duration-300 group"
                    aria-label="Veronie's Instagram"
                  >
                    <Instagram className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/veronie-mrithula-1a779a260/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-white/20 hover:border-[hsl(var(--terracotta))] hover:bg-[hsl(var(--terracotta))] flex items-center justify-center transition-all duration-300 group"
                    aria-label="Veronie's LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
          >
            <div className="space-y-8">
              {/* Phone */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-[hsl(var(--terracotta))]/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[hsl(var(--terracotta))]" />
                  </div>
                  <span className="text-white/40 text-xs tracking-wider uppercase font-body">Phone</span>
                </div>
                <div className="pl-16 space-y-4">
                  <div>
                    <span className="text-white/40 text-xs tracking-wider uppercase font-body block mb-1">Shama</span>
                    <a
                      href="tel:+919611211509"
                      className="block text-white hover:text-[hsl(var(--terracotta))] transition-colors font-body text-lg"
                    >
                      +91 96112 11509
                    </a>
                  </div>
                  <div>
                    <span className="text-white/40 text-xs tracking-wider uppercase font-body block mb-1">Veronie</span>
                    <a
                      href="tel:+918056276496"
                      className="block text-white hover:text-[hsl(var(--terracotta))] transition-colors font-body text-lg"
                    >
                      +91 80562 76496
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-[hsl(var(--terracotta))]/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[hsl(var(--terracotta))]" />
                  </div>
                  <span className="text-white/40 text-xs tracking-wider uppercase font-body">Email</span>
                </div>
                <div className="pl-16">
                  <a
                    href="mailto:shamaandveronie@gmail.com"
                    className="text-white hover:text-[hsl(var(--terracotta))] transition-colors font-body text-lg inline-flex items-center gap-2 group/link"
                  >
                    shamaandveronie@gmail.com
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-[hsl(var(--terracotta))]/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[hsl(var(--terracotta))]" />
                  </div>
                  <span className="text-white/40 text-xs tracking-wider uppercase font-body">Locations</span>
                </div>
                <div className="pl-16">
                  <p className="text-white/80 font-body">
                    Bangalore • Chennai • Hyderabad • Mangalore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Logo */}
            <div
              className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <span className="font-display text-2xl text-white">Shama & Veronie</span>
              <span className="block text-white/40 text-xs tracking-wider uppercase font-body mt-1">
                Architecture & Interior Design
              </span>
            </div>

            {/* Copyright */}
            <div
              className={`text-white/40 text-sm font-body transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              &copy; {new Date().getFullYear()} Shama & Veronie. All rights reserved.
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="font-display text-5xl md:text-7xl text-white/10 italic">
            Thank You
          </p>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, MapPin } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-facade.jpg"
          alt="Architectural facade"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Subtitle */}
        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="inline-block text-white/80 text-sm md:text-base tracking-[0.3em] uppercase font-body mb-6">
            Architecture & Interior Design
          </span>
        </div>

        {/* Main Title */}
        <h1
          className={`font-display text-5xl md:text-7xl lg:text-8xl text-white mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="block">Shama</span>
          <span className="block text-3xl md:text-4xl lg:text-5xl italic text-white/70 my-2">&</span>
          <span className="block">Veronie</span>
        </h1>

        {/* Tagline */}
        <p
          className={`text-white/90 text-lg md:text-xl font-body font-light max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          Creating spaces that inspire, transform, and elevate the human experience
        </p>

        {/* Location Badge */}
        <div
          className={`flex items-center justify-center gap-2 text-white/70 mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <MapPin className="w-4 h-4" />
          <span className="text-sm tracking-wide font-body">Bangalore • Chennai • Hyderabad • Mangalore</span>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className={`group flex flex-col items-center gap-3 text-white/60 hover:text-white transition-all duration-500 delay-1100 mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          aria-label="Scroll to about section"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-body">Explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce group-hover:animate-none" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(var(--warm-cream))] to-transparent z-10" />
    </section>
  );
}

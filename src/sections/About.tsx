import { useEffect, useRef, useState } from 'react';
import { Compass, Home, Palette, Building2 } from 'lucide-react';

const expertise = [
  {
    icon: Building2,
    title: 'Architecture',
    description: 'Thoughtful structural design that harmonizes with context and purpose',
  },
  {
    icon: Home,
    title: 'Interior Design',
    description: 'Curated spaces that reflect personality and enhance daily living',
  },
  {
    icon: Compass,
    title: 'Urban Design',
    description: 'Holistic approaches to creating cohesive urban environments',
  },
  {
    icon: Palette,
    title: 'Art & Curation',
    description: 'Artistic elements that add soul and character to every project',
  },
];

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-[hsl(var(--warm-cream))]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <span className="text-[hsl(var(--terracotta))] text-sm tracking-[0.25em] uppercase font-body mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[hsl(var(--charcoal))] leading-tight">
              An architectural duo crafting
              <span className="italic text-[hsl(var(--copper))]"> meaningful spaces</span>
            </h2>
          </div>

          <div
            className={`flex flex-col justify-center transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <p className="text-[hsl(var(--charcoal))]/80 text-lg leading-relaxed mb-6 font-body font-light">
              We are an architectural duo with combined expertise in architecture, interior design, 
              urban design, and art. Our collaborative approach brings together diverse perspectives 
              to create spaces that are both functional and inspiring.
            </p>
            <p className="text-[hsl(var(--charcoal))]/70 text-base leading-relaxed font-body font-light">
              Having handled projects as lead architects across Bangalore, Chennai, Hyderabad, and 
              Mangalore, we bring a wealth of experience and regional understanding to every project 
              we undertake.
            </p>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((item, index) => (
            <div
              key={item.title}
              className={`group p-8 bg-white/60 backdrop-blur-sm border border-[hsl(var(--sand))] hover:border-[hsl(var(--copper))] transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <item.icon className="w-8 h-8 text-[hsl(var(--terracotta))] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl text-[hsl(var(--charcoal))] mb-3">
                {item.title}
              </h3>
              <p className="text-[hsl(var(--charcoal))]/60 text-sm leading-relaxed font-body">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

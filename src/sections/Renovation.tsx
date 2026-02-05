import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { renovationProjects } from '../data/renovations';

export default function Renovation() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
      id="renovation"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <span className="text-[hsl(var(--terracotta))] text-sm tracking-[0.25em] uppercase font-body mb-4 block">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[hsl(var(--charcoal))] mb-6">
              Renovation
            </h2>
          </div>
          <p
            className={`text-[hsl(var(--charcoal))]/60 text-base max-w-2xl mx-auto font-body font-light transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Breathing new life into existing spaces through thoughtful redesign,
            modern amenities, and respect for the original character.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-20">
          {renovationProjects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center cursor-pointer transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              {/* Image */}
              <div className={`relative overflow-hidden group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2">
                  <Sparkles className="w-4 h-4 text-[hsl(var(--terracotta))]" />
                  <span className="text-[hsl(var(--charcoal))] text-xs tracking-wider uppercase font-body">
                    {project.category}
                  </span>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[hsl(var(--copper))]/30" />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-[hsl(var(--copper))] text-sm tracking-wider uppercase font-body mb-3 block">
                  {project.location}
                </span>
                <h3 className="font-display text-3xl md:text-4xl text-[hsl(var(--charcoal))] group-hover:text-[hsl(var(--terracotta))] transition-colors mb-6">
                  {project.title}
                </h3>
                <p className="text-[hsl(var(--charcoal))]/70 text-base leading-relaxed font-body font-light mb-8 line-clamp-3">
                  {project.description}
                </p>

                <button className="inline-flex items-center gap-3 text-[hsl(var(--terracotta))] hover:text-[hsl(var(--copper))] transition-colors group/btn font-body text-sm tracking-wider uppercase">
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

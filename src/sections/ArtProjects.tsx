import { useEffect, useRef, useState } from 'react';
import { Paintbrush, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { artProjects } from '../data/art';

export default function ArtProjects() {
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
      id="art"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-[hsl(var(--warm-cream))]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
          <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <span className="text-[hsl(var(--terracotta))] text-sm tracking-[0.25em] uppercase font-body mb-4 block">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[hsl(var(--charcoal))] mb-4">
              Art & Commercial
            </h2>
            <p className="text-[hsl(var(--charcoal))]/60 text-base max-w-xl font-body font-light">
              Where creativity meets commerce. Our art and commercial projects
              infuse spaces with personality and visual storytelling.
            </p>
          </div>

          <div
            className={`flex items-center gap-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="w-16 h-16 bg-[hsl(var(--terracotta))]/10 rounded-full flex items-center justify-center">
              <Paintbrush className="w-7 h-7 text-[hsl(var(--terracotta))]" />
            </div>
            <div>
              <span className="block font-display text-2xl text-[hsl(var(--charcoal))]">{artProjects.length}+</span>
              <span className="text-[hsl(var(--charcoal))]/60 text-sm font-body">Art Projects</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              {/* Image Container */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-white/70 text-xs tracking-wider uppercase font-body">
                    {project.category}
                  </span>
                </div>

                <span className="text-[hsl(var(--copper))] text-sm tracking-wider uppercase font-body mb-2 block">
                  {project.location}
                </span>
                <h3 className="font-display text-2xl text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed font-body font-light line-clamp-2 mb-4">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-[hsl(var(--terracotta))] text-sm font-body uppercase tracking-wider">
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <blockquote className="font-display text-2xl md:text-3xl text-[hsl(var(--charcoal))]/80 italic max-w-3xl mx-auto mb-6">
            "Art is not what you see, but what you make others see."
          </blockquote>
          <cite className="text-[hsl(var(--charcoal))]/50 text-sm font-body not-italic">
            — Edgar Degas
          </cite>
        </div>
      </div>
    </section>
  );
}

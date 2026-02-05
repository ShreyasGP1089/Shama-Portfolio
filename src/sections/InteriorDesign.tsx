import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { interiorProjects } from '../data/interiors';


export default function InteriorDesign() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
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
      id="interiors"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <span className="text-[hsl(var(--terracotta))] text-sm tracking-[0.25em] uppercase font-body mb-4 block">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[hsl(var(--charcoal))]">
              Interior Design
            </h2>
          </div>
          <p
            className={`text-[hsl(var(--charcoal))]/60 text-base max-w-md mt-6 md:mt-0 font-body font-light transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Creating intimate, functional spaces that reflect the unique personality
            and lifestyle of each client.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interiorProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setSelectedProject(project.id)}
              onMouseLeave={() => setSelectedProject(null)}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="relative overflow-hidden h-[400px]">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${selectedProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                />

                {/* Content */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${selectedProject === project.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                    }`}
                >
                  <span className="text-white/70 text-xs tracking-wider uppercase font-body mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm font-body mb-3">
                    {project.location}
                  </p>
                  <p className="text-white/80 text-sm font-body font-light leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* View Icon */}
                <div
                  className={`absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center transition-all duration-500 ${selectedProject === project.id
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-75'
                    }`}
                >
                  <ArrowUpRight className="w-5 h-5 text-[hsl(var(--charcoal))]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

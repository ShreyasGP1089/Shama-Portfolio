import { useParams, Link, useNavigate } from 'react-router-dom';
import { interiorProjects } from '../data/interiors';
import { architectureProjects } from '../data/architecture';
import { renovationProjects } from '../data/renovations';
import { artProjects } from '../data/art';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const allProjects = [...interiorProjects, ...architectureProjects, ...renovationProjects, ...artProjects];

export default function ProjectDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = allProjects.find((p) => p.id === id);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Handle Escape key to close lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedImageIndex(null);
            if (e.key === 'ArrowLeft') navigateImage('prev');
            if (e.key === 'ArrowRight') navigateImage('next');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex]);

    const navigateImage = (direction: 'prev' | 'next') => {
        if (selectedImageIndex === null || !project) return;
        if (direction === 'prev') {
            setSelectedImageIndex(prev => (prev === 0 ? project.images.length - 1 : prev! - 1));
        } else {
            setSelectedImageIndex(prev => (prev === project.images.length - 1 ? 0 : prev! + 1));
        }
    };

    if (!project) {
        return (
            <div className="min-h-screen bg-[hsl(var(--warm-cream))] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-display text-[hsl(var(--charcoal))] mb-4">Project not found</h2>
                    <Link
                        to="/"
                        className="text-[hsl(var(--terracotta))] hover:text-[hsl(var(--charcoal))] transition-colors font-body"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[hsl(var(--warm-cream))] py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 text-[hsl(var(--charcoal))]/60 hover:text-[hsl(var(--terracotta))] transition-colors mb-8 font-body"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                </button>

                <header className="mb-16">
                    <span className="text-[hsl(var(--terracotta))] text-sm tracking-[0.25em] uppercase font-body mb-4 block">
                        {project.category}
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[hsl(var(--charcoal))] mb-6">
                        {project.title}
                    </h1>
                    <p className="text-[hsl(var(--charcoal))]/60 text-lg font-body font-light max-w-2xl">
                        {project.location} • {project.description}
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className="rounded-lg overflow-hidden shadow-lg aspect-[3/2] cursor-pointer group"
                        >
                            <img
                                src={image}
                                alt={`${project.title} view ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />

                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImageIndex !== null && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
                    <button
                        onClick={() => setSelectedImageIndex(null)}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
                        aria-label="Close"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={project.images[selectedImageIndex]}
                            alt={`${project.title} full view`}
                            className="max-w-full max-h-full object-contain shadow-2xl"
                        />
                        <div className="absolute bottom-4 left-0 right-0 text-center text-white/60 font-body text-sm tracking-widest uppercase">
                            {selectedImageIndex + 1} / {project.images.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

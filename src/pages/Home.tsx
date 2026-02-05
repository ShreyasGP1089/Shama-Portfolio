import Navigation from '../sections/Navigation';
import Hero from '../sections/Hero';
import About from '../sections/About';
import InteriorDesign from '../sections/InteriorDesign';
import Architecture from '../sections/Architecture';
import Renovation from '../sections/Renovation';
import ArtProjects from '../sections/ArtProjects';
import Contact from '../sections/Contact';

import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[hsl(var(--warm-cream))]">
            <Navigation />
            <main>
                <Hero />
                <About />
                <InteriorDesign />
                <Architecture />
                <Renovation />
                <ArtProjects />
                <Contact />
            </main>
        </div>
    );
}

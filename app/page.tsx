import React from "react";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/components/data";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
    // const { scrollYProgress } = useScroll();

    return (
        <main className="relative bg-black-100 flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
            <div className="max-2-7xl w-full">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid />
                <RecentProjects />
                <Clients />
                <Experience />
                <Approach />
                <Footer />
            </div>
        </main>
    );
}

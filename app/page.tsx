"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Image src="/Resume.jpg" alt="Resume" id="Resume" width={1000} height={1000} style={{
          display: "block",
          margin: "0 auto",
          border: "1px solid #ccc",
          borderRadius: "20px",
          boxShadow: "0 0 10px rgba(255, 255, 255, 3.0)",
          backgroundColor: "#333",
          transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)",
          objectFit: "cover",
          objectPosition: "center",}}
             />
        <Footer />
      </div>
    </main>
  );
};

export default Home;

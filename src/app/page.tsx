"use client";

import Head from "next/head";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import bubbles from "./data/water";
import Footer from "./components/Footer";
import EscoComponent from "./components/EscoComponent";
const Home = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: any): Promise<void> => {
    console.log(container);
  };

  if (init) {
    return (
      <div>
        <Head>
          <title>My Portfolio</title>
          <meta name="description" content="My professional portfolio" />
          <link rel="icon" href="/kinder.ico" />
        </Head>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={bubbles}
          className="absolute inset-0 z-0"
        />
        <main className="relative z-10">
          <Nav />
          <Hero />
          <About />
          <Roadmap />
          {/* <Projects /> */}
          <Footer />
        </main>
      </div>
    );
  }

  return <></>;
};

export default Home;

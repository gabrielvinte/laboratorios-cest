import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EscritorioEscola from "./components/EscritorioEscola";
import Robotica from "./components/Robotica";
import SideNav from "./components/SideNav";
import Dados from "./components/Dados";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const heroRef = useRef(null);
  const escritorioRef = useRef(null);
  const roboticaRef = useRef(null);
  const dadosRef = useRef(null);

  // Organiza as seções da página.
  const sections = [
    { id: "hero", ref: heroRef },
    { id: "escritorio", ref: escritorioRef },
    { id: "robotica", ref: roboticaRef },
    { id: "dados", ref: dadosRef },
  ];

  // Efeito que roda uma vez para configurar o observador do scroll.
  useEffect(() => {
    // Configura o "observador": define uma zona de ativação no meio da tela.
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      const intersectingSections = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target.id);

      if (intersectingSections.length > 0) {
        // Lógica para ativar a última seção visível se houver sobreposição.
        const lastIntersectingIndex = Math.max(
          ...intersectingSections.map((id) =>
            sections.findIndex((s) => s.id === id)
          )
        );
        setActiveSection(sections[lastIntersectingIndex].id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  // Função para o scroll suave ao clicar nas bolinhas.
  const scrollToSection = (id) => {
    const section = sections.find((s) => s.id === id);
    if (section && section.ref.current) {
      section.ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <Header />
      <SideNav
        activeSection={activeSection}
        sections={sections}
        onDotClick={scrollToSection}
      />
      <main>
        <Hero ref={heroRef} id="hero" />
        <EscritorioEscola ref={escritorioRef} id="escritorio" />
        <Robotica ref={roboticaRef} id="robotica" />
        <Dados ref={dadosRef} id="dados"/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;


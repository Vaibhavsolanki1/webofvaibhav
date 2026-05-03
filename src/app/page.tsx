import Contact from "@/components/Contact";
import CreatorSection from "@/components/CreatorSection";
import ExplorerSection from "@/components/ExplorerSection";
import HeroSplit from "@/components/HeroSplit";
import IntroSection from "@/components/IntroSection";
import LazySection from "@/components/LazySection";
import MergeSection from "@/components/MergeSection";
import Preloader from "@/components/Preloader";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TransitionBreak from "@/components/TransitionBreak";

export default function Home() {
  return (
    <>
      <Preloader />
      <main>
        <HeroSplit />
        <TransitionBreak />
        <LazySection>
          <IntroSection />
        </LazySection>
        <LazySection>
          <CreatorSection />
        </LazySection>
        <LazySection>
          <ExplorerSection />
        </LazySection>
        <LazySection>
          <MergeSection />
        </LazySection>
        <LazySection>
          <Projects />
        </LazySection>
        <LazySection>
          <Skills />
        </LazySection>
        <LazySection>
          <Contact />
        </LazySection>
      </main>
    </>
  );
}

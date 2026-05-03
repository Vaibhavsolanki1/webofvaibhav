"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import useGsapScrollTrigger from "@/hooks/useGsapScrollTrigger";

export default function TransitionBreak() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  useGsapScrollTrigger();

  useEffect(() => {
    const line = lineRef.current;
    const section = sectionRef.current;
    if (!line || !section) {
      return;
    }

    const tween = gsap.fromTo(
      line,
      { scaleY: 1, opacity: 1 },
      {
        scaleY: 0,
        opacity: 0,
        transformOrigin: "center top",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section relative bg-gradient-to-b from-creator-light via-slate-950/80 to-slate-950"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center text-slate-100">
        <p className="eyebrow text-slate-300">Transition</p>
        <h2 className="headline">I stopped choosing between them.</h2>
        <p className="subhead text-slate-300">
          The split dissolves. A single story remains.
        </p>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-0 flex h-full -translate-x-1/2 items-center">
        <div
          ref={lineRef}
          className="h-56 w-px bg-gradient-to-b from-transparent via-violet-400 to-transparent"
        />
      </div>
    </section>
  );
}

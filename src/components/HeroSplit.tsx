"use client";

import Image from "next/image";
// Images moved to public/images for stable runtime URLs
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ShaderBackground from "@/components/ui/shader-background";
import BackgroundAudio from "@/components/ui/background-audio";
import { DottedSurface } from "@/components/ui/dotted-surface";
import Preloader from "@/components/Preloader";
import { useState } from "react";
import useGsapScrollTrigger from "@/hooks/useGsapScrollTrigger";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));
const lerp = (value: number, target: number, amount: number) =>
  value + (target - value) * amount;

export default function HeroSplit() {
  useGsapScrollTrigger();

  const [showWelcome, setShowWelcome] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const splitRef = useRef<HTMLDivElement>(null);
  const characterMainRef = useRef<HTMLDivElement>(null);
  const leftGroupRef = useRef<HTMLDivElement>(null);
  const rightGroupRef = useRef<HTMLDivElement>(null);
  const leftInnerRef = useRef<HTMLDivElement>(null);
  const rightInnerRef = useRef<HTMLDivElement>(null);
  const leftGlowRef = useRef<HTMLDivElement>(null);
  const rightGlowRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const textLeftRef = useRef<HTMLDivElement>(null);
  const textRightRef = useRef<HTMLDivElement>(null);
  const topLogoRef = useRef<HTMLDivElement>(null);
  const dividerXRef = useRef<((value: number) => void) | null>(null);
  const interactionEnabledRef = useRef(false);
  const mouseRef = useRef<{
    x: number;
    y: number;
    side: "left" | "right";
  }>({ x: 0.5, y: 0.5, side: "left" });

  useEffect(() => {
    const divider = dividerRef.current;
    if (!divider) {
      return;
    }

    dividerXRef.current = gsap.quickTo(divider, "x", {
      duration: 0.45,
      ease: "power3.out",
    });

    return () => {
      dividerXRef.current = null;
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const split = splitRef.current;
    const leftGroup = leftGroupRef.current;
    const rightGroup = rightGroupRef.current;
    const divider = dividerRef.current;
    const textLeft = textLeftRef.current;
    const textRight = textRightRef.current;
    const topLogo = topLogoRef.current;
    const leftGlow = leftGlowRef.current;
    const rightGlow = rightGlowRef.current;

    if (
      !section ||
      !split ||
      !characterMainRef.current ||
      !leftGroup ||
      !rightGroup ||
      !divider ||
      !textLeft ||
      !textRight ||
      !topLogo ||
      !leftGlow ||
      !rightGlow
    ) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const characterMain = characterMainRef.current;
      const leftLines = textLeft.querySelectorAll("[data-line]");
      const rightLines = textRight.querySelectorAll("[data-line]");

      gsap.set(split, { opacity: 0, scale: 0.96, y: 0 });
      gsap.set(characterMain, { opacity: 0, scale: 0.94, filter: "blur(10px)" });
      gsap.set([leftGroup, rightGroup], { opacity: 0, scale: 0.98 });
      gsap.set([leftGlow, rightGlow], { opacity: 0 });
      gsap.set(topLogo, { opacity: 0, y: -16, scale: 0.9 });
      gsap.set(divider, { opacity: 0, scaleY: 0, transformOrigin: "top" });
      gsap.set([...leftLines, ...rightLines], { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2000",
          scrub: 0.6,
          pin: true,
          fastScrollEnd: true,
          onUpdate: (self) => {
            interactionEnabledRef.current = self.progress > 0.55;
            const welcomeOverlay = document.getElementById("welcome-overlay");
            if (welcomeOverlay) {
              gsap.set(welcomeOverlay, { autoAlpha: self.progress < 0.52 ? 1 : 0 });
            }
          },
        },
      });
      tl.to(split, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      })
        .to(
          split,
          {
            y: -220,
            scale: 0.56,
            duration: 0.9,
            ease: "power2.out",
          },
          ">+=0.05"
        )
        .to(
          characterMain,
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power2.out",
          },
          "reveal"
        )
        .to(
          divider,
          {
            opacity: 1,
            scaleY: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          topLogo,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: "power2.out",
          },
          "split+=0.08"
        )
        .to(
          split,
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "split"
        )
        .to(
          characterMain,
          {
            opacity: 0,
            scale: 0.98,
            duration: 0.45,
            ease: "power2.out",
          },
          "split+=0.02"
        )
        .to(
          [leftGroup, rightGroup],
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "split+=0.1"
        )
        .to(
          leftGroup,
          {
            x: () => -window.innerWidth * 0.3,
            rotation: -2,
            duration: 1.2,
            ease: "power2.out",
          },
          "split+=0.3"
        )
        .to(
          rightGroup,
          {
            x: () => window.innerWidth * 0.3,
            rotation: 2,
            duration: 1.2,
            ease: "power2.out",
          },
          "split+=0.35"
        )
        .to(
          [leftGlow, rightGlow],
          {
            opacity: 0.45,
            duration: 0.6,
            ease: "power2.out",
          },
          "split+=0.45"
        )
        .to(
          leftLines,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.15,
          },
          "text"
        )
        .to(
          rightLines,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.15,
          },
          "text+=0.1"
        );

      if (!prefersReducedMotion) {
        gsap.to(divider, {
          opacity: 0.8,
          duration: 2.6,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
        gsap.to([leftGroup, rightGroup], {
          y: -10,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  // welcome visibility is controlled by Preloader's onDone callback

  useEffect(() => {
    const leftInner = leftInnerRef.current;
    const rightInner = rightInnerRef.current;
    const leftGroup = leftGroupRef.current;
    const rightGroup = rightGroupRef.current;
    const leftGlow = leftGlowRef.current;
    const rightGlow = rightGlowRef.current;
    if (!leftInner || !rightInner || !leftGroup || !rightGroup || !leftGlow || !rightGlow) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const handleMove = (event: MouseEvent) => {
      const nx = clamp(event.clientX / window.innerWidth, 0, 1);
      const ny = clamp(event.clientY / window.innerHeight, 0, 1);
      mouseRef.current = {
        x: nx,
        y: ny,
        side: nx < 0.5 ? "left" : "right",
      };
      target.x = clamp(nx * 2 - 1, -1, 1);
      target.y = clamp(ny * 2 - 1, -1, 1);
    };

    const handleLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    const tick = () => {
      if (prefersReducedMotion) {
        return;
      }

      current.x = lerp(current.x, target.x, 0.08);
      current.y = lerp(current.y, target.y, 0.08);

      if (!interactionEnabledRef.current) {
        gsap.set([leftInner, rightInner], {
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
        });
        gsap.set([leftGlow, rightGlow], { opacity: 0 });
        dividerXRef.current?.(0);
        return;
      }

      const side = mouseRef.current.side;
      const leftScale = side === "left" ? 1.03 : 1;
      const rightScale = side === "right" ? 1.03 : 1;
      const leftOpacity = side === "right" ? 0.85 : 1;
      const rightOpacity = side === "left" ? 0.85 : 1;

      gsap.set(leftInner, {
        x: current.x * 15,
        y: current.y * 15,
        rotationY: current.x * 5,
        rotationX: -current.y * 5,
        scale: leftScale,
      });
      gsap.set(rightInner, {
        x: current.x * 20,
        y: current.y * 20,
        rotationY: current.x * 8,
        rotationX: -current.y * 8,
        scale: rightScale,
      });
      gsap.set(leftGroup, { opacity: leftOpacity });
      gsap.set(rightGroup, { opacity: rightOpacity });
      gsap.set(leftGlow, { opacity: side === "left" ? 0.65 : 0.3 });
      gsap.set(rightGlow, { opacity: side === "right" ? 0.7 : 0.3 });
      dividerXRef.current?.(
        clamp((mouseRef.current.x - 0.5) * 18, -12, 12)
      );
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("blur", handleLeave);
    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("blur", handleLeave);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero relative h-screen overflow-hidden text-slate-900"
      style={{ willChange: "transform" }}
    >
      <Preloader onDone={() => setShowWelcome(true)} />

      <div className="absolute inset-0 z-0 flex">
        <div className="relative h-full w-1/2 overflow-hidden">
          <ShaderBackground theme="light" />
        </div>
        <div className="relative h-full w-1/2 overflow-hidden bg-[#050505]">
          <ShaderBackground theme="dark" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[5] flex">
        <div className="relative h-full w-1/2 overflow-hidden">
          <DottedSurface
            isDark={false}
            className="absolute inset-0 opacity-35 mix-blend-multiply"
          />
        </div>
        <div className="relative h-full w-1/2 overflow-hidden">
          <DottedSurface
            isDark={true}
            className="absolute inset-0 opacity-35 mix-blend-screen"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20">
        <div
          ref={dividerRef}
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-200/80 to-transparent" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="relative h-[640px] w-[440px] md:h-[780px] md:w-[520px]">
          <div
            ref={splitRef}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
          >
            <Image
              src="/logo.png"
              alt="Home logo"
              width={520}
              height={780}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          <div
            ref={characterMainRef}
            className="absolute inset-0 flex items-center justify-center will-change-transform [transform-style:preserve-3d]"
          >
            <Image
              src="/images/split.png"
              alt="Combined character"
              width={520}
              height={780}
              className="h-full w-full object-contain"
            />
          </div>

          <div
            ref={leftGroupRef}
            className="absolute inset-0 flex items-center justify-center will-change-transform [transform-style:preserve-3d]"
          >
            <div
              ref={leftGlowRef}
              className="absolute inset-0 rounded-[44px] bg-[rgba(255,150,80,0.4)] blur-3xl opacity-0"
            />
            <div
              ref={leftInnerRef}
              className="relative h-full w-full will-change-transform [transform-style:preserve-3d]"
            >
              <Image
                src="/images/light-theme-character.png"
                alt="Creator character"
                width={520}
                height={780}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div
            ref={rightGroupRef}
            className="absolute inset-0 flex items-center justify-center will-change-transform [transform-style:preserve-3d]"
          >
            <div
              ref={rightGlowRef}
              className="absolute inset-0 rounded-[44px] bg-[rgba(139,92,246,0.5)] blur-3xl opacity-0"
            />
            <div
              ref={rightInnerRef}
              className="relative h-full w-full will-change-transform [transform-style:preserve-3d]"
            >
              <Image
                src="/images/dark-theme-character.png"
                alt="Explorer character"
                width={520}
                height={780}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-between px-6 md:px-16">
        <div
          ref={textLeftRef}
          className="max-w-[220px] text-left text-slate-900 md:max-w-[280px]"
        >
          <p data-line className="text-3xl font-semibold md:text-5xl">
            I create.
          </p>
          <p data-line className="mt-2 text-xl text-slate-700 md:text-2xl">
            I express.
          </p>
        </div>
        <div
          ref={textRightRef}
          className="max-w-[220px] text-right text-slate-100 md:max-w-[280px]"
        >
          <p data-line className="text-3xl font-semibold md:text-5xl">
            I build.
          </p>
          <p data-line className="mt-2 text-xl text-slate-300 md:text-2xl">
            I explore.
          </p>
        </div>
      </div>

      <div
        ref={topLogoRef}
        className="pointer-events-none absolute left-1/2 top-5 z-40 -translate-x-1/2"
      >
        <Image
          src="/logo.png"
          alt="Vaibhav logo"
          width={94}
          height={36}
          className="h-auto w-[94px] object-contain md:w-[108px]"
          priority
        />
      </div>

      <BackgroundAudio src="/audio/dark-theme.mp3" />

      {showWelcome && (
        <div
          id="welcome-overlay"
          className="pointer-events-none fixed inset-0 z-60 flex items-center justify-center"
        >
          <div className="text-center drop-shadow-lg" style={{
            background: 'linear-gradient(to right, #000000 0%, #000000 50%, #ffffff 50%, #ffffff 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-3">
              Hi, my name is Vaibhav Solanki,
            </h1>
            <p className="text-lg md:text-2xl font-light">
              a guy who is passionate to learn everything
            </p>
          </div>
        </div>
      )}
    </section>
  );
}


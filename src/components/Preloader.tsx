"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DURATION_MS = 2400;

export default function Preloader({ onDone }: { onDone?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let raf = 0;
    let timeoutId: number | undefined;
    const start = performance.now();

      const tick = (now: number) => {
      const pct = Math.min(100, Math.round(((now - start) / DURATION_MS) * 100));
      setProgress(pct);

      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        timeoutId = window.setTimeout(() => {
          // start exit animation
          setVisible(false);
          // call onDone after exit animation completes
          window.setTimeout(() => onDone?.(), 420);
        }, 200);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-slate-950/95"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col items-center">
            <div className="relative grid h-[24rem] w-[24rem] place-items-center">
              <div className="absolute inset-0 rounded-full bg-slate-200/10 blur-2xl" />
              <Image
                src="/logo.png"
                alt="Vaibhav logo"
                width={336}
                height={336}
                className="relative h-84 w-84 object-contain opacity-100 brightness-125 drop-shadow-[0_0_28px_rgba(148,163,184,0.85)]"
                priority
              />
            </div>
            <span className="mt-2 text-sm font-semibold tracking-[0.2em] text-slate-200">
              {progress}%
            </span>
            <div className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-slate-400">
              Initializing story
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

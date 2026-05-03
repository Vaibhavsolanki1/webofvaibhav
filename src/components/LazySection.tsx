"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type LazySectionProps = {
  children: React.ReactNode;
  className?: string;
  rootMargin?: string;
};

export default function LazySection({
  children,
  className,
  rootMargin = "200px",
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: rootMargin, once: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (inView) {
      setMounted(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={cn(className)}>
      {mounted ? children : null}
    </div>
  );
}

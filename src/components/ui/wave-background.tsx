import { cn } from "@/lib/utils";

type WaveBackgroundProps = {
  strokeColor?: string;
  backgroundColor?: string;
  className?: string;
};

export default function WaveBackground({
  strokeColor = "#8b5cf6",
  backgroundColor = "#050505",
  className,
}: WaveBackgroundProps) {
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden", className)}
      style={{ background: backgroundColor }}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120 C200 90 320 180 520 160 C720 140 820 40 1200 90"
          stroke={strokeColor}
          strokeWidth="1.2"
          opacity="0.45"
          fill="none"
        />
        <path
          d="M0 220 C180 200 320 280 540 260 C760 240 860 140 1200 200"
          stroke={strokeColor}
          strokeWidth="1"
          opacity="0.3"
          fill="none"
        />
        <path
          d="M0 320 C160 300 360 360 600 340 C840 320 980 240 1200 280"
          stroke={strokeColor}
          strokeWidth="0.8"
          opacity="0.22"
          fill="none"
        />
      </svg>
    </div>
  );
}

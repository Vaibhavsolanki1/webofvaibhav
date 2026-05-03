import { Film, Paintbrush, PenLine } from "lucide-react";

const items = [
  {
    title: "Painting",
    description: "Color and composition shaped my eye for mood.",
    icon: Paintbrush,
  },
  {
    title: "Editing",
    description: "Pacing and rhythm made every transition feel intentional.",
    icon: Film,
  },
  {
    title: "Storytelling",
    description: "Narrative structure guides each user journey.",
    icon: PenLine,
  },
];

export default function CreatorSection() {
  return (
    <section id="creator" className="section bg-creator-light text-slate-900">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-4">
          <p className="eyebrow text-slate-600">The Creator</p>
          <h2 className="headline">Art, storytelling, emotion.</h2>
          <p className="subhead text-slate-700">
            The creative side made me sensitive to tone and atmosphere.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur"
            >
              <item.icon className="h-6 w-6 text-orange-500" />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Code2, Cpu, Network } from "lucide-react";

const items = [
  {
    title: "Coding",
    description: "Systems become expressive when built with intention.",
    icon: Code2,
  },
  {
    title: "IoT",
    description: "Sensors turn real-world signals into meaningful data.",
    icon: Cpu,
  },
  {
    title: "Systems",
    description: "Architecture keeps the experience resilient and fast.",
    icon: Network,
  },
];

export default function ExplorerSection() {
  return (
    <section id="explorer" className="section bg-slate-950">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-4">
          <p className="eyebrow text-slate-400">The Explorer</p>
          <h2 className="headline">Code, logic, systems.</h2>
          <p className="subhead">
            The technical side helps me build products that scale.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg"
            >
              <item.icon className="h-6 w-6 text-violet-400" />
              <h3 className="mt-4 text-lg font-semibold text-slate-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

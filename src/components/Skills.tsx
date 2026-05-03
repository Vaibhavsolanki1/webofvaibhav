import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4">
          <p className="eyebrow">Skills</p>
          <h2 className="headline">Tools in motion</h2>
          <p className="subhead">Clear, honest, and focused.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold text-slate-100">Languages</h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
              {skills.languages.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-slate-700 px-3 py-1"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold text-slate-100">Frameworks</h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
              {skills.frameworks.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-slate-700 px-3 py-1"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold text-slate-100">Tools</h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
              {skills.tools.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-slate-700 px-3 py-1"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

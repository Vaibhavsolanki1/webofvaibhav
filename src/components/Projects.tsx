import { ExternalLink, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4">
          <p className="eyebrow">Projects</p>
          <h2 className="headline">Selected builds</h2>
          <p className="subhead">
            Clean, intentional work that blends storytelling with systems.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">
                    {project.title}
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-slate-400">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Problem
                    </p>
                    <p className="text-slate-300">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Solution
                    </p>
                    <p className="text-slate-300">{project.solution}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-slate-100"
                >
                  <GitBranch className="h-4 w-4" />
                  GitHub
                </a>
                <Button asChild size="sm">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

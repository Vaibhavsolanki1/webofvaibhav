import { GitBranch, Link, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section bg-slate-950">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow">Contact</p>
        <h2 className="headline mt-4">Let's build something meaningful.</h2>
        <p className="subhead mx-auto mt-4">
          Open to collaborations, bold ideas, and products that feel alive.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-4 py-2 text-sm text-slate-300 hover:text-slate-100"
          >
            <GitBranch className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-4 py-2 text-sm text-slate-300 hover:text-slate-100"
          >
            <Link className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={contact.email}
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-4 py-2 text-sm text-slate-300 hover:text-slate-100"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg">
            <a href={contact.email}>Start a conversation</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

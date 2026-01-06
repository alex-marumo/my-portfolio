// src/components/blocks/ProjectsGallery.tsx
import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageType: "frontend" | "backend";
  githubUrl: string;
  liveUrl?: string;
}

function ProjectCard({
  title,
  description,
  tags,
  imageType,
  githubUrl = "#",
  liveUrl = "#",
}: ProjectCardProps) {
  return (
    <div className="group relative bg-white/5 border border-white/10 hover:border-electric/50 transition-all duration-300 overflow-hidden">
      {/* Project Image/Preview Area */}
      <div className="relative h-56 bg-coal overflow-hidden border-b border-white/10">
        {imageType === "backend" ? (
          <div className="absolute inset-0 p-6 opacity-40 font-mono text-[10px] leading-relaxed select-none">
            <pre className="text-terminal">
              {`const secureAPI = async () => {
  const encrypted = await encrypt(data);
  const token = jwt.sign(payload, secret);
  return { encrypted, token };
};

app.use(helmet());
app.use(rateLimit({ max: 100 }));`}
            </pre>
          </div>
        ) : (
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-electric/5 opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Type Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-coal/80 backdrop-blur-md border border-electric/30 text-electric font-mono text-[10px] tracking-widest uppercase">
            {imageType === "frontend" ? "[ui.ux]" : "[backend.core]"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="mb-3 font-headline text-xl font-bold text-white tracking-tight">
          {title}
        </h3>

        <p className="text-slate-400 font-body text-sm leading-relaxed mb-6 h-12 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-white/5 text-slate-400 border border-white/10 font-mono text-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <a
            href={githubUrl}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-electric text-white font-mono text-xs font-bold transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] shadow-[4px_4px_0px_rgba(59,130,246,0.3)] hover:shadow-[6px_6px_0px_rgba(59,130,246,0.3)]"
          >
            <Github size={14} /> CODE_DEMO
          </a>

          <a
            href={liveUrl}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-terminal text-terminal font-mono text-xs font-bold transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] shadow-[4px_4px_0px_rgba(34,197,94,0.1)] hover:shadow-[6px_6px_0px_rgba(34,197,94,0.2)]"
          >
            <ExternalLink size={14} /> LIVE_PREV
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProjectsGallery() {
  const projects = [
    {
      title: "Artistic Marketplace",
      description: "Frontend of the digital marketplace for local artists.",
      tags: ["React", "Node.js", "JWT"],
      imageType: "frontend" as const,
      githubURL:
        "https://github.com/alex-marumo/digital-marketplace-frontend.git",
    },
    {
      title: "Artistic Marketplace",
      description:
        "Backend of the digital marketplace for local useImperativeHandle.",
      tags: [
        "NodeJS, ExpressJS",
        "PostgreSQL",
        "JWT",
        "Keycloak",
        "Google reCAPTCHA",
        "Paypal Sandbox",
      ],
      imageType: "backend" as const,
      githubURL:
        "https://github.com/alex-marumo/digital-marketplace-backend.git",
    },
    {
      title: "Speakless",
      description:
        "Simple Text-to-speech and speech-to-text accessibility tool.",
      tags: ["Python", "Whisper", "OpenAI"],
      imageType: "backend" as const,
      githubURL: "https://github.com/alex-marumo/Speakless.git",
    },
    {
      title: "Lexical Playground",
      description: "Simple text editor.",
      tags: ["React", "Typescript", "Vite", "Lexical"],
      imageType: "frontend" as const,
      githubURL: "https://github.com/alex-marumo/lexical-playground.git",
    },
  ];

  return (
    <section id="projects" className="px-6 py-24 max-w-7xl mx-auto bg-coal">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4 italic">
            Featured Projects
          </h2>
          <p className="font-mono text-xs tracking-widest text-slate-500 uppercase">
            [project.archive] || Building secure, scalable solutions
          </p>
        </div>
        <div className="h-[1px] flex-grow bg-white/10 mx-8 hidden md:block mb-3" />
        <div className="text-terminal font-mono text-xs animate-pulse">
          STATUS: 4_PROJECTS_LOADED
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

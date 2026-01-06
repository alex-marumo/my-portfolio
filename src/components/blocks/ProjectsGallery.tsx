// src/components/blocks/ProjectsGallery.tsx
import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageType: "frontend" | "backend";
  githubUrl: string; // Changed to match the prop used in the component
  liveUrl?: string;
}

function ProjectCard({
  title,
  description,
  tags,
  imageType,
  githubUrl = "#",
}: ProjectCardProps) {
  return (
    <div className="group relative bg-white/[0.02] backdrop-blur-md border-2 border-electric/20 hover:border-electric/60 transition-all duration-500 overflow-hidden">
      {/* 1. Project Preview Header */}
      <div className="relative h-56 bg-coal overflow-hidden border-b border-white/10">
        {imageType === "backend" ? (
          <div className="absolute inset-0 p-6 opacity-30 font-mono text-[10px] leading-relaxed">
            <pre className="text-terminal">
              {`const secureAPI = async () => {
  const encrypted = await encrypt(data);
  const token = jwt.sign(payload, secret);
  return { encrypted, token };
};`}
            </pre>
          </div>
        ) : (
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
        )}

        {/* HUD Type Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-coal/80 border border-electric/40 text-electric font-mono text-[10px] tracking-widest uppercase">
            {imageType === "frontend" ? "[UI.UX]" : "[CORE.BE]"}
          </span>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="p-8">
        <h3 className="mb-3 font-headline text-xl font-bold text-white tracking-tight group-hover:text-electric transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 font-body text-sm leading-relaxed mb-6 h-12 line-clamp-2">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/5 border border-white/10 text-slate-300 font-mono text-[10px] uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 3. Tactical Action Buttons */}
        <div className="flex gap-4">
          <a
            href={githubUrl}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-electric text-white font-mono text-[10px] font-bold transition-all hover:translate-y-[-2px] shadow-[4px_4px_0px_rgba(59,130,246,0.2)] active:translate-y-0"
          >
            <Github size={14} /> CODE_DEMO
          </a>
        </div>
      </div>

      {/* 4. THE FIGMA GLOW EFFECT */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500"
        style={{
          boxShadow:
            "inset 0 0 50px rgba(59, 130, 246, 0.15), inset 0 0 20px rgba(59, 130, 246, 0.1)",
        }}
      />
    </div>
  );
}

export function ProjectsGallery() {
  const projects = [
    {
      title: "Artistic Marketplace",
      description:
        "A high-performance digital storefront for local artists to showcase and sell creative assets.",
      tags: ["React", "Node.js", "JWT", "Tailwind"],
      imageType: "frontend" as const,
      githubUrl:
        "https://github.com/alex-marumo/digital-marketplace-frontend.git",
    },
    {
      title: "Marketplace Backend",
      description:
        "Robust API architecture featuring Keycloak auth, PostgreSQL integration, and PayPal sandbox payments.",
      tags: ["NodeJS", "PostgreSQL", "Keycloak", "reCAPTCHA"],
      imageType: "backend" as const,
      githubUrl:
        "https://github.com/alex-marumo/digital-marketplace-backend.git",
    },
    {
      title: "Speakless",
      description:
        "Accessibility utility using OpenAI Whisper for seamless text-to-speech and speech-to-text conversion.",
      tags: ["Python", "Whisper", "OpenAI", "Automation"],
      imageType: "backend" as const,
      githubUrl: "https://github.com/alex-marumo/Speakless.git",
    },
    {
      title: "Lexical Playground",
      description:
        "Advanced rich-text editor environment exploring modern content editable frameworks.",
      tags: ["React", "Typescript", "Lexical", "Vite"],
      imageType: "frontend" as const,
      githubUrl: "https://github.com/alex-marumo/lexical-playground.git",
    },
  ];

  return (
    <section id="projects" className="px-6 py-24 max-w-7xl mx-auto bg-coal">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="font-mono text-xs tracking-widest text-slate-500 uppercase">
            [project.archive] || Building secure, scalable solutions
          </p>
        </div>
        <div className="h-[1px] flex-grow bg-white/10 mx-8 hidden md:block mb-3" />
        <div className="text-terminal font-mono text-[10px] animate-pulse">
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

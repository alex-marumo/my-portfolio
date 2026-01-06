import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageType: "frontend" | "backend";
  githubUrl: string;
  snippet: string; // New prop for real code
}

function ProjectCard({
  title,
  description,
  tags,
  imageType,
  githubUrl,
  snippet,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-white/[0.02] backdrop-blur-md border-2 border-electric/20 hover:border-electric/60 transition-all duration-500 overflow-hidden">
      {/* 1. Project Preview Header - Now with real DNA */}
      <div className="relative h-56 bg-coal overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 p-6 opacity-30 group-hover:opacity-50 transition-opacity font-mono text-[10px] leading-relaxed select-none pointer-events-none">
          <pre
            className={
              imageType === "backend" ? "text-terminal" : "text-electric"
            }
          >
            {snippet}
          </pre>
        </div>

        {/* HUD Type Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-coal/80 border border-electric/40 text-electric font-mono text-[10px] tracking-widest uppercase shadow-[0_0_10px_rgba(59,130,246,0.2)]">
            {imageType === "frontend" ? "[UI.UX_NODE]" : "[SYSTEM.CORE]"}
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
              className="px-2 py-1 bg-white/5 border border-white/10 text-slate-500 font-mono text-[9px] uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 3. Tactical Action Button */}
        <div className="flex gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-electric text-white font-mono text-[10px] font-bold transition-all hover:translate-y-[-2px] shadow-[4px_4px_0px_rgba(59,130,246,0.2)] active:translate-y-0"
          >
            <Github size={14} /> SOURCE_CODE
          </a>
        </div>
      </div>

      {/* 4. THE FIGMA GLOW EFFECT - Inset shadow for internal light */}
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
        "Digital storefront for local artists to showcase and sell creative assets.",
      tags: ["React", "Node.js", "JWT", "Tailwind"],
      imageType: "frontend" as const,
      githubUrl:
        "https://github.com/alex-marumo/digital-marketplace-frontend.git",
      snippet: `export const Gallery = ({ items }) => {\n  return (\n    <div className="grid-layout">\n      {items.map(item => (\n        <ArtCard key={item.id} {...item} />\n      ))}\n    </div>\n  );\n};`,
    },
    {
      title: "Marketplace Backend",
      description: "API architecture with Keycloak auth and PayPal payments.",
      tags: ["NodeJS", "PostgreSQL", "Keycloak", "Paypal"],
      imageType: "backend" as const,
      githubUrl:
        "https://github.com/alex-marumo/digital-marketplace-backend.git",
      snippet: `router.post('/pay', async (req, res) => {\n  const order = await paypal.createOrder(req.body);\n  await db.transaction.save({\n    id: order.id,\n    status: 'INITIATED'\n  });\n  res.status(201).send(order);\n});`,
    },
    {
      title: "Speakless",
      description: "OpenAI Whisper utility for text-to-speech conversion.",
      tags: ["Python", "Whisper", "OpenAI", "PyTorch"],
      imageType: "backend" as const,
      githubUrl: "https://github.com/alex-marumo/Speakless.git",
      snippet: `def transcribe(audio_path):\n    model = whisper.load_model("base")\n    result = model.transcribe(audio_path)\n    return result["text"]\n\nspeak(transcribe("input.wav"))`,
    },
    {
      title: "Lexical Playground",
      description: "Rich-text editor environment exploring content frameworks.",
      tags: ["React", "Typescript", "Lexical", "Vite"],
      imageType: "frontend" as const,
      githubUrl: "https://github.com/alex-marumo/lexical-playground.git",
      snippet: `const config = {\n  namespace: 'Playground',\n  theme: MyTheme,\n  onError: (e) => console.error(e),\n};\n\n<LexicalComposer initialConfig={config}>\n  <RichTextPlugin />\n</LexicalComposer>`,
    },
  ];

  return (
    <section id="projects" className="px-6 py-24 max-w-7xl mx-auto bg-coal">
      <div className="mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <div className="h-1 w-20 bg-electric mb-6" />
        <p className="font-mono text-xs tracking-widest text-slate-500 uppercase">
          [project.archive] || Code snippets verified
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

// src/components/blocks/BentoGrid.tsx
import React from "react";
import { Shield, Code, Network, Database } from "lucide-react";

interface BentoTileProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
  className?: string;
}

function BentoTile({
  icon,
  title,
  description,
  skills,
  className = "",
}: BentoTileProps) {
  return (
    <div
      className={`relative p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-electric/50 transition-all duration-500 group overflow-hidden ${className}`}
    >
      {/* Background Glow Effect */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-electric/10 blur-3xl group-hover:bg-electric/20 transition-colors" />

      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <div className="mb-4 text-electric group-hover:scale-110 transition-transform duration-300 w-fit">
            {icon}
          </div>
          <h3 className="mb-3 font-headline text-2xl font-bold text-white tracking-tight">
            {title}
          </h3>
          <p className="text-slate-400 font-body text-sm leading-relaxed mb-6">
            {description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-white/5 border border-white/10 text-slate-300 font-mono text-[10px] tracking-tighter uppercase"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-terminal">
            <span className="w-1.5 h-1.5 bg-terminal shadow-[0_0_8px_#22C55E]" />
            SYSTEM_VERIFIED
          </div>
        </div>
      </div>
    </div>
  );
}

export function BentoGrid() {
  const tiles = [
    {
      icon: <Code size={28} />,
      title: "Software Development",
      description:
        "Full-stack development. Focus on clean code, scalability, and performance optimization.",
      skills: [
        "React",
        "JavaScript",
        "CSS",
        "Git",
        "Python",
        "CI/CD",
        "Playwright",
        "Test Automations",
        "End-to-end Testing",
        "Software QA",
      ],
      className: "md:col-span-2 md:row-span-2", // Large featured tile
    },
    {
      icon: <Network size={28} />,
      title: "Networking",
      description: "In depth understanding of networks.",
      skills: [
        "Network Technical Support",
        "IT Infrastructure Operations",
        "NOC",
        "Network Configuration",
      ],
      className: "md:col-span-2 md:row-span-1", // Wide tile
    },
    {
      icon: <Shield size={28} />,
      title: "Cyber Security",
      description: "Cyber security systems.",
      skills: [
        "Incident Response",
        "Cybersecurity Foundations",
        "Network Security",
        "Cisco",
      ],
      className: "md:col-span-1 md:row-span-1", // Small tile
    },
    {
      icon: <Database size={28} />,
      title: "Data Systems",
      description: "High-performance SQL/NoSQL solutions.",
      skills: ["Postgres", "mySQL", "MongoDB"],
      className: "md:col-span-1 md:row-span-1", // Small tile
    },
  ];

  return (
    <section id="arsenal" className="px-6 py-24 max-w-7xl mx-auto bg-coal">
      <div className="mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">
          Technical Arsenal
        </h2>
        <div className="h-1 w-20 bg-electric mb-6" />
        <p className="font-mono text-xs tracking-widest text-slate-500 uppercase">
          [core.competencies] || Qualified Software engineer and growing
          pentester.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
        {tiles.map((tile, i) => (
          <BentoTile key={i} {...tile} />
        ))}
      </div>
    </section>
  );
}

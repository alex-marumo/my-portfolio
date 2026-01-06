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
      className={`relative p-8 bg-coal/40 backdrop-blur-sm border-2 border-electric/20 hover:border-electric/50 transition-all duration-500 group overflow-hidden ${className}`}
      style={{
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)",
      }}
    >
      {/* 1. Corner Icon Accents */}
      <div className="absolute top-6 right-6 text-electric/30 group-hover:text-electric group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>

      {/* 2. Content Wrapper */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <h3 className="mb-4 text-white font-headline text-2xl font-bold tracking-tight">
            {title}
          </h3>

          <p className="text-slate-400 font-body text-sm leading-relaxed mb-8 max-w-[90%]">
            {description}
          </p>

          {/* 3. Skill Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-electric/5 text-slate-300 border border-electric/10 font-mono text-[10px] tracking-tight uppercase"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 4. System Verified Footer */}
        <div className="flex items-center gap-3 mt-auto font-mono">
          <div className="w-2 h-2 bg-terminal shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          <span className="text-terminal text-[10px] tracking-[0.2em] font-bold">
            SYSTEM_VERIFIED
          </span>
        </div>
      </div>

      {/* 5. Inner Glow Overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          boxShadow: "inset 0 0 40px rgba(59, 130, 246, 0.1)",
        }}
      />
    </div>
  );
}

export function BentoGrid() {
  const tiles = [
    {
      icon: <Code size={28} />,
      title: "Software Development",
      description:
        "Full-stack development focused on clean code, scalability, and performance optimization.",
      skills: ["React", "JavaScript", "Python", "CI/CD"],
      className: "lg:col-span-2", // Half-width on large screens
    },
    {
      icon: <Network size={28} />,
      title: "Networking",
      description:
        "Comprehensive understanding of IT infrastructure and NOC operations.",
      skills: ["Support", "Infrastructure", "NOC", "Config"],
      className: "lg:col-span-2", // Half-width on large screens
    },
    {
      icon: <Shield size={28} />,
      title: "Cyber Security",
      description:
        "Focus on secure system architecture and proactive incident response.",
      skills: ["Response", "Foundations", "Cisco"],
      className: "lg:col-span-2", // Half-width on large screens
    },
    {
      icon: <Database size={28} />,
      title: "Data Systems",
      description:
        "High-performance relational and non-relational database solutions.",
      skills: ["Postgres", "MySQL", "MongoDB"],
      className: "lg:col-span-2", // Half-width on large screens
    },
  ];

  return (
    <section id="arsenal" className="px-6 py-24 max-w-7xl mx-auto bg-coal">
      <div className="mb-16 text-center lg:text-left">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">
          Technical Arsenal
        </h2>
        <div className="h-1 w-20 bg-electric mb-6 mx-auto lg:mx-0" />
        <p className="font-mono text-xs tracking-widest text-slate-500 uppercase">
          [core.competencies] || Qualified Computer Science & Software Engineer.
        </p>
      </div>

      {/* 4-column grid where each tile takes 2 columns = perfect symmetry */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {tiles.map((tile, i) => (
          <BentoTile
            key={i}
            {...tile}
            // This ensures they are all the same height regardless of content
            className={`${tile.className} min-h-[300px]`}
          />
        ))}
      </div>
    </section>
  );
}

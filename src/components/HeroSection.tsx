import React, { useState, useEffect } from "react";
import profilePic from "../assets/20240604161156612.jpg";

const roles = ["Software Developer", "Aspiring Pentester", "Network Operator"];

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[index % roles.length];
    const timeout = setTimeout(
      () => {
        setDisplayText((prev) =>
          isDeleting
            ? currentFullText.substring(0, prev.length - 1)
            : currentFullText.substring(0, prev.length + 1),
        );

        if (!isDeleting && displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause at end
        } else if (isDeleting && displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-coal">
      {/* 1. Background Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.07) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(59, 130, 246, 0.07) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* 2. Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/20 bg-coal/50 backdrop-blur-md px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-mono">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-electric shadow-[0_0_8px_var(--color-electric)]" />
            <span className="text-sm font-bold tracking-tighter text-white">
              AM_
            </span>
          </div>
          <div className="hidden md:flex gap-10">
            {[
              { name: "Arsenal", id: "arsenal" },
              { name: "Projects", id: "projects" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                className="text-[10px] tracking-[0.3em] text-slate-500 hover:text-terminal transition-colors uppercase"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="text-[10px] text-terminal/60 font-mono hidden sm:block">
            SYS_VER: 1.0.4
          </div>
        </div>
      </nav>

      {/* 3. Main Content Container: Now a Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* THE GRID (Only wraps the two columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* PHOTO COLUMN */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Subtle glow */}
              <div className="absolute -inset-1 bg-electric/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="relative w-64 h-80 md:w-80 md:h-[450px] border-2 border-white/10 bg-coal/50 overflow-hidden">
                <img
                  src={profilePic.src}
                  alt="Alex Marumo"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
                {/* Terminal Scanline Overlay */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-terminal/40 shadow-[0_0_10px_var(--color-terminal)] animate-[scan_4s_linear_infinite]" />
              </div>
            </div>
          </div>

          {/* TEXT COLUMN */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <span className="px-4 py-2 border-2 border-terminal text-terminal tracking-[0.2em] font-mono bg-terminal/5 uppercase shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                [ALEX_MARUMO]
              </span>
            </div>
            <h1 className="mb-8 font-headline text-white leading-[1.1] text-[clamp(1.5rem,4vw,3rem)] font-bold">
              Software Developer by day,
              <br />
              <span className="text-primary">Cyber Security Enthusiast</span> by
              night.
              <br />
              <span className="text-electric drop-shadow-[0_0_8px_rgba(59,130,246,0.4)] inline-block min-h-[1.2em] text-xl md:text-3xl font-mono mt-2">
                {displayText}
                <span className="ml-1 inline-block w-1 h-6 md:h-8 bg-electric animate-pulse align-middle" />
              </span>
            </h1>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto lg:mx-0 font-body text-lg leading-relaxed">
              Detail-oriented Computer Science and Software Engineering Graduate
              with a strong foundation in networking, and software development.
              Eager to contribute to innovative IT solutions and continuously
              grow professionally.
            </p>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {/* Action: Scroll to Projects Section */}
              <a
                href="#projects"
                className="px-8 py-4 bg-electric text-white font-mono font-bold transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-0 active:translate-y-0 shadow-[8px_8px_0px_rgba(59,130,246,0.2)] hover:shadow-[12px_12px_0px_rgba(59,130,246,0.2)] inline-block text-center cursor-pointer"
              >
                exec_projects
              </a>

              {/* Action: Scroll to Contact Section */}
              <a
                href="#contact"
                className="px-8 py-4 border border-white/20 hover:border-terminal hover:text-terminal transition-all font-mono shadow-[8px_8px_0px_rgba(255,255,255,0.05)] inline-block text-center cursor-pointer"
              >
                init_contact
              </a>
            </div>
          </div>
        </div>

        {/* THE CENTERED STATUS INDICATOR (Now outside the grid) */}
        <div className="mt-20 flex justify-center w-full font-mono">
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-terminal/20 bg-terminal/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal shadow-[0_0_8px_rgba(34,197,94,1)]"></span>
            </span>
            <span className="text-terminal text-xs tracking-[0.2em] font-bold">
              AVAILABLE FOR WORK
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from "react";

const roles = [
  "Cyber Security Enthusiast",
  "Network Defender",
  "Full-Stack Smith",
];

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
      {/* Background Grid - Keeping it subtle */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, #3B82F6 1px, transparent 1px), 
                              linear-gradient(to bottom, #3B82F6 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <span className="px-4 py-2 border border-terminal/50 text-terminal font-mono text-sm tracking-widest bg-terminal/5 uppercase">
            [system.active]
          </span>
        </div>

        <h1 className="mb-8 font-headline text-white leading-[1.1] text-[clamp(2.5rem,6vw,5rem)] font-bold italic">
          Software Developer by day,
          <br />
          <span className="text-electric drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] inline-block min-h-[1.2em]">
            {displayText}
            <span className="ml-1 inline-block w-1 h-10 bg-electric animate-pulse align-middle" />
          </span>
        </h1>

        <p className="text-slate-400 mb-12 max-w-2xl mx-auto font-body text-lg leading-relaxed">
          Building secure, scalable systems with precision. Specializing in
          full-stack development, defensive security protocols, and
          high-performance code.
        </p>

        <div className="flex flex-wrap gap-6 justify-center">
          <button className="px-8 py-4 bg-electric text-white font-mono font-bold transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-0 active:translate-y-0 shadow-[8px_8px_0px_rgba(59,130,246,0.2)] hover:shadow-[12px_12px_0px_rgba(59,130,246,0.2)]">
            EXEC_PROJECTS
          </button>

          <button className="px-8 py-4 border border-white/20 hover:border-terminal hover:text-terminal transition-all font-mono shadow-[8px_8px_0px_rgba(255,255,255,0.05)]">
            INIT_CONTACT
          </button>
        </div>
      </div>
    </section>
  );
}

// src/components/blocks/ContactSection.tsx
import React from "react";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  FileText,
  ArrowRight,
} from "lucide-react";

export function ContactsSection() {
  const contactLinks = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "alexmarumo16@gmail.com",
      href: "mailto:alexmarumo16@gmail.com",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/alex-marumo",
      href: "https://linkedin.com/in/alex-marumo",
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "github.com/alex-marumo",
      href: "https://github.com/alex-marumo",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Gaborone, BW",
      href: "#",
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        {/* Left Side: Big Headline */}
        <div className="md:w-1/3">
          <h2 className="font-headline text-5xl font-bold text-white italic leading-tight mb-4">
            Get In <br />
            <span className="text-electric">Touch.</span>
          </h2>
          <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">
            [available_for_new_opportunities]
          </p>

          {/* CV Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="group flex items-center justify-between w-full max-w-xs px-6 py-4 bg-white/5 border-white/10 text-white font-mono text-xs tracking-widest hover:bg-electric transition-all shadow-[6px_6px_0px_rgba(255,255,255,0.05)] hover:shadow-[px_8px_0px_rgba(59,130,246,0.2)]"
          >
            <span className="flex items-center gap-3">
              <FileText size={16} />
              DOWNLOAD_CV.PDF
            </span>
            <ArrowRight
              size={16}
              className="group-h:translate-x-1 transition-transform"
            />
          </a>
        </div>

        {/* Right Side: Contact List */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {contactLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="group p-6 bg-white/5 border border-white/10 hover:border-electric/50 transition-all shadow-[4px_4px_0px_rgba(255,255,255,0.05)] hover:shadow-[8px_8px_0px_rgba(59,130,246,0.2)]"
            >
              <div className="text-electric mb-4 group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <p className="font-mono text-[10px] text-slate-500 uppercase mb-1">
                {link.label}
              </p>
              <p className="text-white font-headline text-lg font-medium break-all">
                {link.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

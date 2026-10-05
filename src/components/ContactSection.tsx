"use client";

import React, { useState } from "react";
import { Check, Copy, Download, ExternalLink, Heart, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Handwritten Intro */}
        <div className="mb-6">
          <span className="font-hand text-3xl xs:text-4xl sm:text-6xl text-[var(--ca-ink)] block select-none">
            let's make something together!
          </span>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--ca-green)] animate-ping shrink-0" />
            <span className="font-ca-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)]">
              AVAILABLE FOR ROLES & COLLABORATION
            </span>
          </div>
        </div>

        {/* Contact Card with Pop Shadow */}
        <div className="relative border-2 border-[var(--ca-ink)] bg-white p-5 xs:p-7 sm:p-12 pop-shadow-lg">
          {/* Washi Tape */}
          <div className="ca-tape ca-tape-yellow -top-3.5 left-4 sm:left-12 rotate-[-5deg]" />
          <div className="ca-tape ca-tape-blue -top-3.5 right-4 sm:right-12 rotate-[6deg]" />

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[var(--ca-ink)] tracking-tight mb-3 sm:mb-4">
            Got a project, a hard problem, or want to discuss systems?
          </h2>

          <p className="font-ca-mono text-xs sm:text-sm text-[var(--ca-gray)] mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
            Interested in backend engineering, AI applications, RAG systems, or data platforms? Send a message over — I read every email.
          </p>

          {/* Email Box */}
          <div className="inline-flex flex-col xs:flex-row items-stretch xs:items-center justify-between border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] p-2.5 xs:px-4 xs:py-3 mb-6 sm:mb-8 max-w-md w-full gap-2.5 sm:gap-3 pop-shadow-sm">
            <div className="flex items-center space-x-2.5 text-left truncate justify-center xs:justify-start">
              <Mail className="w-4 h-4 text-[var(--ca-blue)] shrink-0" />
              <a
                href={`mailto:${personalInfo.contact.emailMailto}`}
                className="font-ca-mono text-xs sm:text-sm font-bold text-[var(--ca-ink)] hover:underline truncate"
              >
                {personalInfo.contact.email}
              </a>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-3 py-1 font-ca-mono text-xs font-bold rounded border border-[var(--ca-ink)] bg-white text-[var(--ca-ink)] hover:bg-[var(--ca-yellow)] transition-colors flex items-center justify-center space-x-1 shrink-0 cursor-pointer active:translate-y-0.5"
              aria-label="Copy Email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[var(--ca-green)]" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[var(--ca-gray)]" />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <a
              href={`mailto:${personalInfo.contact.emailMailto}`}
              className="inline-flex items-center justify-center space-x-2 px-4 sm:px-5 py-2.5 border-2 border-[var(--ca-ink)] bg-[var(--ca-ink)] text-white font-ca-mono text-xs font-bold uppercase tracking-wider pop-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              <Mail className="w-4 h-4 text-[var(--ca-pink)]" />
              <span>SEND EMAIL</span>
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-4 sm:px-5 py-2.5 border-2 border-[var(--ca-ink)] bg-[var(--ca-cyan)] text-[var(--ca-ink)] font-ca-mono text-xs font-bold uppercase tracking-wider pop-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LINKEDIN</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-4 sm:px-5 py-2.5 border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] text-[var(--ca-ink)] font-ca-mono text-xs font-bold uppercase tracking-wider pop-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GITHUB</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={personalInfo.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-4 sm:px-5 py-2.5 border-2 border-[var(--ca-ink)] bg-[var(--ca-mint)] text-[var(--ca-ink)] font-ca-mono text-xs font-bold uppercase tracking-wider pop-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              <Download className="w-4 h-4" />
              <span>RESUME PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

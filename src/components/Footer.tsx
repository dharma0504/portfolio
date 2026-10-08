"use client";

import React from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[var(--ca-ink)] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Identity */}
          <div className="space-y-1">
            <div className="font-berghan text-lg tracking-wider text-[var(--ca-ink)]">
              DHARMATEJ MALLAMPATI
            </div>
            <div className="font-ca-mono text-xs text-[var(--ca-gray)]">
              Software Engineer // Backend Systems · AI · Data Engineering
            </div>
            <div className="font-hand text-xl text-[var(--ca-ink)]">
              engineered with precision ✦
            </div>
          </div>

          {/* Links & Copyright */}
          <div className="flex flex-col md:items-end space-y-2 font-ca-mono text-xs">
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2 font-bold text-[var(--ca-ink)]">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--ca-blue)] transition-colors underline"
              >
                GitHub
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--ca-blue)] transition-colors underline"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.contact.emailMailto}`}
                className="hover:text-[var(--ca-blue)] transition-colors underline"
              >
                Email
              </a>
              <a
                href={personalInfo.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--ca-blue)] transition-colors underline"
              >
                Resume
              </a>
            </div>

            <div className="text-[var(--ca-gray)] text-[11px]">
              © 2026 Dharmatej Mallampati · All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

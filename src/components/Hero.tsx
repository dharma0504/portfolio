"use client";

import React from "react";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Download, Sparkles, Terminal } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Scrapbook Header: "my name is" handwritten with squiggle */}
        <div className="flex flex-col items-center justify-center mb-3 sm:mb-4">
          <span className="font-hand text-3xl sm:text-4xl text-[var(--ca-ink)] block select-none">
            my name is
          </span>
          {/* Hand-drawn double underline squiggle */}
          <svg
            className="w-24 h-3 text-[var(--ca-ink)] -mt-1"
            viewBox="0 0 100 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M2 4 C 20 10, 40 2, 60 8 C 80 12, 90 4, 98 6" />
            <path d="M5 9 C 25 12, 45 7, 70 10 C 85 11, 92 8, 95 9" />
          </svg>
        </div>

        {/* Big Name Box with Pinned Stickers (Centered & Symmetrically Balanced) */}
        <div className="flex flex-col items-center justify-center my-4 sm:my-6 w-full">
          <div className="relative inline-flex items-center justify-center max-w-full group">
            {/* Pinned Sticker: Top-Left */}
            <div className="absolute -top-4 sm:-top-6 left-1 sm:-left-4 rotate-[-4deg] z-20 pointer-events-none">
              <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-mint)] font-ca-mono text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)] pop-shadow-sm">
                MADE SYSTEMS
              </span>
            </div>

            {/* Pinned Sticker: Top-Right */}
            <div className="absolute -top-4 sm:-top-6 right-1 sm:-right-4 rotate-[4deg] z-20 pointer-events-none">
              <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow-soft)] font-ca-mono text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)] pop-shadow-sm">
                SWEAT THE DETAILS
              </span>
            </div>

            {/* Center Name Box in Berghan Font */}
            <div
              className="ca-doodle-box relative flex items-center justify-center text-center border-[2.5px] sm:border-[3.5px] px-6 py-2.5 xs:px-10 xs:py-3.5 sm:px-16 sm:py-5 bg-[var(--ca-surface)] shadow-md max-w-full transition-transform hover:scale-[1.01] duration-200"
              style={{ borderColor: "var(--ca-orange)" }}
            >
              <span className="font-berghan text-[36px] xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-normal text-[var(--ca-ink)] leading-none select-none block uppercase text-center mx-auto">
                DHARMATEJ
              </span>
            </div>

            {/* Pinned Sticker: Bottom-Left */}
            <div className="absolute -bottom-3.5 sm:-bottom-5 left-1 sm:-left-3 rotate-[-3deg] z-20 pointer-events-none">
              <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] font-hand text-xs xs:text-sm sm:text-lg font-bold text-[var(--ca-ink)] pop-shadow-sm">
                Software Engineer
              </span>
            </div>

            {/* Status Badge: Bottom-Center */}
            <div className="hidden sm:inline-block absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
              <span className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full border border-[var(--ca-ink)] bg-[var(--ca-surface)] font-ca-mono text-[11px] font-bold text-[var(--ca-ink)] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[var(--ca-blue)] animate-pulse" />
                <span>OPEN TO OPPORTUNITIES · 2026 GRADUATE</span>
              </span>
            </div>

            {/* Pinned Sticker: Bottom-Right */}
            <div className="absolute -bottom-3.5 sm:-bottom-5 right-1 sm:-right-3 rotate-[3deg] z-20 pointer-events-none">
              <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded border-2 border-[var(--ca-ink)] bg-[var(--ca-mint)] font-ca-mono text-[9px] xs:text-[10px] sm:text-xs font-bold text-[var(--ca-ink)] pop-shadow-sm">
                Bangalore, IN
              </span>
            </div>
          </div>
        </div>

        {/* Main Editorial Statement */}
        <div className="mt-10 sm:mt-14 max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <h1 className="font-heading font-extrabold text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-[var(--ca-ink)] leading-[1.2] tracking-tight">
            I build software systems that{" "}
            <span className="inline-flex items-center mx-0.5 sm:mx-1 align-middle">
              <span className="inline-block w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-[var(--ca-green)] border-2 border-[var(--ca-ink)] p-1 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </span>
            </span>{" "}
            power data & AI.{" "}
            <span className="inline-flex items-center mx-0.5 sm:mx-1 align-middle">
              <span className="inline-block w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-[var(--ca-magenta)] border-2 border-[var(--ca-ink)] p-1 text-white">
                <Sparkles className="w-full h-full" />
              </span>
            </span>
          </h1>

          <p className="font-ca-mono text-xs sm:text-sm text-[var(--ca-gray)] max-w-2xl mx-auto leading-relaxed px-1">
            Computer Science graduate (CGPA 9.61) focused on production-oriented engineering across backend architectures, Generative AI, RAG retrieval platforms, and Delta Lake pipelines.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 mt-7 sm:mt-8 w-full max-w-xs xs:max-w-none mx-auto">
          <Link
            href="/#contact"
            className="w-full xs:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-none border-2 border-[var(--ca-ink)] bg-[var(--ca-ink)] text-white font-ca-mono text-xs sm:text-sm font-bold uppercase tracking-wider pop-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
          >
            <span>CONTACT ME</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={personalInfo.contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full xs:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-none border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] text-[var(--ca-ink)] font-ca-mono text-xs sm:text-sm font-bold uppercase tracking-wider pop-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
          >
            <span>DOWNLOAD RESUME</span>
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

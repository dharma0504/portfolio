"use client";

import React from "react";
import Image from "next/image";

export default function WhatsUpSection() {
  return (
    <section
      id="about-intro"
      className="w-full py-12 md:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-Column Layout: Left Polaroid, Center Bio & Badges, Right Polaroid */}
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_250px] xl:grid-cols-[270px_1fr_270px] gap-8 lg:gap-8 items-center justify-items-center">

          {/* Left Polaroid: 2026 Portrait */}
          <div className="relative group cursor-pointer transition-all duration-300 ease-out transform -rotate-3 sm:-rotate-6 hover:rotate-0 hover:scale-105 z-10 hover:z-20 w-[200px] xs:w-[230px] sm:w-[250px] order-2 lg:order-1">
            {/* Top-Left Blue Washi Tape */}
            <div className="ca-tape ca-tape-blue -top-3.5 -left-2 sm:-left-3 -rotate-30" />
            {/* Top-Right Yellow Washi Tape */}
            <div className="ca-tape ca-tape-yellow -top-3.5 -right-2 sm:-right-3 rotate-30" />

            {/* Polaroid Frame */}
            <div className="bg-white border-2 border-[var(--ca-ink)] p-2.5 sm:p-3 pb-6 sm:pb-8 shadow-[4px_6px_0px_var(--ca-shadow)] sm:shadow-[5px_7px_0px_var(--ca-shadow)] group-hover:shadow-[7px_11px_0px_var(--ca-shadow)] transition-shadow">
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-[var(--ca-ink)]/20 bg-[var(--ca-surface)]">
                <Image
                  src="/pics/dharmatej_portrait.jpg"
                  alt="Dharmatej Mallampati"
                  fill
                  sizes="(max-width: 640px) 200px, 250px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Bottom Handwritten Caption */}
              <div className="mt-2.5 text-center">
                <p className="font-hand text-lg sm:text-xl text-[var(--ca-ink)] font-bold select-none leading-none">
                  2026
                </p>
              </div>
            </div>
          </div>

          {/* Center Column: what's up box + Handwritten paragraph + 4 Torn Paper Badges */}
          <div className="flex flex-col items-center text-center max-w-xl mx-auto order-1 lg:order-2 w-full">
            {/* "what's up" Box */}
            <div className="inline-block border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)]/90 backdrop-blur-xs px-5 sm:px-6 py-1 shadow-[2px_2px_0px_var(--ca-shadow)] mb-5 sm:mb-8 select-none rotate-[-0.5deg]">
              <span className="font-heading font-medium text-base sm:text-xl text-[var(--ca-ink)] tracking-tight">
                what&apos;s up
              </span>
            </div>

            {/* Handwritten Bio Paragraph */}
            <p className="font-hand text-xl xs:text-2xl sm:text-3xl md:text-[32px] text-[var(--ca-ink)] leading-snug sm:leading-relaxed select-none mb-6 sm:mb-10 px-1 sm:px-4">
              I&apos;m a software engineer who gets a little too excited about making
              complicated systems feel simple. ✨ I care about the small details, the edge
              cases everyone forgets, and the little engineering decisions that turn
              something that works into something worth keeping.
            </p>

            {/* 4 Colored Torn Paper Ribbon Badges with Emoji Stamps */}
            <div className="flex flex-col gap-3.5 sm:gap-4 w-full max-w-md mx-auto">
              {/* Row 1: Yellow (Backend Systems 🎨) + Green (Gen AI & RAG 🧩) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                {/* Yellow Ribbon + Palette Square */}
                <div className="flex items-center gap-2">
                  <div className="bg-[#fec83b] text-[var(--ca-ink)] font-heading font-bold text-sm sm:text-base px-5 py-2.5 torn-ribbon shadow-sm select-none min-w-[155px] text-center">
                    Backend Systems
                  </div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#fec83b] torn-sticker shadow-sm flex items-center justify-center text-lg sm:text-xl select-none flex-shrink-0">
                    🎨
                  </div>
                </div>

                {/* Green Ribbon + Puzzle Square */}
                <div className="flex items-center gap-2">
                  <div className="bg-[#10b981] text-white font-heading font-bold text-sm sm:text-base px-5 py-2.5 torn-ribbon shadow-sm select-none min-w-[145px] text-center">
                    Gen AI & RAG
                  </div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#10b981] torn-sticker shadow-sm flex items-center justify-center text-lg sm:text-xl select-none flex-shrink-0">
                    🧩
                  </div>
                </div>
              </div>

              {/* Row 2: Pink (Distributed Pipelines 👀) + Blue (System Architecture 💡) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                {/* Pink Ribbon + Eyes Square */}
                <div className="flex items-center gap-2">
                  <div className="bg-[#ff4b82] text-white font-heading font-bold text-sm sm:text-base px-5 py-2.5 torn-ribbon shadow-sm select-none min-w-[155px] text-center">
                    Data Pipelines
                  </div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#ff4b82] torn-sticker shadow-sm flex items-center justify-center text-lg sm:text-xl select-none flex-shrink-0">
                    👀
                  </div>
                </div>

                {/* Blue Ribbon + Lightbulb Square */}
                <div className="flex items-center gap-2">
                  <div className="bg-[#2b66e2] text-white font-heading font-bold text-sm sm:text-base px-5 py-2.5 torn-ribbon shadow-sm select-none min-w-[145px] text-center">
                    System Architecture
                  </div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#2b66e2] torn-sticker shadow-sm flex items-center justify-center text-lg sm:text-xl select-none flex-shrink-0">
                    💡
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Polaroid: My Workspace */}
          <div className="relative group cursor-pointer transition-all duration-300 ease-out transform rotate-6 hover:rotate-0 hover:scale-105 z-10 hover:z-20 w-[220px] sm:w-[250px] order-3">
            {/* Top-Left Blue Washi Tape */}
            <div className="ca-tape ca-tape-blue -top-3.5 -left-3 -rotate-25" />
            {/* Top-Right Yellow Washi Tape */}
            <div className="ca-tape ca-tape-yellow -top-3.5 -right-3 rotate-30" />

            {/* Polaroid Frame */}
            <div className="bg-white border-2 border-[var(--ca-ink)] p-2.5 sm:p-3 pb-7 sm:pb-8 shadow-[5px_7px_0px_var(--ca-shadow)] group-hover:shadow-[7px_11px_0px_var(--ca-shadow)] transition-shadow">
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-[var(--ca-ink)]/20 bg-[var(--ca-surface)]">
                <Image
                  src="/pics/office_moment.jpg"
                  alt="My Workspace"
                  fill
                  sizes="(max-width: 640px) 220px, 250px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Bottom Handwritten Caption */}
              <div className="mt-2.5 text-center">
                <p className="font-hand text-lg sm:text-xl text-[var(--ca-ink)] font-bold select-none leading-none">
                  my workspace
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

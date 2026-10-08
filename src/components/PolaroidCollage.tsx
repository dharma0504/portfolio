"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, Sparkles, X, ZoomIn } from "lucide-react";

interface PolaroidItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  date: string;
  rotation: string;
  tapeColor: "blue" | "yellow" | "pink";
  tapePosition: string;
  badge?: string;
}

const polaroids: PolaroidItem[] = [
  {
    id: "presentation",
    src: "/pics/graduation_day.jpg",
    title: "Graduation Day 🎓",
    subtitle: "Cohort Celebration on Stage",
    date: "DELOITTE · AUG 2024",
    rotation: "-rotate-3 hover:rotate-0",
    tapeColor: "blue",
    tapePosition: "-top-3 left-1/3 -rotate-3",
    badge: "COHORT 2024",
  },
  {
    id: "office_moment",
    src: "/pics/office_moment.jpg",
    title: "Stage Ceremony 🏆",
    subtitle: "Receiving Honors from Leadership",
    date: "BANGALORE HQ",
    rotation: "rotate-4 hover:rotate-0",
    tapeColor: "yellow",
    tapePosition: "-top-3 right-6 rotate-6",
  },
  {
    id: "deloitte_team",
    src: "/pics/deloitte_team.jpg",
    title: "Top 5 / 17 Teams ⭐",
    subtitle: "Certificate & Star Trophy",
    date: "HASHEDIN BY DELOITTE",
    rotation: "-rotate-2 hover:rotate-0",
    tapeColor: "pink",
    tapePosition: "-top-3 left-8 -rotate-3",
    badge: "★ TOP 5 AWARD",
  },
];

export default function PolaroidCollage() {
  const [activePhoto, setActivePhoto] = useState<PolaroidItem | null>(null);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Scrapbook Section Tag */}
      <div className="w-full flex items-center justify-between mb-3 px-1">
        <div className="flex items-center space-x-2">
          <span className="font-hand text-2xl sm:text-3xl text-[var(--ca-ink)] select-none">
            memories from the field 📸
          </span>
        </div>
        <span className="font-ca-mono text-[10px] sm:text-xs font-bold px-2 py-0.5 border border-[var(--ca-ink)] bg-[var(--ca-yellow)] text-[var(--ca-ink)] rounded pop-shadow-sm select-none">
          SNAPSHOT COLLAGE
        </span>
      </div>

      {/* Collage Area with overlapping Polaroids */}
      <div className="relative w-full max-w-[320px] xs:max-w-[400px] sm:max-w-[460px] h-[480px] xs:h-[520px] sm:h-[560px] my-auto select-none">
        {/* Background Corkboard/Doodle Pin Accent */}
        <div className="absolute inset-0 border-2 border-dashed border-[var(--ca-ink)]/20 bg-white/40 rounded-xl pointer-events-none -rotate-1" />

        {/* Polaroid 1: Top Left (Graduation Day) */}
        <div
          onClick={() => setActivePhoto(polaroids[0])}
          className={`absolute top-2 left-1 xs:left-2 sm:left-4 w-[165px] xs:w-[195px] sm:w-[235px] cursor-pointer group z-10 hover:z-40 transition-all duration-300 ease-out transform ${polaroids[0].rotation} hover:scale-105`}
        >
          {/* Pushpin at top left */}
          <div className="absolute -top-2 left-3 w-4 h-4 rounded-full bg-red-500 border border-[var(--ca-ink)] shadow-md z-30 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
          </div>

          {/* Washi Tape */}
          <div className={`ca-tape ca-tape-${polaroids[0].tapeColor} ${polaroids[0].tapePosition}`} />

          {/* Polaroid Card Body */}
          <div className="bg-white border-2 border-[var(--ca-ink)] p-2 sm:p-2.5 pb-5 sm:pb-7 shadow-[3px_5px_0px_rgba(25,21,16,0.85)] sm:shadow-[4px_6px_0px_rgba(25,21,16,0.85)] group-hover:shadow-[6px_10px_0px_rgba(25,21,16,0.9)] transition-shadow">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-[var(--ca-ink)]/20 bg-[var(--ca-surface)]">
              <Image
                src={polaroids[0].src}
                alt={polaroids[0].title}
                fill
                sizes="(max-width: 640px) 195px, 240px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-white/90 border border-[var(--ca-ink)] px-2 py-0.5 rounded text-[10px] font-ca-mono font-bold text-[var(--ca-ink)] flex items-center gap-1 pop-shadow-sm transition-opacity">
                  <ZoomIn className="w-3 h-3" /> View
                </span>
              </div>
            </div>

            {/* Polaroid Chin / Handwritten Caption */}
            <div className="mt-2 text-center">
              <p className="font-hand text-sm xs:text-base sm:text-lg text-[var(--ca-ink)] font-bold leading-tight">
                {polaroids[0].title}
              </p>
              <p className="font-ca-mono text-[8px] xs:text-[9px] sm:text-[10px] text-[var(--ca-gray)] tracking-wider uppercase mt-0.5">
                {polaroids[0].date}
              </p>
            </div>
          </div>
        </div>

        {/* Polaroid 2: Top Right (Receiving Honor on Stage) - Overlapping Polaroid 1 */}
        <div
          onClick={() => setActivePhoto(polaroids[1])}
          className={`absolute top-14 xs:top-18 sm:top-20 right-1 xs:right-2 sm:right-4 w-[165px] xs:w-[195px] sm:w-[235px] cursor-pointer group z-20 hover:z-40 transition-all duration-300 ease-out transform ${polaroids[1].rotation} hover:scale-105`}
        >
          {/* Washi Tape */}
          <div className={`ca-tape ca-tape-${polaroids[1].tapeColor} ${polaroids[1].tapePosition}`} />

          {/* Polaroid Card Body */}
          <div className="bg-white border-2 border-[var(--ca-ink)] p-2 sm:p-2.5 pb-5 sm:pb-7 shadow-[3px_5px_0px_rgba(25,21,16,0.85)] sm:shadow-[4px_6px_0px_rgba(25,21,16,0.85)] group-hover:shadow-[6px_10px_0px_rgba(25,21,16,0.9)] transition-shadow">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-[var(--ca-ink)]/20 bg-[var(--ca-surface)]">
              <Image
                src={polaroids[1].src}
                alt={polaroids[1].title}
                fill
                sizes="(max-width: 640px) 195px, 240px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-white/90 border border-[var(--ca-ink)] px-2 py-0.5 rounded text-[10px] font-ca-mono font-bold text-[var(--ca-ink)] flex items-center gap-1 pop-shadow-sm transition-opacity">
                  <ZoomIn className="w-3 h-3" /> View
                </span>
              </div>
            </div>

            {/* Polaroid Chin / Handwritten Caption */}
            <div className="mt-2 text-center">
              <p className="font-hand text-sm xs:text-base sm:text-lg text-[var(--ca-ink)] font-bold leading-tight">
                {polaroids[1].title}
              </p>
              <p className="font-ca-mono text-[8px] xs:text-[9px] sm:text-[10px] text-[var(--ca-gray)] tracking-wider uppercase mt-0.5">
                {polaroids[1].date}
              </p>
            </div>
          </div>
        </div>

        {/* Polaroid 3: Bottom Center (Top 5 / 17 Teams Award Certificate & Star Trophy) - Overlapping Polaroid 1 & 2 */}
        <div
          onClick={() => setActivePhoto(polaroids[2])}
          className={`absolute top-[230px] xs:top-[260px] sm:top-[280px] left-3 xs:left-8 sm:left-14 w-[175px] xs:w-[205px] sm:w-[245px] cursor-pointer group z-30 hover:z-40 transition-all duration-300 ease-out transform ${polaroids[2].rotation} hover:scale-105`}
        >
          {/* Washi Tape */}
          <div className={`ca-tape ca-tape-${polaroids[2].tapeColor} ${polaroids[2].tapePosition}`} />

          {/* Star sticker badge pinned to corner */}
          <div className="absolute -bottom-2 -right-1.5 px-2 py-0.5 rounded-full bg-[var(--ca-yellow)] border border-[var(--ca-ink)] text-[9px] sm:text-[10px] font-ca-mono font-bold text-[var(--ca-ink)] pop-shadow-sm rotate-6 z-40 select-none flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[var(--ca-orange)] fill-[var(--ca-orange)]" />
            <span>TOP 5 AWARD</span>
          </div>

          {/* Polaroid Card Body */}
          <div className="bg-white border-2 border-[var(--ca-ink)] p-2 sm:p-2.5 pb-5 sm:pb-7 shadow-[4px_6px_0px_rgba(25,21,16,0.9)] sm:shadow-[5px_8px_0px_rgba(25,21,16,0.9)] group-hover:shadow-[7px_12px_0px_rgba(25,21,16,0.95)] transition-shadow">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-[var(--ca-ink)]/20 bg-[var(--ca-surface)]">
              <Image
                src={polaroids[2].src}
                alt={polaroids[2].title}
                fill
                sizes="(max-width: 640px) 205px, 245px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-white/90 border border-[var(--ca-ink)] px-2 py-0.5 rounded text-[10px] font-ca-mono font-bold text-[var(--ca-ink)] flex items-center gap-1 pop-shadow-sm transition-opacity">
                  <ZoomIn className="w-3 h-3" /> View
                </span>
              </div>
            </div>

            {/* Polaroid Chin / Handwritten Caption */}
            <div className="mt-2 text-center">
              <p className="font-hand text-sm xs:text-base sm:text-lg text-[var(--ca-ink)] font-bold leading-tight">
                {polaroids[2].title}
              </p>
              <p className="font-ca-mono text-[8px] xs:text-[9px] sm:text-[10px] text-[var(--ca-gray)] tracking-wider uppercase mt-0.5">
                {polaroids[2].date}
              </p>
            </div>
          </div>
        </div>

        {/* Small Handwritten Hint */}
        <div className="absolute -bottom-3 right-2 xs:right-4 font-hand text-xs sm:text-sm text-[var(--ca-gray)] select-none rotate-[-2deg]">
          tap photo to view full size ↗
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[var(--ca-surface)] border-2 sm:border-3 border-[var(--ca-ink)] p-3.5 sm:p-6 max-w-lg w-full pop-shadow-lg max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-200"
          >
            {/* Washi Tape on top */}
            <div className="ca-tape ca-tape-yellow -top-3.5 left-1/2 -translate-x-1/2 rotate-[-1deg]" />

            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-2.5 right-2.5 p-1.5 border border-[var(--ca-ink)] bg-[var(--ca-surface)] hover:bg-[var(--ca-pink)] rounded text-[var(--ca-ink)] pop-shadow-sm transition-colors cursor-pointer"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative w-full aspect-[3/4] max-h-[65vh] overflow-hidden border-2 border-[var(--ca-ink)] bg-black/5 mt-2">
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-4 pt-3 border-t-2 border-[var(--ca-ink)] flex items-center justify-between">
              <div>
                <h4 className="font-heading font-extrabold text-lg text-[var(--ca-ink)]">
                  {activePhoto.title}
                </h4>
                <p className="font-ca-mono text-xs text-[var(--ca-gray)]">
                  {activePhoto.subtitle} · {activePhoto.date}
                </p>
              </div>
              <span className="font-ca-mono text-xs px-2.5 py-1 rounded border border-[var(--ca-ink)] bg-[var(--ca-mint)] font-bold text-[var(--ca-ink)]">
                DELOITTE 2024
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

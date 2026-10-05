"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { skillCategories } from "@/data/portfolioData";

export default function TechnicalFocus() {
  const [hoveredSkill, setHoveredSkill] = useState<{
    name: string;
    projects: string[];
  } | null>(null);

  // Category chip background colors
  const categoryColors = [
    "bg-[var(--ca-yellow)]",
    "bg-[var(--ca-mint)]",
    "bg-[var(--ca-cyan)]",
    "bg-[var(--ca-pink-soft)]",
    "bg-[var(--ca-yellow-soft)]",
    "bg-[var(--ca-chrome)]",
  ];

  return (
    <section id="skills" className="py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Handwritten Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="font-hand text-3xl sm:text-5xl text-[var(--ca-ink)] block select-none">
              my technical toolkit!
            </span>
            <div className="flex items-center space-x-2 sm:space-x-3 mt-1 flex-wrap gap-y-1">
              <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--ca-ink)] uppercase tracking-tight">
                TECHNICAL FOCUS
              </h2>
              <span className="px-2.5 py-0.5 rounded-full border border-[var(--ca-ink)] bg-[var(--ca-cyan)] font-ca-mono text-[11px] sm:text-xs font-bold text-[var(--ca-ink)]">
                VERIFIED SKILLS
              </span>
            </div>
          </div>

          {/* Interactive Inspection Badge */}
          <div className="border-2 border-[var(--ca-ink)] bg-white px-3.5 py-2 font-ca-mono text-xs text-[var(--ca-ink)] pop-shadow-sm min-h-[44px] flex items-center">
            {hoveredSkill ? (
              <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                <span className="font-bold underline">{hoveredSkill.name}</span>
                <span>→</span>
                <span className="text-[var(--ca-blue)] font-bold">
                  Used in: {hoveredSkill.projects.join(" · ")}
                </span>
              </div>
            ) : (
              <span className="text-[var(--ca-gray)]">
                Hover or tap any sticker to inspect project context ✦
              </span>
            )}
          </div>
        </div>

        {/* 6 Category Sticker Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, cIdx) => (
            <div
              key={category.title}
              className="relative border-2 border-[var(--ca-ink)] bg-white p-4 sm:p-5 pop-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-2.5 sm:pb-3 mb-3.5 sm:mb-4 border-b-2 border-[var(--ca-ink)]">
                <span className="font-ca-mono text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)]">
                  {category.title}
                </span>
                <span className="font-ca-mono text-[10px] px-2 py-0.5 rounded-full border border-[var(--ca-ink)] bg-[var(--ca-surface)]">
                  {category.skills.length} SKILLS
                </span>
              </div>

              {/* Skills Pill Stickers */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill) => {
                  const isHovered = hoveredSkill?.name === skill.name;
                  return (
                    <button
                      key={skill.name}
                      type="button"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      onClick={() =>
                        setHoveredSkill((prev) => (prev?.name === skill.name ? null : skill))
                      }
                      className={`px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-ca-mono font-bold border border-[var(--ca-ink)] transition-all cursor-pointer ${
                        isHovered
                          ? "bg-[var(--ca-ink)] text-white pop-shadow-sm -translate-y-0.5"
                          : `${categoryColors[cIdx % categoryColors.length]} text-[var(--ca-ink)] hover:pop-shadow-sm active:translate-y-0.5`
                      }`}
                    >
                      {skill.name}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

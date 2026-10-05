"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projectsData";

export default function SelectedWork() {
  return (
    <section id="work" className="py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Handwritten Section Intro */}
        <div className="text-left mb-8 sm:mb-16">
          <span className="font-hand text-3xl sm:text-5xl text-[var(--ca-ink)] block select-none">
            explore my work!
          </span>
          <div className="flex items-center space-x-2 sm:space-x-3 mt-1 flex-wrap gap-y-1">
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--ca-ink)] uppercase tracking-tight">
              SELECTED WORK & SYSTEMS
            </h2>
            <span className="inline-block px-2 py-0.5 rounded-full border border-[var(--ca-ink)] bg-[var(--ca-yellow)] font-ca-mono text-[10px] sm:text-xs font-bold">
              3 PLATFORMS
            </span>
          </div>
          <p className="font-ca-mono text-xs sm:text-sm text-[var(--ca-gray)] mt-1.5 max-w-xl leading-relaxed">
            Inspect the systems — folder tabs stack and overlay as you browse through each project.
          </p>
        </div>

        {/* Sticky Folder Tab Cards Container */}
        <div className="flex flex-col gap-8 sm:gap-14 lg:gap-16 pt-2 sm:pt-6 pb-8 sm:pb-16">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { Project } from "@/types";
import AgentFactoryFlow from "./diagrams/AgentFactoryFlow";
import NexusArchitecture from "./diagrams/NexusArchitecture";
import TheLookPipeline from "./diagrams/TheLookPipeline";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Theme card colors according to Creative Artsy palette
  const getTheme = () => {
    switch (project.id) {
      case "ai-agent-factory":
        return {
          bgColor: "var(--ca-blue)",
          textColor: "#ffffff",
          subTextColor: "rgba(255, 255, 255, 0.88)",
          tapeColor: "ca-tape-yellow",
          tagBg: "bg-white text-[var(--ca-ink)]",
        };
      case "nexus":
        return {
          bgColor: "var(--ca-ink)",
          textColor: "#ffffff",
          subTextColor: "rgba(255, 255, 255, 0.88)",
          tapeColor: "ca-tape-blue",
          tagBg: "bg-[var(--ca-yellow)] text-[var(--ca-ink)]",
        };
      case "thelook":
        return {
          bgColor: "var(--ca-yellow)",
          textColor: "var(--ca-ink)",
          subTextColor: "rgba(25, 21, 16, 0.88)",
          tapeColor: "ca-tape",
          tagBg: "bg-[var(--ca-ink)] text-white",
        };
      default:
        return {
          bgColor: "var(--ca-ink)",
          textColor: "#ffffff",
          subTextColor: "rgba(255, 255, 255, 0.85)",
          tapeColor: "ca-tape",
          tagBg: "bg-white text-[var(--ca-ink)]",
        };
    }
  };

  const theme = getTheme();

  // Precise mathematical tab step calculation so Project 1, 2, and 3 lie flush on each other
  // On desktop: Tab width is 250px, slope is 48px -> Step is exactly 202px
  // On tablet: Tab width is 115px, slope is 20px -> Step is exactly 95px
  // On mobile: Tab width is 94px, slope is 18px -> Step is exactly 76px
  const getTabMarginClass = () => {
    if (index === 0) return "ml-0";
    if (index === 1) return "ml-[76px] xs:ml-[95px] sm:ml-[202px]";
    return "ml-[152px] xs:ml-[190px] sm:ml-[404px]";
  };

  const getTabClipPath = () => {
    if (index === 0) {
      return "[clip-path:polygon(0_0,calc(100%-16px)_0,100%_100%,0_100%)] xs:[clip-path:polygon(0_0,calc(100%-20px)_0,100%_100%,0_100%)] sm:[clip-path:polygon(0_0,calc(100%-48px)_0,100%_100%,0_100%)]";
    }
    return "[clip-path:polygon(16px_0,calc(100%-16px)_0,100%_100%,0_100%)] xs:[clip-path:polygon(20px_0,calc(100%-20px)_0,100%_100%,0_100%)] sm:[clip-path:polygon(48px_0,calc(100%-48px)_0,100%_100%,0_100%)]";
  };

  const renderDiagram = () => {
    switch (project.id) {
      case "ai-agent-factory":
        return <AgentFactoryFlow />;
      case "nexus":
        return <NexusArchitecture />;
      case "thelook":
        return <TheLookPipeline />;
      default:
        return null;
    }
  };

  return (
    <article
      id={`project-${project.slug}`}
      className="relative lg:sticky lg:top-20"
      style={{ zIndex: (index + 1) * 10 }}
    >
      {/* Folder Tab at Top - Shingled side-by-side with exact mathematical alignment */}
      <div className={`flex ${getTabMarginClass()}`}>
        <a
          href={`#project-${project.slug}`}
          className={`w-[94px] xs:w-[115px] sm:w-[250px] inline-flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-2.5 py-2 xs:py-2.5 sm:py-3.5 pl-2 xs:pl-3 sm:pl-7 pr-3 xs:pr-4 sm:pr-8 text-[10px] xs:text-[11px] sm:text-sm font-ca-mono font-bold uppercase tracking-wider sm:tracking-[0.2em] border-t-2 border-x-2 border-[var(--ca-ink)] shadow-md select-none transition-transform hover:-translate-y-0.5 ${getTabClipPath()}`}
          style={{
            backgroundColor: theme.bgColor,
            color: theme.textColor,
          }}
        >
          <Sparkles className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 shrink-0" />
          <span className="truncate">Proj {project.number}</span>
        </a>
      </div>

      {/* Main Folder Card Body */}
      <div
        className="grid grid-cols-1 gap-6 p-4 xs:p-6 sm:p-8 lg:grid-cols-[1fr_1.15fr] lg:gap-8 lg:p-8 xl:p-10 border-2 border-[var(--ca-ink)] shadow-xl sm:shadow-2xl relative -mt-[2px] min-h-0 lg:min-h-[760px]"
        style={{
          backgroundColor: theme.bgColor,
          color: theme.textColor,
        }}
      >
        {/* Washi Tape Strip on Corner */}
        <div className={`ca-tape ${theme.tapeColor} -top-3.5 right-4 sm:right-8 rotate-[4deg]`} />

        {/* Left Column: Project Details */}
        <div className="flex flex-col justify-between space-y-5 sm:space-y-6 h-full">
          <div className="space-y-3.5 sm:space-y-4">
            {/* Date Tag */}
            <div className="flex items-center space-x-2 font-ca-mono text-xs font-bold uppercase tracking-[0.2em] opacity-90">
              <span className="w-2.5 h-2.5 rounded-full bg-current shrink-0" />
              <span>PRODUCTION // 2026</span>
            </div>

            {/* Title & Tagline */}
            <div>
              <h3 className="font-heading font-extrabold text-2xl xs:text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                {project.title}
              </h3>
              <div
                className={`font-hand text-xl sm:text-2xl font-bold mt-1 ${
                  index === 2 ? "text-[var(--ca-blue)]" : "text-[var(--ca-mint)]"
                }`}
              >
                {project.subtitle}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base leading-relaxed max-w-lg" style={{ color: theme.subTextColor }}>
              {project.description}
            </p>

            {/* Capabilities Checkpoints */}
            <div className="space-y-1.5 pt-2 border-t border-current/20">
              {project.capabilities.slice(0, 3).map((cap, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs font-ca-mono opacity-90">
                  <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            {/* View Project Link Button */}
            <div className="pt-2">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 font-ca-mono text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] border-b-2 border-current pb-1 hover:opacity-80 transition-opacity"
              >
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Technology Pills with Angled Cut-out */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 sm:pt-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`px-2.5 sm:px-3 py-1 font-ca-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-[var(--ca-ink)] [clip-path:polygon(0_25%,10%_0,100%_0,100%_100%,0_100%)] ${theme.tagBg}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Architecture Diagram Console with Washi Tape */}
        <div className="relative w-full self-center mt-2 lg:mt-0">
          {/* Washi Tape on Console Corner */}
          <div className="ca-tape ca-tape-yellow -top-3.5 left-4 sm:left-6 rotate-[-5deg]" />
          <div className="ca-tape ca-tape-blue -bottom-3.5 right-4 sm:right-6 rotate-[3deg]" />

          <div className="border-2 border-[var(--ca-ink)] rounded-lg overflow-hidden shadow-md text-[var(--ca-ink)] bg-white">
            {renderDiagram()}
          </div>
        </div>
      </div>
    </article>
  );
}

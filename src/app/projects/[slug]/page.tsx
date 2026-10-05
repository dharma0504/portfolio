import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgentFactoryFlow from "@/components/diagrams/AgentFactoryFlow";
import NexusArchitecture from "@/components/diagrams/NexusArchitecture";
import TheLookPipeline from "@/components/diagrams/TheLookPipeline";
import { projectsData } from "@/data/projectsData";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Dharmatej Mallampati`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

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
    <div className="min-h-screen max-w-[1360px] mx-auto ca-grid border-x-0 xl:border-x-2 border-[var(--ca-ink)] shadow-2xl flex flex-col justify-between selection:bg-[var(--ca-yellow)] selection:text-[var(--ca-ink)]">
      <Navbar />

      <main className="max-w-5xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-16 w-full space-y-6 sm:space-y-10">
        {/* Back Link */}
        <div>
          <Link
            href="/#work"
            className="inline-flex items-center space-x-1.5 font-ca-mono text-xs font-bold text-[var(--ca-ink)] hover:text-[var(--ca-blue)] transition-colors py-1"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span>← BACK TO SELECTED WORK</span>
          </Link>
        </div>

        {/* Project Header Folder Card with Washi Tape */}
        <div className="relative border-2 border-[var(--ca-ink)] bg-white p-4 xs:p-6 sm:p-10 pop-shadow-lg">
          <div className="ca-tape ca-tape-yellow -top-3.5 left-4 sm:left-10 rotate-[-5deg]" />
          <div className="ca-tape ca-tape-blue -top-3.5 right-4 sm:right-10 rotate-[4deg]" />

          <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 sm:pb-4 mb-3 sm:mb-4 border-b-2 border-[var(--ca-ink)]">
            <div className="flex items-center space-x-2 flex-wrap gap-y-1">
              <span className="font-ca-mono text-xs font-bold text-[var(--ca-ink)] px-2.5 py-1 border border-[var(--ca-ink)] bg-[var(--ca-yellow)]">
                PROJECT {project.number}
              </span>
              <span className="font-ca-mono text-xs text-[var(--ca-blue)] uppercase font-bold">
                {project.subtitle}
              </span>
            </div>
            <div className="font-ca-mono text-[10px] sm:text-[11px] text-[var(--ca-gray)]">
              PRODUCTION_CASE_STUDY // 2026
            </div>
          </div>

          <h1 className="font-heading font-extrabold text-2xl xs:text-3xl sm:text-5xl text-[var(--ca-ink)] tracking-tight mb-2">
            {project.title}
          </h1>
          <p className="font-hand text-xl sm:text-2xl text-[var(--ca-ink)] mb-4 sm:mb-6 font-bold">
            {project.tagline}
          </p>

          <p className="font-ca-mono text-xs sm:text-sm text-[var(--ca-gray)] leading-relaxed mb-6 max-w-3xl">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-3.5 sm:pt-4 border-t-2 border-[var(--ca-ink)]">
            <span className="font-ca-mono text-[10px] uppercase text-[var(--ca-gray)] mr-2 font-bold">
              TECHNOLOGIES:
            </span>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-ca-mono font-bold bg-[var(--ca-surface)] border border-[var(--ca-ink)] text-[var(--ca-ink)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* SECTION 1: THE PROBLEM */}
        <section className="border-2 border-[var(--ca-ink)] bg-white p-4 xs:p-6 sm:p-8 pop-shadow space-y-3.5 sm:space-y-4">
          <div className="flex items-center space-x-2 border-b-2 border-[var(--ca-ink)] pb-2.5 sm:pb-3">
            <span className="font-ca-mono text-xs font-bold text-[var(--ca-ink)]">
              01 // THE PROBLEM & CONSTRAINTS
            </span>
          </div>

          <div>
            <h2 className="font-heading font-extrabold text-lg sm:text-2xl text-[var(--ca-ink)] mb-2">
              {project.problem.title}
            </h2>
            <p className="font-ca-mono text-xs sm:text-sm text-[var(--ca-gray)] leading-relaxed mb-4">
              {project.problem.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-[var(--ca-ink)]/15">
              {project.problem.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs font-ca-mono text-[var(--ca-ink)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--ca-green)] mt-0.5 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: THE SYSTEM ARCHITECTURE */}
        <section className="border-2 border-[var(--ca-ink)] bg-white p-4 xs:p-6 sm:p-8 pop-shadow space-y-3.5 sm:space-y-4 relative">
          <div className="ca-tape ca-tape-yellow -top-3.5 right-4 sm:right-8 rotate-[2deg]" />

          <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b-2 border-[var(--ca-ink)] pb-2.5 sm:pb-3 gap-1">
            <span className="font-ca-mono text-xs font-bold text-[var(--ca-ink)]">
              02 // THE SYSTEM TOPOLOGY
            </span>
            <span className="font-ca-mono text-[10px] text-[var(--ca-blue)] font-bold">
              INTERACTIVE ARCHITECTURE CONSOLE
            </span>
          </div>

          <p className="font-ca-mono text-xs sm:text-sm text-[var(--ca-gray)] leading-relaxed mb-4">
            {project.system.overview}
          </p>

          <div className="pt-2">
            {renderDiagram()}
          </div>
        </section>

        {/* SECTION 3: HOW IT WORKS (Sequential Steps) */}
        <section className="border-2 border-[var(--ca-ink)] bg-white p-6 sm:p-8 pop-shadow space-y-4">
          <div className="border-b-2 border-[var(--ca-ink)] pb-3">
            <span className="font-ca-mono text-xs font-bold text-[var(--ca-ink)]">
              03 // HOW IT WORKS
            </span>
          </div>

          <div className="space-y-4">
            {project.workflow.map((item) => (
              <div
                key={item.step}
                className="border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start gap-4 pop-shadow-sm"
              >
                <span className="font-ca-mono text-xs font-bold px-3 py-1 bg-[var(--ca-ink)] text-white shrink-0 self-start">
                  STEP {item.step}
                </span>

                <div className="space-y-1.5 flex-1">
                  <h3 className="font-heading font-extrabold text-sm text-[var(--ca-ink)]">
                    {item.title}
                  </h3>
                  <p className="font-ca-mono text-xs sm:text-sm text-[var(--ca-gray)] leading-relaxed">
                    {item.description}
                  </p>
                  {item.details && (
                    <div className="font-ca-mono text-[11px] text-[var(--ca-ink)] pt-1 border-t border-[var(--ca-ink)]/15 font-bold">
                      MECHANISM: {item.details}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: ENGINEERING DECISIONS */}
        <section className="border-2 border-[var(--ca-ink)] bg-white p-6 sm:p-8 pop-shadow space-y-4">
          <div className="border-b-2 border-[var(--ca-ink)] pb-3">
            <span className="font-ca-mono text-xs font-bold text-[var(--ca-ink)]">
              04 // ENGINEERING DECISIONS & TRADEOFFS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.engineeringDecisions.map((item, idx) => (
              <div
                key={idx}
                className="border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] p-4 space-y-2 pop-shadow-sm"
              >
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--ca-blue)]" />
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-[var(--ca-ink)]">
                    {item.decision}
                  </h3>
                </div>
                <p className="font-ca-mono text-xs text-[var(--ca-gray)] leading-relaxed">
                  {item.rationale}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: TECHNOLOGY */}
        <section className="border-2 border-[var(--ca-ink)] bg-white p-6 sm:p-8 pop-shadow space-y-4">
          <div className="border-b-2 border-[var(--ca-ink)] pb-3">
            <span className="font-ca-mono text-xs font-bold text-[var(--ca-ink)]">
              05 // TECHNOLOGY BREAKDOWN
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.technologiesDetailed.map((group) => (
              <div
                key={group.category}
                className="border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] p-4 pop-shadow-sm"
              >
                <div className="font-ca-mono text-[10px] text-[var(--ca-gray)] uppercase tracking-wider mb-2 font-bold">
                  {group.category}
                </div>
                <div className="space-y-1">
                  {group.items.map((techItem) => (
                    <div
                      key={techItem}
                      className="font-ca-mono text-xs font-bold text-[var(--ca-ink)] py-0.5"
                    >
                      • {techItem}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: VERIFIED RESULTS */}
        <section className="border-2 border-[var(--ca-ink)] bg-white p-6 sm:p-8 pop-shadow space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[var(--ca-ink)] pb-3">
            <span className="font-ca-mono text-xs font-bold text-[var(--ca-ink)]">
              06 // RESULTS & DELIVERABLES
            </span>
            <span className="font-ca-mono text-[10px] text-[var(--ca-green)] font-bold">
              VERIFIED RESUME FACTS
            </span>
          </div>

          <div className="space-y-3">
            {project.results.map((result, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 p-3.5 bg-[var(--ca-surface)] border border-[var(--ca-ink)]"
              >
                <CheckCircle2 className="w-4 h-4 text-[var(--ca-green)] mt-0.5 shrink-0" />
                <p className="font-ca-mono text-xs sm:text-sm text-[var(--ca-ink)] leading-relaxed">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Next / Previous Project Navigation */}
        <div className="pt-6 border-t-2 border-[var(--ca-ink)] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 font-ca-mono text-xs font-bold w-full">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start space-x-2 text-[var(--ca-ink)] hover:text-[var(--ca-blue)] transition-colors py-1.5"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span>PREV: {prevProject.title}</span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          <Link
            href="/#work"
            className="w-full sm:w-auto px-5 py-2.5 border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] text-[var(--ca-ink)] pop-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-center"
          >
            VIEW ALL WORK
          </Link>

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-end space-x-2 text-[var(--ca-ink)] hover:text-[var(--ca-blue)] transition-colors py-1.5"
            >
              <span>NEXT: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

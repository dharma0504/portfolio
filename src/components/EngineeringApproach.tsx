"use client";

import React from "react";
import { engineeringSteps } from "@/data/portfolioData";

export default function EngineeringApproach() {
  return (
    <section id="approach" className="py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Handwritten Section Header */}
        <div className="mb-8 sm:mb-10 text-left">
          <span className="font-hand text-3xl sm:text-5xl text-[var(--ca-ink)] block select-none">
            how i build systems!
          </span>
          <div className="flex items-center space-x-2 sm:space-x-3 mt-1 flex-wrap gap-y-1">
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--ca-ink)] uppercase tracking-tight">
              ENGINEERING APPROACH
            </h2>
            <span className="px-2.5 py-0.5 rounded-full border border-[var(--ca-ink)] bg-[var(--ca-yellow)] font-ca-mono text-[11px] sm:text-xs font-bold text-[var(--ca-ink)]">
              6 STAGES
            </span>
          </div>
          <p className="font-ca-mono text-xs sm:text-sm text-[var(--ca-gray)] mt-1 max-w-xl leading-relaxed">
            A disciplined lifecycle from constraints and schema contracts to evidence-based iteration.
          </p>
        </div>

        {/* 6 Stage Blueprint Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {engineeringSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative border-2 border-[var(--ca-ink)] bg-white p-4 sm:p-6 pop-shadow flex flex-col justify-between hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              {/* Little tape strip on alternating cards */}
              {idx % 2 === 0 && (
                <div className="ca-tape ca-tape-yellow -top-3 right-4 sm:right-6 rotate-[3deg]" />
              )}
              {idx % 2 === 1 && (
                <div className="ca-tape ca-tape-blue -top-3 left-4 sm:left-6 rotate-[-4deg]" />
              )}

              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-[var(--ca-ink)]">
                  <span className="font-ca-mono text-xs font-bold px-2 py-0.5 border border-[var(--ca-ink)] bg-[var(--ca-yellow)] text-[var(--ca-ink)]">
                    STAGE {step.step}
                  </span>
                  <span className="font-ca-mono text-[10px] uppercase text-[var(--ca-gray)]">
                    GATE_{step.step}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-xl text-[var(--ca-ink)] tracking-tight mb-1">
                  {step.title}
                </h3>
                <p className="font-hand text-lg text-[var(--ca-blue)] font-bold mb-2">
                  {step.tagline}
                </p>
                <p className="font-ca-mono text-xs text-[var(--ca-gray)] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[var(--ca-ink)]/15 flex items-center justify-between font-ca-mono text-[10px] text-[var(--ca-gray)]">
                <span>SYSTEM_DISCIPLINE</span>
                <span className="text-[var(--ca-ink)] font-bold">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

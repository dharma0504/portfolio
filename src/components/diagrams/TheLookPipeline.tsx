"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle, Database, Eye, Lock, RefreshCw, ShieldAlert } from "lucide-react";

export default function TheLookPipeline() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      title: "DATA QUALITY",
      subtitle: "Validation & Quarantine Handling",
      icon: ShieldAlert,
      badge: "ISOLATION",
      description:
        "Automated schema validation prevents corrupted or out-of-spec incoming records from polluting downstream tables. Faulty records are quarantined with failure logs for audit and replay.",
      specs: [
        "Pre-ingestion schema enforcement",
        "Automated quarantine table routing",
        "Non-blocking pipeline processing",
      ],
    },
    {
      id: 1,
      title: "PROCESSING",
      subtitle: "Incremental & Idempotent Pipelines",
      icon: RefreshCw,
      badge: "DELTA LAKE",
      description:
        "Delta Lake and Apache Spark ACID transactions ensure incremental micro-batches and re-runs execute idempotently without partial writes or duplicate data states.",
      specs: [
        "ACID transactional guarantees",
        "Idempotent merge logic",
        "Time travel and audit reproducibility",
      ],
    },
    {
      id: 2,
      title: "MODELING",
      subtitle: "SCD Type 2 & dbt Testing",
      icon: Database,
      badge: "ANALYTICAL",
      description:
        "Codified analytical transformations built in dbt. Tracks historical dimension state over time using Slowly Changing Dimensions (SCD Type 2) with automated integrity test suites.",
      specs: [
        "SCD Type 2 validity intervals",
        "Modular dbt dimensional models",
        "Automated referential and uniqueness tests",
      ],
    },
    {
      id: 3,
      title: "GOVERNANCE",
      subtitle: "PII Masking & Access Control",
      icon: Lock,
      badge: "SECURITY",
      description:
        "Applies column-level masking and sanitization for personally identifiable customer information at the Silver tier, adhering to data governance boundaries.",
      specs: [
        "Silver-tier PII column masking",
        "Unity Catalog role-based access",
        "Auditable schema governance",
      ],
    },
    {
      id: 4,
      title: "OBSERVABILITY",
      subtitle: "Production-Oriented Controls",
      icon: Eye,
      badge: "RELIABILITY",
      description:
        "Pipeline-level monitoring tracks ingestion run times, quarantine counts, and execution metrics to guarantee pipeline reliability and rapid triage.",
      specs: [
        "Runtime telemetry & failure alerts",
        "Lineage tracking across tiers",
        "Auditable execution logs",
      ],
    },
  ];

  return (
    <div className="w-full border border-[#D9D9D4] bg-[#FFFFFF] rounded-lg p-3 xs:p-4 sm:p-5">
      {/* Header */}
      <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-[#E8E8E4] pb-2.5 mb-3 gap-1.5">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111111] shrink-0" />
          <span className="font-mono-tech text-[10px] sm:text-[11px] uppercase tracking-wider text-[#111111] font-semibold truncate">
            THELOOK :: MEDALLION_DATA_PLATFORM
          </span>
        </div>
        <span className="font-mono-tech text-[9px] sm:text-[10px] text-[#8A8A8A] uppercase">
          DELTA LAKE + SPARK + DBT
        </span>
      </div>

      {/* Medallion Pipeline Horizontal Flow: DATA SOURCES -> BRONZE -> SILVER -> GOLD -> ANALYTICS */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2 mb-4">
        <div className="border border-[#D9D9D4] bg-[#F7F7F5] p-2 sm:p-2.5 rounded">
          <div className="font-mono-tech text-[8px] sm:text-[9px] text-[#8A8A8A] mb-0.5">SOURCE</div>
          <div className="font-heading font-bold text-[11px] sm:text-xs text-[#111111]">DATA SOURCES</div>
          <div className="text-[9px] sm:text-[10px] text-[#666666] mt-0.5 sm:mt-1">Transactional feeds</div>
        </div>

        <div className="border border-[#D9D9D4] bg-[#F7F7F5] p-2 sm:p-2.5 rounded">
          <div className="font-mono-tech text-[8px] sm:text-[9px] text-[#8A8A8A] mb-0.5">TIER 01</div>
          <div className="font-heading font-bold text-[11px] sm:text-xs text-[#111111]">BRONZE DELTA</div>
          <div className="text-[9px] sm:text-[10px] text-[#666666] mt-0.5 sm:mt-1">Raw ingestion & schema</div>
        </div>

        <div className="border border-[#111111] bg-[#FFFFFF] p-2 sm:p-2.5 rounded shadow-xs">
          <div className="font-mono-tech text-[8px] sm:text-[9px] text-[#2457FF] font-semibold mb-0.5">TIER 02</div>
          <div className="font-heading font-bold text-[11px] sm:text-xs text-[#111111]">SILVER DELTA</div>
          <div className="text-[9px] sm:text-[10px] text-[#666666] mt-0.5 sm:mt-1">Validated, cleaned</div>
        </div>

        <div className="border border-[#D9D9D4] bg-[#F7F7F5] p-2 sm:p-2.5 rounded">
          <div className="font-mono-tech text-[8px] sm:text-[9px] text-[#8A8A8A] mb-0.5">TIER 03</div>
          <div className="font-heading font-bold text-[11px] sm:text-xs text-[#111111]">GOLD DELTA</div>
          <div className="text-[9px] sm:text-[10px] text-[#666666] mt-0.5 sm:mt-1">SCD Type 2 & dbt</div>
        </div>

        <div className="border border-[#D9D9D4] bg-[#F7F7F5] p-2 sm:p-2.5 rounded col-span-2 sm:col-span-1">
          <div className="font-mono-tech text-[8px] sm:text-[9px] text-[#8A8A8A] mb-0.5">TARGET</div>
          <div className="font-heading font-bold text-[11px] sm:text-xs text-[#111111]">ANALYTICS</div>
          <div className="text-[9px] sm:text-[10px] text-[#666666] mt-0.5 sm:mt-1">BI & data marts</div>
        </div>
      </div>

      {/* Engineering Pillars Interactive Tabs */}
      <div className="border-t border-[#E8E8E4] pt-3 sm:pt-4">
        <div className="text-[10px] sm:text-[11px] font-mono-tech text-[#666666] mb-2 sm:mb-3">
          KEY ARCHITECTURE PILLARS & CONTROLS:
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3">
          {pillars.map((pillar, idx) => (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setActivePillar(idx)}
              className={`px-2.5 py-1 text-[10px] sm:text-[11px] font-mono-tech rounded transition-all border cursor-pointer ${
                activePillar === idx
                  ? "bg-[#111111] text-[#F5F5F3] border-[#111111]"
                  : "bg-[#FFFFFF] text-[#555552] border-[#E8E8E4] hover:border-[#B0B0A8]"
              }`}
            >
              {pillar.title}
            </button>
          ))}
        </div>

        {/* Active Pillar Card */}
        <div className="p-3 sm:p-4 rounded border border-[#D9D9D4] bg-[#F7F7F5]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
            <div className="flex items-center space-x-2 flex-wrap gap-y-0.5">
              <span className="font-heading font-bold text-xs text-[#111111]">
                {pillars[activePillar].title}
              </span>
              <span className="text-[11px] sm:text-xs text-[#666666]">
                — {pillars[activePillar].subtitle}
              </span>
            </div>
            <span className="font-mono-tech text-[9px] text-[#2457FF] px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#D9D9D4] self-start sm:self-auto">
              {pillars[activePillar].badge}
            </span>
          </div>

          <p className="text-xs text-[#555552] leading-relaxed mb-3">
            {pillars[activePillar].description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2 pt-2 border-t border-[#E8E8E4]">
            {pillars[activePillar].specs.map((spec, sIdx) => (
              <div key={sIdx} className="flex items-center space-x-1.5 text-[9px] sm:text-[10px] font-mono-tech text-[#666666]">
                <CheckCircle className="w-3 h-3 text-[#111111] shrink-0" />
                <span className="truncate">{spec}</span>
              </div>
            ))}
          </div>

          {/* Telemetry & SLA Audit Footer */}
          <div className="flex flex-col xs:flex-row xs:items-center justify-between text-[9px] sm:text-[10px] font-mono-tech pt-2.5 mt-2.5 border-t border-[#E8E8E4] gap-2">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-[#111111] font-semibold">STREAMING_INGESTION: ACTIVE</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 text-[#8A8A8A] flex-wrap gap-y-1">
              <span>THROUGHPUT: 1.2M/MIN</span>
              <span>LATENCY: &lt; 45S</span>
              <span className="text-emerald-600 font-semibold">ACID: OK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

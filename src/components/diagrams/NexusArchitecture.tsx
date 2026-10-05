"use client";

import React, { useState } from "react";
import { ArrowDown, Cpu, Database, Filter, GitBranch, Layers, Search, ShieldCheck } from "lucide-react";

export default function NexusArchitecture() {
  const [activeView, setActiveView] = useState<"query" | "medallion">("query");
  const [selectedRoute, setSelectedRoute] = useState<"rag" | "tool" | "web">("rag");

  return (
    <div className="w-full border border-[#D9D9D4] bg-[#FFFFFF] rounded-lg p-3 xs:p-4 sm:p-5">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E8E8E4] pb-2.5 mb-3 gap-2">
        <div className="flex items-center space-x-2 flex-wrap gap-y-1">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111111] shrink-0" />
          <span className="font-mono-tech text-[10px] sm:text-[11px] uppercase tracking-wider text-[#111111] font-semibold truncate">
            NEXUS :: AGENTIC_RAG
          </span>
          <span className="px-2 py-0.5 rounded text-[9px] font-mono-tech bg-[#F0F0EC] text-[#555552] border border-[#D9D9D4]">
            DATABRICKS
          </span>
        </div>

        {/* View Switcher */}
        <div className="flex items-center space-x-1 self-start sm:self-auto w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <button
            type="button"
            onClick={() => setActiveView("query")}
            className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-mono-tech rounded transition-colors whitespace-nowrap cursor-pointer ${
              activeView === "query"
                ? "bg-[#111111] text-[#F5F5F3]"
                : "text-[#666666] hover:bg-[#F0F0EC]"
            }`}
          >
            01. QUERY ROUTING
          </button>
          <button
            type="button"
            onClick={() => setActiveView("medallion")}
            className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-mono-tech rounded transition-colors whitespace-nowrap cursor-pointer ${
              activeView === "medallion"
                ? "bg-[#111111] text-[#F5F5F3]"
                : "text-[#666666] hover:bg-[#F0F0EC]"
            }`}
          >
            02. MEDALLION INGESTION
          </button>
        </div>
      </div>

      {/* Governed Platform Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2 mb-4 text-[9px] sm:text-[10px] font-mono-tech">
        <div className="border border-[#E8E8E4] bg-[#F7F7F5] px-2 py-1 rounded flex items-center justify-between">
          <span className="text-[#8A8A8A]">GOVERNANCE</span>
          <span className="text-[#111111] font-medium truncate ml-1">Unity Catalog</span>
        </div>
        <div className="border border-[#E8E8E4] bg-[#F7F7F5] px-2 py-1 rounded flex items-center justify-between">
          <span className="text-[#8A8A8A]">TRACKING</span>
          <span className="text-[#111111] font-medium truncate ml-1">MLflow</span>
        </div>
        <div className="border border-[#E8E8E4] bg-[#F7F7F5] px-2 py-1 rounded flex items-center justify-between">
          <span className="text-[#8A8A8A]">SCHEDULER</span>
          <span className="text-[#111111] font-medium truncate ml-1">Lakeflow</span>
        </div>
        <div className="border border-[#E8E8E4] bg-[#F7F7F5] px-2 py-1 rounded flex items-center justify-between">
          <span className="text-[#8A8A8A]">ANALYTICS</span>
          <span className="text-[#111111] font-medium truncate ml-1">Genie</span>
        </div>
        <div className="border border-[#E8E8E4] bg-[#F7F7F5] px-2 py-1 rounded flex items-center justify-between col-span-2 sm:col-span-1">
          <span className="text-[#8A8A8A]">HOSTING</span>
          <span className="text-[#111111] font-medium truncate ml-1">DB Apps</span>
        </div>
      </div>

      {activeView === "query" ? (
        /* Flow: USER QUERY -> QUERY ROUTER -> [RAG / TOOL / WEB] -> VECTOR SEARCH -> RERANKING -> CONTEXT -> LLM -> ANSWER */
        <div className="space-y-3 py-1">
          {/* Stage 1: User Query */}
          <div className="border border-[#D9D9D4] bg-[#F7F7F5] p-2.5 sm:p-3 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0" />
              <span className="font-mono-tech text-[9px] sm:text-[10px] text-[#8A8A8A]">INCOMING_REQUEST</span>
              <span className="font-heading font-semibold text-xs text-[#111111]">USER QUERY</span>
            </div>
            <span className="font-mono-tech text-[9px] sm:text-[10px] text-[#555552] truncate">
              "Compare requirement specs for auth service timeouts"
            </span>
          </div>

          {/* Connector */}
          <div className="flex justify-center -my-1">
            <ArrowDown className="w-3.5 h-3.5 text-[#8A8A8A]" />
          </div>

          {/* Stage 2: Query Router */}
          <div className="border border-[#111111] bg-[#FFFFFF] p-3 sm:p-3.5 rounded shadow-xs">
            <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 mb-2">
              <div className="flex items-center space-x-2">
                <GitBranch className="w-3.5 h-3.5 text-[#2457FF] shrink-0" />
                <span className="font-heading font-bold text-xs text-[#111111]">
                  QUERY ROUTER
                </span>
              </div>
              <span className="font-mono-tech text-[9px] text-[#2457FF] uppercase font-semibold">
                INTENT CLASSIFIER & DISPATCHER
              </span>
            </div>
            <p className="text-[11px] text-[#666666] mb-3">
              Analyzes user query semantics to route execution to the optimal retrieval modality:
            </p>

            {/* 3 Routes Branching */}
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSelectedRoute("rag")}
                className={`p-2 rounded text-left border transition-all ${
                  selectedRoute === "rag"
                    ? "border-[#111111] bg-[#F7F7F5]"
                    : "border-[#E8E8E4] bg-[#FFFFFF] hover:border-[#B0B0A8]"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono-tech mb-0.5">
                  <span className="font-bold text-[#111111]">01. RAG</span>
                  {selectedRoute === "rag" && <span className="text-[#2457FF] font-mono text-[9px]">ACTIVE</span>}
                </div>
                <div className="text-[9px] text-[#666666] leading-tight">
                  Lakehouse Vector Docs
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRoute("tool")}
                className={`p-2 rounded text-left border transition-all ${
                  selectedRoute === "tool"
                    ? "border-[#111111] bg-[#F7F7F5]"
                    : "border-[#E8E8E4] bg-[#FFFFFF] hover:border-[#B0B0A8]"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono-tech mb-0.5">
                  <span className="font-bold text-[#111111]">02. TOOL</span>
                  {selectedRoute === "tool" && <span className="text-[#2457FF] font-mono text-[9px]">ACTIVE</span>}
                </div>
                <div className="text-[9px] text-[#666666] leading-tight">
                  Schema & API Execution
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRoute("web")}
                className={`p-2 rounded text-left border transition-all ${
                  selectedRoute === "web"
                    ? "border-[#111111] bg-[#F7F7F5]"
                    : "border-[#E8E8E4] bg-[#FFFFFF] hover:border-[#B0B0A8]"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono-tech mb-0.5">
                  <span className="font-bold text-[#111111]">03. WEB</span>
                  {selectedRoute === "web" && <span className="text-[#2457FF] font-mono text-[9px]">ACTIVE</span>}
                </div>
                <div className="text-[9px] text-[#666666] leading-tight">
                  External Reference Search
                </div>
              </button>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center -my-1">
            <ArrowDown className="w-3.5 h-3.5 text-[#8A8A8A]" />
          </div>

          {/* Stage 3: Retrieval & Two-Stage Reranking */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="border border-[#D9D9D4] bg-[#F7F7F5] p-3 rounded">
              <div className="flex items-center space-x-1.5 mb-1">
                <Search className="w-3.5 h-3.5 text-[#111111]" />
                <span className="font-heading font-semibold text-xs text-[#111111]">
                  DATABRICKS VECTOR SEARCH
                </span>
              </div>
              <p className="text-[11px] text-[#666666] leading-relaxed mb-2">
                Fast Approximate Nearest Neighbor (ANN) index over Gold embedding vectors in Unity Catalog.
              </p>
              <div className="font-mono-tech text-[9px] text-[#8A8A8A]">
                RECALL: TOP-K CANDIDATES RETRIEVED
              </div>
            </div>

            <div className="border border-[#111111] bg-[#FFFFFF] p-3 rounded shadow-xs">
              <div className="flex items-center space-x-1.5 mb-1">
                <Filter className="w-3.5 h-3.5 text-[#2457FF]" />
                <span className="font-heading font-semibold text-xs text-[#111111]">
                  CROSS-ENCODER RERANKING
                </span>
              </div>
              <p className="text-[11px] text-[#666666] leading-relaxed mb-2">
                Scores deep semantic relevance between query and retrieved chunks, discarding noise and duplicates.
              </p>
              <div className="font-mono-tech text-[9px] text-[#2457FF] font-medium">
                PRECISION: HIGH-SIGNAL CONTEXT ORDERING
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center -my-1">
            <ArrowDown className="w-3.5 h-3.5 text-[#8A8A8A]" />
          </div>

          {/* Stage 4: Synthesis & Output */}
          <div className="border border-[#D9D9D4] bg-[#F7F7F5] p-3 rounded">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <div className="flex items-center space-x-2">
                <Cpu className="w-3.5 h-3.5 text-[#111111]" />
                <span className="font-heading font-semibold text-xs text-[#111111]">
                  CONTEXT INJECTION → LLM SYNTHESIS
                </span>
              </div>
              <span className="font-mono-tech text-[9px] text-[#666666]">
                EVALUATION TRACKED VIA MLFLOW
              </span>
            </div>
            <div className="bg-[#FFFFFF] border border-[#E8E8E4] p-2.5 rounded font-mono-tech text-[10px] text-[#111111] flex items-center justify-between">
              <span>FINAL_RESPONSE :: CITATION_BACKED_ANSWER</span>
              <span className="text-[#2457FF] font-medium">VALIDATED</span>
            </div>
          </div>
        </div>
      ) : (
        /* Medallion Flow: RAW DOCUMENTS -> BRONZE -> SILVER -> GOLD -> VECTOR SEARCH */
        <div className="space-y-3 py-1">
          <div className="text-[11px] font-mono-tech text-[#666666] mb-2">
            INGESTION PIPELINE :: RAW SPECIFICATIONS TO VECTOR SEARCH INDEX
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
            {/* Raw Documents */}
            <div className="border border-[#D9D9D4] bg-[#FFFFFF] p-3 rounded">
              <span className="font-mono-tech text-[9px] text-[#8A8A8A] block">SOURCE</span>
              <div className="font-heading font-bold text-xs text-[#111111] mb-1">
                RAW DOCS
              </div>
              <p className="text-[10px] text-[#666666] leading-relaxed">
                Software requirement docs, specifications, and architecture notes.
              </p>
            </div>

            {/* Bronze */}
            <div className="border border-[#D9D9D4] bg-[#F7F7F5] p-3 rounded">
              <span className="font-mono-tech text-[9px] text-[#8A8A8A] block">LAKEHOUSE TIER 01</span>
              <div className="font-heading font-bold text-xs text-[#111111] mb-1">
                BRONZE DELTA
              </div>
              <p className="text-[10px] text-[#666666] leading-relaxed">
                Raw ingestion with preserved schema, metadata, and ingestion timestamps.
              </p>
            </div>

            {/* Silver */}
            <div className="border border-[#D9D9D4] bg-[#F7F7F5] p-3 rounded">
              <span className="font-mono-tech text-[9px] text-[#8A8A8A] block">LAKEHOUSE TIER 02</span>
              <div className="font-heading font-bold text-xs text-[#111111] mb-1">
                SILVER CLEANED
              </div>
              <p className="text-[10px] text-[#666666] leading-relaxed">
                Cleansed paragraphs, document structure parsed, semantic chunking applied.
              </p>
            </div>

            {/* Gold */}
            <div className="border border-[#D9D9D4] bg-[#F7F7F5] p-3 rounded">
              <span className="font-mono-tech text-[9px] text-[#8A8A8A] block">LAKEHOUSE TIER 03</span>
              <div className="font-heading font-bold text-xs text-[#111111] mb-1">
                GOLD EMBEDDINGS
              </div>
              <p className="text-[10px] text-[#666666] leading-relaxed">
                Dense vector embeddings computed and organized for analytical querying.
              </p>
            </div>

            {/* Vector Search */}
            <div className="border border-[#111111] bg-[#FFFFFF] p-3 rounded shadow-xs">
              <span className="font-mono-tech text-[9px] text-[#2457FF] block font-semibold">CONSUMPTION</span>
              <div className="font-heading font-bold text-xs text-[#111111] mb-1">
                VECTOR SEARCH
              </div>
              <p className="text-[10px] text-[#666666] leading-relaxed">
                Synchronized index serving sub-second semantic retrieval across Unity Catalog.
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 rounded border border-[#E8E8E4] bg-[#F7F7F5] flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono-tech text-[#555552] gap-1">
            <span>PIPELINE ORCHESTRATION: LAKEFLOW JOBS</span>
            <span className="text-[#111111]">LINEAGE & AUDITING: UNITY CATALOG</span>
          </div>
        </div>
      )}
    </div>
  );
}

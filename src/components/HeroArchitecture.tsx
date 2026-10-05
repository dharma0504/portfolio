"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function HeroArchitecture() {
  const [activeTab, setActiveTab] = useState<"system" | "data">("system");

  return (
    <div className="w-full rounded-lg border border-[#D9D9D4] bg-[#FFFFFF] p-5 shadow-xs">
      {/* Terminal / System Header */}
      <div className="flex items-center justify-between border-b border-[#E8E8E4] pb-3 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#D9D9D4]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#D9D9D4]" />
          <span className="font-mono-tech text-[11px] uppercase tracking-wider text-[#666666] ml-2">
            SYSTEM_TOPOLOGY :: PRODUCTION_FLOW
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <button
            type="button"
            onClick={() => setActiveTab("system")}
            className={`px-2.5 py-1 text-[11px] font-mono-tech rounded transition-colors ${
              activeTab === "system"
                ? "bg-[#111111] text-[#F5F5F3]"
                : "text-[#666666] hover:bg-[#F0F0EC]"
            }`}
          >
            EXECUTION
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("data")}
            className={`px-2.5 py-1 text-[11px] font-mono-tech rounded transition-colors ${
              activeTab === "data"
                ? "bg-[#111111] text-[#F5F5F3]"
                : "text-[#666666] hover:bg-[#F0F0EC]"
            }`}
          >
            DATA_FLOW
          </button>
        </div>
      </div>

      {activeTab === "system" ? (
        /* Architecture execution flow: CLIENT -> API -> APPLICATION -> BACKEND / AI / DATA */
        <div className="flex flex-col items-center space-y-3 py-2">
          {/* Node 1: CLIENT */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-[280px] border border-[#D9D9D4] bg-[#F7F7F5] px-3 py-2 text-center rounded"
          >
            <div className="flex items-center justify-between text-[10px] font-mono-tech text-[#8A8A8A] mb-0.5">
              <span>ENTRY_POINT</span>
              <span className="text-[#2457FF]">HTTP / WS</span>
            </div>
            <div className="font-heading font-medium text-xs text-[#111111] tracking-wide">
              CLIENT APPLICATION
            </div>
          </motion.div>

          {/* Connection Line */}
          <div className="flex flex-col items-center h-4 justify-between">
            <div className="w-[1px] h-full bg-[#111111]" />
            <div className="w-1.5 h-1.5 rotate-45 border-r border-b border-[#111111]" />
          </div>

          {/* Node 2: API GATEWAY */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="w-full max-w-[280px] border border-[#111111] bg-[#FFFFFF] px-3 py-2 text-center rounded shadow-xs"
          >
            <div className="flex items-center justify-between text-[10px] font-mono-tech text-[#8A8A8A] mb-0.5">
              <span>SERVICE_ROUTING</span>
              <span className="text-[#111111] font-semibold">FASTAPI</span>
            </div>
            <div className="font-heading font-semibold text-xs text-[#111111] tracking-wide">
              API & CONTRACT LAYER
            </div>
          </motion.div>

          {/* Connection Line */}
          <div className="flex flex-col items-center h-4 justify-between">
            <div className="w-[1px] h-full bg-[#111111]" />
            <div className="w-1.5 h-1.5 rotate-45 border-r border-b border-[#111111]" />
          </div>

          {/* Node 3: APPLICATION ORCHESTRATION */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="w-full max-w-[320px] border border-[#D9D9D4] bg-[#F7F7F5] px-3 py-2 text-center rounded"
          >
            <div className="flex items-center justify-between text-[10px] font-mono-tech text-[#8A8A8A] mb-0.5">
              <span>ORCHESTRATION</span>
              <span>STATE MACHINE</span>
            </div>
            <div className="font-heading font-medium text-xs text-[#111111] tracking-wide">
              APPLICATION WORKFLOWS
            </div>
          </motion.div>

          {/* Branching Connectors */}
          <div className="w-full max-w-[380px] relative h-6 flex items-center justify-center">
            {/* Horizontal line */}
            <div className="absolute top-3 left-6 right-6 h-[1px] bg-[#D9D9D4]" />
            {/* Center vertical line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#D9D9D4] -translate-x-1/2" />
            {/* Left drop line */}
            <div className="absolute top-3 bottom-0 left-6 w-[1px] bg-[#D9D9D4]" />
            {/* Right drop line */}
            <div className="absolute top-3 bottom-0 right-6 w-[1px] bg-[#D9D9D4]" />
          </div>

          {/* 3 Pillars: BACKEND, AI, DATA */}
          <div className="grid grid-cols-3 gap-2 w-full max-w-[420px]">
            {/* Pillar 1: BACKEND */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="border border-[#D9D9D4] bg-[#FFFFFF] p-2.5 rounded text-left"
            >
              <div className="font-mono-tech text-[9px] uppercase tracking-wider text-[#8A8A8A] mb-1">
                DOMAIN 01
              </div>
              <div className="font-heading font-semibold text-xs text-[#111111] mb-1.5">
                BACKEND
              </div>
              <div className="space-y-1 text-[11px] font-mono-tech text-[#555552]">
                <div className="flex items-center justify-between border-t border-[#F0F0EC] pt-1">
                  <span>FastAPI</span>
                  <span className="text-[#2457FF] text-[9px]">REST</span>
                </div>
                <div className="flex items-center justify-between border-t border-[#F0F0EC] pt-1">
                  <span>Python</span>
                  <span className="text-[#8A8A8A] text-[9px]">ASYNC</span>
                </div>
                <div className="flex items-center justify-between border-t border-[#F0F0EC] pt-1">
                  <span>SQLite</span>
                  <span className="text-[#8A8A8A] text-[9px]">ACID</span>
                </div>
              </div>
            </motion.div>

            {/* Pillar 2: AI */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="border border-[#111111] bg-[#FFFFFF] p-2.5 rounded text-left shadow-xs"
            >
              <div className="font-mono-tech text-[9px] uppercase tracking-wider text-[#2457FF] font-semibold mb-1">
                DOMAIN 02
              </div>
              <div className="font-heading font-semibold text-xs text-[#111111] mb-1.5">
                AI & RAG
              </div>
              <div className="space-y-1 text-[11px] font-mono-tech text-[#555552]">
                <div className="flex items-center justify-between border-t border-[#F0F0EC] pt-1">
                  <span>RAG Engine</span>
                  <span className="text-[#2457FF] text-[9px]">AGENTIC</span>
                </div>
                <div className="flex items-center justify-between border-t border-[#F0F0EC] pt-1">
                  <span>Vector Search</span>
                  <span className="text-[#8A8A8A] text-[9px]">INDEX</span>
                </div>
                <div className="flex items-center justify-between border-t border-[#F0F0EC] pt-1">
                  <span>Reranking</span>
                  <span className="text-[#8A8A8A] text-[9px]">SCORE</span>
                </div>
              </div>
            </motion.div>

            {/* Pillar 3: DATA */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="border border-[#D9D9D4] bg-[#FFFFFF] p-2.5 rounded text-left"
            >
              <div className="font-mono-tech text-[9px] uppercase tracking-wider text-[#8A8A8A] mb-1">
                DOMAIN 03
              </div>
              <div className="font-heading font-semibold text-xs text-[#111111] mb-1.5">
                DATA PLATFORM
              </div>
              <div className="space-y-1 text-[11px] font-mono-tech text-[#555552]">
                <div className="flex items-center justify-between border-t border-[#F0F0EC] pt-1">
                  <span>Databricks</span>
                  <span className="text-[#2457FF] text-[9px]">LAKE</span>
                </div>
                <div className="flex items-center justify-between border-t border-[#F0F0EC] pt-1">
                  <span>Spark</span>
                  <span className="text-[#8A8A8A] text-[9px]">ENGINE</span>
                </div>
                <div className="flex items-center justify-between border-t border-[#F0F0EC] pt-1">
                  <span>Delta Lake</span>
                  <span className="text-[#8A8A8A] text-[9px]">ACID</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        /* Data Flow view: Medallion Architecture flow */
        <div className="py-4 space-y-3">
          <div className="text-[11px] font-mono-tech text-[#666666] mb-3">
            LAKEHOUSE MEDALLION PIPELINE :: BRONZE → SILVER → GOLD
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            <div className="border border-[#D9D9D4] bg-[#F7F7F5] p-2.5 rounded">
              <span className="text-[9px] font-mono-tech text-[#8A8A8A] block">STAGE 01</span>
              <span className="font-heading font-medium text-xs text-[#111111] block mb-1">
                INGESTION
              </span>
              <p className="text-[10px] text-[#666666] leading-relaxed">
                Raw JSON/Parquet append into Delta Lake Bronze layer.
              </p>
            </div>
            <div className="border border-[#D9D9D4] bg-[#F7F7F5] p-2.5 rounded">
              <span className="text-[9px] font-mono-tech text-[#8A8A8A] block">STAGE 02</span>
              <span className="font-heading font-medium text-xs text-[#111111] block mb-1">
                CLEANSING
              </span>
              <p className="text-[10px] text-[#666666] leading-relaxed">
                Schema validation, quarantine isolation, Silver merge.
              </p>
            </div>
            <div className="border border-[#D9D9D4] bg-[#F7F7F5] p-2.5 rounded">
              <span className="text-[9px] font-mono-tech text-[#8A8A8A] block">STAGE 03</span>
              <span className="font-heading font-medium text-xs text-[#111111] block mb-1">
                MODELING
              </span>
              <p className="text-[10px] text-[#666666] leading-relaxed">
                SCD Type 2 dimensions & dbt testing in Gold tier.
              </p>
            </div>
            <div className="border border-[#111111] bg-[#FFFFFF] p-2.5 rounded">
              <span className="text-[9px] font-mono-tech text-[#2457FF] block font-semibold">STAGE 04</span>
              <span className="font-heading font-medium text-xs text-[#111111] block mb-1">
                CONSUMPTION
              </span>
              <p className="text-[10px] text-[#666666] leading-relaxed">
                Vector search index & governed analytical endpoints.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer Status Line */}
      <div className="mt-4 pt-3 border-t border-[#E8E8E4] flex items-center justify-between text-[11px] font-mono-tech text-[#8A8A8A]">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#111111]" />
          <span>STATUS: DETERMINISTIC_EXECUTION</span>
        </div>
        <span>ARCH_V2.0</span>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronRight, FileText, Layers, ShieldCheck, Terminal, Users } from "lucide-react";

export default function AgentFactoryFlow() {
  const [selectedNode, setSelectedNode] = useState<number>(3); // Default to human validation or architecture workflow

  const nodes = [
    {
      id: 0,
      code: "01",
      title: "SOURCE SPECS",
      subtitle: "Requirements Docs",
      tech: "Markdown / PDF / Text",
      icon: FileText,
      description: "Unstructured PRDs, user stories, and system specification files ingested into the processing queue.",
      output: "Normalized text streams with section hierarchy",
    },
    {
      id: 1,
      code: "02",
      title: "INGESTION",
      subtitle: "Document Parser",
      tech: "Python / Parsing Engine",
      icon: Terminal,
      description: "Extracts architectural boundaries, extracts functional requirements, and builds structural schemas.",
      output: "Segmented requirement chunks",
    },
    {
      id: 2,
      code: "03",
      title: "RETRIEVAL",
      subtitle: "Semantic Retrieval",
      tech: "Vector Index / Similarity",
      icon: Layers,
      description: "Matches incoming requirements against domain patterns, architectural templates, and constraints.",
      output: "High-relevance context matches",
    },
    {
      id: 3,
      code: "04",
      title: "AI WORKFLOW",
      subtitle: "Multi-Stage Planner",
      tech: "FastAPI / Orchestrator",
      icon: Terminal,
      description: "Executes multi-stage generative models to draft module specifications, API contracts, and schema drafts.",
      output: "Candidate architecture blueprints",
    },
    {
      id: 4,
      code: "05",
      title: "HUMAN GATE",
      subtitle: "HITL Validation",
      tech: "Streamlit UI Review",
      icon: Users,
      description: "Interactive human-in-the-loop validation barrier. Engineers inspect, adjust, and approve designs before code generation.",
      output: "Verified execution manifest",
    },
    {
      id: 5,
      code: "06",
      title: "OUTPUT",
      subtitle: "Code Workflows",
      tech: "SQLite State / Code Gen",
      icon: ShieldCheck,
      description: "Generates validated code workflows, scaffolded schemas, and persists audit state in SQLite.",
      output: "Production-ready scaffolding & records",
    },
  ];

  return (
    <div className="w-full border border-[#D9D9D4] bg-[#FFFFFF] rounded-lg p-3 xs:p-4 sm:p-5">
      <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-[#E8E8E4] pb-2.5 mb-3 gap-1.5">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#2457FF] shrink-0" />
          <span className="font-mono-tech text-[10px] sm:text-[11px] uppercase tracking-wider text-[#111111] font-semibold truncate">
            PIPELINE_TOPOLOGY :: AGENT_FACTORY
          </span>
        </div>
        <span className="font-mono-tech text-[9px] sm:text-[10px] text-[#8A8A8A] uppercase">
          HUMAN-IN-THE-LOOP ORCHESTRATION
        </span>
      </div>

      {/* Sequential Horizontal Flow (with responsive vertical fallback) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-2 my-2">
        {nodes.map((node, index) => {
          const isSelected = selectedNode === index;
          const Icon = node.icon;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setSelectedNode(index)}
              className={`p-2 sm:p-2.5 rounded text-left transition-all border relative flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? "border-[#111111] bg-[#F7F7F5] shadow-xs"
                  : "border-[#E8E8E4] bg-[#FFFFFF] hover:border-[#B0B0A8]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono-tech text-[#8A8A8A] mb-1">
                  <span>{node.code}</span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#2457FF]" />}
                </div>
                <div className="flex items-center space-x-1.5 mb-1">
                  <Icon className="w-3.5 h-3.5 text-[#111111] shrink-0" />
                  <span className="font-heading font-semibold text-[11px] sm:text-xs text-[#111111] leading-tight truncate">
                    {node.title}
                  </span>
                </div>
                <div className="text-[9px] sm:text-[10px] text-[#666666] leading-tight mb-2 truncate">
                  {node.subtitle}
                </div>
              </div>

              <div className="pt-1 border-t border-[#EFEFEA] font-mono-tech text-[8px] sm:text-[9px] text-[#8A8A8A] truncate">
                {node.tech}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Detailed Inspector */}
      {selectedNode !== null && (
        <div className="mt-3 p-3 sm:p-3.5 rounded border border-[#D9D9D4] bg-[#F7F7F5]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
            <div className="flex items-center space-x-2 flex-wrap gap-y-1">
              <span className="font-mono-tech text-[10px] px-2 py-0.5 rounded bg-[#111111] text-[#F5F5F3]">
                STAGE {nodes[selectedNode].code}
              </span>
              <span className="font-heading font-semibold text-xs text-[#111111]">
                {nodes[selectedNode].title} — {nodes[selectedNode].subtitle}
              </span>
            </div>
            <span className="font-mono-tech text-[10px] text-[#2457FF]">
              {nodes[selectedNode].tech}
            </span>
          </div>
          <p className="text-xs text-[#555552] leading-relaxed mb-2">
            {nodes[selectedNode].description}
          </p>
          <div className="flex flex-col xs:flex-row xs:items-center gap-1 font-mono-tech text-[10px] text-[#666666] pt-2 border-t border-[#E8E8E4]">
            <span className="text-[#8A8A8A] shrink-0">OUT_CONTRACT:</span>
            <span className="text-[#111111] font-medium break-words">{nodes[selectedNode].output}</span>
          </div>
        </div>
      )}
    </div>
  );
}

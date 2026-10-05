import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "ai-agent-factory",
    slug: "ai-agent-factory",
    number: "01",
    title: "AI AGENT FACTORY v2",
    subtitle: "Architecture & Code Generation Workflows",
    tagline: "Requirements → Architecture Plans → Code-Generation Workflows",
    description:
      "A Generative AI application that converts source requirement documents into architecture plans and code-generation workflows, replacing manual specification with structured multi-stage AI orchestration.",
    technologies: ["FastAPI", "Generative AI", "SQLite", "Streamlit", "Python"],
    capabilities: [
      "Document Ingestion & Chunking",
      "Semantic Retrieval",
      "Multi-Stage Workflow Orchestration",
      "Human-in-the-Loop Validation",
      "Real-Time Pipeline Monitoring",
      "FastAPI Service Layer",
    ],
    problem: {
      title: "Manual Specification & Fragile Workflow Handoffs",
      description:
        "Translating raw requirement documents into concrete system architecture plans and implementation specifications typically involves fragmented manual steps, inconsistent interpretations, and lack of systematic review gates.",
      keyPoints: [
        "Unstructured requirement documents require multi-pass parsing and semantic extraction.",
        "Direct one-shot generation lacks architectural rigor and intermediate verification.",
        "Workflows require Human-in-the-Loop validation checkpoints before proceeding to code generation.",
      ],
    },
    system: {
      overview:
        "The system separates ingestion, semantic retrieval, workflow orchestration, and user interaction across a decoupled architecture with a FastAPI core and Streamlit monitoring interface.",
      architectureType: "agentic",
    },
    workflow: [
      {
        step: "01",
        title: "DOCUMENT INGESTION",
        description:
          "Parses raw specification documents, extracts structured textual sections, and establishes document schemas.",
        details: "Processes source documentation into normalized content units ready for downstream retrieval.",
      },
      {
        step: "02",
        title: "SEMANTIC RETRIEVAL",
        description:
          "Indexes extracted sections and performs semantic retrieval over domain contexts and project requirements.",
        details: "Matches contextual requirements against architectural modules and functional boundaries.",
      },
      {
        step: "03",
        title: "ARCHITECTURE WORKFLOW",
        description:
          "Executes multi-stage orchestration logic to generate layered system designs, component boundaries, and contracts.",
        details: "Generates step-by-step architectural plans and execution graphs.",
      },
      {
        step: "04",
        title: "HUMAN VALIDATION",
        description:
          "Presents generated architecture plans and design decisions through an interactive review gate.",
        details: "Provides explicit human approval and modification triggers before triggering code generation.",
      },
      {
        step: "05",
        title: "OUTPUT GENERATION",
        description:
          "Produces structured architecture plans and targeted code-generation workflows backed by persistent state.",
        details: "Persists workflow history and state transitions in SQLite via FastAPI endpoints.",
      },
    ],
    engineeringDecisions: [
      {
        decision: "FastAPI Backend Decoupling",
        rationale:
          "Separating the core workflow orchestration engine into a FastAPI service allows independent API testing, predictable request validation, and clean separation from the UI layer.",
      },
      {
        decision: "Human-in-the-Loop Review Gates",
        rationale:
          "Unchecked end-to-end code generation introduces hallucinated architectural constraints. Adding mandatory validation checkpoints ensures engineers verify intermediate plans prior to code generation.",
      },
      {
        decision: "SQLite State Management",
        rationale:
          "Maintains lightweight, reliable persistence for workflow runs, plan revisions, and approval statuses without introducing external database infrastructure overhead.",
      },
      {
        decision: "Streamlit Interface for Real-Time Monitoring",
        rationale:
          "Enables rapid iteration, interactive plan inspection, and step-by-step workflow monitoring without heavyweight frontend build tooling.",
      },
    ],
    technologiesDetailed: [
      {
        category: "Backend Services",
        items: ["FastAPI", "Python", "Pydantic", "REST APIs"],
      },
      {
        category: "AI & Orchestration",
        items: ["Generative AI", "Semantic Retrieval", "Multi-stage Workflows", "Human-in-the-Loop Gates"],
      },
      {
        category: "Persistence & UI",
        items: ["SQLite", "Streamlit", "JSON Schema Contracts"],
      },
    ],
    results: [
      "Built a Generative AI application that converts source requirement documents into architecture plans and code-generation workflows, reducing manual specification work.",
      "Designed a FastAPI backend and Streamlit interface to orchestrate and monitor multi-stage AI workflows in real time.",
      "Implemented document ingestion, semantic retrieval, and workflow orchestration with Human-in-the-Loop validation to improve the reliability of AI-generated requirements and architecture plans.",
    ],
    githubUrl: "https://github.com/dharma0504",
  },
  {
    id: "nexus",
    slug: "nexus",
    number: "02",
    title: "NEXUS",
    subtitle: "Agentic RAG Platform",
    tagline: "Intelligent Routing · Vector Search · Enterprise Retrieval",
    description:
      "An Agentic RAG application on Databricks for natural-language Q&A over software requirements documents, replacing manual document search with semantic retrieval and multi-path query routing.",
    technologies: [
      "Databricks",
      "Vector Search",
      "RAG",
      "MLflow",
      "Unity Catalog",
      "Genie",
      "Lakeflow Jobs",
      "Databricks Apps",
    ],
    capabilities: [
      "Medallion Ingestion Pipeline (Bronze → Silver → Gold)",
      "Semantic Document Chunking",
      "Vector Embeddings Generation",
      "Databricks Vector Search",
      "Two-Stage Cross-Encoder Reranking",
      "Dynamic Query Router (RAG / Tool / Web)",
      "Unity Catalog Governance",
      "MLflow Evaluation & Tracking",
    ],
    problem: {
      title: "Manual Search Over Complex Software Requirements",
      description:
        "Software requirements documents are dense, scattered, and prone to ambiguities. Keyword search fails to capture architectural relationships, while naive retrieval dumps irrelevant context directly to language models.",
      keyPoints: [
        "Keyword matching cannot resolve semantic intent across technical documentation.",
        "Naive single-stage RAG suffers from low context precision and poor document boundary handling.",
        "Queries require routing to different execution engines depending on whether domain data, tools, or web lookups are needed.",
      ],
    },
    system: {
      overview:
        "Nexus combines a structured Lakehouse data pipeline for document preparation with an agentic runtime that routes user queries between Databricks Vector Search, external tools, and web sources, followed by reranking and context synthesis.",
      architectureType: "rag",
    },
    workflow: [
      {
        step: "01",
        title: "USER QUERY INTAKE",
        description: "Captures natural-language inquiry regarding software specifications or system behavior.",
        details: "Accepts conversational questions via Databricks Apps interface.",
      },
      {
        step: "02",
        title: "INTELLIGENT QUERY ROUTER",
        description:
          "Evaluates query intent and dynamically routes execution between internal RAG, tool execution, or web search.",
        details: "Classifies query requirements to determine whether Lakehouse retrieval or external tools are optimal.",
      },
      {
        step: "03",
        title: "DATABRICKS VECTOR SEARCH",
        description: "Executes similarity search across embedded Gold-tier document chunks.",
        details: "Retrieves top candidate document chunks from Unity Catalog-governed vector index.",
      },
      {
        step: "04",
        title: "TWO-STAGE RERANKING",
        description: "Applies reranking across candidates to filter noise and maximize context precision.",
        details: "Orders chunks by relevance to ensure the highest-signal context enters the LLM window.",
      },
      {
        step: "05",
        title: "SYNTHESIS & GOVERNED RESPONSE",
        description: "Synthesizes cited natural-language answers with complete governance and traceability.",
        details: "MLflow monitors evaluation metrics while Unity Catalog enforces data lineage and access controls.",
      },
    ],
    engineeringDecisions: [
      {
        decision: "Medallion Architecture for Requirements Processing",
        rationale:
          "Structuring document transformation into Bronze (raw files), Silver (cleaned, segmented paragraphs), and Gold (semantic chunks with embeddings) creates reproducible, auditable vector data.",
      },
      {
        decision: "Two-Stage Retrieval with Reranking",
        rationale:
          "Vector search alone optimizes for broad recall. Introducing a reranking stage dramatically tightens precision before feeding context to the LLM, reducing context window bloat and hallucinations.",
      },
      {
        decision: "Agentic Query Routing",
        rationale:
          "Not all inquiries are pure document retrieval tasks; some require tools or web verification. The query router selects the appropriate retrieval path based on intent classification.",
      },
      {
        decision: "Unity Catalog & Lakeflow Integration",
        rationale:
          "Centralizes security, access control, and scheduled pipeline execution under Databricks Lakeflow Jobs with end-to-end MLflow experiment tracking.",
      },
    ],
    technologiesDetailed: [
      {
        category: "Databricks Lakehouse",
        items: ["Databricks", "Unity Catalog", "Lakeflow Jobs", "Databricks Apps", "Genie"],
      },
      {
        category: "Retrieval & Vector Search",
        items: ["Databricks Vector Search", "Semantic Chunking", "Embeddings", "Reranking"],
      },
      {
        category: "AI & ML Lifecycle",
        items: ["Agentic RAG", "Query Router", "MLflow", "LLM Integration"],
      },
    ],
    results: [
      "Designed and built an Agentic RAG application on Databricks for natural-language Q&A over software requirements documents, replacing manual document search with semantic retrieval.",
      "Engineered a Bronze → Silver → Gold pipeline with semantic chunking, embeddings, Databricks Vector Search, and reranking to improve retrieval relevance.",
      "Architected RAG, Tool, and Web query routing and integrated Unity Catalog, MLflow, Genie, Lakeflow Jobs, and Databricks Apps into a unified application workflow.",
    ],
    githubUrl: "https://github.com/dharma0504",
  },
  {
    id: "thelook",
    slug: "thelook",
    number: "03",
    title: "THELOOK",
    subtitle: "Data Engineering Platform",
    tagline: "Medallion Architecture · Delta Lake · Idempotent Pipelines",
    description:
      "An end-to-end Databricks data engineering platform using Medallion Architecture for reliable ingestion, transformation, and analytical processing across multi-source transactional datasets.",
    technologies: ["Databricks", "Delta Lake", "Apache Spark", "dbt", "SQL", "Python"],
    capabilities: [
      "Medallion Architecture (Bronze → Silver → Gold)",
      "Data Quality Validation & Quarantine Handling",
      "Incremental Processing with Delta Lake",
      "Idempotent & Auditable Pipeline Execution",
      "Slowly Changing Dimensions (SCD Type 2)",
      "dbt Models & Automated Test Suites",
      "PII Governance & Column Masking",
      "Production-Oriented Observability",
    ],
    problem: {
      title: "Data Quality Degradation & Schema Drift in Analytical Pipelines",
      description:
        "High-volume transactional systems frequently face data quality regressions, duplicated records, non-idempotent re-runs, and compliance exposure without strict governance boundaries.",
      keyPoints: [
        "Unvalidated raw feeds pollute analytical tables and downstream reporting.",
        "Pipeline failures leave duplicate or partially committed state without ACID lakehouse guarantees.",
        "Customer PII requires strict masking and column-level governance to maintain compliance.",
      ],
    },
    system: {
      overview:
        "TheLook utilizes Delta Lake on Databricks with Apache Spark and dbt to establish a multi-tier Medallion architecture featuring schema enforcement, quarantine routing, incremental merge logic, and SCD Type 2 dimension tracking.",
      architectureType: "data-pipeline",
    },
    workflow: [
      {
        step: "01",
        title: "DATA SOURCES INGESTION",
        description: "Captures multi-source transactional events and relational records into Bronze Delta tables.",
        details: "Maintains raw append-only history with full schema preservation.",
      },
      {
        step: "02",
        title: "QUALITY GATES & QUARANTINE",
        description: "Applies automated schema validation rules and routes corrupt records into quarantine storage.",
        details: "Prevents malformed data from polluting downstream transformation steps.",
      },
      {
        step: "03",
        title: "SILVER CLEANING & ENRICHMENT",
        description: "Performs deduplication, type casting, incremental merge operations, and PII masking.",
        details: "Executes idempotent upserts via Spark and Delta Lake ACID merge logic.",
      },
      {
        step: "04",
        title: "GOLD ANALYTICAL MODELING",
        description: "Transforms enriched tables into star schemas and SCD Type 2 historical dimension tracking.",
        details: "Orchestrated with dbt models and automated data test assertions.",
      },
      {
        step: "05",
        title: "ANALYTICS & OBSERVABILITY",
        description: "Exposes optimized dimensional views for analytics with operational pipeline telemetry.",
        details: "Ensures auditable, repeatable pipeline execution with production-oriented controls.",
      },
    ],
    engineeringDecisions: [
      {
        decision: "Delta Lake ACID Guarantees",
        rationale:
          "Leveraging Delta Lake transaction logs eliminates partial writes and ensures idempotency during job retries, making pipeline failures safe to recover.",
      },
      {
        decision: "Quarantine Strategy for Malformed Records",
        rationale:
          "Rather than failing entire batches due to isolated bad records, invalid records are routed to an isolated quarantine table with audit tags, allowing healthy data to process uninterrupted.",
      },
      {
        decision: "SCD Type 2 Dimension Tracking",
        rationale:
          "Maintains accurate historical state transitions for user profiles and transactional attributes using effective start/end timestamp ranges.",
      },
      {
        decision: "dbt Modeling & Automated Testing",
        rationale:
          "Codifies analytical transformations in modular SQL with automated test assertions for primary keys, null checks, and referential integrity.",
      },
      {
        decision: "PII Governance & Column-Level Masking",
        rationale:
          "Applies data masking rules on sensitive customer identifiers at the Silver transition to maintain compliance across downstream analytical access.",
      },
    ],
    technologiesDetailed: [
      {
        category: "Storage & Lakehouse",
        items: ["Databricks", "Delta Lake", "Apache Spark", "Unity Catalog"],
      },
      {
        category: "Transformation & Modeling",
        items: ["dbt", "SQL", "SCD Type 2", "Incremental Processing"],
      },
      {
        category: "Quality & Governance",
        items: ["Quarantine Handling", "PII Masking", "Schema Enforcement", "Observability Controls"],
      },
    ],
    results: [
      "Built an end-to-end Databricks data engineering platform using Medallion Architecture for reliable ingestion, transformation, and analytical processing.",
      "Implemented data quality validation, quarantine handling, and incremental processing using Delta Lake and Apache Spark, maintaining idempotent and auditable pipelines.",
      "Developed SCD Type 2 models, dbt models/tests, PII governance and masking, and observability controls to improve production readiness.",
    ],
    githubUrl: "https://github.com/dharma0504",
  },
];

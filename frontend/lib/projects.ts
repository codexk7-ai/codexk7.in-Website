export interface CaseStudyItem {
  id: string;
  category: string;
  badge: 'INTERNAL PRODUCT' | 'CODEXK7 PRODUCT' | 'ENGINEERING CASE';
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  link?: string;
  accentColor?: string;
}

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'agentic-rag-studio',
    category: 'Agentic AI & Knowledge Base',
    badge: 'CODEXK7 PRODUCT',
    title: 'Agentic RAG Knowledge Studio',
    description: 'Autonomous document analysis studio capable of multi-document reasoning, automated citation extraction, and dynamic vector database synchronization.',
    technologies: ['LangGraph', 'Next.js', 'FastAPI', 'Pinecone', 'Python'],
    features: ['Multi-agent reasoning loop', 'Automated chunk reranking', 'Hybrid search pipeline', 'Live stream citations'],
  },
  {
    id: 'ai-workflow-orchestrator',
    category: 'Enterprise Automation',
    badge: 'INTERNAL PRODUCT',
    title: 'Autonomous AI Workflow Orchestrator',
    description: 'Stateful workflow engine that connects LLM tool agents with REST microservices, automated error correction, and execution audit logs.',
    technologies: ['MCP', 'Python', 'Redis', 'Docker', 'FastAPI'],
    features: ['MCP Protocol integration', 'Self-healing API retries', 'State persistence engine', 'Execution trace logs'],
  },
  {
    id: 'voice-agent-gateway',
    category: 'Conversational Voice AI',
    badge: 'ENGINEERING CASE',
    title: 'Low-Latency AI Voice Gateway',
    description: 'Sub-400ms end-to-end voice processing gateway featuring streaming audio websocket handling, real-time noise suppression, and function calling.',
    technologies: ['WebRTC', 'FastAPI', 'Deepgram', 'ElevenLabs', 'Node.js'],
    features: ['Ultra-low latency streaming', 'Function-calling trigger', 'Bilingual voice models', 'Call transcript engine'],
  },
];

export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: 'ACTIVE' | 'BETA' | 'IN DEVELOPMENT';
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'codexk7-core',
    title: 'CODEXK7 Agent Gateway',
    subtitle: 'Enterprise AI Model Router & Guardrail System',
    description: 'Unified API layer for managing LLM fallbacks, token budget allocation, rate-limiting, and PII anonymization across multi-provider deployments.',
    tags: ['Model Gateway', 'Security', 'Observability', 'Token Rate Limiter'],
    status: 'ACTIVE',
  },
  {
    id: 'codexk7-rag',
    title: 'CODEXK7 RAG Engine',
    subtitle: 'Plug-and-Play Vector Knowledge Store',
    description: 'Production-ready indexing engine that parses PDFs, spreadsheets, and databases into optimized semantic embeddings with continuous re-indexing.',
    tags: ['Vector Search', 'Hybrid RAG', 'PDF Extraction', 'Citations'],
    status: 'BETA',
  },
];

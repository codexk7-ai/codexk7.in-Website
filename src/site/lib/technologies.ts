export interface TechCategory {
  id: string;
  name: string;
  items: {
    name: string;
    description: string;
    tag?: string;
  }[];
}

export const TECHNOLOGIES_DATA: TechCategory[] = [
  {
    id: 'ai-llm',
    name: 'AI / LLM Models',
    items: [
      { name: 'OpenAI', description: 'GPT-4o, O1/O3 reasoning models, structured JSON outputs.' },
      { name: 'Anthropic', description: 'Claude 3.5 Sonnet, Claude 3 Opus, Computer Use & Haiku.' },
      { name: 'Google Gemini', description: 'Gemini 1.5 Pro, 2.0 Flash with long-context windows.' },
      { name: 'Groq', description: 'Llama 3 & Mixtral inference running at ultra-high speed.' },
      { name: 'Hugging Face', description: 'Custom fine-tuned open-source models and pipelines.' },
    ],
  },
  {
    id: 'agent-frameworks',
    name: 'Agent Frameworks',
    items: [
      { name: 'LangGraph', description: 'Cyclic stateful multi-agent orchestrations and graphs.', tag: 'Core' },
      { name: 'LangChain', description: 'LLM abstraction, chain composition, and memory layers.' },
      { name: 'MCP', description: 'Model Context Protocol for seamless external tool integration.', tag: 'Standard' },
      { name: 'LlamaIndex', description: 'Structured data orchestration and complex indexing.' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend Stack',
    items: [
      { name: 'Next.js 16', description: 'App Router, Server Components, and optimized rendering.', tag: 'Primary' },
      { name: 'React 19', description: 'Modern concurrent React with server actions support.' },
      { name: 'TypeScript', description: 'Strict end-to-end type safety across the entire application.' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS styling with custom design tokens.' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    items: [
      { name: 'Python', description: 'High-performance AI backend services and data pipelines.' },
      { name: 'FastAPI', description: 'Asynchronous OpenAPI-compliant microservice backend.' },
      { name: 'Node.js', description: 'Event-driven server runtime for real-time services.' },
      { name: 'AsyncIO / Celery', description: 'Distributed background job processing queues.' },
    ],
  },
  {
    id: 'database',
    name: 'Databases & Vector',
    items: [
      { name: 'PostgreSQL', description: 'Relational database store with pgvector extensions.' },
      { name: 'Pinecone', description: 'Cloud vector database for enterprise semantic search.' },
      { name: 'FAISS / Chroma', description: 'Local & embedded high-performance vector indexers.' },
      { name: 'Redis', description: 'In-memory state management, caching, and rate limiting.' },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & Infrastructure',
    items: [
      { name: 'AWS', description: 'ECS, Lambda, S3, and Bedrock cloud infrastructure.' },
      { name: 'Vercel', description: 'Serverless deployment and global edge network delivery.' },
      { name: 'Docker', description: 'Containerized deployment for reproducible environments.' },
    ],
  },
];

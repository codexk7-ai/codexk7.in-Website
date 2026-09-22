export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  iconName: string;
  alignment: 'left' | 'right';
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'agentic-ai',
    number: '01',
    title: 'Agentic AI Systems',
    description: 'Autonomous AI agents engineered for multi-step reasoning, planning, tool usage, and deterministic action execution across enterprise systems.',
    technologies: ['LangGraph', 'LangChain', 'MCP', 'Tool Calling', 'LLM Agents'],
    iconName: 'Bot',
    alignment: 'left',
  },
  {
    id: 'generative-ai',
    number: '02',
    title: 'Generative AI & Multimodal',
    description: 'Custom generative workflows, vision processing, document intelligence, and structured data outputs tailored to domain requirements.',
    technologies: ['OpenAI', 'Anthropic', 'Gemini', 'Vision AI', 'Structured Output'],
    iconName: 'Sparkles',
    alignment: 'right',
  },
  {
    id: 'ai-automation',
    number: '03',
    title: 'AI Workflow Automation',
    description: 'End-to-end intelligent pipelines connecting custom LLMs, APIs, CRM tools, and database triggers into autonomous operational loops.',
    technologies: ['FastAPI', 'Python', 'Celery', 'REST APIs', 'Webhooks'],
    iconName: 'Workflow',
    alignment: 'left',
  },
  {
    id: 'ai-saas',
    number: '04',
    title: 'AI SaaS Product Studio',
    description: 'Full-stack production development for modern AI applications with rate limiting, token usage metering, auth, and scalable architecture.',
    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Stripe Ready'],
    iconName: 'Layers',
    alignment: 'right',
  },
  {
    id: 'voice-agents',
    number: '05',
    title: 'AI Voice & Conversational',
    description: 'Real-time ultra-low latency voice agents and streaming audio processing designed for customer interactions and voice automated workflows.',
    technologies: ['WebRTC', 'Audio Streaming', 'Speech-to-Text', 'TTS', 'Voice Agents'],
    iconName: 'Mic',
    alignment: 'left',
  },
  {
    id: 'custom-rag',
    number: '06',
    title: 'Custom RAG Engine',
    description: 'Knowledge-grounded retrieval systems featuring hybrid dense/sparse search, vector embeddings, reranking, and zero-hallucination guardrails.',
    technologies: ['Pinecone', 'FAISS', 'Chroma', 'Embeddings', 'Hybrid RAG'],
    iconName: 'Database',
    alignment: 'right',
  },
  {
    id: 'web-mobile-apps',
    number: '07',
    title: 'Web & Mobile Applications',
    description: 'High-performance web and cross-platform applications engineered with responsive layouts, optimal render speeds, and intuitive UI/UX.',
    technologies: ['Next.js', 'React Native', 'Tailwind CSS', 'PWA', 'TypeScript'],
    iconName: 'Smartphone',
    alignment: 'left',
  },
  {
    id: 'ai-integrations',
    number: '08',
    title: 'AI Infrastructure & APIs',
    description: 'Enterprise model integration, model routing, fallback management, stateful context caching, and scalable vector store infrastructure.',
    technologies: ['Groq', 'Hugging Face', 'Redis', 'Docker', 'AWS'],
    iconName: 'Cpu',
    alignment: 'right',
  },
];

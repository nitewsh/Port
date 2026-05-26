export const projects = [
  {
    id: 'hr-intelligence',
    index: '01',
    title: 'Enterprise HR Intelligence Platform',
    tagline: 'Executive HR analytics for workforce visibility, resume intelligence, and operational decision support',
    category: 'Enterprise AI platform',
    problem:
      'HR teams need one reliable system for workforce monitoring, attrition analysis, resume intelligence, and day-to-day HR operations instead of juggling disconnected tools and spreadsheets.',
    whyExistingSystemsFail:
      'Traditional dashboards expose data, but they rarely connect workforce signals, hiring information, and HR operations in one place. That makes executive review slower and operational follow-through inconsistent.',
    engineeringApproach:
      'I designed the platform as a modular React and FastAPI system: dashboard modules for executive reporting, analysis workflows for attrition and resume intelligence, and containerized services for deployment consistency.',
    workflow: [
      'Collect workforce and resume data across HR workflows',
      'Process records through backend analysis services',
      'Surface attrition, monitoring, and hiring insights in a shared dashboard',
      'Support HR operations with one consistent interface for review and action',
    ],
    architecture: [
      'React frontend for executive dashboard and analysis flows',
      'FastAPI backend for business logic and data-serving endpoints',
      'Feature modules for workforce monitoring and attrition analysis',
      'Resume intelligence workflows integrated into the same product surface',
      'Dockerized deployment for portable environments',
    ],
    challenges: [
      'Designing one interface that works for both executive visibility and operational HR use',
      'Keeping workforce monitoring, hiring intelligence, and attrition analysis coherent in one system',
      'Structuring services so the platform stays maintainable as modules expand',
    ],
    technologies: ['React', 'FastAPI', 'Docker'],
    businessImpact: [
      'Gives HR stakeholders one system for analytics and operations',
      'Improves visibility across workforce monitoring and resume review',
      'Creates a stronger foundation for operational decision-making',
    ],
    systemLabels: ['Inputs', 'Analysis', 'Dashboard'],
    color: '#63b3ed',
  },
  {
    id: 'ai-governx',
    index: '02',
    title: 'AI GovernX',
    tagline: 'A workforce governance system built around role-based workflows, SLA tracking, and compliance automation',
    category: 'Workflow governance platform',
    problem:
      'Operational governance breaks down when approvals, escalations, SLA ownership, and compliance checks live in separate manual processes. Teams need a system that makes accountability visible and enforceable.',
    whyExistingSystemsFail:
      'Manual follow-ups and fragmented workflow tools make it hard to track ownership, respond to SLA breaches, and keep compliance steps attached to the actual work being done.',
    engineeringApproach:
      'I built AI GovernX around a role-based workflow engine with JWT authentication, SLA monitoring, escalation logic, and automated compliance steps, then packaged delivery through Jenkins and Docker.',
    workflow: [
      'Authenticate users and route work through role-aware workflow states',
      'Track SLA windows and workflow progress across tasks',
      'Trigger escalation paths when timelines or approvals slip',
      'Record governance and compliance steps inside the operational flow',
    ],
    architecture: [
      'JWT-based authentication and protected access control',
      'Role-based workflow engine for approval and routing logic',
      'SLA monitoring services for operational deadlines',
      'Escalation workflows for exception handling',
      'Jenkins CI/CD pipeline with Dockerized infrastructure',
    ],
    challenges: [
      'Designing workflow states that remain clear across multiple roles',
      'Keeping SLA and escalation logic visible without overcomplicating the product',
      'Maintaining reliable deployment flow across infrastructure changes',
    ],
    technologies: ['JWT Authentication', 'Jenkins', 'Docker'],
    businessImpact: [
      'Creates a clearer operating model for governance-heavy workflows',
      'Reduces manual follow-up through SLA and escalation automation',
      'Brings compliance steps closer to day-to-day system operations',
    ],
    systemLabels: ['Auth', 'Workflow', 'Escalation'],
    color: '#9f7aea',
  },
  {
    id: 'llama3-rag',
    index: '03',
    title: 'LLaMA3 RAG Chatbot',
    tagline: 'A modular retrieval system built around semantic search, voice interaction, and LLaMA3 responses',
    category: 'RAG system',
    problem:
      'Users need more than keyword search when querying internal knowledge. They need a system that can retrieve context semantically, answer naturally, and support both text and voice interaction.',
    whyExistingSystemsFail:
      'Static FAQs and plain keyword search miss intent, while tightly coupled chatbot builds are harder to extend when new retrieval, voice, or interface requirements appear.',
    engineeringApproach:
      'I structured the chatbot as a modular RAG system using LLaMA3, ChromaDB, semantic search, and STT/TTS so retrieval, generation, and interface capabilities can evolve independently.',
    workflow: [
      'Ingest content into a searchable vector pipeline',
      'Store and retrieve relevant context through ChromaDB semantic search',
      'Generate responses with LLaMA3 using retrieved context',
      'Support text and voice interaction with STT/TTS modules',
    ],
    architecture: [
      'Document ingestion and embedding pipeline',
      'ChromaDB vector database for retrieval',
      'Semantic search layer for context selection',
      'LLaMA3 generation layer for responses',
      'STT/TTS modules inside a modular application structure',
    ],
    challenges: [
      'Keeping retrieval quality strong across varied inputs',
      'Making the system modular enough for both voice and text interfaces',
      'Balancing response quality with maintainable architecture',
    ],
    technologies: ['LLaMA3', 'ChromaDB', 'Semantic Search', 'STT/TTS'],
    businessImpact: [
      'Makes knowledge retrieval more natural than standard search interfaces',
      'Supports reuse through a modular architecture',
      'Connects semantic retrieval with voice-enabled interaction',
    ],
    systemLabels: ['Ingestion', 'Retrieval', 'Reasoning'],
    color: '#68d391',
  },
  {
    id: 'medical-imaging',
    index: '04',
    title: 'Medical Imaging AI',
    tagline: 'CNN-based deep learning workflows for pneumonia detection and brain tumor classification',
    category: 'Applied deep learning',
    problem:
      'Medical imaging tasks such as pneumonia detection and brain tumor classification require robust preprocessing and model pipelines that can learn from image data consistently.',
    whyExistingSystemsFail:
      'Computer vision experiments often remain fragmented across notebooks and datasets, which makes it difficult to compare results, repeat training pipelines, and build reliable classification workflows.',
    engineeringApproach:
      'I built CNN-based pipelines focused on medical imaging analysis, using structured preprocessing and training flows for both pneumonia detection and brain tumor classification.',
    workflow: [
      'Prepare imaging data for model-ready input',
      'Train CNN-based classifiers for separate medical tasks',
      'Evaluate performance across pneumonia and brain tumor workflows',
      'Use the resulting models for structured imaging analysis',
    ],
    architecture: [
      'Imaging preprocessing and normalization pipeline',
      'CNN-based training workflows using TensorFlow',
      'Task-specific classification flows for pneumonia detection',
      'Task-specific classification flows for brain tumor analysis',
      'Evaluation layer for model experimentation and comparison',
    ],
    challenges: [
      'Handling dataset quality and consistency across medical imaging tasks',
      'Building reusable model pipelines for more than one classification problem',
      'Managing class imbalance and evaluation rigor in healthcare-oriented models',
    ],
    technologies: ['TensorFlow', 'CNN', 'Medical Imaging'],
    businessImpact: [
      'Demonstrates applied deep learning across healthcare image datasets',
      'Creates reusable workflows for multi-problem classification experiments',
      'Supports model-driven analysis for screening-oriented use cases',
    ],
    systemLabels: ['Preprocess', 'Train', 'Classify'],
    color: '#fc8181',
  },
]

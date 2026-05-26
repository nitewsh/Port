export const projects = [
  {
    id: 'hr-intelligence',
    index: '01',
    title: 'Enterprise HR Intelligence Platform',
    tagline: 'Transforming workforce planning from reactive reporting to predictive intervention',
    category: 'Enterprise intelligence',
    problem:
      'A Fortune 500 company with 12,000+ employees was losing $4.2M annually to preventable attrition. HR teams spent 78% of their time on manual data reconciliation across 9 disparate systems, leaving no capacity for strategic workforce planning.',
    whyExistingSystemsFail:
      'The company had dashboards, but no decisioning layer. Data was fragmented, lagging, and impossible to operationalize in time for managers to act before high-performers churned.',
    engineeringApproach:
      'I designed a streaming intelligence layer that merged workforce data, collaboration signals, and model outputs into one real-time intervention engine for HR leaders.',
    workflow: [
      'Ingest HRIS, engagement, and communication signals through Kafka topics',
      'Normalize employee events into a unified workforce graph',
      'Score attrition risk with ensemble models and explainability outputs',
      'Surface interventions inside an executive command center and manager workflows',
    ],
    architecture: [
      'Multi-source ETL pipeline with Apache Kafka for real-time ingestion',
      'Transformer-based NLP for sentiment analysis on communication patterns',
      'Gradient boosting ensemble for attrition prediction (94.2% accuracy)',
      'LangChain-powered conversational HR assistant for natural language queries',
      'React dashboard with D3.js real-time visualizations',
    ],
    challenges: [
      'Balancing predictive precision with stakeholder trust and explainability',
      'Reducing false positives so HR teams focused only on intervention-worthy cases',
      'Maintaining low-latency scoring across multiple enterprise data sources',
    ],
    technologies: ['Python', 'LangChain', 'Apache Kafka', 'PostgreSQL', 'Redis', 'React', 'FastAPI', 'Docker', 'AWS'],
    impact: [
      { metric: '94.2%', label: 'Prediction Accuracy' },
      { metric: '$2.8M', label: 'Annual Savings' },
      { metric: '78%', label: 'Reduced Manual Work' },
      { metric: '3.2x', label: 'ROI in 6 Months' },
    ],
    businessImpact: [
      'Created a shared operating layer for HR, finance, and managers',
      'Shifted workforce reviews from retrospective analysis to forward planning',
      'Turned people analytics into a measurable cost-reduction and retention lever',
    ],
    systemLabels: ['Signals', 'Prediction', 'Intervention'],
    color: '#63b3ed',
  },
  {
    id: 'ai-governx',
    index: '02',
    title: 'AI GovernX',
    tagline: 'A governance control plane for production LLM systems',
    category: 'AI governance',
    problem:
      'As enterprises deployed LLMs at scale, compliance teams faced an existential challenge: AI systems operating as black boxes with no audit trails, no bias detection, and no guardrails. Regulatory exposure was immense.',
    whyExistingSystemsFail:
      'Most teams added ad-hoc prompt filters and logging after launch. That left no unified audit layer, no explainability path, and no credible governance story for compliance, legal, or enterprise procurement.',
    engineeringApproach:
      'I built AI GovernX as a middleware control plane that sits between product surfaces and foundation models, adding explainability, policy enforcement, and audit-grade observability without slowing teams down.',
    workflow: [
      'Intercept every model request through a policy-aware inference gateway',
      'Run explainability, bias, and safety checks before and after completion',
      'Persist immutable governance events with full traceability',
      'Generate compliance-ready reporting for audit and risk teams',
    ],
    architecture: [
      'Middleware proxy layer intercepting all LLM API calls',
      'SHAP-based explainability engine for decision tracing',
      'Statistical bias detection across 7 fairness metrics',
      'Immutable audit log on distributed ledger',
      'Automated compliance report generation for GDPR, EU AI Act',
    ],
    challenges: [
      'Keeping governance overhead below the threshold product teams would accept',
      'Designing policies flexible enough for multiple model providers and use cases',
      'Making compliance outputs understandable to both engineers and legal teams',
    ],
    technologies: ['Python', 'FastAPI', 'SHAP', 'Hugging Face', 'PostgreSQL', 'React', 'Docker', 'Kubernetes'],
    impact: [
      { metric: '100%', label: 'Audit Coverage' },
      { metric: '7', label: 'Fairness Metrics' },
      { metric: '<50ms', label: 'Governance Overhead' },
      { metric: 'Copyright', label: 'IP Protected' },
    ],
    businessImpact: [
      'Gave enterprise buyers a concrete governance layer they could approve',
      'Reduced legal and compliance friction for shipping LLM-powered features',
      'Created protectable IP around operational AI governance',
    ],
    systemLabels: ['Gateway', 'Guardrails', 'Audit Trail'],
    color: '#9f7aea',
  },
  {
    id: 'llama3-rag',
    index: '03',
    title: 'LLaMA3 RAG Chatbot',
    tagline: 'Private knowledge retrieval for high-trust enterprise environments',
    category: 'Private AI infrastructure',
    problem:
      'A legal firm with 30 years of case precedents locked in PDFs needed a way to query institutional knowledge without sending sensitive documents to external APIs. Data sovereignty was non-negotiable.',
    whyExistingSystemsFail:
      'Cloud chatbots were disqualified immediately because they externalized client-sensitive data. Traditional search systems also failed because they lacked semantic retrieval and citation fidelity for legal review.',
    engineeringApproach:
      'I deployed an air-gapped retrieval and reasoning stack on private infrastructure, combining dense and sparse retrieval with reranking so legal teams could query sensitive documents without compromising sovereignty.',
    workflow: [
      'Ingest and OCR case files into chunked, metadata-rich embeddings',
      'Blend semantic vector retrieval with sparse retrieval for recall',
      'Rerank passages and reason across multiple sources with LLaMA3',
      'Return answers with page-level citations and confidence overlays',
    ],
    architecture: [
      'LLaMA3-70B running on on-premise NVIDIA A100 cluster',
      'Hybrid retrieval: dense vectors (Chroma) + sparse BM25',
      'Cross-encoder reranking for precision improvement',
      'Multi-document chain-of-thought reasoning',
      'Source citation with page-level provenance tracking',
    ],
    challenges: [
      'Optimizing retrieval quality across massive unstructured legal archives',
      'Making responses citation-first to support lawyer review and trust',
      'Managing local inference performance on enterprise-controlled hardware',
    ],
    technologies: ['LLaMA3', 'LangChain', 'ChromaDB', 'Python', 'FastAPI', 'React', 'NVIDIA CUDA', 'Ollama'],
    impact: [
      { metric: '10x', label: 'Query Speed vs Manual' },
      { metric: '91%', label: 'Answer Relevance' },
      { metric: '0', label: 'External API Calls' },
      { metric: '30yr', label: 'Knowledge Unlocked' },
    ],
    businessImpact: [
      'Unlocked institutional knowledge without violating data residency constraints',
      'Reduced research turnaround from hours to minutes for internal counsel',
      'Established a reusable architecture for other sovereignty-sensitive domains',
    ],
    systemLabels: ['Ingestion', 'Retrieval', 'Reasoning'],
    color: '#68d391',
  },
  {
    id: 'medical-imaging',
    index: '04',
    title: 'Medical Imaging AI',
    tagline: 'Clinical triage intelligence designed for high-stakes environments',
    category: 'Applied healthcare AI',
    problem:
      'Rural hospitals with limited radiology staff faced 48-72 hour delays in critical scan analysis. Patients with time-sensitive conditions like pneumonia and early-stage cancers were being diagnosed too late.',
    whyExistingSystemsFail:
      'Manual queues and generic imaging tools could not prioritize urgent studies fast enough. Hospitals needed a clinically useful triage layer that improved speed without undermining physician trust.',
    engineeringApproach:
      'I engineered a multi-model diagnostic system with calibrated confidence, Grad-CAM explanation overlays, and DICOM-native workflows so radiologists could act faster with more context.',
    workflow: [
      'Process DICOM studies through secure ingestion and normalization',
      'Run ensemble inference for multi-pathology classification and triage ranking',
      'Generate explainability heatmaps and calibrated confidence scores',
      'Route urgent cases into clinician review queues with audit-ready traces',
    ],
    architecture: [
      'EfficientNet-B7 + ResNet-50 ensemble architecture',
      'Grad-CAM visual explanations for clinical trust',
      'DICOM-native processing pipeline',
      'Federated learning for multi-hospital model improvement',
      'HIPAA-compliant deployment on AWS GovCloud',
    ],
    challenges: [
      'Balancing sensitivity and specificity across multiple pathologies',
      'Designing explainability outputs that were clinically useful instead of decorative',
      'Deploying within healthcare privacy and infrastructure constraints',
    ],
    technologies: ['PyTorch', 'TensorFlow', 'EfficientNet', 'OpenCV', 'FastAPI', 'AWS GovCloud', 'Docker', 'DICOM'],
    impact: [
      { metric: '97.3%', label: 'Detection Accuracy' },
      { metric: '<3s', label: 'Analysis Time' },
      { metric: '68hr', label: 'Delay Eliminated' },
      { metric: '5', label: 'Pathologies Detected' },
    ],
    businessImpact: [
      'Moved critical cases to the front of the queue in under three seconds',
      'Improved radiologist trust with explanation-first model outputs',
      'Extended specialist-grade support to hospitals with limited staffing',
    ],
    systemLabels: ['Imaging', 'Inference', 'Clinical Routing'],
    color: '#fc8181',
  },
]



import { ProductPillar, UseCase, IndustryCard, Resource, FAQItem, ReadyOption, ImpactStat, Challenge, SolutionPoint, BuildingBlock } from './types';

export const APP_NAME = "Agentforce Industries Accelerator";

export const HERO_TITLE = "Build scalable digital experiences for your Agentic Enterprise.";
export const HERO_SUBTITLE = "Unlock speed, agility, intelligence, and at scale compliance by extending pre-built industry workflows with domain-specific automation, complex logic orchestration, and a secure environment that adapts to unique business requirements.";

export const WHAT_IS_TITLE = "What is Agentforce Industries Accelerators?";
export const WHAT_IS_DESC = "Agentforce Industries Accelerators provide the integrated suite of solutions needed for the agentic era. The Agentforce Industries Accelerator extends the possibilities of out-of-the-box use cases, by automating industry-specific processes, enabling complex business logic, and a secure execution environment that elevate agents, fast—enabling you to bypass custom development and immediately deploy compliant, context-aware digital experiences.";

export const COMPARISON_MAIN_TITLE = "The Agentic Imperative: Bridging the gap to an agentic enterprise";
export const SOLUTIONS_TITLE = "The Solution: The Agentforce Advantage";
export const OVERVIEW_SOLUTIONS: SolutionPoint[] = [
  {
    title: "Rapid Time-to-Value",
    description: "Eliminate expensive custom builds. Deploy 3x faster with pre-built, upgrade-safe, reusable, industry assets, drastically reducing total cost of ownership.",
    iconName: "Timer"
  },
  {
    title: "Centralized & Scalable Logic",
    description: "Centralized, declarative business rules ensure every agent action is compliant, consistent, and scalable, reducing regulatory risk without custom code.",
    iconName: "Zap"
  },
  {
    title: "Scalable, Multi-Step Workflows",
    description: "Orchestrate complex, multi-step processes with ease using low-code tools designed for industry complexity.",
    iconName: "TrendingUp"
  },
  {
    title: "Unified 360° Data",
    description: "Inject zero-latency, unified data context directly into the agent's workflow, enabling instant, accurate reasoning on a single, secure platform.",
    iconName: "Layers"
  }
];

export const BUILDING_BLOCKS: BuildingBlock[] = [
  {
    title: "Role",
    description: "The role is the agent's purpose, it defines the industry-specific job to be done and the broader goal the agent should achieve.",
    headerText: "With Agentforce for Industries, AI agents can solve for role specific challenges with deep industry context and expertise, surfaced through pre-built skills. Some examples include:",
    examples: ["Banking Service", "Home Health", "Proactive Maintenance", "Billing Resolution", "ESG Management"]
  },
  {
    title: "Trusted Data",
    description: "Access unified, real-time data from across your enterprise to ground agents in truth and prevent hallucinations.",
    headerText: "Data Cloud unifies all your data—structured and unstructured—to give agents a 360-degree view of the customer and business context.",
    examples: ["Unified Customer Profile", "Real-Time Telemetry", "Legacy System Data", "Document Knowledge"]
  },
  {
    title: "Actions",
    description: "Empower agents to take meaningful action, not just answer questions, by connecting them to your business flows.",
    headerText: "Pre-built industry actions allow agents to execute complex tasks autonomously within your existing business parameters.",
    examples: ["Process Loan Application", "Schedule Appointment", "Update Policy", "Reorder Inventory"]
  },
  {
    title: "Integrations",
    description: "Seamlessly connect to any external system or proprietary API to extend agent capabilities beyond Salesforce.",
    headerText: "Mulesoft and standard APIs ensure your agents can read from and write to any system in your IT landscape.",
    examples: ["Core Banking System", "ERP Integration", "EHR Records", "Supply Chain Mgmt"]
  }
];

export const VALUE_PROP_TITLE = "Elevate Agents, Fast with Agentforce Industries Accelerators.";
export const VALUE_PROP_DESC = "Our integrated suite provides the essential building blocks to overcome these challenges. By combining pre-built industry actions with unified data, these products unlock limitless productivity and replace legacy complexity.";

export const CHALLENGES_TITLE = "The Challenge: Bridging the Gap";
export const CHALLENGES_SUBTITLE = "Traditional digital transformation approaches struggle to deliver autonomous value in complex industries.";
export const CHALLENGES: Challenge[] = [
  {
    title: "High Cost of Ownership",
    description: "Custom code is expensive to build, slow to deploy, and fragile to maintain, creating massive technical debt that slows down innovation.",
    iconName: "Coins"
  },
  {
    title: "Hard-Coded Logic & Compliance Risks",
    description: "Business rules buried in code are risky to update, opaque to audit, and difficult to scale, creating significant compliance vulnerabilities.",
    iconName: "Code2"
  },
  {
    title: "Complex, Fragile Workflows",
    description: "Industry processes are multi-step and intricate. Hard-coding them makes them fragile, difficult to scale, and risky to update.",
    iconName: "BarChart3"
  },
  {
    title: "Siloed Data",
    description: "Agents cannot reason effectively because customer data is scattered across legacy systems, leading to hallucinations and disconnected service.",
    iconName: "Unplug"
  },
  {
    title: "Fragmented Channel Experiences",
    description: "Legacy systems force you to rebuild logic for specific channels, resulting in disjointed experiences where conversations reset when customers switch devices.",
    iconName: "MessageSquareDashed"
  }
];

export const ACCELERATOR_TITLE = "Accelerate your Salesforce Industries Implementation";
export const ACCELERATOR_TEXT = "Jumpstart your transformation with our expert implementation ecosystem. Access standardized frameworks, reusable logic, and pre-built assets to ensure consistent, enterprise-grade delivery.";
export const ACCELERATOR_CTA = "Register for a hands-on workshop to accelerate your implementation.";

export const PRODUCT_PILLARS: ProductPillar[] = [
  {
    id: 'omnistudio',
    title: 'Omnistudio',
    shortDesc: 'Guided, omni-channel digital experiences.',
    fullDesc: 'Build and extend onboarding, loan apps, KYC flows, FNOL, and claims intake journeys on top of Industry Clouds — while unifying UI, steps, and variations across products and regions.',
    benefits: [
      'Speed Time-to-Value with declarative visual tools.',
      'Unified Customer Journeys across web, mobile, and agent desktops.',
      'Seamless Data Integration inside and outside Salesforce.'
    ],
    iconName: 'Layout',
    imageSrc: 'https://placehold.co/800x500/f8fafc/032d60?text=Omnistudio+UI+Builder'
  },
  {
    id: 'bre',
    title: 'Business Rules Engine',
    shortDesc: 'Declarative engine for automating decisions.',
    fullDesc: 'Manage eligibility, pricing, underwriting, AML, fraud checks, and servicing rules declaratively — update logic in minutes, not releases.',
    benefits: [
      'Agile Decision Logic: Configure eligibility & pricing without code.',
      'Enterprise-Grade Consistency across all channels.',
      'Operational Transparency with clear audit trails.'
    ],
    iconName: 'GitMerge',
    imageSrc: 'https://placehold.co/800x500/f8fafc/032d60?text=Business+Rules+Engine+Canvas'
  },
  {
    id: 'context',
    title: 'Context Service',
    shortDesc: 'Intelligent data abstraction layer.',
    fullDesc: 'Pre-fetch account, policy, claim, credit, and interaction context so every user and AI agent sees what matters right now.',
    benefits: [
      'Optimize Data Access: High-performance caching.',
      'Drive Hyper-Personalization with moment-in-time context.',
      'Simplify Process Design: Abstract complex lookups.'
    ],
    iconName: 'Cpu',
    imageSrc: 'https://placehold.co/800x500/f8fafc/032d60?text=Context+Service+Dashboard'
  },
  {
    id: 'dpe',
    title: 'Data Processing Engine',
    shortDesc: 'Scalable batch processing tool.',
    fullDesc: 'Normalize bureau data, compute affordability ratios, detect anomalies/fraud, and generate risk insights to power decisions and agentic actions.',
    benefits: [
      'Data Unification at Scale from various sources.',
      'Foundation for Intelligence: Drive calculated insights & agentic actions.',
      'Declarative Data Flow: No custom code or external ETL needed.'
    ],
    iconName: 'Database',
    imageSrc: 'https://placehold.co/800x500/f8fafc/032d60?text=Data+Processing+Engine+Flow'
  }
];

export const INDUSTRY_CARDS: IndustryCard[] = [
  {
    id: 'finserv',
    title: 'Financial Services',
    description: 'Augment human capacity with digital labor across banking, wealth, and insurance.',
    iconName: 'Landmark',
    useCases: ['Transaction Dispute Resolution', 'Loan Application Processing', 'Financial Planning Assistant', 'Insurance Claims First Notice of Loss', 'KYC Automation']
  },
  {
    id: 'health',
    title: 'Healthcare',
    description: 'Simplify the patient journey and streamline provider operations.',
    iconName: 'HeartPulse',
    useCases: ['Patient Intake & Triage', 'Care Plan Adherence', 'Benefits Verification', 'Scheduling & Reminders', 'Provider Credentialing']
  },
  {
    id: 'consumer',
    title: 'Consumer Goods',
    description: 'Transform trade promotion and retail execution with AI agents.',
    iconName: 'ShoppingBag',
    useCases: ['Trade Promotion Mgmt', 'Store Audit Automation', 'Inventory Checks', 'Order Reordering', 'Distributor Onboarding']
  },
  {
    id: 'mfg',
    title: 'Manufacturing',
    description: 'Connect sales, service, and operations for speed across the value chain.',
    iconName: 'Factory',
    useCases: ['Warranty Claims', 'Asset Maintenance', 'Distributor Mgmt', 'Quote-to-Cash', 'Field Service Dispatch']
  },
  {
    id: 'comms',
    title: 'Communications',
    description: 'Deliver seamless, connected experiences across every channel.',
    iconName: 'Wifi',
    useCases: ['Bill Inquiry Resolution', 'Service Outage Comms', 'Plan Changes', 'Technician Dispatch', 'Fraud Detection']
  },
  {
    id: 'auto',
    title: 'Automotive',
    description: 'Accelerate vehicle sales and service with personalized mobility experiences.',
    iconName: 'Car',
    useCases: ['Vehicle Configurator', 'Service Appointment Booking', 'Lease Renewal', 'Dealer Onboarding', 'Recall Management']
  },
  {
    id: 'public',
    title: 'Public Sector',
    description: 'Modernize government services to deliver faster support to constituents.',
    iconName: 'Building2',
    useCases: ['Permit Applications', 'Benefits Eligibility', 'License Renewals', 'Grant Management', 'Emergency Response']
  },
  {
    id: 'energy',
    title: 'Energy & Utilities',
    description: 'Power the future of energy with efficient grid operations.',
    iconName: 'Zap',
    useCases: ['Outage Reporting', 'Meter Reading Entry', 'New Service Connection', 'Bill Analysis', 'Asset Inspection']
  },
  {
    id: 'media',
    title: 'Media & Ent.',
    description: 'Engage audiences with hyper-personalized content and subscription experiences.',
    iconName: 'Clapperboard',
    useCases: ['Ad Sales Management', 'Subscriber Retention', 'Content Licensing', 'Production Planning', 'Royalty Calculation']
  },
  {
    id: 'edu',
    title: 'Education',
    description: 'Drive student success from recruitment to alumni relations.',
    iconName: 'GraduationCap',
    useCases: ['Admissions Processing', 'Student Advising', 'Donor Stewardship', 'Alumni Engagement', 'Course Scheduling']
  },
  {
    id: 'nonprofit',
    title: 'Nonprofit',
    description: 'Amplify impact by connecting programs, fundraising, and engagement.',
    iconName: 'HeartHandshake',
    useCases: ['Donor Management', 'Volunteer Coordination', 'Program Delivery', 'Grant Tracking', 'Event Management']
  },
  {
    id: 'netzero',
    title: 'Net Zero',
    description: 'Accelerate your path to net zero with carbon accounting.',
    iconName: 'Leaf',
    useCases: ['Carbon Accounting', 'Supplier Audits', 'Waste Management', 'Water Usage Tracking', 'ESG Reporting']
  },
  {
    id: 'retail',
    title: 'Retail',
    description: 'Unify the shopping experience across digital and physical channels.',
    iconName: 'Tag',
    useCases: ['Personal Shopping', 'Loyalty Management', 'Returns Processing', 'Clienteling', 'Store Operations']
  }
];

export const IMPACT_STATS: ImpactStat[] = [
  {
    value: "6x",
    label: "Faster deployment vs custom code"
  },
  {
    value: "1200+",
    label: "Pre-built industry business processes"
  },
  {
    value: "13+",
    label: "Industries Supported"
  }
];

export const RESOURCES: Resource[] = [
  {
    type: 'Report',
    title: 'Trends in Agentic Enterprise',
    ctaText: 'Get the report',
    imageColor: 'bg-purple-200',
    iconName: 'FileText'
  },
  {
    type: 'Webinar',
    title: 'New Innovations for Connected Industries',
    ctaText: 'Watch now',
    imageColor: 'bg-purple-300',
    iconName: 'Video'
  },
  {
    type: 'Guide',
    title: 'Smarter Savings for Digital Industries',
    ctaText: 'Get the guide',
    imageColor: 'bg-indigo-200',
    iconName: 'BookOpen'
  },
  {
    type: 'News',
    title: '65% of Enterprises Plan to Adopt AI Agents',
    ctaText: 'Read the story',
    imageColor: 'bg-fuchsia-200',
    iconName: 'Newspaper'
  }
];

export const READY_OPTIONS: ReadyOption[] = [
  {
    title: 'Start your trial.',
    description: 'Try Industry Cloud free for 30 days. No credit card. No installations.',
    linkText: 'Try for free',
    iconName: 'Monitor'
  },
  {
    title: 'Talk to an expert.',
    description: 'Tell us a bit more so the right person can reach out faster.',
    linkText: 'Request a call',
    iconName: 'Phone'
  },
  {
    title: 'Watch a demo.',
    description: 'Get the latest research, industry insights, and product news delivered straight to your inbox.',
    linkText: 'See demo',
    iconName: 'PlayCircle'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is included in the Agentforce Industries Accelerator?',
    answer: 'The Accelerator provides a comprehensive package of pre-built templates, industry-specific data models, and agentic skills (such as "Loan Origination" or "Patient Intake"). It also includes implementation guides, reference architectures, and a library of "Topics" and "Actions" pre-mapped to standard Industry Cloud objects, allowing for rapid deployment and customization.'
  },
  {
    question: 'How does the Accelerator speed up deployment compared to building from scratch?',
    answer: 'By providing the "80%" foundation—including standard flows, intents, and data mappings—the Accelerator drastically reduces development time. You bypass the initial architectural setup and focus immediately on the "last mile" customization: adjusting tone, specific business rules, and integration endpoints to match your unique brand requirements.'
  },
  {
    question: 'How do I engage with a certified partner for this Accelerator?',
    answer: 'We have curated a network of Salesforce-certified consulting partners who specialize in Agentforce. These partners have undergone rigorous training on the Accelerator’s specific technical components and delivery methodology. You can request a connection through our "Talk to an Expert" channel or browse our AppExchange partner listing filtered by "Agentforce Industries Accelerator."'
  },
  {
    question: 'Is Data Cloud required to use the Agentforce Industries Accelerator?',
    answer: 'While the core Agentforce platform leverages Data Cloud for grounding and context, the Accelerator supports various configurations. However, to achieve the highest level of personalization and autonomous reasoning described in our advanced use cases (like real-time fraud detection or dynamic patient monitoring), Data Cloud is highly recommended to unify data from disparate sources.'
  },
  {
    question: 'Can I customize the pre-built industry skills included in the Accelerator?',
    answer: 'Yes, absolutely. The pre-built skills are designed as starting points. Using the low-code Agent Builder, your team can easily modify the logic, add new actions, or refine the natural language prompts to ensure the agent behaves exactly as your business processes dictate.'
  }
];

export const USE_CASES: UseCase[] = [];
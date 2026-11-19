export interface CareerHighlight {
  product: string;
  period: string;
  summary: string;
  metric?: string;
}

export interface FoundationItem {
  org: string;
  role: string;
  period: string;
  location: string;
  summary: string;
}

export interface WorkItem {
  title: string;
  category: 'oss' | 'app';
  badge: string;
  description: string;
  url: string;
  repoUrl?: string;
  meta: string;
}

export interface FeaturedOssItem {
  eyebrow: string;
  title: string;
  titleAccent: string;
  titleTail: string;
  description: string;
  specLine?: string;
  links: { label: string; url: string }[];
  hasCodeSpecimen?: boolean;
}

export interface PublishedWritingItem {
  title: string;
  venue: string;
  date: string;
  url: string;
  summary: string;
}

export const PROFILE = {
  name: 'Ayush Goyal',
  role: 'Staff Software Engineer at Google',
  location: 'Bengaluru, India',
  coordinates: 'BLR · 12.97°N',
  domain: 'ayush987goyal.dev',
  email: 'hi@ayush987goyal.dev',
  fallbackEmail: 'ayush987goyal@gmail.com',
  wcaId: '2014GOYA01',
  metaDescription:
    'Ayush Goyal — Staff Software Engineer at Google. Formerly AWS Bedrock, Q Business, and Rekognition Face Liveness. Author of the AWSLabs BDA MCP server.',
  bio: "Staff Software Engineer at Google in Bengaluru. Over 10+ years across Amazon (AWS Bedrock, Q Business, Rekognition, Pharmacy), Goldman Sachs, and Citibank, I've led 10–25 engineer teams shipping multimodal GenAI platforms, real-time ML inference pipelines, and open-source AWS developer tools.",
  links: {
    github: 'https://github.com/ayush987goyal',
    linkedin: 'https://www.linkedin.com/in/ayush987goyal/',
    wca: 'https://www.worldcubeassociation.org/persons/2014GOYA01',
    awsMlBlog:
      'https://aws.amazon.com/blogs/machine-learning/whiteboard-to-cloud-in-minutes-using-amazon-q-amazon-bedrock-data-automation-and-model-context-protocol/',
    awsMcpPyPi: 'https://pypi.org/project/awslabs.aws-bedrock-data-automation-mcp-server/',
  },
} as const;

export const CURRENT_ROLE = {
  company: 'Google',
  location: 'Bengaluru',
  period: 'Jul 2026 – Present',
  title: 'Staff Software Engineer',
} as const;

export const AMAZON_TENURE = {
  company: 'Amazon & AWS',
  location: 'Bengaluru & Hyderabad',
  period: 'Jun 2019 – Jul 2026 · 7 yrs',
  progression: 'FEE II → Senior FEE → Senior SDE',
  scope:
    'Delivered AI/ML platforms across Amazon Bedrock, Q Business, and Rekognition as cross-team technical lead across 10–25 engineers on concurrent launches, then expanded backend ownership at Amazon Pharmacy.',
  highlights: [
    {
      product: 'Amazon Bedrock Data Automation & MCP',
      period: '2024 – 2025',
      metric: 'Extraction F1 0.37 → 0.71 · 3 LLM families',
      summary:
        'Drove the GA launch transforming unstructured documents, images, audio, and video into structured insights; built the console, blueprint optimization, and prompt evaluation framework across 3 LLM families (including Claude and Amazon Nova), lifting extraction accuracy (F1) from 0.37 → 0.71. Authored the official AWSLabs MCP server (8+ API ops, 6+ industry use cases) and published the AWS Machine Learning Blog walkthrough.',
    },
    {
      product: 'Amazon Q Business Custom Plugins',
      period: '2023 – 2024',
      metric: '100+ developers enabled',
      summary:
        'Led launch of managed enterprise AI agent tool plugins — owning API design and plugin architecture across Q Business, Bedrock Agents, and AI CV Services orgs, plus distributed CI/CD and per-developer deployment environments that unblocked Q Business GA.',
    },
    {
      product: 'Amazon Rekognition Face Liveness',
      period: '2021 – 2023',
      metric: '−40% inference latency · 2× 2023 AWS Awards',
      summary:
        'Led end-to-end delivery (frontend, SDK, streaming infrastructure) for real-time spoof and deepfake detection across AI, Security, and Amplify orgs. Integrated TritonServer ML inference (cutting latency by up to 40%) and built the demographic fairness evaluation framework adopted as org standard. Awarded AWS AIML Town Hall & re:Invent Computer Vision Awards.',
    },
    {
      product: 'Amazon Pharmacy & CS Tech',
      period: '2025 – 2026 · 2019 – 2021',
      metric: '2019 Amazon Star Performer',
      summary:
        'Owned full-stack and backend architecture on customer-critical Amazon Pharmacy systems (Sep 2025 – Jul 2026). Earlier architected the V1 Vibe capacity-planning micro-frontend platform and pioneered org-wide AWS CDK adoption.',
    },
  ] satisfies CareerHighlight[],
} as const;

export const EARLY_FOUNDATIONS: FoundationItem[] = [
  {
    org: 'Goldman Sachs',
    role: 'Senior Developer Analyst',
    period: 'Nov 2018 – Jun 2019',
    location: 'Bengaluru',
    summary:
      'Led a 3-engineer team on trade-compliance controls (React, Node.js, SQL), optimized market-making & agency order/quote flows, and delivered a global Market Access Rule impact study.',
  },
  {
    org: 'Citibank',
    role: 'Core C++ & Full Stack Analyst',
    period: 'Jul 2016 – Sep 2018',
    location: 'Pune',
    summary:
      'Reduced pricing latency in the equities engine, Dockerized WebSphere apps onto OpenShift CI/CD, and modernized analytics portals. Recipient of the 2017 Individual Excellence Award.',
  },
  {
    org: 'IIT Roorkee',
    role: 'B.Tech. Chemical Engineering',
    period: '2012 – 2016',
    location: 'Roorkee · Windsor · Pune',
    summary:
      '9.3/10 CGPA · Ranked 2nd in Class of 110. Excellence & B.S. Varshney Memorial Awards; gas-hydrate & CO₂ capture research at University of Windsor (Canada) and NCL Pune.',
  },
];

export const FEATURED_OSS: FeaturedOssItem[] = [
  {
    eyebrow: 'AWS ML Blog · Aug 2025',
    title: 'Bedrock Data Automation',
    titleAccent: 'MCP Server',
    titleTail: '& AWS ML Blog',
    description:
      'Authored the official AWSLabs Model Context Protocol (MCP) server for Amazon Bedrock Data Automation — exposing multimodal document, image, audio, and video extraction as callable agent tools — and co-authored the AWS Machine Learning Blog walkthrough with Amazon Q.',
    specLine: 'TypeScript & Python · 8+ API operations · 6+ industry use cases',
    links: [
      {
        label: 'AWS ML Blog (Aug 2025)',
        url: 'https://aws.amazon.com/blogs/machine-learning/whiteboard-to-cloud-in-minutes-using-amazon-q-amazon-bedrock-data-automation-and-model-context-protocol/',
      },
      {
        label: 'awslabs MCP package (PyPI)',
        url: 'https://pypi.org/project/awslabs.aws-bedrock-data-automation-mcp-server/',
      },
    ],
  },
  {
    eyebrow: 'AWS DevOps Blog · Feb 2021',
    title: 'AWS CDK',
    titleAccent: 'EcsRunTask',
    titleTail: '& Construct Hub',
    description:
      'Authored aws/aws-cdk PR #12436 adding task-definition family & revision support to StepFunctions EcsRunTask — highlighted in the AWS DevOps Blog (CDK Corner) — contributed to cdklabs/cdk-monitoring-constructs, and published TypeScript constructs on Construct Hub.',
    hasCodeSpecimen: true,
    links: [
      {
        label: 'AWS DevOps Blog (Feb 2021)',
        url: 'https://aws.amazon.com/blogs/devops/cdk-corner-february-2021/',
      },
      {
        label: 'verdaccio-service-construct',
        url: 'https://constructs.dev/packages/verdaccio-service-construct',
      },
      {
        label: 'umami-analytics-construct',
        url: 'https://constructs.dev/packages/umami-analytics-construct',
      },
      {
        label: 'cdk-monitoring-constructs',
        url: 'https://github.com/cdklabs/cdk-monitoring-constructs',
      },
    ],
  },
];

export const PUBLISHED_WRITING: PublishedWritingItem[] = [
  {
    title: 'Whiteboard to cloud in minutes using Amazon Q, Amazon Bedrock Data Automation, and Model Context Protocol',
    venue: 'AWS Machine Learning Blog',
    date: 'Aug 2025',
    url: 'https://aws.amazon.com/blogs/machine-learning/whiteboard-to-cloud-in-minutes-using-amazon-q-amazon-bedrock-data-automation-and-model-context-protocol/',
    summary:
      'Co-authored technical guide demonstrating how to pair Amazon Q Developer with the AWSLabs Bedrock Data Automation MCP server to turn whiteboard architecture sketches into deployed AWS infrastructure.',
  },
  {
    title: 'CDK Corner — February 2021 (Featured Contributor: aws/aws-cdk PR #12436)',
    venue: 'AWS DevOps Blog',
    date: 'Feb 2021',
    url: 'https://aws.amazon.com/blogs/devops/cdk-corner-february-2021/',
    summary:
      'Featured by the AWS CDK team for adding task-definition family and revision number support to StepFunctions EcsRunTask.',
  },
];

export const LIVE_APPS: WorkItem[] = [
  {
    title: 'Terraforming Mars Score Calculator',
    category: 'app',
    badge: 'Tabletop Companion',
    description:
      'Mobile-first end-game VP scorer handling TR, milestones, awards, greenery & city adjacency.',
    url: 'https://terraforming-mars-score-calculator.vercel.app',
    repoUrl: 'https://github.com/ayush987goyal/terraforming-mars-score-calculator',
    meta: 'TypeScript · Live App',
  },
  {
    title: 'Play Dumb Charades',
    category: 'app',
    badge: 'Party Game',
    description:
      'Instant movie & Bollywood prompt generator with fast turn timers for game nights.',
    url: 'https://playdumbcharades.vercel.app',
    repoUrl: 'https://github.com/ayush987goyal/dumb-charades-app',
    meta: 'TypeScript · Live App',
  },
  {
    title: 'Judgement Score Taker',
    category: 'app',
    badge: 'Card Game Tracker',
    description:
      'Zero-login bid-and-trick scorekeeper built for mobile-first tabletop sessions.',
    url: 'https://v0-judgement-score-taker.vercel.app',
    repoUrl: 'https://github.com/ayush987goyal/judgement-score-taker',
    meta: 'TypeScript · Live App',
  },
];

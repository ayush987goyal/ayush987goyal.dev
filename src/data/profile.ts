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
  specLine: string;
  links: { label: string; url: string }[];
}

export interface UpstreamOssItem {
  repo: string;
  stats: string;
  description: string;
  links: { label: string; url: string }[];
}

export interface PublishedWritingItem {
  title: string;
  venue: string;
  role: 'Co-authored' | 'Featured';
  date: string;
  publishedAt: string;
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
    'Ayush Goyal — Staff Software Engineer at Google. Formerly AWS Bedrock, Q Business & Rekognition. Author of AWSLabs MCP servers & 46 merged AWS CDK PRs.',
  bio: "Staff Software Engineer at Google in Bengaluru. Over 10+ years across Amazon (AWS Bedrock, Q Business, Rekognition, Pharmacy), Goldman Sachs, and Citibank, I've served as cross-team technical lead across 10–25 engineers shipping multimodal GenAI platforms, real-time ML inference pipelines, two official AWSLabs MCP servers, and 46 merged AWS CDK PRs.",
  links: {
    github: 'https://github.com/ayush987goyal',
    linkedin: 'https://www.linkedin.com/in/ayush987goyal/',
    wca: 'https://www.worldcubeassociation.org/persons/2014GOYA01',
    awsMlBlog:
      'https://aws.amazon.com/blogs/machine-learning/whiteboard-to-cloud-in-minutes-using-amazon-q-amazon-bedrock-data-automation-and-model-context-protocol/',
    awsMcpPrs: 'https://github.com/awslabs/mcp/pulls?q=is%3Apr+author%3Aayush987goyal+is%3Amerged',
    awsCdkPrs: 'https://github.com/aws/aws-cdk/pulls?q=is%3Apr+author%3Aayush987goyal+is%3Amerged',
    allExternalPrs:
      'https://github.com/search?q=author%3Aayush987goyal+type%3Apr+is%3Amerged+-user%3Aayush987goyal&type=pullrequests',
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
  period: 'Jun 2019 – Jul 2026',
  duration: '7 yrs · Bengaluru & Hyderabad',
  progression: 'Frontend Engineer II → Senior FEE → Senior SDE',
  scope:
    'Delivered AI/ML platforms across Amazon Bedrock, Q Business, and Rekognition as cross-team technical lead across 10–25 engineers on concurrent launches, then expanded backend ownership at Amazon Pharmacy.',
  highlights: [
    {
      product: 'Amazon Bedrock Data Automation & MCP',
      period: '2024 – 2025',
      metric: 'Extraction F1 0.37 → 0.71 · 3 LLM families',
      summary:
        'Drove the GA launch transforming unstructured documents, images, audio, and video into structured insights; built the console, blueprint optimization, and prompt evaluation framework across 3 LLM families (including Claude and Amazon Nova), lifting extraction accuracy (F1) from 0.37 → 0.71. Authored official AWSLabs MCP servers for Bedrock & Rekognition and published the AWS ML Blog walkthrough.',
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
        'Owned full-stack and backend architecture on customer-critical Amazon Pharmacy systems. Earlier architected a V1 capacity-planning micro-frontend platform and pioneered org-wide AWS CDK adoption.',
    },
  ] satisfies CareerHighlight[],
} as const;

export const EARLY_FOUNDATIONS: FoundationItem[] = [
  {
    org: 'Goldman Sachs',
    role: 'Senior Developer Analyst',
    period: 'Nov 2018 – Jun 2019',
    summary:
      'Led a 3-engineer team on trade-compliance controls (React, Node.js, SQL), optimized market-making & agency order/quote flows, and delivered a global Market Access Rule impact study.',
  },
  {
    org: 'Citibank',
    role: 'Core C++ & Full Stack Analyst',
    period: 'Jul 2016 – Sep 2018',
    summary:
      'Reduced pricing latency in the equities engine, Dockerized WebSphere apps onto OpenShift CI/CD, and modernized analytics portals. Recipient of the 2017 Individual Excellence Award.',
  },
  {
    org: 'IIT Roorkee',
    role: 'B.Tech. Chemical Engineering',
    period: '2012 – 2016',
    summary:
      '9.3/10 CGPA · Ranked 2nd in Class of 110. Excellence & B.S. Varshney Memorial Awards; gas-hydrate & CO₂ capture research at University of Windsor (Canada) and NCL Pune.',
  },
];

export const FEATURED_OSS: FeaturedOssItem[] = [
  {
    eyebrow: 'AWSLabs MCP · 2 Official PyPI Servers',
    title: 'AWSLabs',
    titleAccent: 'MCP Servers',
    titleTail: '— Bedrock & Rekognition',
    description:
      'Authored two official AWSLabs Model Context Protocol (MCP) servers — exposing Amazon Bedrock Data Automation (multimodal document, image, audio, and video extraction) and Amazon Rekognition (image, face, and moderation analysis) as callable agent tools — plus the AWS ML Blog walkthrough with Amazon Q.',
    specLine: 'awslabs/mcp #472 & #612 · Python & TypeScript · 2 official PyPI packages',
    links: [
      {
        label: 'AWS ML Blog (Aug 2025)',
        url: 'https://aws.amazon.com/blogs/machine-learning/whiteboard-to-cloud-in-minutes-using-amazon-q-amazon-bedrock-data-automation-and-model-context-protocol/',
      },
      {
        label: 'Bedrock MCP (PyPI)',
        url: 'https://pypi.org/project/awslabs.aws-bedrock-data-automation-mcp-server/',
      },
      {
        label: 'Rekognition MCP (PyPI)',
        url: 'https://pypi.org/project/awslabs.amazon-rekognition-mcp-server/',
      },
      {
        label: 'awslabs/mcp PRs',
        url: 'https://github.com/awslabs/mcp/pulls?q=is%3Apr+author%3Aayush987goyal+is%3Amerged',
      },
    ],
  },
  {
    eyebrow: 'AWS CDK · 46 Merged PRs',
    title: 'AWS CDK',
    titleAccent: 'Core Contributor',
    titleTail: '& Construct Hub',
    description:
      'Shipped 46 merged PRs to aws/aws-cdk — including Lambda Function URLs (#19817), API Gateway v2 WebSocket APIs (#13031), CloudFront Response Headers Policy (#17359), Route 53 Cross-Account DNS Delegations (#12680), and StepFunctions CallApiGateway (#13033) — plus AWS DevOps Blog recognition and published TypeScript constructs.',
    specLine: '46 merged aws/aws-cdk PRs · Lambda, API Gateway, CloudFront & Route 53',
    links: [
      {
        label: '46 Merged CDK PRs',
        url: 'https://github.com/aws/aws-cdk/pulls?q=is%3Apr+author%3Aayush987goyal+is%3Amerged',
      },
      {
        label: 'AWS DevOps Blog',
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
    ],
  },
];

export const UPSTREAM_OSS: UpstreamOssItem[] = [
  {
    repo: 'aws-amplify/amplify-ui',
    stats: '11 merged PRs',
    description:
      'Face Liveness React SDK (@aws-amplify/ui-react-liveness) camera/streaming updates and shared UI hooks (useControllable, useThemeBreakpoint).',
    links: [
      {
        label: 'PRs',
        url: 'https://github.com/aws-amplify/amplify-ui/pulls?q=is%3Apr+author%3Aayush987goyal+is%3Amerged',
      },
    ],
  },
  {
    repo: 'streamich/react-use',
    stats: '7 merged PRs · ★44k',
    description:
      'Authored useCookie, useMethods, useError, and custom serializer/deserializer support for useLocalStorage.',
    links: [
      {
        label: 'PRs',
        url: 'https://github.com/streamich/react-use/pulls?q=is%3Apr+author%3Aayush987goyal+is%3Amerged',
      },
    ],
  },
  {
    repo: 'cdklabs & vuejs/core',
    stats: '9 merged PRs',
    description:
      'Authored CDK Aspects scope monitoring in cdk-monitoring-constructs (#34) and compiler/runtime optimizations in Vue 3 core (★55k).',
    links: [
      {
        label: 'CDK',
        url: 'https://github.com/cdklabs/cdk-monitoring-constructs/pulls?q=is%3Apr+author%3Aayush987goyal+is%3Amerged',
      },
      {
        label: 'Vue',
        url: 'https://github.com/vuejs/core/pulls?q=is%3Apr+author%3Aayush987goyal+is%3Amerged',
      },
    ],
  },
];

export const PUBLISHED_WRITING: PublishedWritingItem[] = [
  {
    title: 'Whiteboard to cloud in minutes using Amazon Q, Amazon Bedrock Data Automation, and Model Context Protocol',
    venue: 'AWS Machine Learning Blog',
    role: 'Co-authored',
    date: 'Aug 2025',
    publishedAt: '2025-08-01',
    url: 'https://aws.amazon.com/blogs/machine-learning/whiteboard-to-cloud-in-minutes-using-amazon-q-amazon-bedrock-data-automation-and-model-context-protocol/',
    summary:
      'Co-authored technical guide demonstrating how to pair Amazon Q Developer with the AWSLabs Bedrock Data Automation MCP server to turn whiteboard architecture sketches into deployed AWS infrastructure.',
  },
  {
    title: 'CDK Corner — February 2021 (Featured Contributor: aws/aws-cdk PR #12436)',
    venue: 'AWS DevOps Blog',
    role: 'Featured',
    date: 'Feb 2021',
    publishedAt: '2021-02-23',
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
    url: 'https://tfm-score.vercel.app',
    repoUrl: 'https://github.com/ayush987goyal/terraforming-mars-score-calculator',
    meta: 'TypeScript · Live App',
  },
  {
    title: 'Play Dumb Charades',
    category: 'app',
    badge: 'Party Game',
    description:
      'The whole game on one phone: play in teams or solo, draw a movie from Bollywood, Hollywood, South Indian or world cinema, and act it out against the clock.',
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

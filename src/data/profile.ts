export interface RoleItem {
  title: string;
  team?: string;
  period: string;
  summary?: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  period: string;
  headlineRole: string;
  summary?: string;
  roles?: RoleItem[];
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
  bio: "I design and build resilient full-stack systems, cloud infrastructure, and AI developer experiences. Over 10+ years across Google, Amazon (AWS Bedrock, AWS AI, Pharmacy), Goldman Sachs, and Citi, I've gone from Chemical Engineering at IIT Roorkee and core C++ pricing engines to Staff-level web and cloud architecture.",
  links: {
    github: 'https://github.com/ayush987goyal',
    linkedin: 'https://www.linkedin.com/in/ayush987goyal/',
    wca: 'https://www.worldcubeassociation.org/persons/2014GOYA01',
  },
} as const;

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Google',
    location: 'Bengaluru',
    period: 'Jul 2026 – Present',
    headlineRole: 'Staff Software Engineer',
    summary: 'Technical leadership and full-stack systems architecture in Bengaluru.',
  },
  {
    company: 'Amazon',
    location: 'Bengaluru & Hyderabad',
    period: 'Jun 2019 – Jul 2026 · 7 yrs',
    headlineRole: 'FEE II → Senior FEE → Senior SDE',
    roles: [
      {
        title: 'Senior Software Development Engineer',
        team: 'Amazon Pharmacy',
        period: 'Sep 2025 – Jul 2026',
        summary: 'Expanded full-stack and backend engineering ownership across customer-critical pharmacy systems.',
      },
      {
        title: 'Senior Front End Engineer',
        team: 'AWS Bedrock',
        period: 'Jul 2022 – Sep 2025',
        summary:
          'Designed and scaled AI developer consoles and workflows for Amazon Bedrock Data Automation; authored the AWSLabs Bedrock Data Automation MCP server and co-authored the AWS Machine Learning Blog walkthrough.',
      },
      {
        title: 'Front End Engineer II',
        team: 'AWS AI Computer Vision',
        period: 'Apr 2021 – Jul 2022',
        summary:
          'Built AWS Computer Vision console and Face Liveness developer experiences (Amplify UI). Recipient of the AWS Computer Vision 2023 re:Invent Award.',
      },
      {
        title: 'Front End Engineer II',
        team: 'CS Tech',
        period: 'Jun 2019 – Mar 2021',
        summary:
          'Architected a V1 capacity-planning platform (Vibe) with micro-frontends and pioneered team-wide adoption of AWS CDK for infrastructure as code.',
      },
    ],
  },
  {
    company: 'Goldman Sachs',
    location: 'Bengaluru',
    period: 'Nov 2018 – Jun 2019',
    headlineRole: 'Senior Developer Analyst',
    summary:
      'Auto Trade Control Validation. Led a 3-engineer full-stack effort (React, Node.js, SQL) standardizing compliance controls across market-making and agency trading flows.',
  },
  {
    company: 'Citi',
    location: 'Pune',
    period: 'Jul 2016 – Sep 2018',
    headlineRole: 'Core C++ & Full Stack Developer Analyst',
    summary:
      'Engineered latency improvements and safety checks on the Equities Pricing Engine (C++), then modernized legacy analytics portals to Angular, Spring, and OpenShift (Kubernetes).',
  },
];

export const EDUCATION = {
  institution: 'Indian Institute of Technology, Roorkee',
  degree: 'B.Tech. Chemical Engineering',
  period: '2012 – 2016',
  highlights:
    'B.S. Varshney Memorial Award. Research assistantships on gas hydrates and CO₂ capture at University of Windsor (Canada) and National Chemical Laboratory (Pune); published on gas hydrate potential in India.',
} as const;

export const FEATURED_OSS: FeaturedOssItem[] = [
  {
    eyebrow: 'Featured · AWS Machine Learning Blog · Aug 2025',
    title: 'Bedrock Data Automation',
    titleAccent: 'MCP Server',
    titleTail: '& AWS ML Blog',
    description:
      'Authored the official AWSLabs Model Context Protocol (MCP) server for Amazon Bedrock Data Automation — exposing multimodal document, image, audio, and video extraction as callable agent tools — and co-authored the AWS ML Blog walkthrough with Amazon Q.',
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
    eyebrow: 'Featured · AWS DevOps Blog · Feb 2021',
    title: 'AWS CDK',
    titleAccent: 'EcsRunTask',
    titleTail: '& Construct Hub',
    description:
      'Authored aws/aws-cdk PR #12436 adding task-definition family & revision support to StepFunctions EcsRunTask — highlighted in the AWS DevOps Blog (CDK Corner) — contributed to cdklabs/cdk-monitoring-constructs, and published TypeScript constructs on Construct Hub.',
    hasCodeSpecimen: true,
    links: [
      {
        label: 'AWS DevOps Blog (CDK Corner)',
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
    date: 'Aug 14, 2025',
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
      'Mobile-friendly end-game VP scorer for Terraforming Mars — handles TR, milestones, awards, greenery & city adjacency without spreadsheet friction.',
    url: 'https://terraforming-mars-score-calculator.vercel.app',
    repoUrl: 'https://github.com/ayush987goyal/terraforming-mars-score-calculator',
    meta: 'TypeScript · Live App',
  },
  {
    title: 'Play Dumb Charades',
    category: 'app',
    badge: 'Party Game',
    description:
      'Instant movie & Bollywood prompt generator with fast turn timers for living-room game nights with friends.',
    url: 'https://playdumbcharades.vercel.app',
    repoUrl: 'https://github.com/ayush987goyal/dumb-charades-app',
    meta: 'TypeScript · Live App',
  },
  {
    title: 'Judgement Score Taker',
    category: 'app',
    badge: 'Card Game Tracker',
    description:
      'Clean bid-and-trick scorekeeper for the classic Indian card game — built for zero-login, mobile-first tabletop sessions.',
    url: 'https://v0-judgement-score-taker.vercel.app',
    repoUrl: 'https://github.com/ayush987goyal/judgement-score-taker',
    meta: 'TypeScript · Live App',
  },
];

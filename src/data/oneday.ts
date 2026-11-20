/**
 * Data for the "One day in Bengaluru" home page.
 * Cubing data verified against the WCA API for 2014GOYA01 (results + competitions endpoints).
 */

/** Side-project commits by IST hour (0–23), human commits only (bot / dependency-bump commits excluded). */
export const COMMIT_HOURS = [0, 0, 0, 0, 0, 0, 0, 0, 9, 11, 5, 0, 4, 0, 5, 1, 3, 1, 10, 12, 0, 1, 7, 5];
export const COMMIT_TOTAL = COMMIT_HOURS.reduce((a, b) => a + b, 0);
export const AFTER_HOURS_PCT = Math.round(
  (COMMIT_HOURS.reduce((sum, n, h) => (h < 9 || h >= 18 ? sum + n : sum), 0) / COMMIT_TOTAL) * 100
);

export interface WorkCard {
  big: string;
  title: string;
  body: string;
  meta: string;
  url?: string;
}

export const WORK_CARDS: WorkCard[] = [
  {
    big: '0.37→0.71',
    title: 'Bedrock Data Automation & MCP',
    body: 'Drove GA; built the eval loop across 3 LLM families; authored two official AWSLabs MCP servers.',
    meta: '2024–25 · extraction F1',
    url: 'https://aws.amazon.com/blogs/machine-learning/whiteboard-to-cloud-in-minutes-using-amazon-q-amazon-bedrock-data-automation-and-model-context-protocol/',
  },
  {
    big: '−40%',
    title: 'Rekognition Face Liveness',
    body: 'Real-time spoof & deepfake detection; Triton inference; fairness framework adopted org-wide.',
    meta: '2021–23 · inference latency · 2× AWS awards',
  },
  {
    big: '100+',
    title: 'Q Business custom plugins',
    body: 'Plugin architecture & API design across three orgs.',
    meta: '2023–24 · developers enabled',
  },
  {
    big: '92',
    title: 'Merged upstream PRs',
    body: '46 in AWS CDK, plus react-use, Amplify UI and Vue core. Two constructs on Construct Hub.',
    meta: 'github.com/ayush987goyal ↗',
    url: 'https://github.com/search?q=author%3Aayush987goyal+type%3Apr+is%3Amerged+-user%3Aayush987goyal&type=pullrequests',
  },
];

export const PATH = [
  { when: '2026 —', where: 'Google', what: 'Staff Software Engineer' },
  { when: '2019 – 26', where: 'Amazon & AWS', what: 'FEE II → Senior SDE' },
  { when: '2016 – 19', where: 'Goldman Sachs · Citi', what: 'Trade compliance · C++ pricing' },
  { when: '2012 – 16', where: 'IIT Roorkee', what: 'Chemical Eng. · 2nd of 110' },
];

type Medal = ['s' | 'b', string];

export interface Competition {
  short: string;
  year: string;
  name: string;
  city: string;
  date: string;
  medals: Medal[];
}

export const COMPETITIONS: Competition[] = [
  { short: 'DEL', year: '’14', name: 'Delhi Open 2014', city: 'New Delhi', date: '2014-02-28', medals: [['s', 'FMC silver · 38 moves']] },
  {
    short: 'IITR',
    year: '’14',
    name: 'IIT Roorkee Open 2014',
    city: 'Haridwar',
    date: '2014-03-21',
    medals: [
      ['s', '3BLD silver · 2:24.70'],
      ['b', '2×2 bronze · 3.98'],
      ['b', '4×4 bronze · 1:02.98'],
      ['b', '5×5 bronze · 2:14.19'],
      ['b', 'Pyraminx bronze · 8.53'],
    ],
  },
  { short: 'NCR', year: '’14', name: 'National Cubing Region Open 2014', city: 'New Delhi', date: '2014-05-31', medals: [['s', '3BLD silver · 2:59.96']] },
  { short: 'NCR', year: '’15', name: 'National Cubing Region Open 2015', city: 'New Delhi', date: '2015-04-11', medals: [] },
  { short: 'NATS', year: '’16', name: 'Indian Nationals 2016', city: 'New Delhi', date: '2016-03-25', medals: [] },
  {
    short: 'PUNE',
    year: '’16',
    name: 'Rubik’s Cube Pune Open 2016',
    city: 'Pune',
    date: '2016-10-15',
    medals: [
      ['b', '4×4 bronze · 49.43'],
      ['b', '5×5 bronze · 1:51.26'],
    ],
  },
  { short: 'NATS', year: '’17', name: 'Indian Nationals 2017', city: 'Pune', date: '2017-05-12', medals: [] },
  { short: 'CER', year: '’17', name: 'Cerulean 2017', city: 'Pune', date: '2017-08-20', medals: [['s', '4×4 silver · 41.91']] },
];

export interface Scorecard {
  comp: string;
  event: string;
  attempts: string[];
  best: number; // index of circled attempt
  foot: string;
  place: string;
}

export const SCORECARDS: Scorecard[] = [
  {
    comp: 'IIT ROORKEE OPEN ’14',
    event: '3×3 Blindfolded · Final',
    attempts: ['2:24.70', 'DNF', '3:02.28'],
    best: 0,
    foot: 'best of 3',
    place: '2nd',
  },
  {
    comp: 'CERULEAN ’17 · PUNE',
    event: '4×4×4 Cube · Final',
    attempts: ['54.72', '47.32', '44.81', '41.91', '52.30'],
    best: 3,
    foot: 'avg 48.14 · PB',
    place: '2nd',
  },
];

export const APP_SHOTS: Record<string, string> = {
  'https://tfm-score.vercel.app': '/apps/tfm-score.webp',
  'https://playdumbcharades.vercel.app': '/apps/dumb-charades.webp',
  'https://v0-judgement-score-taker.vercel.app': '/apps/judgement.webp',
};

import snapshot from '../data/wca-snapshot.json';

export interface WcaRecordEntry {
  best: number;
  world_rank: number;
  continent_rank: number;
  country_rank: number;
}

export interface WcaApiPersonResponse {
  person: {
    name: string;
    wca_id: string;
    url: string;
    country_iso2: string;
  };
  competition_count: number;
  medals: {
    gold: number;
    silver: number;
    bronze: number;
    total: number;
  };
  personal_records: Record<
    string,
    {
      single?: WcaRecordEntry;
      average?: WcaRecordEntry;
    }
  >;
}

export interface FormattedWcaEvent {
  id: string;
  name: string;
  single: string;
  singleCountryRank: number | null;
  singleWorldRank: number | null;
  average: string;
  averageCountryRank: number | null;
  averageWorldRank: number | null;
  bestCountryRank: number;
}

export interface WcaSummary {
  wcaId: string;
  profileUrl: string;
  competitionCount: number;
  medals: {
    gold: number;
    silver: number;
    bronze: number;
    total: number;
  };
  events: FormattedWcaEvent[];
  source: 'live' | 'snapshot';
}

const EVENT_NAMES: Record<string, string> = {
  '333': '3×3×3 Cube',
  '222': '2×2×2 Cube',
  '444': '4×4×4 Cube',
  '555': '5×5×5 Cube',
  '666': '6×6×6 Cube',
  '777': '7×7×7 Cube',
  '333bf': '3×3×3 Blindfolded',
  '333fm': '3×3×3 Fewest Moves',
  '333oh': '3×3×3 One-Handed',
  clock: 'Clock',
  minx: 'Megaminx',
  pyram: 'Pyraminx',
  skewb: 'Skewb',
  sq1: 'Square-1',
  '444bf': '4×4×4 Blindfolded',
  '555bf': '5×5×5 Blindfolded',
  '333mbf': '3×3×3 Multi-Blind',
};

export function formatWcaResult(eventId: string, value: number, isAverage = false): string {
  if (eventId === '333fm') {
    return isAverage ? `${(value / 100).toFixed(2)} moves` : `${value} moves`;
  }
  const totalSeconds = value / 100;
  if (totalSeconds < 60) {
    return `${totalSeconds.toFixed(2)}s`;
  }
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = (totalSeconds - minutes * 60).toFixed(2).padStart(5, '0');
  return `${minutes}:${seconds}`;
}

export async function getWcaProfile(wcaId: string): Promise<WcaSummary> {
  let raw: WcaApiPersonResponse = snapshot as unknown as WcaApiPersonResponse;
  let source: 'live' | 'snapshot' = 'snapshot';

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(`https://www.worldcubeassociation.org/api/v0/persons/${wcaId}`, {
      headers: { Accept: 'application/json', 'User-Agent': 'ayush987goyal.dev/1.0' },
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (res.ok) {
      const json = (await res.json()) as WcaApiPersonResponse;
      if (json?.person?.wca_id && json?.personal_records) {
        raw = json;
        source = 'live';
      }
    }
  } catch {
    // Graceful fallback to committed snapshot when offline or WCA API times out
  }

  const events: FormattedWcaEvent[] = Object.entries(raw.personal_records)
    .map(([id, rec]) => {
      const sRank = rec.single?.country_rank ?? null;
      const aRank = rec.average?.country_rank ?? null;
      const bestCountryRank = Math.min(sRank ?? Infinity, aRank ?? Infinity);
      return {
        id,
        name: EVENT_NAMES[id] ?? id.toUpperCase(),
        single: rec.single ? formatWcaResult(id, rec.single.best, false) : '—',
        singleCountryRank: sRank,
        singleWorldRank: rec.single?.world_rank ?? null,
        average: rec.average ? formatWcaResult(id, rec.average.best, true) : '—',
        averageCountryRank: aRank,
        averageWorldRank: rec.average?.world_rank ?? null,
        bestCountryRank,
      };
    })
    .sort((a, b) => a.bestCountryRank - b.bestCountryRank);

  return {
    wcaId: raw.person.wca_id,
    profileUrl: raw.person.url,
    competitionCount: raw.competition_count,
    medals: raw.medals,
    events,
    source,
  };
}

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { countryName } from '@/lib/geo';
import { analyticsCookieMatches, matchingVisits, parseRange } from '@/lib/visits';

function cell(value: string): string {
  return `"${value.replaceAll('"', '""')}"`;
}

export async function GET(request: NextRequest) {
  const jar = await cookies();
  if (!analyticsCookieMatches(jar.get('ag_analytics')?.value)) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const range = parseRange(request.nextUrl.searchParams.get('range') || undefined);
  const query = (request.nextUrl.searchParams.get('q') || '').slice(0, 80);
  const rows = await matchingVisits(range, query);
  const header = ['time', 'page', 'country', 'continent', 'source', 'device', 'browser'];
  const lines = [
    header.join(','),
    ...rows.map((row) =>
      [
        row.t,
        row.path,
        countryName(row.country),
        row.continent,
        row.source || 'Not recorded',
        row.device || 'Not recorded',
        row.browser || 'Not recorded',
      ]
        .map(cell)
        .join(','),
    ),
  ];

  return new NextResponse(lines.join('\n'), {
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'content-disposition': `attachment; filename="visits-${range}.csv"`,
    },
  });
}

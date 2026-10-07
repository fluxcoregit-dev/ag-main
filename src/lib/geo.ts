const CONTINENT_CODES: Record<string, string[]> = {
  Africa: [
    'DZ', 'AO', 'BJ', 'BW', 'BF', 'BI', 'CV', 'CM', 'CF', 'TD', 'KM', 'CG', 'CD', 'CI', 'DJ',
    'EG', 'GQ', 'ER', 'SZ', 'ET', 'GA', 'GM', 'GH', 'GN', 'GW', 'KE', 'LS', 'LR', 'LY', 'MG',
    'MW', 'ML', 'MR', 'MU', 'YT', 'MA', 'MZ', 'NA', 'NE', 'NG', 'RE', 'RW', 'ST', 'SN', 'SC',
    'SL', 'SO', 'ZA', 'SS', 'SD', 'TZ', 'TG', 'TN', 'UG', 'EH', 'ZM', 'ZW',
  ],
  Antarctica: ['AQ', 'BV', 'GS', 'HM', 'TF'],
  Asia: [
    'AF', 'AM', 'AZ', 'BH', 'BD', 'BT', 'BN', 'KH', 'CN', 'CY', 'GE', 'HK', 'IN', 'ID', 'IR',
    'IQ', 'IL', 'JP', 'JO', 'KZ', 'KW', 'KG', 'LA', 'LB', 'MO', 'MY', 'MV', 'MN', 'MM', 'NP',
    'KP', 'OM', 'PK', 'PS', 'PH', 'QA', 'SA', 'SG', 'KR', 'LK', 'SY', 'TW', 'TJ', 'TH', 'TL',
    'TR', 'TM', 'AE', 'UZ', 'VN', 'YE',
  ],
  Europe: [
    'AL', 'AD', 'AT', 'BY', 'BE', 'BA', 'BG', 'HR', 'CZ', 'DK', 'EE', 'FO', 'FI', 'FR', 'DE',
    'GI', 'GR', 'VA', 'HU', 'IS', 'IE', 'IT', 'XK', 'LV', 'LI', 'LT', 'LU', 'MT', 'MD', 'MC',
    'ME', 'NL', 'MK', 'NO', 'PL', 'PT', 'RO', 'RU', 'SM', 'RS', 'SK', 'SI', 'ES', 'SJ', 'SE',
    'CH', 'UA', 'GB', 'AX', 'GG', 'IM', 'JE',
  ],
  'North America': [
    'AG', 'BS', 'BB', 'BZ', 'CA', 'CR', 'CU', 'DM', 'DO', 'SV', 'GL', 'GD', 'GT', 'HT', 'HN',
    'JM', 'MX', 'NI', 'PA', 'KN', 'LC', 'VC', 'TT', 'US', 'AI', 'AW', 'BM', 'BQ', 'VG', 'KY',
    'CW', 'GP', 'MQ', 'MS', 'PR', 'BL', 'MF', 'SX', 'TC', 'VI',
  ],
  Oceania: [
    'AS', 'AU', 'CK', 'FJ', 'PF', 'GU', 'KI', 'MH', 'FM', 'NR', 'NC', 'NZ', 'NU', 'NF', 'MP',
    'PW', 'PG', 'PN', 'WS', 'SB', 'TK', 'TO', 'TV', 'VU', 'WF', 'CX', 'CC',
  ],
  'South America': [
    'AR', 'BO', 'BR', 'CL', 'CO', 'EC', 'FK', 'GF', 'GY', 'PY', 'PE', 'SR', 'UY', 'VE',
  ],
};

const COUNTRY_CONTINENT = new Map<string, string>();
for (const [continent, codes] of Object.entries(CONTINENT_CODES)) {
  for (const code of codes) COUNTRY_CONTINENT.set(code, continent);
}

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

export function continentFor(countryCode: string): string {
  if (countryCode === 'LOCAL') return 'Local';
  return COUNTRY_CONTINENT.get(countryCode) ?? 'Unknown';
}

export function countryName(countryCode: string): string {
  if (countryCode === 'LOCAL') return 'This computer';
  if (!countryCode || countryCode === 'XX' || countryCode === 'T1') return 'Unknown';
  try {
    return regionNames.of(countryCode) ?? countryCode;
  } catch {
    return countryCode;
  }
}

function isPrivateAddress(ip: string): boolean {
  let value = ip.trim().toLowerCase();
  if (value.startsWith('::ffff:')) value = value.slice('::ffff:'.length);
  if (!value || value === '::1' || value === 'localhost') return true;
  if (value.startsWith('127.') || value.startsWith('10.') || value.startsWith('192.168.')) return true;
  if (value.startsWith('fc') || value.startsWith('fd') || value.startsWith('fe80')) return true;
  const parts = value.split('.').map(Number);
  return parts.length === 4 && parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31;
}

function clientAddress(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return forwarded || headers.get('x-real-ip')?.trim() || '';
}

function countryFromHeaders(headers: Headers): string {
  const raw =
    headers.get('x-vercel-ip-country') ||
    headers.get('cf-ipcountry') ||
    headers.get('cloudfront-viewer-country') ||
    headers.get('x-country-code') ||
    '';
  const code = raw.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(code) || code === 'XX' || code === 'T1') return '';
  return code;
}

export async function locateVisit(headers: Headers): Promise<{ country: string; continent: string }> {
  const fromHeader = countryFromHeaders(headers);
  if (fromHeader) {
    return { country: fromHeader, continent: continentFor(fromHeader) };
  }

  const ip = clientAddress(headers);
  if (!ip || isPrivateAddress(ip)) {
    return { country: 'LOCAL', continent: 'Local' };
  }

  try {
    const response = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}`, {
      signal: AbortSignal.timeout(2000),
    });
    if (!response.ok) return { country: 'XX', continent: 'Unknown' };
    const data = (await response.json()) as {
      success?: boolean;
      country_code?: string;
      continent?: string;
    };
    const code = (data.country_code || '').toUpperCase();
    if (!data.success || !/^[A-Z]{2}$/.test(code)) {
      return { country: 'XX', continent: 'Unknown' };
    }
    return {
      country: code,
      continent: data.continent || continentFor(code),
    };
  } catch {
    return { country: 'XX', continent: 'Unknown' };
  }
}

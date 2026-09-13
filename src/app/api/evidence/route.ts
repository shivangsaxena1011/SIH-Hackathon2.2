import { NextResponse } from 'next/server';
import { seedEvidence } from '@/data/seed';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const caseId = searchParams.get('caseId');
  if (caseId) {
    const clean = caseId.toLowerCase().replace(/^(case[#\-_]?|#)/i, '');
    const filtered = seedEvidence.filter(e =>
      e.caseId.toLowerCase() === caseId.toLowerCase() ||
      e.caseId.toLowerCase() === clean
    );
    return NextResponse.json(filtered);
  }
  return NextResponse.json(seedEvidence);
}

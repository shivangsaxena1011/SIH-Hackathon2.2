import { NextResponse } from 'next/server';
import { seedEvidence } from '@/data/seed';
import { getCanonicalCaseId, getCaseNumber } from '@/lib/cases/case-service';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const caseQuery = searchParams.get('caseId');
  if (caseQuery) {
    const canonical = getCanonicalCaseId(caseQuery).toLowerCase();
    const caseNum = getCaseNumber(caseQuery).toLowerCase();
    const filtered = seedEvidence.filter(e => {
      const eCase = (e.caseId || '').toLowerCase();
      return eCase === canonical || eCase === caseNum;
    });
    return NextResponse.json(filtered);
  }
  return NextResponse.json(seedEvidence);
}

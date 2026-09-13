import { NextResponse } from 'next/server';
import { findInvestigationPath } from '@/lib/graph/path-finder';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { source, target, maxHops } = body;
    if (!source || !target) {
      return NextResponse.json({ error: 'Source and target entities are required' }, { status: 400 });
    }

    const hops = Math.min(Math.max(1, parseInt(String(maxHops || '5'), 10) || 5), 10);
    const path = findInvestigationPath(source, target, hops);
    if (!path) {
      return NextResponse.json({ success: false, message: 'No viable connecting path identified within maximum traversal depth.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: path });
  } catch {
    return NextResponse.json({ error: 'Failed to compute network path' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const source = searchParams.get('source');
  const target = searchParams.get('target');
  const rawHops = parseInt(searchParams.get('maxHops') || '5', 10);
  const maxHops = Math.min(Math.max(1, Number.isFinite(rawHops) ? rawHops : 5), 10);

  if (!source || !target) {
    return NextResponse.json({ error: 'Source and target query parameters required' }, { status: 400 });
  }

  const path = findInvestigationPath(source, target, maxHops);
  if (!path) {
    return NextResponse.json({ success: false, message: 'No connection path found.' }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: path });
}

import { NextResponse } from 'next/server';
import { resolveEntity } from '@/lib/entity-resolution/resolver';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { name, dob, documentNumber } = body;
    
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json({ success: false, error: 'Valid name string is required' }, { status: 400 });
    }
    
    const resolution = resolveEntity(name, dob, documentNumber);
    
    return NextResponse.json({ success: true, data: resolution });
  } catch (error) {
    console.error('Entity resolution error:', error);
    return NextResponse.json({ success: false, error: 'Entity resolution failed' }, { status: 500 });
  }
}

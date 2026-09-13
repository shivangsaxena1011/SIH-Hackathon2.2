import { NextResponse } from 'next/server';
import { clearSessionCookie, destroySession, getSessionFromToken, SESSION_COOKIE } from '@/lib/auth/session';
import { recordAuditLog } from '@/lib/audit/audit-service';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE)?.value;
    
    if (token) {
      const user = getSessionFromToken(token);
      if (user) {
        recordAuditLog({
          userId: user.officerId,
          userName: user.name,
          userRole: user.role,
          action: 'LOGOUT',
          resource: 'Authentication',
          result: 'ALLOWED',
          metadata: { reason: 'User requested session termination' },
        });
      }
      destroySession(token);
    }
    
    await clearSessionCookie();

    const response = NextResponse.json({ success: true });
    response.cookies.delete(SESSION_COOKIE);
    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

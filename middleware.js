import { NextResponse } from 'next/server';

export function middleware(request) {
  // 사용자가 사이트에 발을 들이는 순간 헤더에서 정보를 가져옴
  const ip = request.headers.get('x-forwarded-for') || request.ip || 'Unknown';
  const timestamp = new Date().toISOString();
  
  // Vercel 대시보드의 [Logs] 탭에 아래 문장을 자동으로 출력함
  console.log(`[방문자 감지] 시간: ${timestamp} | 접속 IP: ${ip}`);

  // 로그를 남긴 후, 사용자가 요청한 원래 페이지로 통과시킴
  return NextResponse.next();
}

// 사이트의 모든 경로(메인 페이지 포함 전체)에서 작동하도록 지정
export const config = {
  matcher: '/:path*',
};
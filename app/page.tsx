'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${routing.defaultLocale}`);
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontSize: '18px',
      fontFamily: 'system-ui'
    }}>
      Loading...
    </div>
  );
}


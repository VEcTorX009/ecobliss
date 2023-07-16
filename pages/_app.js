import '@/styles/globals.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
  const [isinmain, setIsinmain] = useState(false);
  const [isloggedin, setIsloggedin] = useState(false);
  const [isloading, setIsloading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== '/' && router.pathname !== '/social') {
      setIsinmain(true);
    }
  }, [router.pathname]);

  return (
    <SessionProvider session={pageProps.session}>
      <Navbar inmain={isinmain} isloggedin={isloggedin} setIsloggedin={setIsloggedin} />
      <Component {...pageProps} isloading={isloading} setIsloading={setIsloading} isloggedin={isloggedin} />
    </SessionProvider>
  );
}

import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css'; // Import the globals.css file
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import 'typeface-inter';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // Add global layout or context providers here

  return (
    <>
      <Head>
        {/* Add any global head tags or meta here */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

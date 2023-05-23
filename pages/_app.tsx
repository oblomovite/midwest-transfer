import React from 'react';
import { AppProps, ErrorInfo, NextWebVitalsMetric } from 'next/app';
import '../styles/globals.css'; // Import the globals.css file
import Head from 'next/head';
import 'typeface-inter';
import Layout from '@/components/Layout';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorBoundary from '@/components/ErrorBoundary';


const App: React.FC<AppProps> = ({ Component, pageProps, router }: AppProps) => {
  const pageTitle = pageProps.title || 'Default Page Title';

  const handleRouteChangeStart = () => {
    // Perform actions when a route change starts
  };

  const handleRouteChangeComplete = () => {
    // Perform actions when a route change completes
  };

  const handleRouteChangeError = () => {
    // Perform actions when a route change encounters an error
  };

  const handleComponentError = (error: Error, errorInfo: ErrorInfo) => {
    // Handle errors thrown by components
    console.error('Component Error:', error);
    console.error('Component Error Info:', errorInfo);
  };

  return (
    <ErrorBoundary fallbackUI={<div>Oops! Something went wrong.</div>}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Your website description" />
        {/* Add any other meta tags or head elements */}
      </Head>
      <Layout>
        {/* <LoadingSpinner /> */}
        <Component
          {...pageProps}
          router={router}
          onError={handleComponentError}
        />
      </Layout>
    </ErrorBoundary>
  );
};

export default App;

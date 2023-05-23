import React, { Component, ErrorInfo } from 'react';


interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
    fallbackUI: React.ReactNode;
    children: React.ReactNode;
  }

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error or send it to an error tracking service
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render(): React.ReactNode {
    const { hasError } = this.state;
    const { fallbackUI, children } = this.props;

    if (hasError) {
      return fallbackUI;
    }

    return children;
  }
}

export default ErrorBoundary;

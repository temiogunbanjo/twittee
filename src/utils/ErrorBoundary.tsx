import React, { ErrorInfo, ReactNode, Component } from 'react';
import { Alert } from 'react-bootstrap';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught Error', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className='text-center'>
          <Alert variant='danger'>A Serious Error Occured. Please Contact Administrator</Alert>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

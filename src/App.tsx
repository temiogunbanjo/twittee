import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

// stylesheet imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/clamp.min.css';
import './components/styles.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { DefaultToastContainer, ToastProvider } from 'react-toast-notifications';
import ErrorBoundary from './utils/ErrorBoundary';
import { AppProvider } from './context/AppContext';

declare global {
  interface Window {
    __react_toast_provider: any;
  }
}

window.__react_toast_provider = React.createRef();
// create a default container so we can override the styles
const ToastContainer = (props: any) => (
  <DefaultToastContainer style={{ zIndex: '1900' }} {...props} />
);

const App = (): JSX.Element => {
  return (
    <ToastProvider components={{ ToastContainer }} ref={window.__react_toast_provider}>
      <AppProvider>
        <ErrorBoundary>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/dashboard' component={Dashboard} />
            </Switch>
          </BrowserRouter>
        </ErrorBoundary>
      </AppProvider>
    </ToastProvider>
  );
};

export default App;

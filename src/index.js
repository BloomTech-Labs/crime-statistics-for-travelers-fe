import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import * as Sentry from '@sentry/browser';
import App from "./App"
import { Auth0Provider } from "./Components/Auth0/react-auth0-wrapper";
import config from "./auth_config.json";
 
Sentry.init({dsn: "https://8b1b483a6bfd4f25bcf93cf3be6c960d@sentry.io/1761396"})
const onRedirectCallback = appState => {
    window.history.replaceState(
      {},
      document.title,
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  };
  
  ReactDOM.render(
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
  >
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Auth0Provider>,
    document.getElementById("root")
  );
















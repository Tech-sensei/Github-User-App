import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

// domain
// dev - otbyflafvncubcdp.us.auth0.com;

// Client ID
// OjLfNWU6K5o3xBsxik1aj28vRvuZcIfu;
// OjLfNWU6K5o3xBsxik1aj28vRvuZcIfu;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-otbyflafvncubcdp.us.auth0.com"
      clientId="OjLfNWU6K5o3xBsxik1aj28vRvuZcIfu"
      cacheLocation="localstorage"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

serviceWorker.unregister();

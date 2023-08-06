import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Container } from "react-bootstrap";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Container className="my-4">
      <App />
    </Container>
  </React.StrictMode>
);

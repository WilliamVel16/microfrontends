import React from "react";
import App from "./app.jsx"

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted! API 3
      <App />
    </section>
  );
}

import React from "react";
import App from "./app.jsx"

export default function Root(props) {
  return (
    <section className="section-list2">
      {/* {props.name} is mounted! API 2 */}
      <App />
    </section>
  );
}

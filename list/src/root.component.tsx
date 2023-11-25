import React from 'react'
import "./app.css";
import App from "./app.jsx"

export default function Root(props) {
  return (
    <section className='section-list'>
      {/* {props.name} is mounted! API 1 */}
      <App />
    </section>
  );
}

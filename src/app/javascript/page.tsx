"use client";

import { useState } from "react";
import css from "./page.module.css";
export default function JavaScriptPage() {
  const [count, setCount] = useState(0);

  return (
    <section className={css.javascriptSection}>
      <h1 className="">JavaScript Skills</h1>
      <p className="">Приклад: простий лічильник</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className=""
      >
        Clicked {count} times
      </button>
    </section>
  );
}

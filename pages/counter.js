import { useState } from "react";
import Layout from "../components/Layout";

export default function counter() {
  const [counter, setCounter] = useState(0);

  return (
    <Layout>
      <div>
        <h2>카운터 {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
      </div>
    </Layout>
  );
}

import { useEffect, useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>카운터 {counter}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -1
      </button>
    </div>
  );
}

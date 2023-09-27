import React from "react";

export const Counter: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <p>current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

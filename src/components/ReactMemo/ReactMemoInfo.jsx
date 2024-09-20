import React, { useState } from 'react';
import './ReactMemoInfo.css';

const CountDisplay = React.memo(({ count }) => {
  console.log('Rendering CountDisplay');
  return <h3>Count: {count}</h3>;
});

const ReactMemoInfo = () => {
  const [count, setCount] = useState(0);
  const [otherValue, setOtherValue] = useState(false);

  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  const toggleOtherValue = () => {
    setOtherValue(!otherValue);
  };

  return (
    <div className="react-memo-info">
      <h2>What is React Memo?</h2>
      <p>
        React Memo is a higher-order component that memoizes the result of a component, preventing unnecessary re-renders. 
        It's useful for optimizing performance in functional components.
      </p>
      <h3>How to Use React Memo</h3>
      <p>
        You can wrap a functional component with <code>React.memo</code>. If the props do not change, 
        React will skip rendering the component and reuse the last rendered result.
      </p>
      <div className="count-example">
        <h2>React Memo with Count Example</h2>
        <div className="button-container">
          <button onClick={increaseCount}>Increase Count</button>
          <button onClick={decreaseCount}>Decrease Count</button>
          <button onClick={toggleOtherValue}>Toggle Other Value</button>
        </div>
        <CountDisplay count={count} />
        <p>Other Value: {otherValue ? 'True' : 'False'}</p>
      </div>
    </div>
  );
};

export default ReactMemoInfo;

import React, {useEffect, useState} from 'react';
import {render} from 'react-dom';

const Application = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/items/12?q=sdf")
      .then(response => response.json())
      .then(data => {
        setCount(data.item_id)
      })
  }, []);

  return (
    <div data-testid="application">
      <h1 >Application</h1>
      <p data-testid="clicked-count">You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

render(<Application />, document.getElementById('app'));

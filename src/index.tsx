import React from 'react';
import { render } from 'react-dom';

const Application = () => (
  <h1 data-testid="application">Application</h1>
);

render(<Application />, document.getElementById('app'));

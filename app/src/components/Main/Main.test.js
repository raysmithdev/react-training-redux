import React from 'react';
import { render } from 'react-dom';
import Main from './Main';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Main />, div);
});

import React from 'react';

import { render, screen } from '@testing-library/react';

import DrumDisplay from '../DrumDisplay';

test('should render without crashing', () => {
  render(<DrumDisplay />);
});
test('should return link', () => {
  render(<DrumDisplay />);
  expect(screen.getByRole('link', { name: /markus tryban/i }));
});

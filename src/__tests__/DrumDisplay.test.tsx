import React from 'react';

import { render, screen } from '@testing-library/react';

import DrumDisplay from '../DrumDisplay';

test('should render without crashing', () => {
  render(<DrumDisplay />);
});

import React from 'react';
import { render } from '@testing-library/react';
import Canvas from '../index';

it('renders Canvas', () => {
  const { container } = render(<Canvas />);

  expect(container.firstChild).toBeInTheDocument();
});

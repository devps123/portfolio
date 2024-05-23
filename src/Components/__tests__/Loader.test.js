import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from '../Loader.tsx';

describe('Loader component', () => {
  test('renders the Loader component', () => {
    render(<Loader />);
    const loaderElement = screen.getByRole('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  test('has the correct class names', () => {
    render(<Loader />);
    const loaderElement = screen.getByRole('loader').firstChild;
    expect(loaderElement).toHaveClass('border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-blue-600');
  });
});

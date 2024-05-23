import React, {act} from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../Footer.tsx';
import { labels } from '../../static/constants.js';

jest.mock('../../static/constants', () => ({
  labels: {
    footerText: 'Test Footer Text',
  },
}));

describe('Footer component', () => {
  test('renders the Footer component', async () => {
    await act(async () => {
      render(<Footer />);
    });

    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  test('displays the correct footer text', async () => {
    await act(async () => {
      render(<Footer />);
    });

    const footerTextElement = screen.getByText(labels.footerText);
    expect(footerTextElement).toBeInTheDocument();
    expect(footerTextElement).toHaveTextContent('Test Footer Text');
  });

  test('has the correct class names', async () => {
    await act(async () => {
      render(<Footer />);
    });

    const footerElement = screen.getByRole('contentinfo');
    const footerTextElement = screen.getByText(labels.footerText);

    expect(footerElement).toHaveClass('container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode');
    expect(footerTextElement).toHaveClass('text-xs text-center text-dark-content dark:text-light-content w-full');
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../NotFound';

describe('NotFound component', () => {
  test('renders the NotFound component', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const headingElement = screen.getByText(/404/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('displays the correct text', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const paragraphElement = screen.getByText(/Sorry, we couldn't find this page./i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test('has a link that navigates back to the home page', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const linkElement = screen.getByRole('link', { name: /Back to home/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});

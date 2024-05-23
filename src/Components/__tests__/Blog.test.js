import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the "toBeInTheDocument" matcher
import Blog from '../Blog.tsx';

describe('Blog component', () => {
  const title = 'Test Blog Title';
  const description = 'This is a test blog description.';

  test('renders the Blog component with given props', () => {
    render(<Blog title={title} description={description} />);
    
    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);
    
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  test('displays the correct title and description', () => {
    render(<Blog title={title} description={description} />);
    
    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);
    
    expect(titleElement).toHaveTextContent(title);
    expect(descriptionElement).toHaveTextContent(description);
  });

  test('has the correct class names', () => {
    render(<Blog title={title} description={description} />);
    
    const articleElement = screen.getByRole('article');
    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);
    
    expect(articleElement).toHaveClass('rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900');
    expect(titleElement).toHaveClass('dark:text-light-heading font-semibold text-lg pt-1');
    expect(descriptionElement).toHaveClass('text-content pt-4 font-light');
  });
});

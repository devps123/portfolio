import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Project from '../Project';

describe('Project component', () => {
  const projectProps = {
    title: 'Sample Project',
    image: 'sample-image.jpg',
    description: 'This is a sample project description.',
    techstack: 'React, TypeScript, TailwindCSS',
    previewLink: 'http://example.com'
  };

  test('renders the Project component', () => {
    render(<Project {...projectProps} />);
    const titleElement = screen.getByText(projectProps.title);
    expect(titleElement).toBeInTheDocument();
  });

  test('displays the correct image', () => {
    render(<Project {...projectProps} />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('src', projectProps.image);
    expect(imageElement).toHaveAttribute('alt', '');
  });

  test('has a link with the correct href attribute for the preview link', () => {
    render(<Project {...projectProps} />);
    const linkElement = screen.getByRole('link', { name: /Live Preview/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', projectProps.previewLink);
  });
});

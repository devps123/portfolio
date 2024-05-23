import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header.tsx';
import { socialMediaUrl } from '../../static/Details.js';
import { colors, routePathNames } from '../../static/constants.js';

jest.mock('../../static/Details.js', () => ({
  socialMediaUrl: {
    linkdein: 'https://www.linkedin.com/in/test',
    github: 'https://github.com/test',
    twitter: 'https://twitter.com/test',
  },
}));

jest.mock('../../static/constants', () => ({
  colors: {
    headerLink: 'red',
  },
  routePathNames: {
    HOME: '/',
    ABOUT: '/about',
    CONTACT: '/contact',
    PROJECTS: '/projects',
    BLOGS: '/blogs',
    TECHNOLOGIES: '/technologies',
  },
}));

describe('Header component', () => {
  test('renders the Header component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('contains navigation links with correct href values', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', routePathNames.HOME);
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', routePathNames.ABOUT);
    expect(screen.getByText('Technologies').closest('a')).toHaveAttribute('href', routePathNames.TECHNOLOGIES);
    expect(screen.getByText('Projects').closest('a')).toHaveAttribute('href', routePathNames.PROJECTS);
    expect(screen.getByText('My Blogs').closest('a')).toHaveAttribute('href', routePathNames.BLOGS);
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', routePathNames.CONTACT);
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Work from '../Work';

describe('Work component', () => {
  const workProps = {
    position: 'Software Engineer',
    company: 'Tech Company',
    location: 'San Francisco, CA',
    type: 'Full-Time',
    duration: 'Jan 2020 - Present'
  };

  test('renders the Work component', () => {
    render(<Work {...workProps} />);
    const positionElement = screen.getByText(workProps.position);
    expect(positionElement).toBeInTheDocument();
  });

  test('displays the correct position, company, location, type, and duration', () => {
    render(<Work {...workProps} />);
    const positionElement = screen.getByText(workProps.position);
    const companyElement = screen.getByText(workProps.company);
    const locationElement = screen.getByText(workProps.location);
    const typeElement = screen.getByText(workProps.type);
    const durationElement = screen.getByText(workProps.duration);

    expect(positionElement).toBeInTheDocument();
    expect(companyElement).toBeInTheDocument();
    expect(locationElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
    expect(durationElement).toBeInTheDocument();
  });
});

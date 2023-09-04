// Import necessary dependencies for testing
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Test suite for the App component
describe('App Component', () => {
  it('should render the logo', () => {
    const { getByAltText } = render(<App />);
    const logoElement = getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('should render the "Learn React" link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Learn React');
    expect(linkElement).toBeInTheDocument();
  });

  it('should render the "Edit src/App.js" text', () => {
    const { getByText } = render(<App />);
    const editTextElement = getByText(/Edit src\/App\.js/);
    expect(editTextElement).toBeInTheDocument();
  });
});

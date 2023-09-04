// src/App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders edit code message', () => {
  const { getByText } = render(<App />);
  const messageElement = getByText(/Edit src\/App\.js and save to reload\./i);
  expect(messageElement).toBeInTheDocument();
});

test('renders logo', () => {
  const { getByAltText } = render(<App />);
  const logoElement = getByAltText('logo');
  expect(logoElement).toBeInTheDocument();
});

test('renders App component', () => {
  const { getByTestId } = render(<App />);
  const appElement = getByTestId('app');
  expect(appElement).toBeInTheDocument();
});

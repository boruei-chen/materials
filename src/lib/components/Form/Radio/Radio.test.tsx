import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Radio from './Radio.component';

describe('Radio', () => {
  it('renders the Radio component', () => {
    render(<Radio data-testid="mock-component" />);
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });

  it('clicking the Radio component', () => {
    const mockFn = jest.fn();
    render(<Radio data-testid="mock-component" onClick={mockFn} />);
    const mockComponent = screen.getByTestId('mock-component');
    userEvent.click(mockComponent);
    expect(mockFn).toBeCalledTimes(1);
  });

  it('changing the Radio component', () => {
    const mockFn = jest.fn();
    render(<Radio data-testid="mock-component" onChange={mockFn} />);
    const mockComponent = screen.getByTestId('mock-component');
    userEvent.click(mockComponent);
    expect(mockFn).toBeCalledTimes(1);
  });
});

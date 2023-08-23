import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from './Checkbox.component';

describe('Checkbox', () => {
  it('renders the Checkbox component', () => {
    render(<Checkbox data-testid="mock-component" />);
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });

  it('clicking the Checkbox component', () => {
    const mockFn = jest.fn();
    render(<Checkbox data-testid="mock-component" onClick={mockFn} />);
    const mockComponent = screen.getByTestId('mock-component');
    userEvent.click(mockComponent);
    expect(mockFn).toBeCalledTimes(1);
  });

  it('changing the Checkbox component', () => {
    const mockFn = jest.fn();
    render(<Checkbox data-testid="mock-component" onChange={mockFn} />);
    const mockComponent = screen.getByTestId('mock-component');
    userEvent.click(mockComponent);
    expect(mockFn).toBeCalledTimes(1);
  });
});

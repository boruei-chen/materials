import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Password from './Password.component';

describe('Password', () => {
  it('renders the Password component', () => {
    render(<Password data-testid="mock-component" />);
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });

  it('changing the Password component', () => {
    render(<Password data-testid="mock-component" />);
    const mockComponent = screen.getByTestId('mock-component');
    fireEvent.change(mockComponent, { target: { value: 'test text' } });
    expect(mockComponent).toHaveValue('test text');
  });
});

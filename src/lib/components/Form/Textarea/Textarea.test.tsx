import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Textarea from './Textarea.component';

describe('Textarea', () => {
  it('renders the Textarea component', () => {
    render(<Textarea data-testid="mock-component" />);
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });

  it('changing the Textarea component', () => {
    render(<Textarea data-testid="mock-component" />);
    const mockComponent = screen.getByTestId('mock-component');
    fireEvent.change(mockComponent, { target: { value: 'test text' } });
    expect(mockComponent).toHaveValue('test text');
  });
});

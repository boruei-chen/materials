import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Textbox from './Textbox.component';

describe('Textbox', () => {
  it('renders the Textbox component', () => {
    render(<Textbox data-testid="mock-component" />);
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });

  it('changing the Textbox component', () => {
    render(<Textbox data-testid="mock-component" />);
    const mockComponent = screen.getByTestId('mock-component');
    fireEvent.change(mockComponent, { target: { value: 'test text' } });
    expect(mockComponent).toHaveValue('test text');
  });
});

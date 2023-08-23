import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Checkbox from '../Checkbox.component';

describe('Checkbox Group', () => {
  it('renders the Checkbox Group component', () => {
    render(
      <Checkbox.Group data-testid="mock-component">
        <Checkbox value="0">Option 1</Checkbox>
        <Checkbox value="1">Option 2</Checkbox>
        <Checkbox value="2">Option 3</Checkbox>
      </Checkbox.Group>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });
});

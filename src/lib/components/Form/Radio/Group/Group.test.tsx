import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Radio from '../Radio.component';

describe('Radio Group', () => {
  it('renders the Radio Group component', () => {
    render(
      <Radio.Group name="field" data-testid="mock-component">
        <Radio value="0">Option 1</Radio>
        <Radio value="1">Option 2</Radio>
        <Radio value="2">Option 3</Radio>
      </Radio.Group>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });
});

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from './Select.component';

describe('Select', () => {
  it('renders the Select component', () => {
    render(
      <Select data-testid="mock-component">
        <Select.Option value="0">Option 1</Select.Option>
        <Select.Option value="1">Option 2</Select.Option>
        <Select.Option value="2">Option 3</Select.Option>
      </Select>
    );
    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });

  it('changing the Select component', () => {
    render(
      <Select data-testid="mock-component">
        <Select.Option value="0">Option 1</Select.Option>
        <Select.Option value="1">Option 2</Select.Option>
        <Select.Option value="2">Option 3</Select.Option>
      </Select>
    );
    const mockComponent = screen.getByTestId('mock-component');
    fireEvent.change(mockComponent, { target: { value: 'test text' } });
    expect(mockComponent).toHaveValue('test text');
  });
});

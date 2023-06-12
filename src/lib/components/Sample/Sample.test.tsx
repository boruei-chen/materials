import React from 'react';
import { render } from '@testing-library/react';
import Sample from './Sample.component';

describe('Sample', () => {
  test('renders the Sample component', () => {
    render(<Sample />);
  });
});

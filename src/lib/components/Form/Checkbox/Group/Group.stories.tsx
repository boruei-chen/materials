import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from '../Checkbox.component';

const Meta: ComponentMeta<typeof Checkbox.Group> = {
  title: 'form/Checkbox Group',
  component: Checkbox.Group,
  argTypes: {
    name: {
      type: {
        name: 'string',
        required: false
      }
    },
    disabled: {
      type: {
        name: 'boolean',
        required: false
      }
    },
    onChange: {
      type: {
        name: 'function',
        required: false
      }
    }
  }
};

const Story: ComponentStory<typeof Checkbox.Group> = (args) => (
  <Checkbox.Group {...args}>
    <Checkbox value="0">Option 1</Checkbox>
    <Checkbox value="1">Option 2</Checkbox>
    <Checkbox value="2">Option 3</Checkbox>
  </Checkbox.Group>
);

// Primary
export const Primary = Story.bind({});

// Labeled
export const Labeled = Story.bind({});
Labeled.args = {
  label: 'Label text'
};

// Disabled
export const Disabled = Story.bind({});
Disabled.storyName = 'State: Disabled';
Disabled.args = {
  label: 'Label text',
  disabled: true
};

// Error
export const Error = Story.bind({});
Error.storyName = 'State: Error';
Error.args = {
  label: 'Label text',
  errorMessage: 'Error message'
};

export default Meta;

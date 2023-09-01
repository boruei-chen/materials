import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Radio from '../Radio.component';

const Meta: ComponentMeta<typeof Radio.Group> = {
  title: 'form/Radio Group',
  component: Radio.Group,
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

const Story: ComponentStory<typeof Radio.Group> = (args) => (
  <Radio.Group {...args} name="field">
    <Radio value="0">Option 1</Radio>
    <Radio value="1">Option 2</Radio>
    <Radio value="2">Option 3</Radio>
  </Radio.Group>
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

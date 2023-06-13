import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Switch from './Switch.component';

const Meta: ComponentMeta<typeof Switch> = {
  title: 'form/Switch',
  component: Switch,
  argTypes: {
    name: {
      type: {
        name: 'string',
        required: false
      }
    },
    checked: {
      type: {
        name: 'boolean',
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

const Story: ComponentStory<typeof Switch> = (args) => (
  <Switch {...args} />
);

// Primary
export const Primary = Story.bind({});

// Labeled
export const Labeled = Story.bind({});
Labeled.args = {
  label: 'Label text'
};

// Checked
export const Checked = Story.bind({});
Checked.storyName = 'State: Checked';
Checked.args = {
  label: 'Label text',
  checked: true
};

// Unchecked
export const Unchecked = Story.bind({});
Unchecked.storyName = 'State: Unchecked';
Unchecked.args = {
  label: 'Label text',
  checked: false
};

// Checked, Disabled
export const CheckedDisabled = Story.bind({});
CheckedDisabled.storyName = 'State: Checked, Disabled';
CheckedDisabled.args = {
  label: 'Label text',
  checked: true,
  disabled: true
};

// Unchecked, Disabled
export const UncheckedDisabled = Story.bind({});
UncheckedDisabled.storyName = 'State: Unchecked, Disabled';
UncheckedDisabled.args = {
  label: 'Label text',
  checked: false,
  disabled: true
};

export default Meta;

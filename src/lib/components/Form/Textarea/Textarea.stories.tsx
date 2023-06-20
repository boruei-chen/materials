import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Textarea from './Textarea.component';

const Meta: ComponentMeta<typeof Textarea> = {
  title: 'form/Textarea',
  component: Textarea,
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

const Story: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

// Primary
export const Primary = Story.bind({});
Primary.args = {
  placeholder: 'Placeholder text'
};

// Variant: Outline
export const VariantOutline = Story.bind({});
VariantOutline.storyName = 'Variant: Outline';
VariantOutline.args = {
  label: 'Label text',
  placeholder: 'Placeholder text',
  variant: 'outline'
};

// Variant: Outline (Disabled)
export const VariantOutlineDisabled = Story.bind({});
VariantOutlineDisabled.storyName = 'Variant: Outline (Disabled)';
VariantOutlineDisabled.args = {
  label: 'Label text',
  placeholder: 'Placeholder text',
  variant: 'outline',
  disabled: true
};

// Variant: Outline (Error)
export const VariantOutlineError = Story.bind({});
VariantOutlineError.storyName = 'Variant: Outline (Error)';
VariantOutlineError.args = {
  label: 'Label text',
  placeholder: 'Placeholder text',
  variant: 'outline',
  errorMessage: 'Error message'
};

// Variant: Underline
export const VariantUnderline = Story.bind({});
VariantUnderline.storyName = 'Variant: Underline';
VariantUnderline.args = {
  label: 'Label text',
  placeholder: 'Placeholder text',
  variant: 'underline'
};

// Variant: Underline (Disabled)
export const VariantUnderlineDisabled = Story.bind({});
VariantUnderlineDisabled.storyName = 'Variant: Underline (Disabled)';
VariantUnderlineDisabled.args = {
  label: 'Label text',
  placeholder: 'Placeholder text',
  variant: 'underline',
  disabled: true
};

// Variant: Underline (Error)
export const VariantUnderlineError = Story.bind({});
VariantUnderlineError.storyName = 'Variant: Underline (Error)';
VariantUnderlineError.args = {
  label: 'Label text',
  placeholder: 'Placeholder text',
  variant: 'underline',
  errorMessage: 'Error message'
};

// Variant: Filled
export const VariantFilled = Story.bind({});
VariantFilled.storyName = 'Variant: Filled';
VariantFilled.args = {
  label: 'Label text',
  placeholder: 'Placeholder text',
  variant: 'filled'
};

// Variant: Filled (Disabled)
export const VariantFilledDisabled = Story.bind({});
VariantFilledDisabled.storyName = 'Variant: Filled (Disabled)';
VariantFilledDisabled.args = {
  label: 'Label text',
  placeholder: 'Placeholder text',
  variant: 'filled',
  disabled: true
};

// Variant: Filled (Error)
export const VariantFilledError = Story.bind({});
VariantFilledError.storyName = 'Variant: Filled (Error)';
VariantFilledError.args = {
  label: 'Label text',
  placeholder: 'Placeholder text',
  variant: 'filled',
  errorMessage: 'Error message'
};

export default Meta;

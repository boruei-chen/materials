import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sample from './Sample.component';

const Meta: ComponentMeta<typeof Sample> = {
  title: 'components/Sample',
  component: Sample
};

const Story: ComponentStory<typeof Sample> = (args) => (
  <Sample {...args} />
);

export const Primary = Story.bind({});

export default Meta;

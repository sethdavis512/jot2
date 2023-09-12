import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppHeader from '.';

export default {
  title: 'AppHeader',
  component: AppHeader,
} as ComponentMeta<typeof AppHeader>;

const Template: ComponentStory<typeof AppHeader> = (args) => <AppHeader {...args} />;

export const Interactive = Template.bind({});

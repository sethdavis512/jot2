import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from '.';

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  sx: { backgroundColor: 'gray.20' },
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Box from '.';

export default {
  title: 'Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  children: 'Box',
  sx: { backgroundColor: 'blue.20', width: 'fit-content', p: 3 },
};

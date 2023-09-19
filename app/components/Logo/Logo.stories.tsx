import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from '.';

export default {
  title: 'Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {};

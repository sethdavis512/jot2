import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary',
};

export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
  children: 'Standard',
};

export const Accent = Template.bind({});
Accent.args = {
  variant: 'accent',
  children: 'Accent',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Danger',
};

export const Hollow = Template.bind({});
Hollow.args = {
  variant: 'hollow',
  children: 'Hollow',
};

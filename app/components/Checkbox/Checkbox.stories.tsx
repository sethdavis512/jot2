import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';

import Checkbox from '.';
import Box from '../Box';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  children: 'Checkbox',
  disabled: false,
  invalid: false,
};

export const Gallery: Story = () => {
  return (
    <Box>
      <Checkbox sx={{ mb: 5 }}>Checkbox</Checkbox>
      <Checkbox sx={{ mb: 5 }} checked>
        Checkbox
      </Checkbox>
      <Checkbox sx={{ mb: 5 }} disabled>
        Checkbox
      </Checkbox>
      <Checkbox sx={{ mb: 5 }} disabled checked>
        Checkbox
      </Checkbox>
      <Checkbox sx={{ mb: 5 }} invalid>
        Checkbox
      </Checkbox>
      <Checkbox sx={{ mb: 5 }} invalid checked>
        Checkbox
      </Checkbox>
      <Checkbox sx={{ mb: 5 }} invalid disabled>
        Checkbox
      </Checkbox>
      <Checkbox invalid disabled checked>
        Checkbox
      </Checkbox>
    </Box>
  );
};

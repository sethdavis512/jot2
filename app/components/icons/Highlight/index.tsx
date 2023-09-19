import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Highlight: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M18.89 6.88l.74.74c.49.49.49 1.29 0 1.79l-.39.39-6.13 6.1-2.51-2.51 6.1-6.13.4-.38c.49-.5 1.29-.5 1.79 0zM9.5 14.5l.4-.4 2.5 2.5-.4.4-3 .5H4v-1h5.17l.33-2z" />
    </Icon>
  );
};

export default Highlight;

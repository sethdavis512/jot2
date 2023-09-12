import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Comment: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M19 4.5H5c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h8l-2 4 6-4h2c.6 0 1-.4 1-1v-9c0-.6-.4-1-1-1zm-13 5h8v1H6v-1zm10 4H6v-1h10v1zm2-6H6v-1h12v1z" />
    </Icon>
  );
};

export default Comment;

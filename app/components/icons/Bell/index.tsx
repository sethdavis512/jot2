import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Bell: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M16 13c0 .6.4 1 1 1s1 .4 1 1-.4 1-1 1H7c-.6 0-1-.4-1-1s.4-1 1-1 1-.4 1-1v-3c0-1.9 1.3-3.4 3-3.9V6c0-.6.4-1 1-1s1 .4 1 1v.1c1.7.5 3 2 3 3.9v3zm-2 4c0 1.1-.9 2-2 2s-2-.9-2-2h4z" />
    </Icon>
  );
};

export default Bell;

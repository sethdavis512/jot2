import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Todo: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M16.6 9.7a.75.75 0 00-1.06-1.06l-5.13 5.13-1.95-1.95a.75.75 0 00-1.06 1.06l2.48 2.48a.75.75 0 001.06 0L16.6 9.7z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 3a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75H3.75zm.75 16.5v-15h15v15h-15z"
      />
    </Icon>
  );
};

export default Todo;

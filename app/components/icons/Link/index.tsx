import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Link: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M7 9.75A2.246 2.246 0 004.75 12 2.246 2.246 0 007 14.25h3a.75.75 0 010 1.5H7A3.746 3.746 0 013.25 12 3.746 3.746 0 017 8.25h3a.75.75 0 010 1.5H7zM13.25 9a.75.75 0 01.75-.75h3A3.746 3.746 0 0120.75 12 3.746 3.746 0 0117 15.75h-3a.75.75 0 010-1.5h3A2.246 2.246 0 0019.25 12 2.246 2.246 0 0017 9.75h-3a.75.75 0 01-.75-.75z" />
      <path d="M9 11.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z" />
    </Icon>
  );
};

export default Link;

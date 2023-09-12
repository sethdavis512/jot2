import React from 'react';
import Icon, { IconProps } from '../../Icon';

const AlignLeft: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M3.25 6A.75.75 0 014 5.25h13a.75.75 0 010 1.5H4A.75.75 0 013.25 6zm0 3A.75.75 0 014 8.25h16a.75.75 0 010 1.5H4A.75.75 0 013.25 9zM4 14.25a.75.75 0 000 1.5h14a.75.75 0 000-1.5H4zM3.25 12a.75.75 0 01.75-.75h11a.75.75 0 010 1.5H4a.75.75 0 01-.75-.75zM4 17.25a.75.75 0 000 1.5h7a.75.75 0 000-1.5H4z" />
    </Icon>
  );
};

export default AlignLeft;

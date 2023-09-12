import React from 'react';
import Icon, { IconProps } from '../../Icon';

const AlignCenter: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M4.75 6a.75.75 0 01.75-.75h13a.75.75 0 010 1.5h-13A.75.75 0 014.75 6zm-1.5 3A.75.75 0 014 8.25h16a.75.75 0 010 1.5H4A.75.75 0 013.25 9zM5 14.25a.75.75 0 000 1.5h14a.75.75 0 000-1.5H5zM5.75 12a.75.75 0 01.75-.75h11a.75.75 0 010 1.5h-11a.75.75 0 01-.75-.75zm2.75 5.25a.75.75 0 000 1.5h7a.75.75 0 000-1.5h-7z" />
    </Icon>
  );
};

export default AlignCenter;

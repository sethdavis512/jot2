import React from 'react';
import Icon, { IconProps } from '../../Icon';

const AlignRight: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M6.25 6A.75.75 0 017 5.25h13a.75.75 0 010 1.5H7A.75.75 0 016.25 6zm-3 3A.75.75 0 014 8.25h16a.75.75 0 010 1.5H4A.75.75 0 013.25 9zM6 14.25a.75.75 0 000 1.5h14a.75.75 0 000-1.5H6zM8.25 12a.75.75 0 01.75-.75h11a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM13 17.25a.75.75 0 000 1.5h7a.75.75 0 000-1.5h-7z" />
    </Icon>
  );
};

export default AlignRight;

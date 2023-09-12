import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Folder: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M20.5 6.5h-1c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1H6.4c-.5 0-1 .4-1 .9l-.1 2.1H3.5c-.6 0-1.1.5-1 1.1l2 7.9h16l1-10.9c.1-.6-.4-1.1-1-1.1zm-.7 8.9l-1.2-5c-.1-.6-.5-.9-1-.9H6.3l.2-2h8V7c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v.5h2l-.7 7.9z" />
    </Icon>
  );
};

export default Folder;

import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Settings: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M19 13v-2l-1.7-.6c-.1-.4-.3-.7-.4-1l.8-1.6-1.4-1.4-1.7.8c-.3-.2-.7-.4-1-.5L13 5h-2l-.6 1.7c-.3.1-.7.3-1 .5l-1.6-.9-1.5 1.5.8 1.6c-.1.3-.3.7-.4 1L5 11v2l1.7.6c.1.4.3.7.4 1l-.8 1.6 1.4 1.4 1.6-.8c.3.2.7.3 1 .4L11 19h2l.6-1.7c.4-.1.7-.3 1-.4l1.6.8 1.4-1.4-.8-1.6c.2-.3.3-.7.4-1L19 13zm-7 1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </Icon>
  );
};

export default Settings;

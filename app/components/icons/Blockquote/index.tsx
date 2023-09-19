import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Blockquote: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M3.25 4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4zM8 6.75h9c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H8c-.41 0-.75.34-.75.75s.34.75.75.75zm12 2.5H8c-.41 0-.75.34-.75.75s.34.75.75.75h12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm-12 8h10c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zm0-2.5h7c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H8c-.41 0-.75.34-.75.75s.34.75.75.75z" />
    </Icon>
  );
};

export default Blockquote;

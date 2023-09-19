import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Hamburger: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M5 7.76h14c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H5c-.41 0-.75.34-.75.75s.34.75.75.75zm14 3.49H5a.749.749 0 100 1.5h14c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM5 16.24h14c.41 0 .75.34.75.75s-.34.75-.75.75H5a.749.749 0 110-1.5z" />
    </Icon>
  );
};

export default Hamburger;

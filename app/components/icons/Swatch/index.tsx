import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Swatch: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M20.25 3H3.75c-.41 0-.75.34-.75.75v16.5c0 .41.34.75.75.75h16.5c.41 0 .75-.34.75-.75V3.75c0-.41-.34-.75-.75-.75z" />
    </Icon>
  );
};

export default Swatch;

import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Placeholder: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="6" />
    </Icon>
  );
};

export default Placeholder;

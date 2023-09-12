import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Close: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M16.53 8.53a.75.75 0 00-1.06-1.06L12 10.94 8.53 7.47a.75.75 0 00-1.06 1.06L10.94 12l-3.47 3.47a.75.75 0 101.06 1.06L12 13.06l3.47 3.47a.75.75 0 101.06-1.06L13.06 12l3.47-3.47z" />
    </Icon>
  );
};

export default Close;

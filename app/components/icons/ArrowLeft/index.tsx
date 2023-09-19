import React from 'react';
import Icon, { IconProps } from '../../Icon';

const ArrowLeft: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M4.47 11.47a.75.75 0 000 1.06l5 5a.75.75 0 101.06-1.06l-3.72-3.72H19a.75.75 0 000-1.5H6.81l3.72-3.72a.75.75 0 10-1.06-1.06l-5 5z" />
    </Icon>
  );
};

export default ArrowLeft;

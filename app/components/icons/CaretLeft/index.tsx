import React from 'react';
import Icon, { IconProps } from '../../Icon';

const CaretLeft: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M14.25 16a.75.75 0 01-1.219.586l-5-4a.75.75 0 010-1.172l5-4A.75.75 0 0114.25 8v8z" />
    </Icon>
  );
};

export default CaretLeft;

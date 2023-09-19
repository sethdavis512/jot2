import React from 'react';
import Icon, { IconProps } from '../../Icon';

const CaretRight: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M9.75 16a.75.75 0 001.219.586l5-4a.75.75 0 000-1.172l-5-4A.75.75 0 009.75 8v8z" />
    </Icon>
  );
};

export default CaretRight;

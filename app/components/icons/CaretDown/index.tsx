import React from 'react';
import Icon, { IconProps } from '../../Icon';

const CaretDown: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M8 9.75a.75.75 0 00-.586 1.219l4 5a.75.75 0 001.172 0l4-5A.75.75 0 0016 9.75H8z" />
    </Icon>
  );
};

export default CaretDown;

import React from 'react';
import Icon, { IconProps } from '../../Icon';

const ChevronFilledRight: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M11.055 6.525a.75.75 0 00-1.28.532l.02 9.89a.75.75 0 001.28.528l4.93-4.94a.75.75 0 000-1.06l-4.95-4.95z" />
    </Icon>
  );
};

export default ChevronFilledRight;

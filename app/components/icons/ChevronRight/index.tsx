import React from 'react';
import Icon, { IconProps } from '../../Icon';

const ChevronRight: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M11.055 6.525a.75.75 0 00-1.06 1.06l4.42 4.42-4.4 4.41a.75.75 0 101.06 1.06l4.93-4.94a.75.75 0 000-1.06l-4.95-4.95z" />
    </Icon>
  );
};

export default ChevronRight;

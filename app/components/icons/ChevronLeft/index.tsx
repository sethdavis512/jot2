import React from 'react';
import Icon, { IconProps } from '../../Icon';

const ChevronLeft: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M12.945 6.525a.75.75 0 011.06 1.06l-4.42 4.42 4.4 4.41a.75.75 0 01-1.06 1.06l-4.93-4.94a.75.75 0 010-1.06l4.95-4.95z" />
    </Icon>
  );
};

export default ChevronLeft;

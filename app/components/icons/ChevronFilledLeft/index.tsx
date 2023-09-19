import React from 'react';
import Icon, { IconProps } from '../../Icon';

const ChevronFilledLeft: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M12.945 6.525a.75.75 0 011.28.532l-.02 9.89a.75.75 0 01-1.28.528l-4.93-4.94a.75.75 0 010-1.06l4.95-4.95z" />
    </Icon>
  );
};

export default ChevronFilledLeft;

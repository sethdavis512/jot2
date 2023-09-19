import React from 'react';
import Icon, { IconProps } from '../../Icon';

const ChevronFilledDown: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M17.475 11.055a.75.75 0 00-.532-1.28l-9.89.02a.75.75 0 00-.528 1.28l4.94 4.93a.75.75 0 001.06 0l4.95-4.95z" />
    </Icon>
  );
};

export default ChevronFilledDown;

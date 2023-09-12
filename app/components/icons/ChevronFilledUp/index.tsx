import React from 'react';
import Icon, { IconProps } from '../../Icon';

const ChevronFilledUp: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M17.475 12.945a.75.75 0 01-.532 1.28l-9.89-.02a.75.75 0 01-.528-1.28l4.94-4.93a.75.75 0 011.06 0l4.95 4.95z" />
    </Icon>
  );
};

export default ChevronFilledUp;

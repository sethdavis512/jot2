import React from 'react';
import Icon, { IconProps } from '../../Icon';

const ChevronDown: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.475 9.995a.75.75 0 010 1.06l-4.95 4.95a.75.75 0 01-1.06 0l-4.94-4.93a.75.75 0 011.06-1.06l4.41 4.4 4.42-4.42a.75.75 0 011.06 0z"
      />
    </Icon>
  );
};

export default ChevronDown;

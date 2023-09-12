import React from 'react';
import Icon, { IconProps } from '../../Icon';

const ChevronUp: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.475 15.005a.75.75 0 000-1.06l-4.95-4.95a.75.75 0 00-1.06 0l-4.94 4.93a.75.75 0 001.06 1.06l4.41-4.4 4.42 4.42a.75.75 0 001.06 0z"
      />
    </Icon>
  );
};

export default ChevronUp;

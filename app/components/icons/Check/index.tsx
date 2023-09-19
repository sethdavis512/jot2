import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Check: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.24 7.76a.75.75 0 010 1.06l-7.42 7.42a.75.75 0 01-1.06.001l-3.54-3.53a.75.75 0 011.06-1.062l3.01 3.001 6.89-6.89a.75.75 0 011.06 0z"
      />
    </Icon>
  );
};

export default Check;

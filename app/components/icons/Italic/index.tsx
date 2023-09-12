import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Italic: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M13.014 6.25H16a.75.75 0 010 1.5h-2.385l-1.7 8.5H14a.75.75 0 010 1.5H8a.75.75 0 010-1.5h2.385l1.7-8.5H10a.75.75 0 110-1.5h3.014z" />
    </Icon>
  );
};

export default Italic;

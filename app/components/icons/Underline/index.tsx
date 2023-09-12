import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Underline: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M9.25 7a.75.75 0 00-1.5 0v5.5A4.254 4.254 0 0012 16.75a4.254 4.254 0 004.25-4.25V7a.75.75 0 00-1.5 0v5.5A2.754 2.754 0 0112 15.25a2.754 2.754 0 01-2.75-2.75V7zM8.5 18.25a.75.75 0 000 1.5h7a.75.75 0 000-1.5h-7z" />
    </Icon>
  );
};

export default Underline;

import React from 'react';
import Icon, { IconProps } from '../../Icon';

const ListBulleted: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M5.5 6.005a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm2.75-.75a.75.75 0 000 1.5h12a.75.75 0 000-1.5h-12zm0 6a.75.75 0 000 1.5h12a.75.75 0 000-1.5h-12zm-.75 6.75a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zm-3.25-4.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm1.23 4.75a1.24 1.24 0 11-2.48 0 1.24 1.24 0 012.48 0z" />
    </Icon>
  );
};

export default ListBulleted;

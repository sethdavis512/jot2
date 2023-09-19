import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Table: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M20.25 5.25H3.75c-.41 0-.75.34-.75.75v12c0 .41.34.75.75.75h16.5c.41 0 .75-.34.75-.75V6c0-.41-.34-.75-.75-.75zm-10.25 8v-2.5h4v2.5h-4zm4 1.5v2.5h-4v-2.5h4zm-9.5-4h4v2.5h-4v-2.5zm5.5-1.5v-2.5h4v2.5h-4zm5.5 1.5h4v2.5h-4v-2.5zm4-1.5h-4v-2.5h4v2.5zm-11-2.5v2.5h-4v-2.5h4zm-4 8h4v2.5h-4v-2.5zm11 2.5v-2.5h4v2.5h-4z" />
    </Icon>
  );
};

export default Table;

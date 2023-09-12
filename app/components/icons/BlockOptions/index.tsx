import React from 'react';
import Icon, { IconProps } from '../../Icon';

const BlockOptions: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M18 5.25H6c-.41 0-.75.34-.75.75v12c0 .41.34.75.75.75h12c.41 0 .75-.34.75-.75V6c0-.41-.34-.75-.75-.75zm-2.47 6.28l-3 3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-3-3a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0L12 12.94l2.47-2.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06z" />
    </Icon>
  );
};

export default BlockOptions;

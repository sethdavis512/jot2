import React from 'react';
import Icon, { IconProps } from '../../Icon';

const TextBlock: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M9.25 10c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.75h-2v6.5H14c.41 0 .75.34.75.75s-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25v-6.5h-2V10z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 3h16.5c.41 0 .75.34.75.75v16.5c0 .41-.34.75-.75.75H3.75c-.41 0-.75-.34-.75-.75V3.75c0-.41.34-.75.75-.75zm.75 16.5h15v-15h-15v15z"
      />
    </Icon>
  );
};

export default TextBlock;

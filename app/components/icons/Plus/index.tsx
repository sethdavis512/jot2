import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Plus: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M17 11h-4V7h-2v4H7v2h4v4h2v-4h4v-2z" />
    </Icon>
  );
};

export default Plus;

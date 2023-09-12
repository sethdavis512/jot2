import React from 'react';
import Icon, { IconProps } from '../../Icon';

const More: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M13.5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </Icon>
  );
};

export default More;

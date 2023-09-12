import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Gripper: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M9 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10.5 18a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6-12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM9 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </Icon>
  );
};

export default Gripper;

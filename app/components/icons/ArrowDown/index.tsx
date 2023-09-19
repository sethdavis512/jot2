import React from 'react';
import Icon, { IconProps } from '../../Icon';

const ArrowDown: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M12.53 19.53a.748.748 0 01-1.06 0l-5-5a.75.75 0 111.06-1.06l3.72 3.72V5a.75.75 0 011.5 0v12.19l3.72-3.72a.75.75 0 111.06 1.06l-5 5z" />
    </Icon>
  );
};

export default ArrowDown;

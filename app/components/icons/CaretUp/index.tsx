import React from 'react';
import Icon, { IconProps } from '../../Icon';

const CaretUp: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M8 15.25a.75.75 0 01-.586-1.219l4-5a.75.75 0 011.172 0l4 5A.75.75 0 0116 15.25H8z" />
    </Icon>
  );
};

export default CaretUp;

import React from 'react';
import Icon, { IconProps } from '../../Icon';

const ArrowUp: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M11.713 4.307a.748.748 0 00-.243.163l-5 5a.75.75 0 101.06 1.06l3.72-3.72V19a.75.75 0 001.5 0V6.81l3.72 3.72a.75.75 0 101.06-1.06l-5-5a.748.748 0 00-.817-.163z" />
    </Icon>
  );
};

export default ArrowUp;

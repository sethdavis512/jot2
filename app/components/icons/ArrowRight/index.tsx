import React from 'react';
import Icon, { IconProps } from '../../Icon';

const ArrowRight: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M19.693 11.713a.747.747 0 00-.163-.243m0 0l-5-5a.75.75 0 10-1.06 1.06l3.72 3.72H5a.75.75 0 000 1.5h12.19l-3.72 3.72a.75.75 0 101.06 1.06l5-5m.002-.001a.747.747 0 00.161-.816" />
    </Icon>
  );
};

export default ArrowRight;

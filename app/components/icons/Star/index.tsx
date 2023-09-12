import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Star: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M12.713 4.768a.75.75 0 00-1.426 0L9.715 9.6H4.64a.75.75 0 00-.44 1.357l4.108 2.98-1.571 4.831a.75.75 0 001.153.84L12 16.625l4.11 2.981a.75.75 0 001.153-.839l-1.571-4.831 4.108-2.98a.75.75 0 00-.44-1.357h-5.075l-1.572-4.832z" />
    </Icon>
  );
};

export default Star;

import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Bold: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M14.45 11.61c.49-.57.8-1.3.8-2.11 0-1.79-1.46-3.25-3.25-3.25H8.5c-.41 0-.75.34-.75.75v10c0 .41.34.75.75.75H13c1.79 0 3.25-1.46 3.25-3.25 0-1.27-.74-2.36-1.8-2.89zM13 15.75H9.75V13H13c.69 0 1.25.62 1.25 1.38 0 .76-.56 1.37-1.25 1.37zM12 11H9.75V8.25H12c.69 0 1.25.62 1.25 1.38 0 .76-.56 1.37-1.25 1.37z" />
    </Icon>
  );
};

export default Bold;

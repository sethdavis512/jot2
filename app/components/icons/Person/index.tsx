import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Person: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M12 3.75a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm0 10c-.84 0-1.664.052-2.44.157l-.02.003c-1.714.277-3.243.839-4.365 1.62-1.111.773-1.925 1.842-1.925 3.13 0 .99.912 1.59 1.75 1.59h14c.838 0 1.75-.6 1.75-1.59 0-1.288-.814-2.357-1.925-3.13-1.122-.781-2.651-1.343-4.365-1.62l-.02-.003c-.776-.105-1.6-.157-2.44-.157z" />
    </Icon>
  );
};

export default Person;

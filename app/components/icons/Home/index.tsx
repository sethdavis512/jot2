import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Home: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M12.53 3.97a.75.75 0 00-1.06 0l-9 9A.75.75 0 003 14.25h2.75v5.25c0 .414.336.75.75.75H10a.75.75 0 00.75-.75v-5.25h2.5v5.25c0 .414.336.75.75.75h3.5a.75.75 0 00.75-.75v-5.25H21a.75.75 0 00.53-1.28l-9-9z" />
    </Icon>
  );
};

export default Home;

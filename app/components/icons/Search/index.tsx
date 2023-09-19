import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Search: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.25 4.5a5.75 5.75 0 103.501 10.312l4.469 4.468a.75.75 0 001.06-1.06l-4.468-4.469A5.75 5.75 0 0010.25 4.5zM6 10.25a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0z"
      />
    </Icon>
  );
};

export default Search;

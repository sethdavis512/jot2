import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Image: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M9.56 8.41c0 .67-.54 1.22-1.22 1.22-.68 0-1.22-.55-1.22-1.22 0-.67.54-1.22 1.22-1.22.67 0 1.22.54 1.22 1.22z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 19V5h14v14H5zM18 6H6v10h1.6l3.38-5.44 1.05 1.7 2.63-4.25L18 13.43V6zm-7.03 6.46L8.78 16h4.38l-2.19-3.54zm1.65.75L14.34 16H18v-.67l-3.34-5.42-2.04 3.3z"
      />
    </Icon>
  );
};

export default Image;

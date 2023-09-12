import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Document: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M14 4H6v16h12V8l-4-4zm3 15H7V5h6v4h4v10z" />
    </Icon>
  );
};

export default Document;

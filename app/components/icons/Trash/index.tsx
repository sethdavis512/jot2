import React from 'react';
import Icon, { IconProps } from '../../Icon';

const Trash: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M18.99 5.75h-3.75V4c0-.41-.34-.75-.75-.75h-5c-.41 0-.75.34-.75.75v1.75H4.99c-.41 0-.75.34-.75.75s.34.75.75.75h.59l1.17 12.82c.04.39.36.68.75.68h9c.39 0 .71-.3.75-.68l1.17-12.82h.59c.41 0 .75-.34.75-.75s-.36-.75-.77-.75zm-8.75-1h3.5v1h-3.5v-1zm.27 12.5h-.07c-.38 0-.71-.29-.75-.68l-.59-6.5c-.04-.41.27-.78.68-.82.4-.03.78.27.81.68l.59 6.5c.05.41-.25.78-.67.82zm3.77-.68a.75.75 0 01-.75.68h-.07a.753.753 0 01-.68-.82l.59-6.5c.04-.41.4-.71.81-.68.41.04.72.4.68.82l-.58 6.5z" />
    </Icon>
  );
};

export default Trash;

import React from 'react';
import { RenderElementProps } from 'slate-react';
import Text from '../../Text';

const DefaultElement: React.FunctionComponent<RenderElementProps> = ({ attributes, children }) => {
  return <Text {...attributes}>{children}</Text>;
};

export default DefaultElement;

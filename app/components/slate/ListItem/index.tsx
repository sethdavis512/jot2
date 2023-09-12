import React from 'react';
import { RenderElementProps } from 'slate-react';
import Box from '../../Box';

const StyledListItem = Box.withComponent('li');

const ListItem: React.FunctionComponent<RenderElementProps> = ({ attributes, children }) => {
  return <StyledListItem {...attributes}>{children}</StyledListItem>;
};

export default ListItem;

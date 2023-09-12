/** @jsxImportSource theme-ui */

import React from 'react';
import { RenderElementProps } from 'slate-react';
import Box from '../../Box';

const StyledOl = Box.withComponent('ol');

const NumberedList: React.FunctionComponent<RenderElementProps> = ({ attributes, children }) => {
  return (
    <StyledOl
      sx={{
        lineHeight: 5,
        paddingInlineStart: 8,
      }}
      {...attributes}
    >
      {children}
    </StyledOl>
  );
};

export default NumberedList;

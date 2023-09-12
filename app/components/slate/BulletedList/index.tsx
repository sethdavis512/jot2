/** @jsxImportSource theme-ui */

import { scales } from '@theme-ui/css';
import { transformAuthInfo } from 'passport';
import React from 'react';
import { RenderElementProps } from 'slate-react';
import Box from '../../Box';

const StyledUl = Box.withComponent('ul');

const BulletedList: React.FunctionComponent<RenderElementProps> = ({ attributes, children }) => {
  return (
    <StyledUl
      sx={{
        lineHeight: 5,
        paddingInlineStart: 8,
      }}
      {...attributes}
    >
      {children}
    </StyledUl>
  );
};

export default BulletedList;

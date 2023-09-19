import React from 'react';
import { RenderElementProps } from 'slate-react';

import Heading from '../../Heading';

const HeadingOne: React.FunctionComponent<RenderElementProps> = ({ attributes, children }) => {
  return (
    <Heading level={6} as="h1" sx={{ lineHeight: 1 }} {...attributes}>
      {children}
    </Heading>
  );
};

export default HeadingOne;

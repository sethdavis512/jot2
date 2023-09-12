import React from 'react';
import { RenderElementProps } from 'slate-react';

import Heading from '../../Heading';

const HeadingTwo: React.FunctionComponent<RenderElementProps> = ({ attributes, children }) => {
  return (
    <Heading level={4} as="h2" sx={{ lineHeight: 4 }} {...attributes}>
      {children}
    </Heading>
  );
};

export default HeadingTwo;

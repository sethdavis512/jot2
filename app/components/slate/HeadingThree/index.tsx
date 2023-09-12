import React from 'react';
import { RenderElementProps } from 'slate-react';

import Heading from '../../Heading';

const HeadingThree: React.FunctionComponent<RenderElementProps> = ({ attributes, children }) => {
  return (
    <Heading level={3} as="h3" sx={{ lineHeight: 5 }} {...attributes}>
      {children}
    </Heading>
  );
};

export default HeadingThree;

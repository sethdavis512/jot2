import styled from '@emotion/styled';

import { themeHelper, sxPropHelper, StyleProps } from '../../utils/styled';
import { modes } from '../../utils/theme';

interface HeadingProps extends StyleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

const Heading = styled.h2<HeadingProps>(
  ({ level = 4, ...props }) =>
    themeHelper({
      fontSize: level,
      lineHeight: 4,
      fontFamily: 'default',
      fontWeight: 'bold',
      color: props.theme?.mode === modes.dark ? 'gray.5' : 'gray.80',
    })(props),
  sxPropHelper,
);

export default Heading;

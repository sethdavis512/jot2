import styled from '@emotion/styled';

import { StyleProps, sxPropHelper, themeHelper } from '../../utils/styled';
import { modes, Theme } from '../../utils/theme';

interface LabelProps extends StyleProps {
  disabled?: boolean;
}

const baseStyles = ({ disabled }: LabelProps) =>
  themeHelper({
    display: 'block',
    fontFamily: 'default',
    fontSize: '1rem',
    lineHeight: 2,
    opacity: disabled ? 0.4 : 1,
    color: ({ mode }: Theme) => (mode === modes.dark ? 'gray.5' : 'gray.60'),
    fontWeight: 'normal',
  });

const Label = styled.label<LabelProps>(baseStyles, sxPropHelper);

export default Label;

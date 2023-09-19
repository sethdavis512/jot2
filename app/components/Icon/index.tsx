import styled from '@emotion/styled';
import { themeHelper, sxPropHelper, StyleProps } from '../../utils/styled';
import { modes } from '../../utils/theme';

export type IconProps = StyleProps;

const baseStyles = (props: IconProps) => {
  const mode = props.theme?.mode ?? modes.light;

  return themeHelper({
    width: '24px',
    height: '24px',
    fill: mode === modes.dark ? 'gray.5' : 'gray.80',
  })(props);
};

const Icon = styled.svg<IconProps>(baseStyles, sxPropHelper);

export default Icon;

import styled from '@emotion/styled';
import { sxPropHelper, StyleProps } from '../../utils/styled';

export type BoxProps = StyleProps;

const Box = styled.div<BoxProps>({ minWidth: 0 }, sxPropHelper);

export default Box;

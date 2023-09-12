/**
 * @jest-environment jsdom
 */

import React from 'react';
import styled from '@emotion/styled';
import { themeHelper, StyleProps, sxPropHelper } from '../../utils/styled';
import { modes } from '../../utils/theme';

interface LogoProps extends StyleProps, React.SVGProps<SVGSVGElement> {}

const baseStyles = (props: LogoProps) =>
  themeHelper({
    fill: props.theme?.mode === modes.dark ? 'gray.0' : 'gray.100',
    width: '160px',
    height: '70px',
  });

const StyledLogo = styled.svg<StyleProps>(baseStyles, sxPropHelper);

const Logo: React.FunctionComponent<LogoProps> = (props) => {
  return (
    <StyledLogo enableBackground="new 0 0 152.37 69.94" viewBox="0 0 152.37 69.94" {...props}>
      <path d="m66.02 0h-41.1c-1.04 0-2.03.41-2.76 1.14l-.14.14-20.74 20.74-.14.14c-.73.73-1.14 1.73-1.14 2.76v41.11c0 2.16 1.75 3.91 3.91 3.91h62.12c2.16 0 3.91-1.75 3.91-3.91v-62.12c-.01-2.16-1.76-3.91-3.92-3.91zm-1.95 64.08h-58.21v-38.03h16.28c2.16 0 3.91-1.75 3.91-3.91v-16.28h38.02z" />
      <path d="m20.09 39.77c-.44 0-.82.28-.94.7-.28.99-.72 2.89-.72 4.87 0 7.27 6.1 11.08 12.55 11.08 6.8 0 13.25-4.22 14.95-13.01l4.28-21.98h3.3c.47 0 .87-.33.96-.79l1.09-5.67c.12-.6-.35-1.16-.96-1.16h-18.13c-.47 0-.87.33-.96.79l-1.09 5.67c-.12.6.35 1.16.96 1.16h4.33l-4.22 21.52c-.59 3.11-2.17 4.4-4.16 4.4-1.58 0-2.81-.82-2.81-3.11 0-1.09.24-2.36.45-3.27.14-.61-.33-1.19-.95-1.19h-7.93z" />
      <path d="m122.77 26.08c-6.05 0-11.62 4.56-11.62 12.48s5.57 12.48 11.62 12.48c6 0 11.57-4.56 11.57-12.48s-5.57-12.48-11.57-12.48zm0 19.25c-2.93 0-4.37-2.64-4.37-6.77s1.44-6.77 4.37-6.77c2.88 0 4.37 2.64 4.37 6.77s-1.49 6.77-4.37 6.77z" />
      <path d="m151.28 45.04c-.62.24-1.49.48-2.26.48-1.87 0-3.07-1.1-3.07-3.79v-9.55h5.71v-5.52h-5.71v-6.34h-5.86l-.82 6.34-3.65.29v5.23h3.26v9.65c0 5.52 2.3 9.22 8.21 9.22 2.3 0 4.03-.48 5.28-.86z" />
      <path d="m94.87 19.17v5.52h5.33v14.79c0 4.18-1.34 5.47-3.89 5.47-1.58 0-3.22-1.01-4.37-3.12l-4.8 3.55c2.16 3.79 5.33 5.66 10.08 5.66 6.91 0 10.03-4.94 10.03-10.99v-15.36l3.65-.29v-5.23z" />
    </StyledLogo>
  );
};

export default Logo;

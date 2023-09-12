import React, { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { StyleProps, sxPropHelper, themeHelper } from '../../utils/styled';
import Label from '../Label';
import Box from '../Box';
import { Theme } from '../../utils/theme';

export interface CheckboxProps extends StyleProps, InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

const CheckboxInput = styled.input({
  position: 'absolute',
  opacity: 0,
  zIndex: -1,
  width: 1,
  height: 1,
  overflow: 'hidden',
});

const baseCheckboxIconStyles = ({ invalid }: CheckboxIconProps) =>
  themeHelper({
    flex: '0 0 auto',
    position: 'relative',
    color: 'transparent',
    width: '1rem',
    height: '1rem',
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: '0.0625rem',
    borderColor: invalid ? 'red.50' : 'gray.40',
    'input:hover ~ &': {
      borderColor: invalid ? 'red.30' : 'gray.20',
    },
    'input:active ~ &': {
      borderColor: invalid ? 'red.70' : 'gray.70',
    },
    'input:focus-visible ~ &': {
      borderColor: 'gray.40',
      boxShadow: ({ colors }: Theme) => `0px 0px 0px 2px ${colors.blue[20]}`,
      'input:active ~ &': {
        borderColor: 'gray.70',
      },
    },
    'input:checked ~ &': {
      backgroundColor: invalid ? 'red.50' : 'gray.80',
    },
    'input:checked:hover ~ &': {
      backgroundColor: invalid ? 'red.30' : 'gray.60',
    },
    'input:checked:active ~ &': {
      backgroundColor: invalid ? 'red.70' : 'gray.100',
    },
  });

interface CheckboxIconProps extends StyleProps {
  invalid?: boolean;
}

const CheckboxIcon = styled.span<CheckboxIconProps>(baseCheckboxIconStyles, sxPropHelper);

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  id,
  as,
  children,
  disabled,
  invalid,
  sx,
  required,
  ...rest
}) => {
  return (
    <Label
      as={as}
      disabled={disabled}
      htmlFor={id}
      sx={{
        display: 'flex',
        ...sx,
      }}
    >
      <CheckboxInput type="checkbox" id={id} disabled={disabled} required={required} {...rest} />
      <CheckboxIcon aria-hidden invalid={invalid}>
        <svg
          focusable="false"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.1602 5.17312C12.3555 5.36838 12.3555 5.68496 12.1602 5.88023L7.21355 10.8269C7.01849 11.022 6.70229 11.0222 6.50695 10.8274L4.14695 8.47406C3.95141 8.27907 3.95096 7.96249 4.14595 7.76695C4.34093 7.57141 4.65751 7.57097 4.85305 7.76595L6.8595 9.76673L11.4531 5.17312C11.6484 4.97786 11.965 4.97786 12.1602 5.17312Z"
            fill="white"
            stroke="white"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CheckboxIcon>
      {children && (
        <Box as="span" sx={{ flexGrow: 1, ml: 4 }}>
          {children}
        </Box>
      )}
    </Label>
  );
};

export default Checkbox;

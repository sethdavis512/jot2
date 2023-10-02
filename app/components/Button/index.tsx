import styled from "@emotion/styled";
import { themeHelper, sxPropHelper, type StyleProps } from "../../utils/styled";
import { modes } from "../../utils/theme";

interface ButtonProps extends StyleProps {
  variant?: keyof typeof variants;
}

const variants = {
  standard: (mode: modes) =>
    mode === modes.dark
      ? {
          backgroundColor: "gray.70",
          color: "gray.5",
          ":hover": {
            backgroundColor: "gray.60",
          },
          ":active": {
            backgroundColor: "gray.100",
            borderColor: "transparent",
          },
          ":focus-visible": {
            borderColor: "blue.20",
          },
          ":disabled": {
            ":hover": {
              backgroundColor: "gray.70",
            },
          },
        }
      : {
          backgroundColor: "gray.5",
          color: "gray.80",
          ":hover": {
            backgroundColor: "gray.2",
          },
          ":active": {
            backgroundColor: "gray.20",
            borderColor: "transparent",
          },
          ":focus-visible": {
            borderColor: "blue.50",
          },
          ":disabled": {
            ":hover": {
              backgroundColor: "gray.5",
            },
          },
        },
  primary: (mode: modes) =>
    mode === modes.dark
      ? {
          backgroundColor: "blue.50",
          color: "gray.5",
          ":hover": {
            backgroundColor: "blue.40",
          },
          ":active": {
            backgroundColor: "blue.60",
            borderColor: "transparent",
          },
          ":focus-visible": {
            borderColor: "blue.20",
          },
          ":disabled": {
            ":hover": {
              backgroundColor: "blue.50",
            },
          },
        }
      : {
          backgroundColor: "blue.50",
          color: "gray.0",
          ":hover": {
            backgroundColor: "blue.40",
          },
          ":active": {
            backgroundColor: "blue.60",
            borderColor: "transparent",
          },
          ":focus-visible": {
            borderColor: "blue.70",
          },
          ":disabled": {
            ":hover": {
              backgroundColor: "blue.50",
            },
          },
        },
  accent: (mode: modes) =>
    mode === modes.dark
      ? {
          backgroundColor: "mint.50",
          color: "gray.5",
          ":hover": {
            backgroundColor: "mint.40",
          },
          ":active": {
            backgroundColor: "mint.60",
            borderColor: "transparent",
          },
          ":focus-visible": {
            borderColor: "blue.20",
          },
          ":disabled": {
            ":hover": {
              backgroundColor: "mint.50",
            },
          },
        }
      : {
          backgroundColor: "mint.50",
          color: "gray.0",
          ":hover": {
            backgroundColor: "mint.40",
          },
          ":active": {
            backgroundColor: "mint.60",
            borderColor: "transparent",
          },
          ":focus-visible": {
            borderColor: "mint.70",
          },
          ":disabled": {
            ":hover": {
              backgroundColor: "mint.50",
            },
          },
        },
  danger: (mode: modes) =>
    mode === modes.dark
      ? {
          backgroundColor: "red.50",
          color: "gray.5",
          ":hover": {
            backgroundColor: "red.40",
          },
          ":active": {
            backgroundColor: "red.60",
            borderColor: "transparent",
          },
          ":focus-visible": {
            borderColor: "blue.20",
          },
          ":disabled": {
            ":hover": {
              backgroundColor: "red.50",
            },
          },
        }
      : {
          backgroundColor: "red.50",
          color: "gray.0",
          ":hover": {
            backgroundColor: "red.40",
          },
          ":active": {
            backgroundColor: "red.60",
            borderColor: "transparent",
          },
          ":focus-visible": {
            borderColor: "red.70",
          },
          ":disabled": {
            ":hover": {
              backgroundColor: "red.50",
            },
          },
        },
  hollow: (mode: modes) =>
    mode === modes.dark
      ? {
          backgroundColor: "transparent",
          color: "gray.5",
          ":hover": {
            backgroundColor: "gray.60",
          },
          ":active": {
            backgroundColor: "gray.100",
            borderColor: "transparent",
          },
          ":focus-visible": {
            borderColor: "blue.20",
            backgroundColor: "gray.70",
            ":active": {
              backgroundColor: "gray.100",
            },
          },
          ":disabled": {
            ":hover": {
              backgroundColor: "transparent",
            },
          },
        }
      : {
          backgroundColor: "transparent",
          color: "gray.80",
          ":hover": {
            backgroundColor: "gray.2",
          },
          ":active": {
            backgroundColor: "gray.20",
            borderColor: "transparent",
          },
          ":focus-visible": {
            borderColor: "blue.50",
            backgroundColor: "gray.5",
            ":active": {
              backgroundColor: "gray.20",
            },
          },
          ":disabled": {
            ":hover": {
              backgroundColor: "transparent",
            },
          },
        },
};

const baseStyles = themeHelper({
  fontWeight: "normal",
  fontFamily: "default",
  fontSize: 3,
  lineHeight: 2,
  borderRadius: 3,
  borderColor: "transparent",
  borderWidth: "0.125rem",
  borderStyle: "solid",
  outline: "none",
  textDecoration: "none",
  py: 3,
  px: 5,
  ":disabled": {
    opacity: 0.4,
  },
  cursor: "pointer",
});

const iconButtonBaseStyles = themeHelper({
  px: 2,
  py: 2,
  lineHeight: 1,
  display: "block",
  fontSize: "0rem",
});

const variantStyles = ({ variant = "primary", ...props }: ButtonProps) => {
  const mode = props.theme?.mode ?? modes.light;
  const variantStyleObject = variants[variant](mode);

  return themeHelper({ ...variantStyleObject })(props);
};

const Button = styled.button<ButtonProps>(
  baseStyles,
  variantStyles,
  sxPropHelper
);

export const IconButton = styled.button<ButtonProps>(
  baseStyles,
  iconButtonBaseStyles,
  variantStyles,
  sxPropHelper
);

export default Button;

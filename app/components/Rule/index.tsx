import styled from "@emotion/styled";
import { sxPropHelper, type StyleProps, themeHelper } from "../../utils/styled";
import { modes, type Theme } from "../../utils/theme";

export type RuleProps = StyleProps;

const Rule = styled.div<RuleProps>(
  themeHelper({
    minWidth: 0,
    height: "1px",
    width: "100%",
    backgroundColor: ({ mode }: Theme) =>
      mode === modes.dark ? "gray.40" : "gray.20",
  }),
  sxPropHelper
);

export default Rule;

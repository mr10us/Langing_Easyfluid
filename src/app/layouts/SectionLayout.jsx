import { forwardRef } from "react";

export const SectionLayout = forwardRef((props, ref) => {
  return <section {...props} ref={ref}>{props.children}</section>;
});

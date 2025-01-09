
import * as React from "react";
const SvgComponent = (props) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m7 14-3-3 8-8h6zm7 7-5-5 5-5h5l-5 5 5 5z" />
  </svg>
);
export { SvgComponent as IconBrandFlutter };

import * as React from "react";

function SvgTag(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="tag_svg__ionicon"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M160 368L32 256l128-112m192 224l128-112-128-112"
      />
    </svg>
  );
}

export default SvgTag;

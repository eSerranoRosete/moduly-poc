import React, { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;
export const Facebook = (props: Props) => {
  return (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.8472 24V11.9986H17.1602L17.5992 7.86284H13.8472L13.8529 5.79286C13.8529 4.71419 13.9554 4.13622 15.5046 4.13622H17.5757V0H14.2624C10.2824 0 8.88162 2.00628 8.88162 5.38022V7.86331H6.40081V11.9991H8.88162V24H13.8472Z"
        fill="white"
      />
    </svg>
  );
};

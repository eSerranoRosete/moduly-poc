import React, { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;
export const Linkedin = (props: Props) => {
  return (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_37424_33)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.78712 3.21609C5.78712 4.70015 4.67003 5.88764 2.87635 5.88764H2.84348C1.11647 5.88764 0 4.70015 0 3.21609C0 1.70064 1.15048 0.546387 2.91025 0.546387C4.67003 0.546387 5.75373 1.70064 5.78712 3.21609ZM5.44831 7.99726V23.4532H0.304185V7.99726H5.44831ZM23.9998 23.4532L24 14.5913C24 9.84385 21.4623 7.63433 18.0772 7.63433C15.346 7.63433 14.1232 9.1345 13.4404 10.1869V7.99768H8.2957C8.3635 9.44799 8.2957 23.4536 8.2957 23.4536H13.4404V14.8218C13.4404 14.3598 13.4738 13.899 13.6098 13.5683C13.9816 12.6455 14.8281 11.69 16.2493 11.69C18.1115 11.69 18.8559 13.1073 18.8559 15.1843V23.4532H23.9998Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_37424_33">
          <rect width="24" height="24" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

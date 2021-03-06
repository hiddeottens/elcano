import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const HeartOutline = ({
  title = 'HeartOutline',
  size = defaultIconProps.size,
  color = defaultIconProps.color,
}: SVGProps) => (
  <Icon title={title}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2.07C11.1586 0.800238 12.7819 0.0535358 14.5 0C17.5376 0 20 2.46243 20 5.5C20 9.09623 16.0022 13.0375 13.6046 15.4013C13.3887 15.6141 13.1858 15.8142 13 16L10.72 18.28C10.5795 18.4207 10.3888 18.4998 10.19 18.5H9.81C9.61116 18.4998 9.42052 18.4207 9.28 18.28L7 16C6.81416 15.8142 6.61127 15.6141 6.3954 15.4013C3.99775 13.0375 0 9.09623 0 5.5C0 2.46243 2.46243 0 5.5 0C7.2181 0.0535358 8.84137 0.800238 10 2.07ZM10 16.17L12.2 14C14.23 12 18 8.26 18 5.5C18 4.56652 17.6272 3.67171 16.9643 3.01446C16.3014 2.35721 15.4034 1.992 14.47 2C12.9153 2.14433 11.5119 2.99152 10.66 4.3C10.5646 4.42469 10.417 4.49846 10.26 4.5H9.81C9.57636 4.49937 9.35565 4.39269 9.21 4.21C8.3716 2.94974 7.00743 2.13712 5.5 2C3.567 2 2 3.567 2 5.5C2 8.26 5.77 12 7.8 14L10 16.17Z"
        fill={color}
      />
    </svg>
  </Icon>
);

export default HeartOutline;

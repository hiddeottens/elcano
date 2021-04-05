import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const Snowflake = ({
  title = 'Snowflake',
  size = defaultIconProps.size,
  color = defaultIconProps.color,
}: SVGProps) => (
  <Icon title={title}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 8.69V9.19C18 9.46614 17.7761 9.69 17.5 9.69H13.42L15.85 12.12C15.9467 12.2107 16.0015 12.3374 16.0015 12.47C16.0015 12.6026 15.9467 12.7293 15.85 12.82L15.5 13.18C15.3022 13.3718 14.9878 13.3718 14.79 13.18L11.3 9.69H9.69V11.18L13.18 14.67C13.3706 14.8644 13.3706 15.1756 13.18 15.37L12.82 15.73C12.6256 15.9206 12.3144 15.9206 12.12 15.73L9.69 13.3V17.53C9.69 17.6547 9.64048 17.7742 9.55234 17.8623C9.4642 17.9505 9.34465 18 9.22 18H8.65C8.39434 17.9946 8.18994 17.7857 8.19 17.53V13.53L5.88 15.83C5.78927 15.9267 5.66259 15.9815 5.53 15.9815C5.39741 15.9815 5.27073 15.9267 5.18 15.83L4.82 15.48C4.62822 15.2822 4.62822 14.9678 4.82 14.77L8.19 11.41V9.69H6.82L3.33 13.18C3.13558 13.3706 2.82442 13.3706 2.63 13.18L2.27 12.82C2.07943 12.6256 2.07943 12.3144 2.27 12.12L4.7 9.69H0.47C0.210426 9.69 0 9.47957 0 9.22V8.65C0.00544081 8.39434 0.214282 8.18994 0.47 8.19H4.47L2.15 5.88C2.05332 5.78927 1.99848 5.66259 1.99848 5.53C1.99848 5.39741 2.05332 5.27073 2.15 5.18L2.5 4.82C2.69781 4.62822 3.01219 4.62822 3.21 4.82L6.57 8.19H8.19V6.7L4.82 3.33C4.62943 3.13558 4.62943 2.82442 4.82 2.63L5.18 2.27C5.37442 2.07943 5.68558 2.07943 5.88 2.27L8.19 4.57V0.5C8.19 0.223858 8.41386 0 8.69 0H9.19C9.46614 0 9.69 0.223858 9.69 0.5V4.58L12.12 2.15C12.2107 2.05332 12.3374 1.99848 12.47 1.99848C12.6026 1.99848 12.7293 2.05332 12.82 2.15L13.18 2.5C13.3718 2.69781 13.3718 3.01219 13.18 3.21L9.69 6.7V8.19H11.3L14.67 4.82C14.8644 4.62943 15.1756 4.62943 15.37 4.82L15.73 5.18C15.9206 5.37442 15.9206 5.68558 15.73 5.88L13.43 8.19H17.5C17.6326 8.19 17.7598 8.24268 17.8536 8.33645C17.9473 8.43021 18 8.55739 18 8.69Z"
        fill={color}
      />
    </svg>
  </Icon>
);

export default Snowflake;
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const ChristmasTreeOutline = ({
  title = 'ChristmasTreeOutline',
  size = defaultIconProps.size,
  color = defaultIconProps.color,
}: SVGProps) => (
  <Icon title={title}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1874 10.0001L14.7145 14.3201C15.0342 14.8601 15.0342 15.1401 14.9443 15.3801L14.8044 15.6301C14.6678 15.8588 14.4214 15.9992 14.1552 16.0001H9.1608L9.48044 19.4601C9.49462 19.5984 9.44939 19.7363 9.35602 19.8393C9.26264 19.9424 9.12994 20.0008 8.99099 20.0001H6.99325C6.7343 19.9589 6.55372 19.7208 6.58371 19.4601L6.86339 16.0001H1.86903C1.60277 15.9992 1.3564 15.8588 1.21976 15.6301L1.07992 15.3801C0.940078 15.1601 0.940078 14.8601 1.34962 14.1601L3.78687 10.0001H3.16756C2.9013 9.99925 2.65493 9.85885 2.5183 9.63006L2.37846 9.38006C2.23861 9.16006 2.23861 8.86006 2.64815 8.16006L7.20301 0.370056C7.33667 0.138247 7.58494 -0.00323834 7.85228 5.63109e-05H8.13196C8.39574 0.000362877 8.63936 0.141365 8.77124 0.370056L13.416 8.32006C13.7356 8.86006 13.7356 9.14006 13.5958 9.38006L13.456 9.63006C13.3193 9.85885 13.0729 9.99925 12.8067 10.0001H12.1874ZM7.05318 8.38006L3.76689 14.0001H12.2174L8.93106 8.38006C8.88445 8.30342 8.88243 8.20765 8.92578 8.12911C8.96914 8.05057 9.0512 8.00132 9.14083 8.00006H10.9188L7.99212 3.00006L5.05543 8.00006H6.83343C6.92228 8.00366 7.0031 8.05253 7.04766 8.12957C7.09221 8.20662 7.09429 8.30112 7.05318 8.38006Z"
        fill={color}
      />
    </svg>
  </Icon>
);

export default ChristmasTreeOutline;
import type { SVGProps } from 'react';

export function SignTimesBold(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1.25em'
      height='1.25em'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2.5'
        d='M17 7L7 17M7 7l10 10'
      ></path>
    </svg>
  );
}

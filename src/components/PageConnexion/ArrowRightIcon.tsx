import { memo, SVGProps } from 'react';

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.31316 6.23645L10.1482 6.23646'
      stroke='white'
      strokeWidth={0.519706}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.51021 2.59851L10.1481 6.23645L6.51021 9.87439'
      stroke='white'
      strokeWidth={0.519706}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(ArrowRightIcon);
export { Memo as ArrowRightIcon };

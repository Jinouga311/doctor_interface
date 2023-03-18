import { memo, SVGProps } from 'react';

const AwardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.6304 20.7883C21.9882 20.7883 26.3316 16.4449 26.3316 11.0871C26.3316 5.72928 21.9882 1.38591 16.6304 1.38591C11.2726 1.38591 6.92925 5.72928 6.92925 11.0871C6.92925 16.4449 11.2726 20.7883 16.6304 20.7883Z'
      stroke='#252D3E'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11.3783 19.2497L9.70135 31.8751L16.6308 27.7174L23.5602 31.8751L21.8832 19.2358'
      stroke='#252D3E'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(AwardIcon);
export { Memo as AwardIcon };

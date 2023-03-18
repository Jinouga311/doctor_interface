import { memo, SVGProps } from 'react';

const CodesandboxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 44 41' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M38.5001 27.3331V13.6665C38.4995 13.0673 38.3297 12.4789 38.008 11.9601C37.6862 11.4414 37.2237 11.0106 36.6668 10.7111L23.8335 3.87773C23.2761 3.57785 22.6438 3.41998 22.0001 3.41998C21.3565 3.41998 20.7242 3.57785 20.1668 3.87773L7.33347 10.7111C6.77662 11.0106 6.3141 11.4414 5.99232 11.9601C5.67054 12.4789 5.5008 13.0673 5.50014 13.6665V27.3331C5.5008 27.9323 5.67054 28.5208 5.99232 29.0395C6.3141 29.5582 6.77662 29.989 7.33347 30.2886L20.1668 37.1219C20.7242 37.4218 21.3565 37.5796 22.0001 37.5796C22.6438 37.5796 23.2761 37.4218 23.8335 37.1219L36.6668 30.2886C37.2237 29.989 37.6862 29.5582 38.008 29.0395C38.3297 28.5208 38.4995 27.9323 38.5001 27.3331Z'
      stroke='#252D3E'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.7501 7.192L22.0001 11.6337L30.2501 7.192'
      stroke='#252D3E'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.7501 33.8079V24.9417L5.50014 20.5'
      stroke='#252D3E'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M38.5001 20.5L30.2501 24.9417V33.8079'
      stroke='#252D3E'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5.99428 11.8899L21.9993 20.517L38.0043 11.8899'
      stroke='#252D3E'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M22.0001 37.72V20.5' stroke='#252D3E' strokeWidth={1.03941} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(CodesandboxIcon);
export { Memo as CodesandboxIcon };

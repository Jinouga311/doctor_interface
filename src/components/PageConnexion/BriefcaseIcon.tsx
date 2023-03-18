import { memo, SVGProps } from 'react';

const BriefcaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 44 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M36.6664 11.375H7.33302C5.30798 11.375 3.66635 12.8301 3.66635 14.625V30.875C3.66635 32.67 5.30798 34.125 7.33302 34.125H36.6664C38.6914 34.125 40.333 32.67 40.333 30.875V14.625C40.333 12.8301 38.6914 11.375 36.6664 11.375Z'
      stroke='#252D3E'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M29.333 34.125V8.12499C29.333 7.26303 28.9467 6.43638 28.2591 5.82689C27.5714 5.2174 26.6388 4.87499 25.6664 4.87499H18.333C17.3606 4.87499 16.4279 5.2174 15.7403 5.82689C15.0527 6.43638 14.6664 7.26303 14.6664 8.12499V34.125'
      stroke='#252D3E'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(BriefcaseIcon);
export { Memo as BriefcaseIcon };

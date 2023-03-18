import { memo, SVGProps } from 'react';

const CodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22.1744 24.9459L30.4897 16.6306L22.1744 8.31527'
      stroke='#252D3E'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11.087 8.31527L2.7717 16.6306L11.087 24.9459'
      stroke='#252D3E'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(CodeIcon);
export { Memo as CodeIcon };

import { memo, SVGProps } from 'react';

const CodepenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.6304 2.7717L30.4892 11.7799V21.4811L16.6304 30.4893L2.7716 21.4811V11.7799L16.6304 2.7717Z'
      stroke='#252D3E'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.6306 30.4894V21.4811'
      stroke='#252D3E'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M30.4892 11.78L16.6304 21.4812L2.7716 11.78'
      stroke='#252D3E'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2.7716 21.4812L16.6304 11.78L30.4892 21.4812'
      stroke='#252D3E'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.6306 2.77173V11.78'
      stroke='#252D3E'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(CodepenIcon);
export { Memo as CodepenIcon };

import { memo, SVGProps } from 'react';

const GitBranchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.31522 4.15763V20.7882'
      stroke='white'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M24.9458 12.4729C27.242 12.4729 29.1035 10.6115 29.1035 8.31527C29.1035 6.01907 27.242 4.15763 24.9458 4.15763C22.6496 4.15763 20.7882 6.01907 20.7882 8.31527C20.7882 10.6115 22.6496 12.4729 24.9458 12.4729Z'
      stroke='white'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.31522 29.1035C10.6114 29.1035 12.4729 27.2421 12.4729 24.9459C12.4729 22.6496 10.6114 20.7882 8.31522 20.7882C6.01902 20.7882 4.15758 22.6496 4.15758 24.9459C4.15758 27.2421 6.01902 29.1035 8.31522 29.1035Z'
      stroke='white'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M24.9458 12.4729C24.9458 15.7809 23.6317 18.9535 21.2926 21.2926C18.9534 23.6317 15.7809 24.9459 12.4729 24.9459'
      stroke='white'
      strokeWidth={1.03941}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(GitBranchIcon);
export { Memo as GitBranchIcon };

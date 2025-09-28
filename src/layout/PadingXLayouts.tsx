import type { PropsWithChildren } from 'react'
export default function PadingXLayouts({ children }: PropsWithChildren<unknown>) {
  return (
  <div className='flex w-full px-8 md:px-20 lg:px-24 xl:px-38'>
    {children}
  </div>);
}
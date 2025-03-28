import type { PropsWithChildren } from 'react'
export default function PadingXLayouts({ children }: PropsWithChildren<unknown>) {
  return (
  <div className='flex px-40'>
    {children}
  </div>);
}
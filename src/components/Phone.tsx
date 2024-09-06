import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  dark?: boolean
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}>
      <img
        src={
        '/images/iphoneTemplate.png'
        }
        className='pointer-events-none z-50 select-none'
        alt='phone image'
      />

      <div className='absolute -z-10 inset-0'>
      <div className='absolute -z-10 inset-0'>
        <img
          className='object-cover min-w-80% min-h-80% scale-95.3'
          src={imgSrc}
          alt='overlaying phone image'
        />
        </div>
      </div>
    </div>
  )
}

export default Phone

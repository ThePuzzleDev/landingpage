import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import Image from 'next/image'

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
      <Image
        src='/images/iphoneTemplate.png'
        className='pointer-events-none z-50 select-none'
        alt='phone image'
        layout='fill' // Adjusts to cover the parent container
        objectFit='contain' // Adjusts the image to fit the container
      />

      <div className='absolute -z-10 inset-0'>
        <Image
          className='object-cover min-w-[80%] min-h-[80%] scale-[0.953]' // Fixed the syntax for Tailwind classes
          src={imgSrc}
          alt='overlaying phone image'
          layout='fill' // Adjusts to cover the parent container
          objectFit='contain' // Adjusts the image to fit the container
        />
      </div>
    </div>
  )
}

export default Phone

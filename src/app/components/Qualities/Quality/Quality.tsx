import Image from 'next/image'
import React from 'react'

type Props = {
    imgSource: any,
    header: string,
    content: string
}

export const Quality = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center font-poppins px-16 py-12 w-[378px] text-center bg-quality rounded-xl mx-auto'>
        <Image className='mb-5' src={props.imgSource} width={48} height={48} alt={`icon-${props.imgSource.toString()}`}/>
        <h3 className='mb-2.5 font-bold text-lg'>{props.header}</h3>
        <p className='text-sm'>{props.content}</p>
    </div>
  )
}
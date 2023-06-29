'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'
import imgSourceRemove from "@root/public/general/remove-circle.svg"
import imgSourceAdd from "@root/public/general/add-circle.svg"
import Image from 'next/image'

type Props = {
    question: string,
    answer: string,
    selectedFaqId: number,
    setSelectedFaqId: Dispatch<SetStateAction<number>>,
    Id: number
}

export const QuestionAndAnswer = (props: Props) => {
  const status = (props.Id == props.selectedFaqId)
  return (
    <div className={`cursor-pointer flex flex-col gap-5 px-8 py-6 border-t border-solid ${status ? 'text-faq-active bg-faq-active' : 'text-faq-passive'} transition duration-250 ease-out`}
         onClick={() => props.setSelectedFaqId(status ? 0 : props.Id) }>
        <div className='flex flex-row justify-between items-center gap-5'>
            <h3 className='font-poppins font-bold text-lg'>{props.question}</h3>
            <Image width={24} height={24} alt='add-remove' src={status ? imgSourceRemove : imgSourceAdd} />
        </div>
        <div className={`text-base ${status ? '' : 'hidden'}`}>
            {props.answer}
        </div>
    </div>
  )
}
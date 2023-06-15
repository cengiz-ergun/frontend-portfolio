import React from 'react'
import { Content } from './Content/Content'
import { Key } from 'swr'

type Props = {
    contents: object
}

export const Contents = (props: Props) => {
  const contents = props.contents
  const keys = Object.keys(props.contents)
  return (
    <div className='flex flex-col gap-4'>
        {
            keys.map((key) => (
                <Content key={key} stateKey={key} stateValue={contents[key as keyof typeof contents]} />
            ))
        }
    </div>
  )
}
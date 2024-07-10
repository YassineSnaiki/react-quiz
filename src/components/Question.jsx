import React from 'react'
import { useQuestion } from './QuestionsContext'

export default function Question() {
    const {questionNum,points}=useQuestion()
  return (
    <div className=' w-[470px]'>
        <div className='w-full rounded-full overflow-hidden bg-white'>
          <div className='bg-cyan-600 h-3' style={{
            width : `${100/15 * questionNum}%`
          }}></div>
        </div>
        <div className=' w-full flex justify-between'>
            <span>{questionNum}/15</span>
            <span>{points}/100</span>
            
        </div>
    </div>
  )
}

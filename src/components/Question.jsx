import {questions} from "../../data/questions.json"

console.log(questions);
import React, { useState } from 'react'
import { useQuestion } from './QuestionsContext'
import Button from "./Button";

export default function Question() {
    const [answered,setAnswered] = useState(false)
    const {questionNum,points,finished,dispatch}=useQuestion()
  return (
    <div className=' w-[470px]'>
        <div className='w-full rounded-full overflow-hidden bg-white'>
          <div className='bg-cyan-600 h-3' style={{
            width : `${100/15 *( questionNum>0?questionNum-1:0)}%`
          }}></div>
        </div>
        <div className=' w-full flex justify-between'>
            <span>{questionNum}/15</span>
            <span>{points}/280</span>
        </div>
        <div>
        <p className="text-center text-xl font-semibold mb-6">
           {questions[questionNum].question}
        </p>
        <ul className="flex flex-col space-y-3 ">
            {questions[questionNum].options.map((op,i)=>(
                <Button className="py-3 text-start" key={i}>{op}</Button>
            ))}
        </ul>
        <div className="flex justify-between mt-8">
            <Button  disabled className="px-8">
                00:00
            </Button>
            <Button className="px-8" onClick={()=>{
                if(questionNum < 14 )
                {dispatch({type:"next"});
                return }
                dispatch({type:"finished"});
             
            }}>
                {!finished? "Next" : "Finish"}
            </Button>
        </div>
        </div>
    </div>
  )
}

import {questions} from "../../data/questions.json"

console.log(questions);
import React, { useCallback, useEffect, useState } from 'react'
import { useQuestion } from './QuestionsContext'
import Button from "./Button";

export default function Question() {
    const {questionNum,points,finished,dispatch}=useQuestion()
    const [answered,setAnswered] = useState(false);
    const [time,setTime] = useState(5*60);
    const startTimer = useCallback(function() {
        const id = setInterval(function(){
            setTime(time=>{
                if(time === 1) {
                    clearInterval(id);
                    dispatch({type : 'finished'});
                    return 0
                }
                return time-1;
            });
        },1000);
        return id;
    },[])
    useEffect(()=>{
        const id = startTimer();
        return () => clearInterval(id);
    },[startTimer]);
  return (
    <div className=' w-[470px]'>
        <div className='w-full rounded-full overflow-hidden bg-white'>
          <div className='bg-cyan-600 h-3' style={{
            width : `${100/15 *questionNum}%`
          }}></div>
        </div>
        <div className=' w-full flex justify-between'>
            <span>{questionNum+1}/15</span>
            <span>{points}/280</span>
        </div>
        <div>
        <p className="text-center text-xl font-semibold mb-6">
           {questions[questionNum].question}
        </p>
        <ul className="flex flex-col space-y-3 ">
            {questions[questionNum].options.map((op,i)=>(
                <Button 
                disabled={answered}
                className={`py-3 text-start ${questions[questionNum].correctOption === i ? "disabled:bg-green-600" : "disabled:bg-red-600"}`} 
                key={op} 
                onClick={(e)=>{
                    e.currentTarget.classList.add('scale-105');
                    setAnswered(true);
                    dispatch({
                        type : "answer",
                        payload : i === questions[questionNum].correctOption ? questions[questionNum].points : 0 })
                }}
                >{op}</Button>
            ))}
        </ul>
        <div className="flex justify-between mt-8">
            <Button  disabled className="px-8">
                {`${String(Math.floor(time/60)).padStart(2,0)}:${String(time % 60).padStart(2,0)}`}
            </Button>
            {answered && 
            <Button className="px-8"  
            onClick={()=>{
                setAnswered(false);
                if(questionNum < 14 )
                {dispatch({type:"next"});
                return }
                dispatch({type:"finished"});
            }}>
                {questionNum < 14 ? "Next" : "Finish"}
            </Button>}
        </div>
        </div>
    </div>
  )
}

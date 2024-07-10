import Button from "./Button";
import { useQuestion } from "./QuestionsContext";


export default function Landing() {
    const {dispatch} = useQuestion();
    function handleStart() {
        dispatch({type : "start"})
    }
  return (
    <div className=" text-center mt-10">
    <h2 className=" text-4xl font-semibold">
       Welcome to the react Quiz!
    </h2>
      <p className=" text-xl mt-5">Questions To Test Your React Mastery</p>
      <Button className="mt-10" onClick={handleStart}>Start Now</Button>
    </div>
  )
}

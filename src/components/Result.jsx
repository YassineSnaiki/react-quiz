import { useQuestion } from "./QuestionsContext"


export default function Result() {
    const {points} = useQuestion();
  return (
    <div>
      <h2 className="text-2xl text-center px-6 py-3 bg-cyan-600 rounded-full mt-8">
      you scored {points} points out of 280 points
      </h2>
    </div>
  )
}

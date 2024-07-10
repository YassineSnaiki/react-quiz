
import Landing from "./components/Landing";
import Logo from "./components/Logo";
import Question from "./components/Question";
import { useQuestion } from "./components/QuestionsContext";


export default function App(){
    const {started,finished}=useQuestion();
    return <div className=" bg-gray-800 h-[100dvh] text-white">
    <Logo/>
    <main className="w-fit mx-auto">
    {!started&&!finished && <Landing />}
    {started && !finished && <Question/>}
    </main>
    </div>
}
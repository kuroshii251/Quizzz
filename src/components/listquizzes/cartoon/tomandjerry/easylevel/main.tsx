import { useState } from "react";
import quizData from "./dataQuiz.json"

export default function TomandjerryEasyLevel(){
    const [show] = useState(quizData);
    const [score, setScore] = useState(0);
    const [index, setIndex] = useState(0);
    const [finish,setFinish] = useState(false);
    const [select, setSelect] = useState(null);

    const nextQuestion = () => {
        if(select === show[index].answer){
            setScore((value) => value + 10);
        }
        
        if(index < show.length - 1){
        setIndex(index + 1);

        } else {
           setFinish(true);
        }
    }

    const handleReset = () => {
        setIndex(0);
        setScore(0);
        setFinish(true);
        setSelect(null);
        window.location.reload();
    }
   
    return (
        <>
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className=" p-5 rounded-xl h-100">
     {finish ? (
                <>
                 <div className="h-100 space-y-5">
            <h1 className="text-3xl text-center mx-auto ">Your Score</h1>
          <p className="text-5xl text-center">{score}</p>
        <button onClick={handleReset} className="cursor-pointer text-center mx-auto bg-blue-700 p-3 rounded-full text-white font-semibold w-50 mt-10">Reset</button>
      </div>
      </>
            ) : (
                <>
                <h1 className="text-4xl font-semibold">{show[index].question}</h1>
            
        {show[index].options.map((items) => (
            <>
            <div className="col w-100 p-2">
<p className="text-xl mt-3" key={items}>
                <input type="radio" name="answer" checked={select === items} onChange={() => setSelect(items)} />
                {items}
            </p>
 
            </div>
           </>
        ))}
        <div className="">
        <button onClick={nextQuestion} className="bg-blue-700 text-white font-semibold p-2 w-50 rounded-xl cursor-pointer">Next</button>

        </div>
                </>
 
            )}
            </div>
          
  
            </div>
     
        </>
    )
}
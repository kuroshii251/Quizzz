import { useState } from "react";
import quizData from "./dataQuiz.json"

export default function AtleticEasyLevel(){
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
            <div className=" p-5 rounded-xl ">
     {finish ? (
                <>
                 <div className="min-h-screen space-y-10">
            <h1 className="text-4xl text-center mx-auto font-bold ">Your Score</h1>
            {score > 80 ? (
                 <div className="flex flex-col justify-center border-5  border-green-800 text-green-800 w-80 h-80 mx-auto  rounded-full">
          <p className="text-6xl text-center font-bold ">{score}</p>
          
            </div>
            ): (
                 <div className="flex flex-col justify-center border-5  border-red-800 text-red-800 w-80 h-80 mx-auto  rounded-full">
          <p className="text-6xl text-center font-bold ">{score}</p>
          
            </div>
            )}
           
            <div className="flex gap-3">
        <button onClick={handleReset} className="cursor-pointer text-center mx-auto bg-blue-700 p-3 rounded-md text-white font-semibold w-50 mt-10">Repeat</button>
        <a href="/quizzes/sports/athletic/"  className="cursor-pointer text-center mx-auto border-3 border-black p-3 text-black rounded-md font-semibold w-50 mt-10">Back</a>
            </div>

            
      </div>
      </>
            ) : (
                <>
                <div className="w-100">
                    <a href="/quizzes/sports/athletic/" className="mb-5 flex items-center gap-2">
<i className="fa-solid fa-arrow-left text-sm"></i>
                         <h1 className="font-semibold">Back</h1>

                    </a>

                <h1 className="font-semibold text-2xl">Question {show[index].id} from {show.length}</h1>
                <h1 className="text-lg mt-3 mb-5">{show[index].question}</h1>
                
        {show[index].options.map((items) => (
            <>
            <div className=" space-y-5">
 <div className="p-3 space-x-5">

                <input type="radio" name="answer" checked={select === items} onChange={() => setSelect(items)} className="accent-black checked:bg-black border-3  focus:border border-black" required/>
                {items}
                <p className="text-xl mt-3 px-5" key={items}></p>
 
            </div>
            </div>
        
            
           </>
        ))}
        <button onClick={nextQuestion} className="bg-blue-700 text-white font-semibold p-2 w-20 rounded-md cursor-pointer">Next</button>
        </div>
                </>
 
            )}
            </div>
          
  
            </div>
     
        </>
    )
}
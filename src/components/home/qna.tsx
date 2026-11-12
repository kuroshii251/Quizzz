import { useState } from "react";

export default function Qna(){
    const [showFaq, setShowFaq] = useState(null);
    const handleAccordions = (id: number) => {
        setShowFaq(showFaq == id ? null : id);
    }

    const dataQnA = [
         {
            "id": 0,
            "question": "What is Quizz?",
            "answer": "Quiz is an online quiz platform where you can tes your knowledge through various categories and difficulty levels."
},
        {
            "id": 1,
            "question": "Should I create an account?",
            "answer": "No, you don't need an account to play the quizzes"
},
{
            "id": 2,
            "question": "How do I start the quiz?",
            "answer": "It's easy to start, go to quiz and select category you want, and then select difficulty of quizzes."
},
        {
            "id": 3,
            "question":"Are the quiz is free to play?",
            "answer": "Sure, All quizzes are free to access and play"
}, 
    ]
    return (
        <>
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="font-bold text-5xl scroll-effectss  ">FAQ</h1>
            <p className="text-center text-xl mt-2 font-semibold scroll-effectss text-gray-600 ">Frequently Ask And Question</p>
            <div className="mt-10 scroll-effectss ">
                {dataQnA.map((items) => (
 <div className="p-5 w-150" key={items.id}>
        <div className="flex items-center justify-between">
            <h1 className="font-semibold text-xl">{items.question}</h1>
<button type="button" onClick={() => handleAccordions(items.id)} className="cursor-pointer">
            {showFaq === items.id ? (
<i className="fa-solid fa-minus"></i>            ) : (
<i className="fa-solid fa-plus"></i>
            )}
        </button>
        </div>
    
        <div className="flex justify-start ml-0 mt-5 border-t-black">
            <p className="text-md">{showFaq === items.id && <p> {items.answer}</p>
            }
    </p>
            </div>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}


export default function Spongebobsquarepants(){
    return (
        <>
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-3xl text-center font-bold">Select The Level</h1>
            <div className="grid grid-cols-2 gap-5 place-items-center">
                <div className="items-center flex flex-col scale-100 shadow shadow-black p-5 rounded-xl  ">
                    <h1 className="text-center font-bold text-xl">Level Easy</h1>
                    <a href="/quizzes/sports/athletic/1" className="text-white text-center bg-blue-700 p-3 px-6 py-3 rounded-xl w-auto mx-auto">Start</a>

                </div>
                 <div className="shadow shadow-black p-5 rounded-xl  ">
                    <h1 className="text-center font-bold text-xl">Level Medium</h1>
                    <a href="/quizzes/sports/athletic/2" className="text-white bg-blue-700 p-3 rounded-xl w-50 mx-auto">Start</a>
                </div>
            </div>

        </div>        
        </>
    )
}
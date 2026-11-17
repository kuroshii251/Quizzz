

export default function Football(){
    return (
        <>
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-5xl text-center font-bold">Difficulty</h1>
            <p className="text-center text-xl font-semibold">Select Difficulty</p>
            <div className="grid grid-cols-3 place-items-center justify-center items-center h-80">
               <a href="/quizzes/sports/football/1" className="border-1 object-cover h-50 scale-80  p-8 shadow shadow-black w-100 scroll-effectss  rounded-xl">
               <div className="flex justify-center items-center h-30">
               <h1 className="text-center font-bold text-4xl">Easy</h1>

               </div>

              </a>
               <a href="/quizzes/sports/football/2" className="border-1 object-cover scale-80 h-50  p-10 shadow shadow-black w-100 scroll-effectss  rounded-xl">
               <div className="flex justify-center items-center h-30">
               <h1 className="text-center font-bold text-4xl">Medium</h1>
               </div>
               
              </a>

               <a href="/quizzes/sports/football/3" className="border-1 object-cover h-50 scale-80  p-10 shadow shadow-black w-100 scroll-effectss  rounded-xl">
               <div className="flex justify-center items-center h-30">
               <h1 className="text-center font-bold text-4xl">Hard</h1>
               </div>
               
              </a>
            </div>

        </div>        
        </>
    )
}
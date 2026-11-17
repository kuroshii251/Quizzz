

export default function Gumball(){
    return (
        <>
        <div className="flex flex-col justify-center items-center min-h-screen mb-10">
            <h1 className="text-5xl text-center font-bold">Difficulty</h1>
            <p className="text-center text-xl font-semibold">Select Difficulty</p>
            <div className="grid lg:grid-cols-2 lg:gap-5 gap-0 place-items-center justify-center lg:space-y-0 space-y-5 items-center h-80">
               <a href="/quizzes/cartoon/gumball/1" className="border-1 object-cover h-50  p-10 shadow shadow-black w-100 scroll-effectss  rounded-xl">
               <div className="flex justify-center items-center h-30">
               <h1 className="text-center font-bold text-4xl">Easy</h1>

               </div>

              </a>
               <a href="/quizzes/cartoon/gumball/2" className="border-1 object-cover h-50  p-10 shadow shadow-black w-100 scroll-effectss  rounded-xl">
               <div className="flex justify-center items-center h-30">
               <h1 className="text-center font-bold text-4xl">Medium</h1>
               </div>
               
              </a>
            </div>

        </div>        
        </>
    )
}
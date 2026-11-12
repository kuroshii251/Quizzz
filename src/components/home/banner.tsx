export default function Banner(){
    return (
        <>
        <div className="w-full bg-slate-200 p-4 min-h-100 flex flex-cols items-center justify-center ">
            <div className=" items-center justify-center space-y-5">
            <h1 className="text-center font-bold text-4xl scroll-effectss ">Ready To Grow your knowledge?</h1>
            <p className="text-gray-700 text-center max-w-180 mt-5 text-lg mx-auto poppins-medium scroll-effectss ">Expand your knowledge, so that it may prove useful to you in the future</p>
            <div className="flex flex-cols items-center justify-center ">
            <a href="/quizzes" className="bg-blue-600 text-white font-semibold w-50 text-center p-4 rounded-full">Get Started</a>
            </div>
            </div>


        </div>
        
        </>
    )
}
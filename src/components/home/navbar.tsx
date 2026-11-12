
export default function Navbar(){
    return (
        <>
            <nav className="grid grid-cols-3 justify-center items-center p-5">
                <div className="flex justify-start items-start">
                    <h1 className="font-bold text-3xl">Quizz</h1>
                </div>
                <div className="flex justify-center items-center gap-5">
                        <a href="/" className="font-semibold text-grat-900 hover:">Home</a>
                        <a href="quizzes" className="font-semibold text-gray-900 hover:">Quiz</a>
                     <a href="" className="font-semibold text-gray-900 hover:">History</a>
                <a href="/blog" className="font-semibold text-gray-900 hover:">Blog</a>


                </div>
                <div className="flex items-end justify-end">
                    <a href="/contact" className="bg-blue-600 rounded-full p-3 font-semibold text-lg text-white w-30 text-center">Contact</a>
                </div>
            
        </nav>
        </>
    )
}
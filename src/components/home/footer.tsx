export default function Footer(){
    return (
        <>
        <div className="p-5 bg-black">
            <div className="grid grid-cols-3 p-5">
                <div className="">
                    <h1 className="text-white text-4xl font-bold  mb-3">Quizz</h1>
                    <p className="text-white text-md font-semibold ">Quiz is an online quiz platform where you can tes your knowledge through various categories and difficulty levels</p>
                </div>
                <div className="flex flex-col mx-auto space-y-5 justify-center">
                    <h1 className="font-semibold text-white">Menu</h1>
                    <a href="/" className="text-white hover:text-gray-500 font-semibold">Home</a>
                    <a href="/quiz" className="text-white hover:text-gray-500 font-semibold">Quiz</a>
                    <a href="/quiz" className="text-white hover:text-gray-500 font-semibold">History</a>
                    <a href="/quiz" className="text-white hover:text-gray-500 font-semibold">Blog</a>


                    <a href="/contact" className="text-white hover:text-gray-500 font-semibold">Contact</a>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-white font-semibold mb-3">Category</h1>
                    <div className="flex flex-col space-y-3  ">
                    <a href="/quiz/sports" className="text-white hover:text-gray-500">Sports</a>
                    <a href="/quiz/sciences" className="text-white hover:text-gray-500">Sciences</a>
                    <a href="/quiz/cartoon" className="text-white hover:text-gray-500">Cartoon</a>
                    <a href="/quiz/history" className="text-white hover:text-gray-500">History</a>
                    <a href="/quiz/games" className="text-white hover:text-gray-500">Games</a>
                    <a href="/quiz/animal" className="text-white hover:text-gray-500">Animal</a>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className="text-white font-semibold px-5">Copyright 2026 by Kuro</h1>
            </div>
        </div>
        </>
    )
}
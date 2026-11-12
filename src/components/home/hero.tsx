export default function Hero(){
    return (
        <>
        <div className="p-5 min-h-screen">
            <div className="flex flex-col space-y-5 items-center justify-center h-screen">
                <h1 className="text-center font-bold w-200 text-6xl poppins-bold block">Enchance Your Knowledge by Taking Quizzes</h1>
                <p  className="max-w-150 text-center poppins-medium text-gray-600">Take on exciting quizzes, answer related questions, and see how smart your knowledge</p>
                <div className="flex flex-cols gap-5">
                    <a href="#about" className="bg-blue-600 text-center mx-auto p-5 w-50 text-md poppins-semibold  text-white rounded-full text-center">Get Started</a>
                </div>
            </div>
        </div>
        </>
    )
}
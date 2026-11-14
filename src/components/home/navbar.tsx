
import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar(){
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            <nav className="grid grid-cols-3 justify-center items-center p-5">
                <div className="flex justify-start items-start">
                    <img src={logo} className="w-20" alt="" />
                </div>
                <div className="flex justify-center items-center gap-5">
                        <a href="/" className="font-semibold text-grat-900 hover:">Home</a>
                        <div className="flex">
                         <a href="quizzes"  className="font-semibold text-gray-900 hover:">Quiz</a>
                            <button onClick={() => setDropdown(!dropdown)} >
<i className="fa-solid fa-caret-down"></i>
                            </button>
                        </div>
                <a href="/blog" className="font-semibold text-gray-900 hover:">Blog</a>
                </div>
                <div className="flex items-end justify-end">
                    <a href="/contact" className="bg-blue-600 rounded-full p-3 font-semibold text-lg text-white w-30 text-center">Contact</a>
                </div>
                <div className={`bg-slate-100 p-3 translate-x-140 w-50 space-y-3 ${dropdown ? "block" : "hidden"}`}>
                    <div className="">
                    <a href="/quizzes/sports" className="font-semibold">Sports</a>

                    </div>
                    <div className="">
                    <a href="/quizzes/sciences" className="font-semibold">Sciences</a>

                    </div>
                    <div className="">
                    <a href="/quizzes/cartoon" className="font-semibold">Cartoon</a>

                    </div>

                    <div className="">
                    <a href="/quizzes/history" className="font-semibold">History</a>

                    </div>

                    <div className="">
                    <a href="/quizzes/games" className="font-semibold ">Games</a>

                    </div>

                    <div className="">
                         <a href="/quizzes/animal" className="font-semibold">Animal</a>
                    </div>

                </div>
        </nav>
        </>
    )
}
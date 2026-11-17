
import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar(){
    const [dropdown, setDropdown] = useState(false);
    const [hamburgerr, setHamburgerr] = useState(false);
    return (
        <>
            <nav className="grid grid-cols-2 justify-center items-center p-5">
                <div className="flex justify-start items-start">
                    <img src={logo} className="w-20" alt="" />
                </div>  
                <div className="lg:hidden block flex justify-end px-5">
                    <button onClick={() => setHamburgerr(!hamburgerr)} className="cursor-pointer">
                        {hamburgerr ? (
<i className="fa-solid fa-x"></i>

                        ): (                 
                           <i className="fa-solid fa-bars"></i>

                        )}
                    </button>
                </div>
            <div className={`${hamburgerr ? "block" : "hidden"}  lg:flex w-full lg:w-auto  items-end justify-end gap-5 lg:space-y-0 space-y-5 lg:mt-0 mt-5`}>
                <div className="">
                        <a href="/" className="font-semibold text-lg text-gray-900">Home</a>

                </div>
    
                        <div className="flex">
                         <a href="/quizzes"  className="font-semibold text-lg text-gray-900 ">Quiz</a>
                            <button onClick={() => setDropdown(!dropdown)} >
<i className="fa-solid fa-caret-down"></i>
                            </button>
                            
                        </div>
                                        <div className="">
                      <a href="/blog" className="font-semibold text-lg text-gray-900 hover:">Blog</a>
                      </div>
                    <div className="">

                     <a href="/contact" className=" rounded-full text-lg font-semibold text-center">Contact</a>
                     </div>

                       
                </div>
             
                
                  
            
                <div className={`bg-slate-100 p-3 absolute z-1000 translate-y-35 rounded-md lg:translate-x-260 w-50 space-y-3 ${dropdown ? "block" : "hidden"}`}>
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
                         <a href="/quizzes/animals" className="font-semibold">Animal</a>
                    </div>

                </div>
        </nav>
        </>
    )
}
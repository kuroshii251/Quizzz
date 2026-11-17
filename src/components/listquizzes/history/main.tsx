import ancienthhistoryy from "../../../assets/ancienthistorybackground.jpg";
import worldhistory from "../../../assets/historybackground.png";





export default function Historyy(){
    return (
        <>
        <div className="flex flex-col justify-center items-center min-h-screen mb-10">
            <h1 className="text-center text-5xl font-bold">History</h1>
        <h1 className="text-center text-xl font-semibold mt-3 pb-10">Select The History</h1>
            <div className="grid lg:grid-cols-2 lg:gap-5 gap-0 place-items-center justify-center lg:space-y-0 space-y-5 items-center h-80">
             <a href="/quizzes/history/ancienthistory" className="border-1 object-cover h-auto border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={ancienthhistoryy} alt="" />
                <div className="mt-2 p-5">
                <h1 className="text-center font-semibold text-xl">Ancient History</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium"></p>
              </div>
              </a>

                 <a href="/quizzes/history/ancienthistory" className="border-1 object-cover h-auto border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={worldhistory} alt="" />
                <div className="mt-2 p-5">
                <h1 className="text-center font-semibold text-xl">World History</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium"></p>
              </div>
              </a>
            </div>

        </div>
        </>
    )
}
import gumball from "../../../assets/gumball.png";
import spongebob from "../../../assets/spongebob.png";
import tomandjerry from "../../../assets/tomandjerry.png";

export default function Cartoons(){
    return (
        <>
        <div className="flex flex-col justify-center items-center h-200">
            <h1 className="text-center text-5xl font-bold">Cartoon</h1>
        <h1 className="text-center text-xl font-semibold mt-3 pb-10">Select The Cartoon</h1>
            <div className="grid grid-cols-3 gap-5 space-y-3">
             <a href="/quizzes/cartoon/tomandjerry" className="border-1 object-cover h-auto border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={tomandjerry} alt="" />
                <div className="mt-2 p-5">
                <h1 className="text-center font-semibold text-xl">Tom and Jerry</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium"></p>
              </div>
              </a>
             <a href="/quizzes/cartoon/spongebob" className="border-1 object-cover h-auto border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={spongebob} alt="" />
                <div className="mt-2 p-5">
                <h1 className="text-center font-semibold text-xl">Spongebob SquarePants</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium"></p>
              </div>
              </a>
              <a href="/quizzes/cartoon/gumball" className="border-1 object-cover h-auto border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={gumball} alt="" />
                <div className="mt-2 p-5">
                <h1 className="text-center font-semibold text-xl">Gumball</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium"></p>
              </div>
              </a>
            </div>
        </div>
        </>
    )
}
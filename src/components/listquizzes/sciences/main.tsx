import mathbackground from "../../../assets/mathbackground.jpg"
import physicsbackground from "../../../assets/physicsbackground.jpg"
import chemistrybackground from "../../../assets/chemistrybackground.jpg"



export default function Sciencess(){
    return (
        <>
        <div className="flex flex-col justify-center items-center h-200">
            <h1 className="text-center text-5xl font-bold">Sciences</h1>
        <h1 className="text-center text-xl font-semibold mt-3 pb-10">Select The Sciences</h1>

            <div className="grid grid-cols-3 gap-5 space-y-3">

             <a href="/quizzes/sciences/math" className="border-1 object-cover h-auto border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={mathbackground} alt="" />
                <div className="mt-2 p-5">
                <h1 className="text-center font-semibold text-xl">Math</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium"></p>
              </div>
              </a>

                 <a href="/quizzes/sciences/chemistry" className="border-1 object-cover h-auto border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={chemistrybackground} alt="" />
                <div className="mt-2 p-5">
                <h1 className="text-center font-semibold text-xl">Chemistry</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium"></p>
              </div>
              </a>
                    <a href="/quizzes/sciences/physics" className="border-1 object-cover h-auto border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={physicsbackground} alt="" />
                <div className="mt-2 p-5">
                <h1 className="text-center font-semibold text-xl">Physics</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium"></p>
              </div>
              </a>
            </div>

        </div>
        </>
    )
}
import mammal from "../../../assets/mammalbackground.jpg";
import reptile from "../../../assets/reptilebackground.jpg";



export default function Animalss(){
    return (
        <>
        <div className="flex flex-col justify-center items-center h-200">
            <h1 className="text-center text-5xl font-bold">Animals</h1>
        <h1 className="text-center text-xl font-semibold mt-3 pb-10">Select The Type Of Animals</h1>

            <div className="grid grid-cols-2 gap-5 space-y-3">

             <a href="/quizzes/animals/mammals" className="border-1 object-cover h-auto border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={mammal} alt="" />
                <div className="mt-2 p-5">
                <h1 className="text-center font-semibold text-xl">Mammal</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium"></p>
              </div>
              </a>

             <a href="/quizzes/animals/reptiles" className="border-1 object-cover h-auto border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={reptile} alt="" />
                <div className="mt-2 p-5">
                <h1 className="text-center font-semibold text-xl">Reptile</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium"></p>
              </div>
              </a>
            </div>
        </div>
        </>
    )
}
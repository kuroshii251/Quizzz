import footballbackground from "../../../assets/footballbackground.jpg"
import athleticbackground from "../../../assets/athleticbackground.jpg"
import badmintonbackground from "../../../assets/badmintonbackground.jpg"
import basketballbackground from "../../../assets/basketbackground.jpg"
import volleyballbackground from "../../../assets/volleyballbackground.jpg"


export default function Sportss(){
    return (
        <>
        <div className="flex flex-col justify-center items-center lg:h-200 min-h-screen">
            <h1 className="text-center text-5xl font-bold">Sports</h1>
        <h1 className="text-center text-xl font-semibold mt-3 pb-10">Select The Sports</h1>

            <div className="grid lg:grid-cols-3 gap-5 space-y-3">

             <a href="/quizzes/sports/football" className="border-1 object-cover h-auto border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={footballbackground} alt="" />
                <div className="mt-2 p-5">
                <h1 className="text-center font-semibold text-xl">Football</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium"></p>
              </div>
              </a>

                 <a href="/quizzes/sports/athletic" className="border-1 object-cover h-auto border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={athleticbackground} alt="" />
                <div className="mt-2 p-5">
                <h1 className="text-center font-semibold text-xl">Athletic</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium"></p>
              </div>
              </a>
                    <a href="/quizzes/sports/badminton" className="border-1 object-cover h-auto border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={badmintonbackground} alt="" />
                <div className="mt-2 p-5">
                <h1 className="text-center font-semibold text-xl">Badminton</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium"></p>
              </div>
              </a>
              

                 <a href="/quizzes/sports/basketball" className="border-1 object-cover h-auto border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={basketballbackground} alt="" />
                <div className="mt-2 p-5">
                <h1 className="text-center font-semibold text-xl">BasketBall</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium"></p>
              </div>
              </a>
              
                 <a href="/quizzes/sports/volleyball" className="border-1 object-cover h-auto border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={volleyballbackground} alt="" />
                <div className="mt-2 p-5">
                <h1 className="text-center font-semibold text-xl">VolleyBall</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium"></p>
              </div>
              </a>

            </div>

        </div>
        </>
    )
}
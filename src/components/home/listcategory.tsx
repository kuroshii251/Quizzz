import backgroundgame from "../../assets/gamebackground.png";
import backgroundscience from "../../assets/science.png";
import historybackground from "../../assets/historybackground.png";
import animalbackground from "../../assets/animalbackground.png";
import backgroundcartoon from "../../assets/cartoonbackground.png";
import sportbackground from "../../assets/sport.png";

export default function ListCategory (){
    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* <h1 className="font-bold text-5xl scroll-effectss "></h1> */}
            <div className="grid grid-cols-3 space-x-5 space-y-5 place-items-center py-10 ">
              <a href="/quiz/sports" className="border-1 object-cover h-100 border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={sportbackground} alt="" />
                <div className="mt-2 p-5">
                <h1 className="text-center font-semibold text-xl">Sports</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium">In this quiz, there is a various quizes, like football quiz, volleyball, basket, etc</p>
              </div>
              </a>
               <a href="/quiz/sciences" className="border-1 object-cover h-100 border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={backgroundscience} alt="" />
                <div className="mt-2 p-5">
  <h1 className="text-center font-semibold text-xl">Sciences</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium">There is a quizzes like Math, Physics, Biology, Computer, Chemistry, etc</p>
              </div>
              </a>
               <a href="/quiz/cartoon" className="border-1 object-cover h-100 border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={backgroundcartoon} alt="" />
                <div className="mt-2 p-5">
  <h1 className="text-center font-semibold text-xl">Cartoon </h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium">There is a quizzes like your knowledge about what cartoon are you watching on TV</p>
              </div>
              </a>
               <a href="/quiz/history" className="border-1 object-cover h-100 border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={historybackground} />
                <div className="mt-2 p-5">
  <h1 className="text-center font-semibold text-xl">History</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium">There is a quizzes such as your knowledge about the world of history</p>
              </div>
              </a>
               <a href="/quiz/games" className="border-1 object-cover h-100 border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={backgroundgame} alt="" />
                <div className="mt-2 p-5">
  <h1 className="text-center font-semibold text-xl">Games</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium">There is a quizzes like the popular game, such as Fortnite, Roblox, Valorant, etc</p>
              </div>
              </a>
               <a href="/quiz/animal" className="border-1 object-cover h-100 border-gray-400 w-80 scroll-effectss  rounded-xl">
                <img className="object-cover rounded-t-xl overflow-hidden w-full h-50" src={animalbackground} alt="" />
                <div className="mt-2 p-5">
  <h1 className="text-center font-semibold text-xl">Animal</h1>
                <p className="text-center mx-auto text-gray-800 poppins-medium">There is a quizzes such as your knowledge about the various of animal</p>
              </div>
              </a>
            </div>
        </div>
        </>
    )
}
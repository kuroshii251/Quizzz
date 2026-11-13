import Footer from "../../../components/home/footer";
import Navbar from "../../../components/home/navbar";
import picture2 from "../../../assets/background2.png";

export default function Blog4(){
    return (
        <>
        <Navbar/>

        <div className="flex flex-col justify-center items-center h-350">
                        <div className="col space-y-5">

            <h1 className="text-3xl font-bold max-w-180 mx-auto text-center">Knowing about pomodoro time, the method for increase the focuss</h1>
            <img src={picture2} className="mx-auto rounded-xl object-cover w-200 h-100 " alt="" />
            <div className="w-250 mt-5 space-y-2">
                <p className="text-lg font-semibold">Pomodoro technique is a simply method that popular for increase focuss and learn productivity or work. By divide the times into short session accompanied by a brief rest. This technique help to taking care your mind still fresh and the motivation still high</p>
                <br />
                <p className="text-lg font-semibold">Pomodoro technique first developed by Fransisco Cirillo in 1980s. This technique into the solution for them that feel hard to concentrate or delaying time. The "Pomodoro" from italian language that means "tomato", inspired from kitchen time that used by Cirillo.</p>
                <br />
                <h1 className="text-lg font-bold ">Benefit from pomodoro technique</h1>
                <h1 className="text-lg font-bold">1. Increase the concentrate and working efficiency</h1>
                <p className="font-semibold text-lg">Working by short interval time makes the brain is more easy for focus at 1 assigment. It is helped to fix the bothering during working process </p>
                <br />
                <h1 className="text-lg font-bold">2. Fix the mentalities tired</h1>
                <p className="font-semibold text-lg">The Pomodoro technique incorporates regular breaks into one's activities. This habit can help maintain energy levels and mental acuity throughout the day.</p>
                <br />
                <h1 className="text-lg font-bold">3. Helps managing stress</h1>
                <p className=" text-lg font-semibold">The rest time between working session gives room for relaxation and calming the mind. Stress that emerges cause pilling up of work making it easy to handle.</p>
            </div>
                     <p className="text-md">Source: https://www.alodokter.com/teknik-pomodoro-cara-efektif-tingkatkan-fokus-dan-produktivitas</p>  

        </div>
        </div>
        
        <Footer/>
        
        </>
    )
}
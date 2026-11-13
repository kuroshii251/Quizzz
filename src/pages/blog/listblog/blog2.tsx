import Footer from "../../../components/home/footer";
import Navbar from "../../../components/home/navbar";
import picture from "../../../assets/iqbackground.jpg";

export default function Blog2(){
    return (
        <>
        <Navbar/>
       <div className="flex flex-col justify-center items-center h-300">
        <div className="col space-y-5">
            <h1 className="text-3xl font-bold text-center">3 Ways To Increase the IQ </h1>
            <img src={picture} className="mx-auto rounded-xl object-cover w-200 h-100 " alt="" />
            <div className="w-250 mt-5 space-y-2">
                <p className="text-lg font-semibold">Having a low IQ is not the end of the world, cause IQ is not the only factor that determine the person's success. But, if you wish have a high IQ, there's a several ways to increase your IQ which you can try</p>
                <br />
                <h1 className="font-bold text-lg">1. Trained the brain by games</h1>
                <p className="text-lg font-semibold">One way to increase IQ is by engaging in brain-sharpening games, such as crosswords, puzzles, or sudoku. These activities are believed to boost intelligence by exercising memory, as well as reasoning and language skills. </p>
                <br />
                <h1 className="text-lg font-bold">2. Playing the musical instrument</h1>
                <p className="text-lg font-semibold">You can also boost your IQ by learning to play a musical instrument. According to research, playing an instrument can exercise your sensory and cognitive abilities, auditory perception, physical coordination, and memory.</p>
                <br />
                <h1 className="font-bold text-lg">3. Learning a foreign language</h1>
                <p className="font-semibold text-lg">Learning a foreign language does more than just make things easier when you travel abroad, interact with people from other countries, or enjoy foreign songs and films. In fact, introducing children to a foreign language at an early age can support their brain development and boost their intelligence.</p>
                <br />
                <p className="text-lg font-semibold">In addition to the various methods mentioned above, you can also regularly perform brain exercises to sharpen your intelligence and train your concentration and memory.</p>
                <br />
            </div>
                     <p className="text-md">Source: https://www.alodokter.com/9-cara-meningkatkan-iq-yang-bisa-anda-coba</p>  

            </div>
        </div>
        <Footer/>
        
        </>
    )
}
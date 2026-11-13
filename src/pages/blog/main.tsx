import Footer from "../../components/home/footer";
import picture1 from "../../assets/learning.jpg";
import picture2 from "../../assets/iqbackground.jpg";
import picture3 from "../../assets/workingbackground.png";
import picture4 from "../../assets/background2.png"
import Navbar from "../../components/home/navbar";

export default function BlogPage(){
    return (
        <>
        <Navbar/>
        <div className="flex flex-col items-center justify-flex h-300">
            <h1 className="text-5xl mt-10 mb-5 font-bold text-center">Blog</h1>
            <p className="text-center w-150 mb-10">Article about the knowledge</p>
            <div className="grid grid-cols-3 space-y-10 gap-5 justify-center place-items-center mx-auto items-center">
                <a href="/blog/1" className="w-100 space-y-5 object-fit h-100">
                    <img src={picture1} className="object-cover w-100 rounded-xl h-50 overflow-hidden" alt="" />
                    <h1 className="text-xl font-bold">5 Tips to increase your focus</h1>
                    <p className="text-gray-700 text-sm poppins-medium word-break">  Have you feel already learning for a long time, but, the results not maximal? Even though all the materi have readed, but still hard to focus and buzy fast? Not because you're lazy, it can be cause...</p>
                  <div className="object-fit mt-12">
                    <a href="/blog/1" className="font-semibold mb-3">Read More</a>
                  </div>
                </a>
                  <a href="/blog/2" className="w-100 space-y-5 object-fit h-100">
                    <img src={picture2} className="object-cover w-100 rounded-xl h-50 overflow-hidden" alt="" />
                    <h1 className="text-xl font-bold">3 Ways to increase your IQ</h1>
                    <p className="text-gray-700 text-sm poppins-medium">Having a low IQ is not the end of the world, cause IQ is not the only factor that determine the person's success. But, if you wish have a high IQ, there's a several ways to...</p>
                    <div className="object-fit mt-12">
                    <a href="/blog/2" className="font-semibold mb-3">Read More</a>
                    </div>
                </a>
                     <a href="/blog/3" className="w-100 space-y-5 object-fit mt-10 h-100">
                    <img src={picture3} className="object-cover w-100 rounded-xl h-50 overflow-hidden" alt="" />
                    <h1 className="text-xl font-bold">5 Ways To Quickly Understand Lessons</h1>
                    <p className="text-gray-700 text-sm poppins-medium">As the exam approached,  your learning frecuency's certain further increased than usual. In this phase, it's very vulnerable makes buzy during...</p>
                   <div className="object-fit mt-10">
                    <a href="/blog/3" className="font-semibold mb-3 ">Read More</a>
                   </div>
                </a>
                
                     <a href="/blog/4" className="w-100 space-y-5 object-fit mt-5 h-100">
                    <img src={picture4} className="object-cover w-100 rounded-xl h-50 overflow-hidden" alt="" />
                    <h1 className="text-xl font-bold">Knowing about pomodoro time, the method for increase the focuss</h1>
                    <p className="text-gray-700 text-sm poppins-medium">Pomodoro technique is a simply method that popular for increase focuss and learn productivity or work. By divide the times into short sessionaccompanied by a brief rest. This technique help to...</p>
                   <div className="object-fit mt-10">
                    <a href="/blog/4" className="font-semibold mb-3">Read More</a>
                   </div>
                </a>
            </div>
        </div>
        <Footer/>
        </>
    )
}
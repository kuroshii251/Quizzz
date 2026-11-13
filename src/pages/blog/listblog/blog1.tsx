import Footer from "../../../components/home/footer";
import Navbar from "../../../components/home/navbar";
import picture from "../../../assets/learning.jpg";

export default function Blog1(){
    return (
        <>
        <Navbar/>
        <div className="flex flex-col items-center justify-center h-400">
            <div className="col space-y-5">
 <h1 className="text-center text-3xl font-bold mb-5">5 Tips to increase your focus During Learning </h1>

            <img src={picture} className="mx-auto rounded-lg object-cover w-200 h-100 " alt="" />
            <div className="w-250 mt-5 space-y-2">
            <p className="text-lg">Have you feel already learning for a long time, but, the results not maximal? Even though all the material's has readed, but still hard to focus and fast to buzy? Not because you're lazy, it can be cause how your learning not appropriate. Here is a tips how to increase your concentrate during learning </p>
            <br />
            <h1 className="text-lg font-bold">1. Determine the comfortable place</h1>
            <p className="text-lg">Before learning, determine the comfortable place, like bedroom or library. Ensure sufficient lighting so as not to impair vision. </p>
            <br />
            <h1 className="text-lg font-bold">2. Choose learning method </h1>
            <p className="text-lg">Every people has different learning method, so you must choose your learning method</p>
            <br />
            <h1 className="text-lg font-bold">3. Set a time limit for studying</h1>
            <p className="text-lg">Beyond study methods, the time you choose to study also affects your concentration. Determine a study time that allows you to focus completely. However, keep in mind that there are limits to studying, dont push yourself too hard by studying all day without any breaks. Set time limits to achieve the best possible learning outcomes</p>
            <br />
            <h1 className="text-lg font-bold">4. Avoid Distraction</h1>
            <p className="text-lg">One key to staying focused while studying is to remove distractions, such as your mobile phone. Try to avoid checking social media or playing games, even during breaks, as doing so can affect your study mood</p>
    <br />
            <h1 className="text-lg font-bold">5. Make learning target</h1>
            <p className="text-lg">Setting learning targets is an important aspect of the learning process, as it helps you understand what you should aim to achieve by the end of your study. For instance, if you are studying Calculus, you need to determine which chapters should be covered first.</p>      
            </div>
         <p className="text-md">Source: https://perpustakaan.itsb.ac.id/5-tips-meningkatkan-konsentrasi-saat-belajar/</p>      </div>

        </div>
        <Footer/>
        </>
    )
}
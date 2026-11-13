import Footer from "../../../components/home/footer";
import Navbar from "../../../components/home/navbar";
import picture4 from "../../../assets/workingbackground.png";

export default function Blog3(){
    return (
        <>
        
        <Navbar/>
    <div className="flex flex-col justify-center items-center h-400">
        <div className="col space-y-5">

            <h1 className="text-3xl font-bold text-center">5 Ways To Quickly Understand Lessons</h1>
            <img src={picture4} className="mx-auto rounded-xl object-cover w-200 h-100 " alt="" />
            <div className="w-250 mt-5 space-y-2">
                <p className="font-semibold text-lg">As the exam approached,  your learning frecuency's certain further increased than usual. In this phase, it's very vulnerable makes buzy during learning</p>
                <br />
                <p className="text-lg font-semibold">For you that still get a hard when learning, this is several tricks which you can try</p>
                <br />
                <h1 className="text-lg font-bold">1. Makes a small note</h1>
                <p className="font-semibold text-lg">This ways is can be used when you too depends on memorizaation, When the teacher doing speech about materials, note the things on sticky notes. It's like Algebra, Past tenses, and make keyword that easy to remember. By Writing, you can still remember the lesson. And then, put in anywhere you see, such as wall, book, etc.</p>
                <br />
                <h1 className="font-bold text-lg">2. Consistent to do exam</h1>
                <p className="text-lg font-semibold">Do exam everyday, The more practice questions you answer, the better you will understand the types of questions being asked. Naturally, the questions that appear on the actual test will not be much different from the practice questions you have worked on.</p>
                <br />
                <h1 className="text-lg font-bold">3. Make learning schedule</h1>
                <p className="font-semibold text-lg">This might seem like a trivial thing, but it actually has a big impact. A study schedule helps you build consitency in your learning, especially in the  period leading up to exams, such as SAT,ACT, etc.</p>
                <br />
                <h1 className="text-lg font-bold">4. Brainstorming</h1>
                <p className="text-lg font-semibold">Brainstorming is a method that can you do for solving the problem and produce an new idea quickly. You can try this method with your friend</p>
                <br />
                 <h1 className="text-lg font-bold">5. Make the mind map</h1>
                <p className="text-lg font-semibold">Mind mapping is a process of mapping out thoughts to connect concepts related to a specific issue. The resulting output serves as a direct representation of how connections function within the brain. This method can also help develop creative thinking.</p>
            </div>
                     <p className="text-md">Source: https://www.ruangguru.com/blog/9-cara-cermat-agar-cepat-memahami-pelajaran
                        </p>
                        </div>
        </div>

        <Footer/>
        </>
    )
}
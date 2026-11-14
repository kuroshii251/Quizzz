import Footer from "../../components/home/footer";
import ListCategory from "../../components/home/listcategory";
import Navbar from "../../components/home/navbar";

export default function QuizzesPage(){
    return (
        <>
        <Navbar/>
        <div className="flex items-center flex-col justify-center min-h-screen">
            <h1 className="text-5xl font-bold text-center">Quizzes</h1>
            <p className="text-center poppins-medium">Select the quiz Category</p>
            <ListCategory/>
            <div className="">

            </div>
        </div>
        <Footer/>
        </>
    )
}
import Footer from "../../../../components/home/footer";
import Navbar from "../../../../components/home/navbar";
import Cartoons from "../../../../components/listquizzes/cartoon/main";

export default function Cartoon(){
    return (
        <>
        <Navbar/>

        <div className="flex flex-col justify-center items-center">
<Cartoons/>
        </div>

        <Footer/>
        
        
        </>
    )
}
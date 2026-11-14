import Footer from "../../../../components/home/footer";
import Navbar from "../../../../components/home/navbar";
import Tomandjerry from "../../../../components/listquizzes/cartoon/tomandjerry/main";

export default function TomandJerryPage(){
    return (
        <>
        <Navbar/>

        <div className="flex flex-col justify-center items-center">
<Tomandjerry/>
        </div>

        <Footer/>
        
        
        </>
    )
}
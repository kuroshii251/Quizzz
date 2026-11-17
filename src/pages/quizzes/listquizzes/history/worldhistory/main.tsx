import WorldHistory from "../../../../../components/listquizzes/history/worldhistory/main";
import Footer from "../../../../../components/home/footer";
import Navbar from "../../../../../components/home/navbar";

export default function WorldHistoryPage(){
    return (
        <>
        <Navbar/>

        <div className="flex flex-col justify-center items-center">
        <WorldHistory/>
        </div>
        <Footer/>
        
        
        </>
    )
}
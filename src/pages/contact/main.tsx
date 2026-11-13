import Footer from "../../components/home/footer";
import Navbar from "../../components/home/navbar";

export default function Contact(){
    return (
        <>
        <Navbar/>
        <div className="flex items-center justify-center min-h-screen">
            <div className="grid grid-cols-2 place-items-center p-4">
<div className="flex flex-col w-150">
    <h1 className="font-bold text-4xl mb-3">Get In Touch</h1>
    <p className="w-120 poppins-medium text-gray-700 mb-2 mt-3">If you have any questions, feel free to contact me by fill this form or contact me below this</p>
    <div className="block space-y-5 mt-5">
        <a href="" className="flex items-center gap-3 shadow shadow-black w-75 p-4 rounded-xl">
  <i className="fa-brands fa-github text-xl"></i>
            <h1 className="poppins-medium">kuroshii251</h1>
        </a>
      <div className="flex items-center gap-3 shadow shadow-black w-75 p-4 rounded-xl">
<i className="fa-brands fa-slack text-xl"></i>  
          <h1 className="poppins-medium">Kuro</h1>
        </div>
         <a href="" className="flex items-center gap-3 shadow shadow-black w-75 p-4 rounded-xl">
<i className="fa-solid fa-at text-xl"></i>
            <h1 className="poppins-medium">diamondg135@gmail.com</h1>
          

        </a>
    </div>
</div>
   <div className="p-7 rounded-xl bg-slate-300 ">
            <form action="https://formspree.io/f/mjywkwpn" method="POST" className="pt-3">
            <div className="">
            </div>
                <div className="mt-3">
                    <p className="font-semibold mb-3">First Name</p>
                <input type="text" className="bg-white p-3 w-100 rounded-xl" name="first_name" placeholder="First Name..."/>  
                </div>
                <div className="mt-3">
     <p className="font-semibold mb-3">Last Name</p>
                <input type="text" className="bg-white w-100 p-3 bg-white rounded-xl mt-1 mb-3" name="last_name" placeholder="Last Name..."/>
                </div>

                <div className="mt-2">
                <p className="font-semibold mb-3">Email</p>
                <input type="text" className="p-3 w-100 rounded-xl bg-white mb-3" name="email" placeholder="Email..." />
                </div>

<div className="mt-3">
 <p className="font-semibold mb-3">Message</p>
                <textarea name="message" className="resize-none bg-white p-3  rounded-xl  mt-1 mb-5 w-100 h-50" id="" placeholder="Message..."></textarea>
</div> 
<button type="submit" className="p-3 bg-blue-600 text-white font-semibold rounded-xl w-30">Submit</button>
            </form>
            </div>
            </div>
         

        </div>
        
        <Footer/>
        </>
    )
}
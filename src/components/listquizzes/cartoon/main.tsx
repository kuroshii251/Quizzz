export default function CartoonPage(){
    return (
        <>
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-center text-3xl font-bold mb-5">Select The Sport</h1>
            <div className="grid grid-cols-3 gap-5 space-y-3">
                <a href="" className="p-3 shadow shadow-black">
                    <h1>Gumball</h1>
                </a>
                   <a href="" className="p-3 shadow shadow-black">
                    <h1>Spongebob</h1>
                </a>
                   <a href="" className="p-3 shadow shadow-black">
                    <h1>Tom and Jerr</h1>
                </a>

            </div>

        </div>
        </>
    )
}
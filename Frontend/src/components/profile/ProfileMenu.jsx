function ProfileProduct({ option, setOption }) {
    console.log(option)
    return(
        <div className="bg-gray-100 h-screen rounded-t-xl">
            <nav className="flex justify-around p-5 text-sm h-10 bg-white rounded-t-xl items-center">
                <p onClick={() => {
                    setOption("all")
                }} className={`${(option == "all") ? "text-green-400 font-bold" : "text-black"}`}>Semua</p>
                <p onClick={() => {
                    setOption("food")
                }} className={`${(option == "food") ? "text-green-400 font-bold" : "text-black"}`}>Makanan</p>
                <p onClick={() => {
                    setOption("drink")
                }} className={`${(option == "drink") ? "text-green-400 font-bold" : "text-black"}`}>Minuman</p>
            </nav>
        </div>
    )
}

export default ProfileProduct
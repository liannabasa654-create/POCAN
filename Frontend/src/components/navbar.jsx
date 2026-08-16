import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
function Navbar() {
    return (
        <>
        <nav className="flex justify-between py-4 px-12 bg-green-300 text-white items-center">
            <div className="flex items-center gap-5">
                <span className="">
                    <label htmlFor="search">
                        <FontAwesomeIcon className="text-lg" icon={faMagnifyingGlass}/>
                    </label>
                    </span>
                <input type="text" id="search" className="w-100 bg-white text-gray-500 rounded py-1 px-3" placeholder="Cari Makanan...."/>
            </div>
            <div className="rigth-nav">
                <h1 className="text-2xl font-bold">INI LOGO</h1>
            </div>
        </nav>
        </>
    )
}

export default Navbar
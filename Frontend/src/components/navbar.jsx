import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faMagnifyingGlass, faReceipt } from "@fortawesome/free-solid-svg-icons"
import pocanLogo from "../../public/pocan_logo.png"

function Navbar() {
    return (
        <nav className="flex bg-green-300 py-1 px-3 sm:px-12 py-2 justify-between items-center text-white">
            <div className="flex items-center gap-3">
                <span className="">
                    <label htmlFor="search">
                        <FontAwesomeIcon className="text-xl" icon={faMagnifyingGlass}/>
                    </label>
                    </span>
                <input type="text" id="search" className="bg-white rounded-sm px-2 py-1 sm:py-2 sm:w-120 text-black" placeholder="Cari Makanan...."/>
            </div>
            <div className="flex items-center">
                <div className="hidden sm:flex gap-5 mr-10 text-2xl">
                    <FontAwesomeIcon icon={faBurger} className="hover:scale-110"/>
                    <FontAwesomeIcon icon={faReceipt} className="hover:scale-110"/>
                </div>
                <img src="/pocan_logo.png" alt="logo" className="w-14 h-14 sm:w-15 sm:h-15"/>
            </div>
        </nav>
    )
}

export default Navbar
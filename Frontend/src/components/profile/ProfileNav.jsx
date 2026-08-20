import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

function ProfileNav() {
    return(
        <nav className="flex items-center gap-3 py-5 px-2 text-white">
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => {location.href = "/"}}/>
            <span className="relative w-full max-w-md">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-200"/>
                <input type="search" className="w-73 p-2 pl-10 rounded-md bg-black/40 text-white" name="profile-nav" id="profile-nav" placeholder="Cari di Kantin"/>
            </span>
        </nav>
    )
}

export default ProfileNav
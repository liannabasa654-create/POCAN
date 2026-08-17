import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHamburger, faHome } from "@fortawesome/free-solid-svg-icons";

function BottomMenu() {
    const styleIcon = "hover:scale-110"
    return (
        <>
        <footer className="flex sm:hidden justify-between bg-green-300 p-3 text-white fixed bottom-0 left-0 w-full text-2xl">
            <FontAwesomeIcon icon={ faHome } className={styleIcon}/>
            <FontAwesomeIcon icon={ faHamburger} className={styleIcon} />
            <FontAwesomeIcon icon={ faCartShopping } className={styleIcon}/>
        </footer>
        </>
    )
}

export default BottomMenu
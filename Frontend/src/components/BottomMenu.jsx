import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faReceipt, faShop } from "@fortawesome/free-solid-svg-icons";

function BottomMenu() {
    const styleIcon = "hover:scale-110"
    return (
        <>
        <footer className="flex sm:hidden justify-between bg-green-300 p-3 text-white fixed bottom-0 left-0 w-full text-2xl">
            <span className="flex flex-col items-center">
                <FontAwesomeIcon icon={ faHome } className={styleIcon}/>
                <p className="text-sm">Beranda</p>
            </span>
            <span className="flex flex-col items-center">
                <FontAwesomeIcon icon={ faShop } className={styleIcon} />
                <p className="text-sm">Kantin</p>
            </span>
            <span className="flex flex-col items-center">
                <FontAwesomeIcon icon={ faReceipt } className={styleIcon}/>
                <p className="text-sm">Pesanan</p>
            </span>
        </footer>
        </>
    )
}

export default BottomMenu
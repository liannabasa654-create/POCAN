import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faHome } from "@fortawesome/free-solid-svg-icons";

function BottomMenu() {
    return (
        <>
        <footer>
            <FontAwesomeIcon icon={ faHome } />
            <FontAwesomeIcon icon={ faHamburger }/>
        </footer>
        </>
    )
}

export default BottomMenu
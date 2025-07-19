import { FaRegCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function Icon({IconType}) {

    if(IconType==="circle")
        return <FaRegCircle/>
    else if(IconType==="cross")
        return <RxCross2/>
    else
        return <MdEdit/>

}

export default Icon;
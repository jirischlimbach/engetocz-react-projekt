import "./OneBenefit.css"
import { FaCheck } from "react-icons/fa6";

const OneBenefit = ({ heading, text }) => {

    return <div>
        <FaCheck />
        <h2>{heading}</h2>
        <p>{text}</p>
    </div>
}

export default OneBenefit
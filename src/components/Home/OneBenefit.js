import "./OneBenefit.css"
import { FaCheck } from "react-icons/fa6";

const OneBenefit = ({ heading, text }) => {

    return <div className="one-benefit-card">
        <FaCheck className="benefit-icon" />
        <h3>{heading}</h3>
        <p>{text}</p>
    </div>
}

export default OneBenefit
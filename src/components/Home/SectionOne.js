import "./SectionOne.css"
import OneBenefit from "./OneBenefit"
import sectionOneData from "../../sectionOneData"

const SectionOne = () => {
    
  return <section className="section">
    <h2>Jsme jedničky v generování QR kódů</h2>
    <div>
      {
        sectionOneData.map((oneBenefit, index) => {

          return <OneBenefit key={index} {...oneBenefit} />
        })
      }
    </div>
  </section>
}

export default SectionOne
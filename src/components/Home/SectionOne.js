import "./SectionOne.css"
import OneBenefit from "./OneBenefit"
import sectionOneData from "../../sectionOneData"

const SectionOne = () => {

  return <section className="section gradient-bg">
    <div className="container flex-column-centered">
      <h2>Jsme jedničky v generování QR kódů</h2>
      <div className="four-cards-grid">
        {
          sectionOneData.map((oneBenefit, index) => {

            return <OneBenefit key={index} {...oneBenefit} />
          })
        }
      </div>
    </div>
  </section>
}

export default SectionOne
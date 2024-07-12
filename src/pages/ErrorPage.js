import "./ErrorPage.css"
import { Link } from "react-router-dom"

const ErrorPage = () => {

  return <section className="section flex-column-centered">
    <h1>404 - Stránka nebyla nalezena</h1>
    <Link to="/"><button className="main-button" id="no-margin-top">Hlavní strana</button></Link>
  </section>
}

export default ErrorPage
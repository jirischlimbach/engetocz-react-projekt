import "./Header.css"
import { useState, useEffect } from "react"
import heroImg from "../../img/qr-hero.png"
import randomTexts from "../../homepageRandomTexts"

const Header = () => {
  const [randomTextToShow, setRandomTextToShow] = useState(null) // Náhodný text, který se při každém obnovení stránky vybere a zobrazí

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length)
    setRandomTextToShow(randomTexts[randomIndex])
  }, [])

  return <header className="section">
    <div className="container hero-section">
      <img src={heroImg} alt="#" className="hero-img" />
      <h1><span className="changing-text">{randomTextToShow}</span> generování QR kódů</h1>
      <h3>Zadejte URL adresu a nechte si vytvořit vlastní QR kód během několika sekund</h3>
    </div>
  </header>
}

export default Header
import "./Header.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { BsQrCode } from "react-icons/bs";

const randomTexts = ["Snadné", "Rychlé", "Kvalitní", "Bezplatné"]

const Header = () => {
  const [randomTextToShow, setRandomTextToShow] = useState(null)


  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length)
    setRandomTextToShow(randomTexts[randomIndex])
  }, [])

  return <header className="section white-bg">
    <div className="container hero-section">
      <BsQrCode className="hero-img" />
      <h1><span className="changing-text">{randomTextToShow}</span> generování QR kódů</h1>
      <h3>Zadejte URL adresu a nechte si vytvořit vlastní QR kód během několika sekund</h3>
      <Link to="create-qr"><button className="main-button">Vytvořit QR kód</button></Link>
    </div>
  </header>
}

export default Header
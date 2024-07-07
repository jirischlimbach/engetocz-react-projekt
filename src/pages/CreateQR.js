import "./CreateQR.css"
import { useState } from "react"

const CreateQR = () => {
    // URL adresa zadaná uživatelem, na kterou bude směřovat QR kód
    const [urlToGenerate, setUrlToGenerate] = useState("")
    // Získaná URL s QR kódem, která bude sloužit jako src pro img element
    const [imgSrc, setImgSrc] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        fetch(`https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${urlToGenerate}`)
            .then(response => setImgSrc(response.url))
            .catch(error => console.log("QR kód nelze načíst" + error))
    }

    const handleReset = () => {
        setUrlToGenerate("")
        setImgSrc("")
    }

    return <section className="section">
        <div className="container flex-column-centered">
            <h1>Vytvořte si QR kód</h1>
            <div className="qr-generator-wrapper">
                <div className="url-form-wrapper">
                    <h2>Vložte URL adresu</h2>
                    <form onSubmit={handleSubmit} onReset={handleReset}>
                        <input
                            type="text"
                            placeholder="URL adresa"
                            value={urlToGenerate}
                            onChange={(e) => setUrlToGenerate(e.target.value)}
                        />
                        <button type="submit">Vytvořit QR kód</button>
                        {imgSrc && <button type="reset" className="reset-button">Obnovit</button>}
                    </form>
                </div>

                <div className="new-qr-wrapper">
                    <h2>Váš QR kód</h2>
                    {imgSrc ? <img src={imgSrc} alt={`QR kód odkazující na URL: ${urlToGenerate}`} className="qr-code-square" /> : <div className="empty-qr-code-place"><p>Vyplňtě URL adresu...</p></div>}
                </div>
            </div>
        </div>
    </section>
}

export default CreateQR
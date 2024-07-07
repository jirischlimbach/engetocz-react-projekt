import "./CreateQR.css"
import { useState } from "react"

const CreateQR = () => {
    // URL adresa zadaná uživatelem, na kterou bude směřovat QR kód
    const [urlToGenerate, setUrlToGenerate] = useState("")
    // Získaná URL s QR kódem, která bude sloužit jako src pro img element
    const [imgSrc, setImgSrc] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        fetch(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${urlToGenerate}`)
            .then(response => setImgSrc(response.url))
            .catch(error => console.log("QR kód nelze načíst" + error))
    }

    return <section>
        <h1>QR Generátor</h1>
        <div>
            <div>
                <h2>Vložte URL adresu</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="URL adresa"
                        value={urlToGenerate}
                        onChange={(e) => setUrlToGenerate(e.target.value)}
                    />
                    <button type="submit">Vytvořt QR kód</button>
                </form>
            </div>

            <div>
                <h2>Váš QR kód</h2>
                {imgSrc && <img src={imgSrc} alt={`QR kód odkazující na URL: ${urlToGenerate}`} />}
            </div>
        </div>
    </section>
}

export default CreateQR
import "./Bookmarks.css"
import { useState } from "react"
import data from "./bookmarksData.json"

const Bookmarks = () => {
    const [selectedBookmarkIndex, setSelectedBookmarkIndex] = useState(0)

    const handleClick = index => {
        setSelectedBookmarkIndex(index)
    }

    return <section className="section gradient-bg">
        <div className="container flex-column-centered">
            <h2>Proč využívat naši aplikaci?</h2>
            <div className="bookmarks-buttons-wrapper">
                {
                    data.map((oneBookmark, index) => {
                        const buttonClass = index === selectedBookmarkIndex ? "active-bookmark" : "non-active-bookmark"
                        return <button onClick={() => handleClick(index)} key={index} className={buttonClass}>{oneBookmark.buttonText}</button>
                    })
                }
            </div>
            <div className="selected-bookmark">
                <h3>{data[selectedBookmarkIndex].heading}</h3>
                <p>{data[selectedBookmarkIndex].text}</p>
            </div>
        </div>
    </section>
}

export default Bookmarks
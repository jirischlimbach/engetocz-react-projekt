import "./Bookmarks.css"
import { useState } from "react"
import bookmarksData from "../../bookmarksData"

const Bookmarks = () => {
    const [selectedBookmark, setSelectedBookmark] = useState(bookmarksData[0])

    const handleClick = index => {
        console.log(index)
        setSelectedBookmark(bookmarksData[index])
    }

    return <section>
        <div>
            {
                bookmarksData.map((oneBookmark, index) => {
                    return <button onClick={() => handleClick(index)} key={index}>{oneBookmark.heading}</button>
                })
            }
        </div>
        <div>
            <h3>{selectedBookmark.heading}</h3>
            <p>{selectedBookmark.text}</p>
        </div>
    </section>
}

export default Bookmarks
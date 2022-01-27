import React, { useState } from "react"

const Hero: React.FC<any> = (data) => {

    const { firstLine, secondLine, taglines } = data.data
    const taglinesCount = taglines.items.length

    const [taglineIndex, setTaglineIndex] = useState(0)
    
    return (
        <section className="block hero-block">
            <canvas className="boop-drop"></canvas>
        
            <h1 className="hero">
                <span className="hero-first-line">{firstLine}</span>
                <span className="hero-box">{secondLine}</span>
                <span className="hero-tagline">{taglines.items[taglineIndex].whatIsIt}</span>
            </h1>
        
            <button className="hero-cycle" onClick={() => {
                setTaglineIndex(Math.floor(Math.random() * taglinesCount))
            }}>
                <span className="sr-only">change tagline</span>
            </button>
        </section>
    )
}

export default Hero



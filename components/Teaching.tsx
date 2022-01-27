import React from "react"

const Teaching: React.FC<any> = (data) => {

    const { teachingPlatforms, headline, description } = data.data

    return (
        <section id="teaching" className="block learning-block">
            <div className="block-intro">
                <h2>{headline}</h2>
                <div className="lede" dangerouslySetInnerHTML={{__html: description.html }}></div>
            </div>
            <ul className="platforms">
                {teachingPlatforms.items.map((p:any) => (
                    <li key={p._system_.name} className="platform">
                        <a href={p.link} className="platform-link">
                            <img
                                src={p.logo.url}
                                alt={p.title}
                            />
                        </a>
                        <div className="platform-card">
                        <h2 className="platform-name">
                            <a href={p.link}>{p.title}</a>
                        </h2>
                        <div className="platform-description" dangerouslySetInnerHTML={{__html: p.description.html}}></div>
                        <a className="platform-link-text" href={p.link}>check it out &rarr;</a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>)
}

export default Teaching
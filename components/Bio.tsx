import React, { useState } from "react"
import SocialLink from "./SocialLink"
import Photos from "./Photos"

const Bio: React.FC<any> = (data) => {

    const { bios, socialLinks, photos } = data.data

    const [selectedBio, setSelectedBio] = useState(bios.items[0])
    
    return (
        <section id="bio" className="block bio-block">
            <div className="bio-container">
                <div>
                    <form className="bio-length-control" id="biolength">
                        <fieldset className="bio-fieldset">
                            <legend className="bio-legend">Adjust bio length:</legend>
                            <div className="bio-length-options">
                                {bios.items.map((b: any) => {
                                    const type = b.type.items[0]._system_.codename

                                    return (
                                        <div className="bio-option" key={type}>
                                        <input
                                            className="bio-input"
                                            type="radio"
                                            onChange={() => setSelectedBio(b)}
                                            id={`length-${type}`}
                                            name="biolength"
                                            value={type}
                                            data-sound-hover="pop"
                                            data-sound-focus="click"
                                            data-sound-click="click"
                                            checked={selectedBio === b}
                                        />
                                        <label htmlFor={`length-${type}`} className="bio-label">
                                            <span className="bio-label-text">{type}</span>
                                        </label>
                                        </div>)})}                        
                            </div>
                        </fieldset>
                    </form>
                
                    <div className="bio" dangerouslySetInnerHTML={{__html: selectedBio.text.html}}>
                    </div>

                    <div className="bio-social">
                        <h2 className="bio-connect">Connect With Jason:</h2>
                        <ul className="bio-profiles">
                            {socialLinks.items.map((socialLink:any) => <SocialLink key={socialLink._system_.codename} data={socialLink}></SocialLink>)}
                        </ul>
                    </div>
                </div>

                <Photos data={photos}></Photos>

            </div>
        </section>
    )
}

export default Bio



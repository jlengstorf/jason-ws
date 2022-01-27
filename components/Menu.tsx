import React from "react"


const Header: React.FC = () => {
    return (
        <header>
            <a href="/" rel="home" className="home-link">Jason Lengstorf</a>
            <nav className="main-nav offset-right">
                <a href="/posts">Posts</a>
                <a href="/newsletter">Newsletter</a>
                <a href="/uses">Uses</a>
            </nav>
            
            <div
                className="exploding-nav first-run"
                style={{"--navCount": "3"} as React.CSSProperties}
            >
                <button className="exploding-nav-button">
                <img
                    className="face"
                    src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto/jason.af/jason-brains.png"
                    alt=""
                />
                <span className="sr-only">Show Navigation</span>
                </button>
                <nav className="home-page-nav">
                    <a
                    className="home-item"
                    href="/#bio"
                    style={{"--offset": "1"} as React.CSSProperties}
                    >
                    About Jason
                    <img
                        src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto/jason.af/camera.png"
                        alt=""
                    />
                    </a>
                
                    <a
                    className="home-item"
                    href="/#teaching"
                    style={{"--offset": "2"} as React.CSSProperties}
                    >
                    Teaching
                    <img
                        src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto/jason.af/terminal.png"
                        alt=""
                    />
                    </a>
                
                    <a
                    className="home-item"
                    href="/#newsletter"
                    style={{"--offset": "3"} as React.CSSProperties}
                    >
                    Newsletter
                    <img
                        src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto/jason.af/newsletter.png"
                        alt=""
                    />
                    </a>
                
                </nav>
            </div>

            <div className="site-settings">
                <button
                className="site-settings-button site-settings-toggle"
                data-sound-hover="pop"
                data-sound-click="click"
                >
                <img
                    className="site-settings-gear"
                    src="https://res.cloudinary.com/jlengstorf/image/upload/f_auto,q_auto,w_70/v1593477792/jason.af/gear.png"
                    alt=""
                />
                <span className="sr-only">Show Settings</span>
                </button>
                <div className="site-settings-panel">
                <button
                    className="site-settings-button"
                    data-sound-hover="pop"
                    data-sound-click="click"
                    data-setting="sound"
                >
                    <img
                    className="site-settings-sound"
                    src="https://res.cloudinary.com/jlengstorf/image/upload/f_auto,q_auto,w_70/v1593533573/jason.af/sound-on.png"
                    alt=""
                    data-image-on="https://res.cloudinary.com/jlengstorf/image/upload/f_auto,q_auto,w_70/v1593533573/jason.af/sound-on.png"
                    data-image-off="https://res.cloudinary.com/jlengstorf/image/upload/f_auto,q_auto,w_70/v1593533573/jason.af/sound-off.png"
                    />
                    <span className="sr-only">Turn Sound Off</span>
                </button>
                </div>
            </div>
        
        </header>

    )
}

export default Header
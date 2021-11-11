import React, { Component, Button, Div } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import EmbededdedVideo from "../components/embeddedVideo"
import LogoBar from "../components/logobar"
import Patreon from "../images/Asset 34@2x.png"
import Header from "../components/header"

const IndexPage = () => {
    function debounce(fn, ms) {
        let timer
        return _ => {
            clearTimeout(timer)
            timer = setTimeout(_ => {
                timer = null
                fn.apply(this, arguments)
            }, ms)
        };
    }

    const [video, setVideo] = React.useState({ id: '9mlhm83t8b', media: "video-responsive" })
    function handleResize() {
        console.log('resized to: ', window.innerWidth, 'x', window.innerHeight, video.id, video.media)
        if (window.innerWidth <= 600) {
            setVideo({ id: 'of7xs3l1wz', media: "video-responsive-mobile" });
        } else if (window.innerWidth <= 992) {
            setVideo({ id: '4axhowpkqg', media: "video-responsive-tablet" });
        } else {
            setVideo({ id: '9mlhm83t8b', media: "video-responsive" });
        }
    }
    React.useEffect(() => {
        console.log('resized to: ', window.innerWidth, 'x', window.innerHeight, video.id, video.media)
        handleResize();
    }, []);
    React.useEffect(() => {
        const debouncedHandleResize = debounce(handleResize,1000)
        window.addEventListener('resize', debouncedHandleResize)
        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)

        }
    })
    return (
        <Layout>
            <link rel="stylesheet" href="https://use.typekit.net/suh2frt.css"/>
            <Seo title="Home" />
            <div class="buttons-container first">
                <div class="buttons-container">
                    <EmbededdedVideo embedId={video.id} media={video.media} />
                    <div className='flex-fix top'>
                    <div className="b-container">
                        <Link className={'ghost-button'} to="https://www.patreon.com/grinninggod">
                            <div className='ghost-div'>
                            PATREON
                            <StaticImage id='ghost-icon' src="../images/Digital-Patreon-Logo_FieryCoral.png" width={46} />
                            </div>
                        </Link>
                        <div className='button-hold'>
                            <Link className={'ghost-button'} to="https://www.myminifactory.com/users/Grinning%20God?show=tribe">
                                <div className='ghost-div'>
                                        TRIBES
                                        <StaticImage id='ghost-icon' src="../images/Asset 25@2x.png" width={46} />
                                    </div>
                
                                </Link>
                            <div style={{marginTop:8}}>
                                <StaticImage src="../images/MMF horizontal green@2x.png" height={20} />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='flex-fix'>
                    <div className={'flex-div'}>
                        <div>
                            <StaticImage src="../images/Siln-distressed.png" width={200} />
                        </div>
                        <div>
                            <StaticImage src="../images/Graximord-distressed.png" width={200} />
                        </div>
                        <div>
                            <StaticImage src="../images/Escan-distressed.png" width={200} />
                        </div>
                        <div>
                            <StaticImage src="../images/Heightened-distressed.png" width={200} />
                        </div>
                        <div>
                            <StaticImage src="../images/Metholidon-distressed.png" width={200} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        )
}

export default IndexPage

import React from "react";
import "./layout.css"
import UseWindowDimensions from "./useWindowDimensions"

const VideoEmbedded = ({ embedId, media }) => {
 //   const { height, width } = UseWindowDimensions();
    //of7xs3l1wz mobile
    //9mlhm83t8b desktop
    //4axhowpkqg tablet
    return (
        <div id='media-lock' className={media}>
            <iframe src={`https://fast.wistia.net/embed/iframe/${embedId}?videoFoam=true`} title="Grinning-God-logo Video" allow="autoplay; fullscreen" allowtransparency="true" frameBorder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width={'100%'} height="100%"></iframe>

        </div>
    )
};

export default VideoEmbedded;
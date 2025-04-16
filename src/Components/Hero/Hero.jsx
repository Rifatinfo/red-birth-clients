import { useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import HeroSlider from "../../HeroSlider/HeroSlider";


const Hero = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [playStatus, setPlayStatus] = useState(true);

    return (
        <div>
            {showVideo ? (
                <VideoPlayer
                    playStatus={playStatus}
                    setPlayStatus={setPlayStatus}
                    onClose={() => {
                        setShowVideo(false);
                        setPlayStatus(false);
                    }}
                />
            ) : (
                <HeroSlider
                    onWatchVideo={() => {
                        setShowVideo(true);
                        setPlayStatus(true);
                    }}
                    playStatus={playStatus}
                    setPlayStatus={setPlayStatus}
                />

            )}
        </div>
    );
};

export default Hero;
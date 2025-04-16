import { useEffect, useRef } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import video from "../../assets/video1.mp4"; // Replace with actual path

const VideoPlayer = ({ playStatus, setPlayStatus }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            if (playStatus) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [playStatus]);


    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                ref={videoRef}
                className="absolute w-full h-full object-cover"
                muted
                loop
            >
                <source src={video} type="video/mp4" />
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 z-10" />

            {/* Play/Pause & Close Buttons */}
            <div className="absolute md:mt-216 md:left-455 mt-135 ml-10 z-50 flex items-center gap-4">
                <button onClick={() => setPlayStatus(!playStatus)} className="text-white text-4xl">
                    {playStatus ? <FaPauseCircle className="md:text-5xl text-4xl  rounded-full border-1 border-[#c73450] border-none text-[#c73450] " /> : <FaPlayCircle className="md:text-5xl text-4xl  rounded-full border-1 border-[#c73450] border-none text-[#c73450] " />}
                </button>

            </div>

            {/* Overlay Text Section */}
            <div className="absolute z-20 top-0 left-0 w-full h-full flex items-center justify-start md:px-20">
                <div className="space-y-4 text-left p-4 md:p-0">
                    <p className="text-sm tracking-widest text-[#c73450] font-semibold">* CREATIVE AGENCY</p>
                    <h1 className="text-4xl md:text-8xl font-semibold text-white">
                        Innovate <br /> with Impact
                    </h1>
                    <p className="text-lg text-white/90">
                        Digital Marketing | 3D Animation | Branding
                        <span className="text-[#c73450] font-bold ml-2">Let's Build Together</span>
                    </p>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center pt-4">
                        <div className="flex items-center text-center">
                            <button className="text-center bg-[#c73450] hover:bg-[#a6293e] text-white font-medium py-3 px-6 rounded-full text-sm transition flex items-center gap-2">
                                Our Services <span className="text-lg"><GoArrowUpRight /></span>
                            </button>
                        </div>
                        <div className="flex items-center text-center">
                            <button className="bg-white hover:bg-gray-100 text-[#c73450] font-medium py-3 px-8 rounded-full text-sm transition flex items-center gap-2">
                                Get a Quote <span className="text-lg"><GoArrowUpRight /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;

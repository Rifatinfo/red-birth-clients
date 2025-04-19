import { useEffect, useState } from "react";

const Work = () => {
    const [work, setWork] = useState([]);

    useEffect(() => {
        fetch('/public/work.json')
            .then(res => res.json())
            .then(data => setWork(data))
    }, [])
    return (
        <div className="max-w-7xl mx-auto mt-10 mb-20">
            <div className=" mb-8 text-center text-[#c73450] max-w-2xl mx-auto px-4">
                <p className="text-sm tracking-widest text-orange-500 font-semibold mb-2">OUR WORK DETAILS</p>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                    Check Our Amazing Work<br />We Have Done
                </h2>
                <div className="w-12 h-1 bg-[#c73450] mx-auto mt-2"></div>
            </div>
            <div className="md:grid-cols-3 grid  md:gap-4 gap-3 grid-cols-1 p-2 md:p-0">
                {work.map(wo => <div className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                    <img src={wo.image} alt=""
                        className="w-full h-96 object-cover"
                    />

                    {/* text content */}
                    <div className="absolute bottom-0 left-4 right-4 bg-white p-4 rounded-t-2xl  z-10">
                        <p className="text-pink-600 text-sm font-semibold">{wo.category}</p>
                        <h3 className="text-black text-xl font-semibold truncate">
                            {wo.title}
                        </h3>
                    </div>

                    {/* overlay on hover  */}
                    <div className="absolute inset-0 bg-red-600  flex items-center justify-center opacity-60 translate-y-full group-hover:translate-y-0 group-hover:opacity-60 transition-all duration-500 ease-in-out">
                        <img src={wo.overlayIcon} alt="" />
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Work;
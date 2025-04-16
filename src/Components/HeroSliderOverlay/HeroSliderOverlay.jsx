import { GoArrowUpRight } from "react-icons/go";

const HeroSliderOverlay = () => {
    return (
        <div>
            <div className="absolute z-20 top-0 left-0 w-full h-full flex items-center justify-start md:px-20">
            <div className="space-y-4 text-left p-4 md:p-0">
                <p className="text-sm tracking-widest text-[#c73450] font-semibold">* CREATIVE AGENCY</p>
                <h1 className="text-4xl md:text-8xl font-semibold text-white">Innovate <br /> with Impact</h1>
                <p className="text-lg text-white/90">
                    Digital Marketing | 3D Animation | Branding
                    <span className="text-[#c73450] font-bold ml-2">Let's Build Together</span>
                </p>
                <div className="flex flex-col gap-4 md:flex-row md:items-center pt-4">
                    <button className="text-center bg-[#c73450] hover:bg-[#a6293e] text-white font-medium py-3 px-6 rounded-full text-sm transition flex items-center gap-2">
                        Our Services <GoArrowUpRight />
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-[#c73450] font-medium py-3 px-8 rounded-full text-sm transition flex items-center gap-2">
                        Get a Quote <GoArrowUpRight />
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HeroSliderOverlay;
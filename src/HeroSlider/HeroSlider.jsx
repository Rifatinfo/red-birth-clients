import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaPlayCircle } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";


const HeroSlider = ({ onWatchVideo , playStatus , setPlayStatus}) => {
    const sliders = [
        { id: 1, image: 'https://enton.radiantthemes.com/wp-content/uploads/2021/12/banner03.jpg', text: 'Dive into what you love' },
        { id: 1, image: 'https://modinatheme.com/azent/wp-content/uploads/2024/07/03.jpg', text: 'Dive into what you love' },
        { id: 2, image: 'https://designingmedia.com/blazin/wp-content/uploads/2023/02/banner-image.jpg', text: 'Feel the drive' }
    ]

  
    return (
        <div className="relative w-full min-h-screen">
            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                navigation={false}
                className="mySwiper h-full custom-swiper"
            >
                {sliders.map(slide => <SwiperSlide key={slide.id}>
                    <div className="w-full min-h-screen bg-cover bg-center flex items-center justify-start md:px-50"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="absolute inset-0 bg-black/50 z-0"></div>

                        {/* text and button section  */}
                        <div className="relative z-10 space-y-4 p-2 md:p-0">
                            <p className="text-sm tracking-widest text-[#c73450] font-semibold">* CREATIVE AGENCY</p>
                            <h1 className="text-4xl md:text-8xl font-semibold text-white">Innovate <br/> with Impact</h1>
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


                        <div className="absolute md:mt-200 md:left-450 mt-90">
                            <button
                                className=" mt-6 px-6 py-6 transition"
                                onClick={onWatchVideo}
                            >
                                <FaPlayCircle onClick={() => setPlayStatus(playStatus)} className="md:text-5xl text-4xl  rounded-full border-1 border-[#c73450] border-none text-[#c73450] " />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default HeroSlider;
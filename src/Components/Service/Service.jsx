import serviceBanner from '../../assets/service_1.jpg';
import Service_1 from '../../Components/Service/service_1';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Service = () => {
    const serviceImag = [
        {
            id: 1,
            image: 'https://designingmedia.com/blazin/wp-content/uploads/2023/02/what-we-do-section-overlay.png'
        }
    ];

    return (
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            {/* Left Banner + Card */}
            <div className="relative md:w-1/3 w-full  ">
                <img className='grayscale contrast-100' src={serviceBanner} alt="" />
                <div className='md:absolute md:-mt-150 md:ml-70'>
                    <div className='relative w-full max-w-sm h-[500px] text-white overflow-hidden rounded-4xl shadow-lg'>
                        {/* backgroundImage with red overlay */}
                        <div className='absolute inset-0'>
                            <img src="https://designingmedia.com/blazin/wp-content/uploads/2023/02/About-us-section-group-image.jpg" className='w-full h-full object-cover' alt="" />
                            <div className='absolute inset-0 bg-red-700 opacity-70   transition-opacity duration-300'></div>
                        </div>

                        {/* content */}
                        <div class="relative z-10 p-6 flex flex-col justify-between h-full">
                            <div>
                                <p className="uppercase  tracking-wide mb-2">What We Do</p>
                                <h1 className="text-5xl font-bold leading-tight">
                                    Services <br />
                                    <span class="font-normal">We offer</span>
                                </h1>
                                <hr className="my-4 border-white/50 w-10" />
                                <p className="text-lg text-white/90">
                                    Reprehenderit rui in ea volurate esse ruam nihil molestiae consea eum fugiat ruo voluetas. ruam nihil molestiae consea eum fugiat ruo voluetas
                                </p>
                            </div>

                            {/* <!-- Button --> */}
                            <div className="mt-4">
                                <a href="#" class="bg-yellow-400 text-red-800  text-lg font-semibold py-4 px-6 rounded-full shadow hover:bg-yellow-300 transition-all inline-block">
                                    Get Started →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Swiper Section */}
            <div className="md:w-2/3 w-full min-h-[500px]">
                <div
                    className="w-full h-full py-10 px-4"
                    style={{
                        backgroundImage: `url(${serviceImag[0].image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className='grid-cols-3 grid gap-3'>
                        <Service_1 />
                        <Service_1 />
                        <Service_1 />
                        <Service_1 />
                        <Service_1 />
                        <Service_1 />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;

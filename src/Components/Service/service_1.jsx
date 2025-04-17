
const service_1 = () => {
    return (
        <div>
             {/* slider */}
             <div className="max-w-lg bg-white rounded-2xl shadow-xl p-6 hover:shadow-md transition-shadow  duration-300 cursor-pointer">
                        {/* Icon */}
                        <div className="mb-4">
                            <img
                                src="https://designingmedia.com/blazin/wp-content/uploads/2023/05/our_services_box_6.png"
                                alt="Web Dev Icon"
                                className="w-12 h-12"
                            />
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                            Web Development Services
                        </h2>

                        {/* Description */}
                        <p className="text-gray-500  mb-4">
                            Golestiae non recusandae Itaque eau em rerum hic tenetur a sapiente
                            delec aut reiciendis voluptatibus maiores alias consequatur aut…
                        </p>

                        {/* Read More */}
                        <div className="text-orange-500 font-semibold text-sm cursor-pointer inline-flex items-center group">
                            Read More
                            <span className="ml-1 transition-transform group-hover:translate-x-1 duration-200">
                                ▢
                            </span>
                        </div>
                    </div>
        </div>
    );
};

export default service_1;
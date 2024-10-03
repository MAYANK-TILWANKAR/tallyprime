"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/parallax";

const Intro = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const renderSwiper = (images, prefix) => (
    <Swiper
      modules={[Navigation, Autoplay, Pagination, Parallax]}
      slidesPerView={1}
      spaceBetween={35}
      loop={true}
      autoplay={{
        delay: 1800,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 35,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 45,
        },
      }}
      className="swiper-container">
      {[...Array(images)].map((_, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-slide-content">
            <img
              className="w-full rounded-xl sm:h-[420px] object-cover cursor-pointer"
              src={`/images/${prefix}${index + 1}.jpg`}
              alt={`Slide ${index + 1}`}
              onClick={() => openImage(`/images/${prefix}${index + 1}.jpg`)}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-9 py-12">
          {renderSwiper(8, "sl")}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeImage}>
            <img
              src={selectedImage}
              alt="Full-screen"
              className="max-w-[95%] max-h-[95%]"
            />
          </div>
        )}
        <div className="text-center mt-10">
          <a
            href="/bookDemo"
            className="relative inline-flex items-center px-5 sm:px-7 md:px-9 py-3 sm:py-4 md:py-5 overflow-hidden text-base sm:text-lg md:text-xl font-bold text-white bg-gradient-to-r from-[#075593] to-[#328AB0] rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-out group">
            <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out"></span>
            <span className="absolute left-0 w-56 h-56 -ml-28 -mt-28 bg-white rounded-full opacity-5 group-hover:scale-150 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 flex items-center">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2 sm:mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="hidden sm:inline">
                Book Free Demo Class Now!
              </span>
              <span className="sm:hidden">Book Demo</span>
            </span>
          </a>
        </div>
      </section>
      <section className="py-14 sm:py-18 md:py-26 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-9">
          {renderSwiper(9, "g")}
        </div>
      </section>
    </>
  );
};

export default Intro;

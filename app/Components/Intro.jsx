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
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      className="swiper-container">
      {[...Array(images)].map((_, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-slide-content">
            <img
              className="w-full rounded-xl sm:h-96 object-cover cursor-pointer"
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          {renderSwiper(8, "sl")}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeImage}>
            <img
              src={selectedImage}
              alt="Full-screen"
              className="max-w-full max-h-full"
            />
          </div>
        )}
        <div className="text-center mt-8">
          <a
            href="/bookDemo"
            className="relative inline-flex items-center px-8 py-4 overflow-hidden text-lg font-bold text-white bg-gradient-to-r from-[#075593] to-[#328AB0] rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out group">
            <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out"></span>
            <span className="absolute left-0 w-48 h-48 -ml-24 -mt-24 bg-white rounded-full opacity-5 group-hover:scale-150 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 flex items-center">
              <svg
                className="w-6 h-6 mr-2"
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
              Book Free Demo Class Now!
            </span>
          </a>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {renderSwiper(9, "g")}
        </div>
      </section>
    </>
  );
};

export default Intro;

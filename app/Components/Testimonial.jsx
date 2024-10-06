import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Testimonial = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = false;
        video.volume = 0.5; // Set volume to 50%
      }
    });
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#075593] mb-8 sm:mb-12 md:mb-16">
          Still thinking whether this course will benefit you or not?
        </h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="testimonial-swiper">
          {[
            { image: "/images/s1.jpg" },
            { image: "/images/tallyt1.jpg" },
            { image: "/images/s2.jpg" },
            { image: "/images/tallyt2.jpg" },
            { image: "/images/s3.jpg" },
            { image: "/images/tallyt3.jpg" },
            { image: "/images/s4.jpg" },
            { image: "/images/tallyt2.jpg" },
          ].map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 p-0 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={testimonial.image}
                  alt={`Testimonial ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-8">
          <a
            href="/bookDemo"
            className="relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#EDA915] to-[#F0C05A] rounded-lg group hover:from-[#075593] hover:to-[#328AB0] transition-all duration-300 ease-out w-full sm:w-auto justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <span className="absolute -inset-1 w-full h-full bg-gradient-to-r from-[#F0C05A] to-[#EDA915] rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity duration-300 ease-out"></span>
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-full bg-gradient-to-r from-[#328AB0] to-[#075593] group-hover:translate-x-0"></span>
            <span className="relative flex items-center">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
              Book Free Demo Class Now!
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-8">
            {[{ video: "/images/v1.mp4" }, { video: "/images/v2.mp4" }].map(
              (testimonial, index) => (
                <div key={index} className="w-full sm:w-1/2 max-w-sm">
                  <div className="bg-white rounded-2xl shadow-xl transition-all duration-300 transform p-4 sm:p-0 overflow-hidden">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      className="w-full h-auto object-cover"
                      src={testimonial.video}
                      loop
                      playsInline
                      preload="auto"
                      controls
                      controlsList="nodownload">
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

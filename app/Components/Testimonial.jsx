import React from "react";

const Testimonial = () => {
  return (
    <>
      {" "}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#075593] mb-16">
            Still thinking whether this course will benefit you or not?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              // {
              //   name: "Anush Jain",
              //   role: "Student",
              //   image: "/images/testi1.png",
              //   quote:
              //     "The Advanced Tally Prime course was highly valuable. It covered GST, inventory management, and financial reports, boosting my confidence in using Tally for advanced tasks.",
              // },
              // {
              //   name: "Sujal Pandiya",
              //   role: "Student",
              //   image: "/images/testi2.png",
              //   quote:
              //     "This course was excellent for mastering advanced Tally Prime features like multi-currency accounting and data migration. It was concise yet very effective.",
              // },
              // {
              //   name: "Ayushi Jain",
              //   role: "Student",
              //   image: "/images/testi3.png",
              //   quote:
              //     "The Advanced Tally Prime course was extremely beneficial. It taught me advanced functions, TDS calculations, greatly enhancing my accounting skills and efficiency.",
              // },
              {
                image: "/images/tallyt1.jpg",
                fullWidth: true,
              },
              {
                image: "/images/tallyt3.jpg",
                fullWidth: true,
              },
              {
                image: "/images/tallyt2.jpg",
                fullWidth: true,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  testimonial.fullWidth ? "p-0 overflow-hidden" : "p-10"
                }`}>
                {testimonial.fullWidth ? (
                  <img
                    className="w-full h-full object-cover"
                    src={testimonial.image}
                    alt="Testimonial"
                  />
                ) : (
                  <>
                    <div className="flex items-center mb-6">
                      <img
                        className="w-20 h-20 rounded-full mr-6"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <div>
                        <h3 className="font-semibold text-2xl text-[#075593]">
                          {testimonial.name}
                        </h3>
                        <p className="text-xl text-[#328AB0]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-xl text-[#075593] italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;

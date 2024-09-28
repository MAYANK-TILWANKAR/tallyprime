import { Eye, Target, Diamond } from "lucide-react";

export default function Component() {
  const sections = [
    {
      title: "Vision",
      icon: Eye,
      color: "text-blue-600",
      borderColor: "border-blue-600",
      description:
        "We envision creating a Global Institute that will cater to every Indian's dream of stepping into Computer, Accounting, and Tally courses. We aim to be one of the best Tally Institutes in the next 5 years in India!",
    },
    {
      title: "Mission",
      icon: Target,
      color: "text-orange-500",
      borderColor: "border-orange-500",
      description:
        "We believe in Educating, Empowering and giving real-world Experience to anyone who walks through our doors. Be prepared for a life-changing experience!",
    },
    {
      title: "Values",
      icon: Diamond,
      color: "text-red-500",
      borderColor: "border-red-500",
      description:
        "Excellence, Integrity, Innovation, and Continuous Learning form the cornerstone of our approach to financial education and empowerment.",
    },
  ];

  return (
    <div className="lg:max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12 md:mb-16">
        Vision and Mission
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch space-y-12 md:space-y-0 md:space-x-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full md:w-1/3 text-center">
            <div
              className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${section.borderColor} border-4 flex items-center justify-center mb-6`}>
              <section.icon
                className={`w-10 h-10 md:w-12 md:h-12 ${section.color}`}
              />
            </div>
            <div
              className={`w-36 md:w-48 h-16 md:h-24 border-t-4 ${section.borderColor} rounded-t-full`}></div>
            <h2
              className={`text-lg sm:text-xl md:text-2xl font-semibold mt-4 mb-2 ${section.color}`}>
              {section.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 px-4">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

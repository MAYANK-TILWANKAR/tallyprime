import MakePaymentComponent from "./MakePaymentComponent";
const FixedBar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-[#075593]/10 p-4 flex items-center justify-center transition-transform duration-300 translate-y-0">
      <a
        href="#_"
        className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black bg-[#EDA915]">
        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#075593] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
        <span className="relative  text-black transition duration-300 group-hover:text-white ease">
          <MakePaymentComponent name="Book Your Demo class now for free" />
        </span>
      </a>
    </div>
  );
};

export default FixedBar;

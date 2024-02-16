import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Faqs = () => {
  return (
    <div className="w-full bg-[#f4c94a] flex flex-col items-center">
      <Navbar />
      <div className=" w-[56.25rem] h-[65.55rem] flex flex-col items-center mt-28">
        <div className="w-[56.25rem]  flex flex-col items-center justify-center">
          <h1 className="text-[4.89rem] font-extrabold leading-[3.6rem]">
            FAQs
          </h1>
        </div>
        <div className="w-[31.25rem] h-[29.66rem] flex flex-col mt-20">
          <h3 className="text-[1.58rem] font-semibold leading-[1.95rem] ">
            What is Figbruary?
          </h3>
          <p className="text-[1.14rem] leading-[1.5rem] mt-2">
            Figbruary is a fictional month created by combining Figma + February
            where you can experiment and design things daily to push the limits.
          </p>
          <h3 className="text-[1.58rem] font-semibold leading-[1.95rem] mt-8">
            Do I have to follow prompts strictly?
          </h3>
          <p className="text-[1.14rem] leading-[1.5rem] mt-2">No</p>
          <h3 className="text-[1.58rem] font-semibold leading-[1.95rem] mt-8">
            Do I have to post daily?
          </h3>
          <p className="text-[1.14rem] leading-[1.5rem] mt-2">No</p>
          <h3 className="text-[1.58rem] font-semibold leading-[1.95rem] mt-8">
            Other prompt based learning events
          </h3>
          <ul className="underline cursor-pointer">
            <li>Inktober</li>
            <li>Genuary</li>
            <li>Nodevember</li>
            <li>sculptober</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faqs;

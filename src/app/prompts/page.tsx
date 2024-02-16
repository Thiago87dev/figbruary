import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhiteBanner from "@/components/WhiteBanner";
import {data} from "@/data"
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full bg-[#bfbce3] flex flex-col items-center">
      <Navbar />
      <div className=" w-[56.25rem] h-[94.72rem] flex flex-col items-center mt-28">
        <div className="w-[56.25rem]  flex flex-col items-center justify-center">
          <h1 className="text-[4.89rem] font-extrabold leading-[3.6rem]">
            prompts
          </h1>
          <p className="text-[1.63rem] font-semibold leading-[2.1rem] mt-3">
            #FIGBRUARY2024
          </p>
        </div>
        <div className="W-[56.25rem] H-[73.75rem] flex flex-wrap gap-5 mt-20">
          {data.map((item) => (
            <Link href={`/prompt/${item.day}`} key={item.day}><WhiteBanner
              day={item.day}
              credit={item.credit}
              tags={item.tags}
              text={item.text}
              title={item.title}
            /></Link>
          ))}
        </div>
        <p className="text-[1.09rem] leading-[1.8rem] mt-4">✦ ✦ more soon.. ✦ ✦</p>
      </div>
      <Footer />
    </div>
  );
};

export default page;

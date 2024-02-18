import Navbar from "@/components/Navbar";
import imgFigbruary from "@/assets/img/figbruary.svg";
import Image from "next/image";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import {data} from "@/app/prompts/page"

interface BannerDetailsProps {
    params: {id: string}
}


export default function BannerDetails({params}: BannerDetailsProps) {
    const numberBanner = Number(params.id) - 1
  return (
    <div className="w-full bg-[#b3c9d7] flex flex-col items-center p-2">
      <Navbar />
      <div className=" w-full md:h-[88.35rem] z-10 flex flex-col items-center mt-28 ">
        <Image
          className=" w-[35rem] md:w-[56.25rem] md:h-[9.09rem]"
          src={imgFigbruary}
          alt="figbruary"
        />
        <h2 className="text-[2.78rem] mt-3">Challenges using Figma for</h2>
        <h2 className="text-[2.78rem] -mt-4">the next 29 days</h2>
        <h3 className="text-[1.63rem] font-semibold md:tracking-[0.31rem] mb-12 ">
          #Figbruary2024
        </h3>
        <Banner
          day={params.id}
          title={data[numberBanner].title}
          text={data[numberBanner].text}
          credit={data[numberBanner].credit}
          fullday={data[numberBanner].fullday}
          tags={data[numberBanner].tags}
        />
        <div className=" md:w-[31.25rem] md:h-[42.39rem] mt-10 ">
          <p className="text-[1.18rem]">
            Figbruary is a fictional month created by combining Figma + February
            where you can experiment and design things daily to push the limits.
          </p>
          <p className="text-[1.18rem] mt-8">
            For every 24 hour day within this 696 hour timespan of the month, we
            have prepared a prompt with instructions for you to design and
            create.
          </p>
          <p className="text-[0.91rem] mt-6">
            PS. - You don’t have to follow the prompt exactly. Or even at all.
          </p>
          <p className="text-[1.18rem] mt-12">
            Share your work and tag it with{" "}
            <span className="text-[1.44rem] font-bold">#figbruary</span> and{" "}
            <span className="text-[1.44rem] font-bold">#figbruary2024</span>
          </p>
          <h3 className="text-[1.46rem] font-semibold mt-12">
            ❤️ Prompts Credits
          </h3>
          <p className="text-[1.18rem]">
            Thanks to{" "}
            <span className="text-[1.36rem] font-semibold">
              @rogie, @miggi, @pablostanley, @realvjy, @efedorenko,
              @vyshnav_xyz, @o_lonks, @mrstev3n
            </span>{" "}
            & community members.
          </p>
          <h3 className="text-[1.46rem] font-semibold mt-12">
            🔗 All submissions
          </h3>
          <p className="text-[1.18rem] mb-12 md:mb-0">
            all the submissions will available soon
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import redSquare from "@/assets/img/redSquare.svg";
import fullStar from "@/assets/img/fullStar.svg";
import nuvem from "@/assets/img/nuvem.svg";
import triangulo from "@/assets/img/triangulo.svg";
import circle from "@/assets/img/circle.svg";
import star from "@/assets/img/star.svg";
import greenSquare from "@/assets/img/greenSquare.svg";
import bigNuvem from "@/assets/img/bigNuvem.svg";
import Image from "next/image";

const Backgroud = () => {
  return (
    <div className="w-full">
      <Image
        className="absolute w-[12.5rem] h-[12.5rem] left-[84.33rem] right-[1.02rem] top-[41.46rem] bottom-[56.72rem]"
        src={redSquare}
        alt="red square"
      />
      <Image
        className="absolute w-[15.63rem] h-[15.63rem] left-[78.65rem] right-[1.54rem] top-[8.75rem] bottom-[86.31rem]"
        src={fullStar}
        alt="full star"
      />
      <Image
        className="absolute w-[9.38rem] h-[9.38rem] left-[76.08rem] right-[10.36rem] top-[65rem] bottom-[36.31rem]"
        src={nuvem}
        alt="nuvem"
      />
      <Image
        className="absolute w-[12.5rem] h-[12.5rem] left-[10.3rem] right-[63.02rem] top-[75rem] bottom-[23.18rem]"
        src={triangulo}
        alt="triangulo"
      />
      <Image
        className="absolute w-[12.5rem] h-[12.5rem] left-[12.72rem] right-[65.59rem] top-[37.5rem] bottom-[60.68rem]"
        src={circle}
        alt="circle"
      />
      <Image
        className="absolute w-[12.5rem] h-[12.5rem] left-[14.29rem] right-[69.02rem] top-[7.5rem] bottom-[90.68rem]"
        src={star}
        alt="star"
      />
      <Image
        className="absolute w-[12.5rem] h-[12.5rem] left-[76.77rem] right-[5.54rem] top-[91.9rem] bottom-[6.28rem]"
        src={greenSquare}
        alt="greenSquare"
      />
      <Image
        className="absolute w-[9.31rem] h-[9.31rem] left-[-4.66rem] right-[81.16rem] top-[45.95rem] bottom-[55.92rem]"
        src={bigNuvem}
        alt="bigNuvem"
      />
    </div>
  );
};

export default Backgroud;

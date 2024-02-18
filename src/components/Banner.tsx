interface TagsTypes {
  name: string
  className: string
  id: number
}

interface BannerProps {
  day: string
  title: string
  text: string
  credit: string
  fullday: string
  tags: TagsTypes[]
}

const Banner = ({ day, title, text, credit, fullday, tags }: BannerProps) => {
  return (
    <div className="w-[15rem] h-[22rem] md:w-[43.75rem] md:h-[11.27rem] bg-[#F4C94A] flex-col md:flex-row flex justify-around items-center rounded-3xl border-solid border-2 border-black">
      <div className="w-[6.88rem] h-[8.14rem] flex flex-col items-center justify-center ">
        <div className="w-[6.75rem] h-[1.7rem] bg-[#A1D99E] rounded-tl-[0.69rem] rounded-tr-[0.69rem] flex justify-center items-center">
          <p className="text-[1.02rem] font-bold">{fullday}</p>
        </div>
        <div className="w-[6.75rem] h-[6.31rem] bg-[#fff0c9] rounded-bl-[0.69rem] rounded-br-[0.69rem] flex flex-col items-center">
          <h2 className="text-[2.39rem] font-bold">{day}</h2>
          <h2 className="text-[1.73rem] font-bold -mt-1">feb</h2>
        </div>
      </div>
      <div className="md:w-[31.63rem] ">
        <h1 className="md:text-[2.59rem] text-[1.59rem] font-bold">{title}</h1>
        <p className="md:text-[1.39rem] text-[0.99rem] leading-[1.95rem] ">
          {text}
        </p>
        <div className="flex justify-between flex-col md:flex-row items-center ">
          <p className="text-[1.2rem]">
            Credit:{" "}
            <span className="text-[1.34rem] font-semibold">{credit}</span>
          </p>
          <ul className="flex gap-2">
            {tags.map((tag) =>(
              <li className={`${tag.className}`} key={tag.id}>{tag.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;

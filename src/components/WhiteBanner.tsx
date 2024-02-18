interface TagsTypes {
  name: string;
  className: string;
  id: number;
}

interface WhiteBannerProps {
  day: string;
  title: string;
  text: string;
  credit: string;
  tags: TagsTypes[];
}

const WhiteBanner = ({ day, title, text, credit, tags }: WhiteBannerProps) => {
  return (
    <div className="md:w-[27.5rem] md:h-[13.75rem] w-[17.5rem] h-[17.75rem] bg-[#fff] flex flex-col justify-around items-center rounded-3xl border-solid border-2 border-black p-2 md:p-0">
      <div className="md:w-[24.88rem] md:h-[8.69rem] flex flex-col ">
        <h1 className="text-[2.02rem] font-semibold leading-[2.25rem]">{day} feb</h1>
        <h1 className="text-[1.77rem] font-bold leading-[2.9rem]">{title}</h1>
        <p className="text-[1.24rem]  leading-[1.63rem]">{text}</p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between md:w-[24.88rem] md:h-[1.63rem] ">
        <p className="text-[1.13rem]">
          Credit: <span className="text-[1.25rem] font-medium">{credit}</span>
        </p>
        <ul className="flex gap-2">
          {tags.map((tag) => (
            <li className={`${tag.className}`} key={tag.id}>
              {tag.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhiteBanner;

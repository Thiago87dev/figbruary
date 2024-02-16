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
    <div className="w-[27.5rem] h-[13.75rem] bg-[#fff] flex flex-col justify-around items-center rounded-3xl border-solid border-2 border-black">
      <div className="w-[24.88rem] h-[8.69rem] flex flex-col">
        <h1 className="text-[2.02rem] font-semibold leading-[2.25rem]">{day} feb</h1>
        <h1 className="text-[1.77rem] font-bold leading-[2.9rem]">{title}</h1>
        <p className="text-[1.24rem]  leading-[1.63rem]">{text}</p>
      </div>
      <div className="flex justify-between w-[24.88rem] h-[1.63rem]">
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

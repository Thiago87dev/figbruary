function tagType(name: string): string {
    switch (name) {
      case "Illustration":
        return "bg-[#FF9154] w-[6.59rem]";
      case "Anything":
        return "bg-[#FF70D7]  w-[5.78rem]";
      case "Prototype":
        return "bg-[#cd97e9]  w-[6.33rem]";
      case "UI":
        return "bg-[#00B2FF]  w-[2.37rem]";
      case "Variable":
        return "bg-[#68c14d]  w-[5.43rem]";
      case "Animation":
        return "bg-[#f7152f]  w-[6.54rem]";
      default:
        return "bg-[#F54045]  w-[7.78rem]";
    }
  }
  
  const classTagDefault =
    "rounded-[0.88rem] capitalize font-bold text-white flex justify-center items-center h-[1.63rem]";
  
  const tags = [
    {
      id: 1,
      name: "Illustration",
      className: `${tagType("Illustration")} ${classTagDefault}`,
    },
    {
      id: 2,
      name: "Anything",
      className: ` ${tagType("Anything")} ${classTagDefault}`,
    },
    {
      id: 3,
      name: "Prototype",
      className: ` ${tagType("Prototype")} ${classTagDefault}`,
    },
    {
      id: 4,
      name: "UI",
      className: ` ${tagType("UI")} ${classTagDefault}`,
    },
    {
      id: 5,
      name: "Variable",
      className: ` ${tagType("Variable")} ${classTagDefault}`,
    },
    {
      id: 6,
      name: "Animation",
      className: ` ${tagType("Animation")} ${classTagDefault}`,
    },
  ];
  
  export const data = [
    {
      day: "1",
      title: "Landscape",
      text: "Create a cool landscape illustrarion, city, skyscraper, night, sky, forest etc. ",
      credit: "@realvjy",
      fullday: "second",
      tags: tags.filter((tag) => tag.name === 'Illustration' || tag.name === 'Anything' ),
    },
    {
      day: "2",
      title: "Expand Menu",
      text: "A menu for your dashboard or app. Create something cool.",
      credit: "@miggi",
      fullday: "first",
      tags: tags.filter((tag) => tag.name === 'Prototype' || tag.name === 'UI' ),
    },
    {
      day: "3",
      title: "Only Frames",
      text: "You have only frames to create something creative.",
      credit: "@rogie",
      fullday: "third ",
      tags: tags.filter((tag) => tag.name === 'Anything' ),
    },
    {
      day: "4",
      title: "Keyboard Typing",
      text: "Create a widget for app or website.",
      credit: "@Olonk",
      fullday: "fourth ",
      tags: tags.filter((tag) => tag.name === 'Prototype' || tag.name === 'Variable' ),
    },
    {
      day: "5",
      title: "Watch UI",
      text: "A watch UI animation showing grattitude.",
      credit: "@miggi",
      fullday: "fifth  ",
      tags: tags.filter((tag) => tag.name === 'UI' ||tag.name === 'Animation' ),
    },
    {
      day: "6",
      title: "Create with Plugin",
      text: "Use a plugin to create something cool.",
      credit: "@realvjy",
      fullday: "sixth  ",
      tags: tags.filter((tag) => tag.name === 'Anything' ),
    },
    {
      day: "7",
      title: "AI speech visualizer",
      text: "Create a visually engaging interaction to creatively represent speech or talking.",
      credit: "@Olonk",
      fullday: "seventh",
      tags: tags.filter((tag) => tag.name === 'Prototype' || tag.name === 'UI' ),
    },
    {
      day: "8",
      title: "Weather Widget",
      text: "Create a widget for app or website.",
      credit: "@realvjy",
      fullday: "eighth ",
      tags: tags.filter((tag) => tag.name === 'UI'),
    },
    {
      day: "9",
      title: "Plant Care UI Card",
      text: "A responsive ui card for plant care instructions.",
      credit: "@Miggi",
      fullday: "ninth",
      tags: tags.filter((tag) => tag.name === 'UI' ),
    },
    {
      day: "10",
      title: "Line Chart",
      text: "Make an animated line chart.",
      credit: "@Eugene",
      fullday: "tenth  ",
      tags: tags.filter((tag) => tag.name === 'UI' || tag.name === 'Animation' ),
    },
  ];
import { BiTimeFive } from "react-icons/bi";
import icon from "../../assets/iconPerfil.png";

//  Passar a nova doação para essa lista e renderizar na tela
const Data = [
  {
    id: 1,
    image: icon,
    title: "Web developer",
    time: "Now",
    location: "San Francisico",
    desc: "We want a front-end developer for our company.You have to experinced in Developing visually appealing website.",
    company: "Apple Inc.",
  },
  {
    id: 2,
    image: icon,
    title: "UI/UX Designer",
    time: "1 day",
    location: "NYC",
    desc: "Google want to hire UI/UX designers for Seceret Project. You have to experinced in Figma and Adobe XD",
    company: "Google",
  },
  {
    id: 3,
    image: icon,
    title: "Software Eng.",
    time: "14Hrs",
    location: "Berlin",
    desc: "Amazon want to hire Software Engineers for Seceret Project. You have to experinced in JavaScript(MERN stack) and Python Programming langs.",
    company: "Amazon",
  },
  {
    id: 4,
    image: icon,
    title: "Product Manager",
    time: "2Hrs",
    location: "Budapest",
    desc: "Adobe want to hire highly experinces Product manager.who can manage the whole team to succeed",
    company: "Adobe",
  },
  {
    id: 5,
    image: icon,
    title: "CTO",
    time: "Now",
    location: "San Francisico",
    desc: "X want a CTO for our company.You have to experinced in Developing visually appealing website.",
    company: "X corp.",
  },
  {
    id: 6,
    image: icon,
    title: "Game Developer",
    time: "Now",
    location: "London",
    desc: "EA want a Game developer for our company.You have to experinced in Unity and Un Real Engine",
    company: "Electronic Arts",
  },
  {
    id: 7,
    image: icon,
    title: "App Developer ",
    time: "Now",
    location: "China",
    desc: "Huawei want a Mobile and Desktop app Developer.You have to experinced in Developing visually appealing Apps.",
    company: "Huawei",
  },
  {
    id: 8,
    image: icon,
    title: "Data Scientist",
    time: "Now",
    location: "Miami",
    desc: "We want a Data Scientist for our company.You have to experinced in Developing and analysis Data .",
    company: "Intel",
  },
  {
    id: 9,
    image: icon,
    title: "Tech Analysit",
    time: "12Hrs",
    location: "Seoul",
    desc: "We want a Tech Analysit for our company.",
    company: "Samsung",
  }

];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => (
          <div
            key={id}
            className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-greyIsh bg-opacity-60 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
          >
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-black">
                {title}
              </h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive /> {time}
              </span>
            </span>
            <h6 className="text-[#ccc]"> {location}</h6>
            <p className="text-[14px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-black">
              {desc}
            </p>

            <div className="company flex items-center gap-2">
              <img src={image} title="iconicons" alt="" className="w-[10%]" />
              <span className="text-[14px] py-[1rem] block group-hover:text-black">
                {company}
              </span>
            </div>
            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-gray-400 group-hover/item:text-textColor group-hover:text-black">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
};
export default Jobs;

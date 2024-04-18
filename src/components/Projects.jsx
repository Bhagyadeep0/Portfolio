import { motion } from "framer-motion";
import { fadeIn } from "./Variants";
import { useState } from "react";
import {
  SiAdobephotoshop,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiWordpress,
  SiPython,
} from "react-icons/si";
const Projects = () => {
  const workData = [
    {
      title: "Websites",
      info: [
        {
          title: "MyEasyDoctor",
          img: "/med.png",
          url: "https://myeasydoctor.netlify.app/",
        },
        {
          title: "GoCart",
          img: "/gocart.png",
          url: "https://gocart-bg.netlify.app/",
        },
      ],
    },
    {
      title: "GraphicDesign",
      info: [
        {
          id: 1,
          title: "E-sport Design",
          img: "/sage.png",
          url: "https://www.behance.net/bhagyadeep_ghosh",
        },
        {
          id: 2,
          title: "Anime Header",
          img: "/levi.png",
          url: "https://www.behance.net/bhagyadeep_ghosh",
        },
        {
          id: 2,
          title: "Thumbnail Design",
          img: "/smoke.png",
          url: "https://www.behance.net/bhagyadeep_ghosh",
        },
      ],
    },
  ];
  const [index, setIndex] = useState(0);

  return (
    <section id="project" className="space-y-20 container mx-auto">
      {/*section title */}
      <motion.div
        variants={fadeIn("scaleUp", 0.3, 1.2)}
        initial="hidden"
        whileInView="show"
        className="text-center "
      >
        <h1 className="h1">
          My Works <hr />
        </h1>
        <p className="p">Work done by me</p>
      </motion.div>

      {/* content */}
      <div className="flex flex-col lg:flex-row gap-20 justify-around items-center relative ">
        <div className="text-center">
          <p className="text-[30px] mb-5 font-semibold underline">Skills I have</p>
          <motion.p variants={fadeIn("scaleUp",0.4,1.5)} initial="hidden" whileInView="show" className="flex flex-wrap gap-5 text-3xl  cursor-pointer">
            <SiHtml5 className="hover:text-orange-700 transition-all duration-300 ease-in" />{" "}
            <SiCss3 className="hover:text-blue-700 transition-all duration-300 ease-in" />{" "}
            <SiJavascript className="hover:text-yellow-500 transition-all duration-300 ease-in" />{" "}
            <SiTailwindcss className="hover:text-blue-800 transition-all duration-300 ease-in" />{" "}
            <SiBootstrap className="hover:text-purple-700 transition-all duration-300 ease-in" />{" "}
            <SiFigma />{" "}
            <SiWordpress className="hover:text-slate-700 transition-all duration-300 ease-in" />{" "}
            <SiAdobephotoshop className="hover:text-blue-950 transition-all duration-300 ease-in" />{" "}
            <SiPython />{" "}
          </motion.p>
        </div>
        {/* data */}
        <div className="flex-1 flex flex-col items-center justify-center gap-5 w-full h-full max-w-[650px]">
          <div className=" flex w-full items-center justify-between px-2 ">
            {/* title */}
            {workData.map((item, itemIndex) => (
              <div
                className={`${
                  index === itemIndex && "text-red-600 underline"
                } text-[30px] cursor-pointer transition-all duration-300 ease-in`}
                key={itemIndex}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <motion.div variants={fadeIn("left",0.3,1.5)} initial="hidden" whileInView="show" className="shadow-md w-full bg-white/20 rounded-xl">
            {workData[index].info.map((item, itemIndex) => (
              <div
                className="transition-all duration-300 ease-in flex justify-between gap-5 text-center items-center py-2 px-4"
                key={itemIndex}
              >
                <p className="text-xl font-[600] flex-1">{item.title}</p>
                <p className="text-xl font-[600] flex-1 group">
                    <span className="hover:text-value5 transition-all duration-300 ease-in cursor-pointer">Show ME</span>
                    <div className="absolute w-[600px] h-full top-0 left-0 ">
                      <img
                        src={item.img}
                        alt=""
                        className="object-cover w-full h-full rounded-xl hidden group-hover:flex "
                      />
                    </div>
                </p>
                <p className="text-xl font-[600] flex-1 ">
                  <a href={item.url} target="_blank" className="hover:text-value5 transition-all duration-300 ease-in">
                    <span>Checkout</span>
                  </a>
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

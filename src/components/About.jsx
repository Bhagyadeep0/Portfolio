// icons
import { BsTextRight,BsDownload } from "react-icons/bs";
//framer-motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "./Variants";

const About = () => {
  const aboutData = [
    { icon: <BsTextRight />, title: "Experience", year: "1 year" },
    { icon: <BsTextRight />, title: "Experience", year: "1 year" },
    { icon: <BsTextRight />, title: "Experience", year: "1 year" },
  ];

  return (
    <section id="about" className=" space-y-10 container mx-auto ">
      {/* title */}
      <motion.div variants={fadeIn("scaleUp",0.3,1.2)} initial="hidden" whileInView="show" className="text-center">
        <h1 className="h1">About Me <hr className="bg-black w-full h-1" /></h1>
        
        <p className="p">My Introduction </p>
      </motion.div>
      {/* content */}
      <div className="w-full h-full flex flex-col lg:flex-row  items-center justify-around gap-10 ">
        {/* img */}

        <motion.div variants={fadeIn("right",0.3,1.2)} initial="hidden" whileInView="show" className=" flex justify-center items-center h-[500px]">
        <img
            src="/pic.jpg"
            alt="pfp"
            className="  rounded-xl object-cover content-center h-full "
          />
        </motion.div>

        {/* text,box */}
        <motion.div variants={fadeIn("scaleUp",0.3,1.2)} initial="hidden" whileInView="show" className="flex-1 flex flex-col items-center lg:items-start max-w-[550px]">
          {/* box */}
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-5 gap-x-20 mb-5">
            {aboutData.map((item, index) => (
              <div
                className=" bg-white/60 w-fit p-2 rounded-xl flex flex-col items-center gap-2"
                key={index}
              >
                <p className="bg-black text-white text-xl rounded-full w-fit p-[6px]">
                  {item.icon}
                </p>
                <p className="text-2xl font-[600]">{item.title}</p>
                <p className="p">{item.year}</p>
              </div>
            ))}
          </div>
          {/* text */}
    
            <p className="text-xl">
              Fronted developer, I create web pages with UI/Ux User
              interface,i have export. Fronted developer, I create web pages with UI/Ux User
              interface
            </p>
            <button className="btn flex items-center w-fit"><span>Download CV</span><span> <BsDownload /></span></button>
          </motion.div>
        </div>
    </section>
  );
};

export default About;
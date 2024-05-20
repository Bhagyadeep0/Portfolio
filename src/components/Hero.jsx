// icons
import { BsArrowRight,BsSendFill,BsDownload } from "react-icons/bs";
//framer-motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "./Variants";

const Hero = () => {
  return (
    <section id="home" className="w-full h-screen pt-[100px] px-[6px] cut-bottom bg-waves1  bg-no-repeat bg-cover bg-center relative">
      <div className="absolute w-full h-full top-0 left-0 xl:z-10 bg-waves2 bg-cover bg-no-repeat bg-center pointer-events-none"></div>
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-center border border-transparent w-full h-full rounded-2xl  container mx-auto">
        {/* text, btn, circle */}
        <motion.div
          className="flex-1 flex flex-col justify-around "
          variants={fadeIn("down", 0.2, 1.2)}
          initial="hidden"
          whileInView="show"
        >
          {/* text, btn*/}
          <div className="flex flex-col items-center text-center lg:text-start  lg:items-start">
            <h1 className="h1">I'm a FrontendDeveloper</h1>
            <p className="p">
              Self-taught frontend web developer passionate about creating
              awesome digital experiences. I specialize in HTML5, CSS3,
              JavaScript, Bootstrap, Tailwind CSS , PhotoShop, Sass and
              WordPress.
            </p>
            <div className="flex flex-wrap gap-y-0 gap-x-10 justify-around">
           <button className="btn"> <a href="#contact" className=" flex items-center gap-2"><span>Say, Hello</span> <span><BsSendFill/></span></a></button>
             <button className="btn"><a href="/Resume.pdf" className=" flex items-center w-full gap-2" download><span>Download CV</span><span> <BsDownload /></span></a></button>
            </div>
          </div>
          {/* circle */}
          <div className=" self-center lg:self-start">
            <a
              href={"#project"}
              className=" relative w-[150px] h-[150px] max-w-[185px] max-h-[185px] flex justify-center items-center bg-circle-star bg-cover bg-center bg-no-repeat group"
            >
              <img
                src={"/rounded-text.png"}
                width={121}
                height={128}
                alt="projects"
                className="animate-spin max-w-[141px] max-h-[148px]"
              />
              <BsArrowRight className="absolute text-4xl group-hover:rotate-90 transition-all duration-300" />
            </a>
          </div>
        </motion.div>
        {/* image */}
        <motion.div
          className=" hidden md:flex md:flex-1 w-1/2 content-center"
          variants={fadeIn("up", 0.3, 1.3)}
          initial="hidden"
          whileInView="show"
        >
          <img src="/avatar.png" alt="avatar" className="object-cover  wave-bottom" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

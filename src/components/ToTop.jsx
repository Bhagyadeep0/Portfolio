// icons
import { BsArrowUp } from "react-icons/bs";
//framer-motion
import { motion } from "framer-motion";
import { useState,useEffect } from "react";


const ToTop = () => {
  const [isVisible,setIsVisible]=useState(false);
  const toggleVisibility=()=> {
    window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false);
  }
  useEffect(()=>{
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  },[]);
  return (
    <div
      className={`${isVisible?"opacity-100":"opacity-0"} transition-all duration-500 ease-in  fixed bottom-10 right-10 bg-black text-white p-2 text-lg rounded-full `}
    >
      <a href="#home" className="w-full h-full">
        {" "}
        <BsArrowUp className="hover:-translate-y-1 transition-all ease-in duration-300"/>
      </a>
    </div>
  );
};

export default ToTop;

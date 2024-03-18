import './scrollDot.scss'
import {motion} from "framer-motion";

const ScrollDot = () => {
    const urls = ["Home", "About", "Projects", "Contact"];
  return (
    <div className='scrollDot'>
       {urls.map((url) => (
          <motion.a whileHover={{background:"pink"}} href={`#${url}`} key={url}>
          </motion.a>
        ))}
    </div>
  )
}

export default ScrollDot

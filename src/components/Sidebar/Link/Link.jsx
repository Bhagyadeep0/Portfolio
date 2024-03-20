import {motion} from "framer-motion";
import {linkVariants,linkItemVariants,urls} from '../../Item/Item'



const Link = () => {

  return (
    <motion.div className="links" variants={linkVariants} >
      {urls.map((url) => (
        <motion.a className="urls" href={`#${url}`} key={url} variants ={linkItemVariants}  whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
          {url}
        </motion.a>
      ))}
    </motion.div> 
  );
};

export default Link;

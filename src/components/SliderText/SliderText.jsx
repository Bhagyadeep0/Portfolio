import {motion} from 'framer-motion';
import { sliderVariants } from '../Item/Item';
import "./sliderText.scss"

const SliderText = () => {
  return (
    <div>
      <motion.div
        className="slidingText"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Passionate Developer and Creative Design
      </motion.div>
    </div>
  );
};

export default SliderText;

import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { contactVariants } from "../Item/Item";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
  <div className="contact">
      <motion.div
      className="wrapper"
      variants={contactVariants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : ''}
    >
      <motion.div className="textContainer" variants={contactVariants}>
        <motion.h1>Let’s work together </motion.h1>
        <motion.div className="item" variants={contactVariants}>
          <h2>Mail</h2>
          <p>b.ghosh0330@gmail</p>
        </motion.div>
        <motion.div className="item" variants={contactVariants}>
          <h2>Mail</h2>
          <p>b.ghosh0330@gmail</p>
        </motion.div>
        <motion.div className="item" variants={contactVariants}>
          <h2>Mail</h2>
          <p>b.ghosh0330@gmail</p>
        </motion.div>
      </motion.div>
      <motion.div className="formContainer" variants={contactVariants}>
        <motion.div
          className="contactSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : ''}
              transition={{ duration: 10 }}
              fill="none"
              d="M17 2.75C14.6528 2.75 12.75 4.65279 12.75 7C12.75 7.68122 12.9098 8.32298 13.1931 8.89186C13.3521 9.2111 13.418 9.60224 13.3131 9.99416L13.06 10.94L14.0059 10.6869C14.3978 10.5821 14.7889 10.6479 15.1082 10.8069C15.6771 11.0903 16.3188 11.25 17 11.25C19.3472 11.25 21.25 9.34721 21.25 7C21.25 4.65279 19.3472 2.75 17 2.75ZM11.25 7C11.25 3.82436 13.8244 1.25 17 1.25C20.1757 1.25 22.75 3.82436 22.75 7C22.75 10.1756 20.1757 12.75 17 12.75C16.0816 12.75 15.2114 12.5341 14.4394 12.1496C14.4221 12.141 14.4082 12.1376 14.3998 12.1366C14.3959 12.1361 14.3936 12.1362 14.3926 12.1362L13.2806 12.4338C12.2399 12.7122 11.2878 11.7601 11.5663 10.7195L11.8638 9.60744C11.8639 9.60649 11.8639 9.60415 11.8634 9.6002C11.8624 9.5918 11.859 9.5779 11.8504 9.56061C11.4659 8.78866 11.25 7.91847 11.25 7ZM3.7177 4.09213C4.94388 2.80119 6.9721 3.04305 7.98569 4.47663L9.24668 6.26012C10.0574 7.40678 9.98893 9.00095 9.02135 10.0196L8.7765 10.2774C8.77582 10.2792 8.7751 10.2811 8.77436 10.2832C8.76142 10.3196 8.7287 10.4354 8.7609 10.6551C8.82765 11.1106 9.1793 12.0363 10.607 13.5394C12.0391 15.0472 12.9078 15.4025 13.3103 15.4679C13.484 15.4961 13.5748 15.4716 13.6038 15.4614L14.0124 15.0312C14.8862 14.1113 16.2485 13.93 17.347 14.5623L19.2575 15.662C20.8904 16.6019 21.2705 18.901 19.9655 20.2749L18.545 21.7705C18.1016 22.2373 17.497 22.6357 16.75 22.7095C14.9261 22.8895 10.701 22.655 6.27161 17.9917C2.13844 13.6403 1.35326 9.85536 1.25401 8.00613C1.20497 7.09246 1.61224 6.30877 2.14809 5.74462L2.69189 6.26114L2.1481 5.74462L3.7177 4.09213ZM6.7609 5.3426C6.24855 4.61795 5.32812 4.57471 4.80528 5.12516L3.23568 6.77765C2.90429 7.12654 2.73042 7.52644 2.75185 7.92574C2.83289 9.43555 3.48307 12.8778 7.35919 16.9587C11.4234 21.2375 15.1676 21.3584 16.6026 21.2167C16.8864 21.1887 17.1783 21.0313 17.4574 20.7375L18.8779 19.2419C19.4907 18.5968 19.3301 17.4345 18.5092 16.962L16.5987 15.8623C16.086 15.5672 15.4854 15.6584 15.1 16.0642L14.6445 16.5437L14.1008 16.0272C14.6445 16.5437 14.6439 16.5444 14.6432 16.5452L14.6417 16.5467L14.6388 16.5497L14.6324 16.5562L14.6181 16.5703C14.6078 16.5803 14.5959 16.5913 14.5825 16.6031C14.5556 16.6266 14.5223 16.6535 14.4824 16.6819C14.4022 16.7387 14.2955 16.8012 14.1606 16.8544C13.8846 16.9632 13.5201 17.0216 13.0699 16.9485C12.1923 16.806 11.0422 16.1757 9.51937 14.5724C7.99202 12.9644 7.40746 11.7647 7.27675 10.8726C7.21022 10.4185 7.26346 10.0549 7.36116 9.78033C7.40921 9.64531 7.46594 9.53764 7.51826 9.45588C7.54435 9.41512 7.56922 9.38098 7.5912 9.3532C7.60219 9.33931 7.61246 9.32701 7.62182 9.31625L7.63514 9.30127L7.64125 9.29463L7.64415 9.29152L7.64556 9.29002C7.64626 9.28929 7.64695 9.28856 8.19074 9.80507L7.64695 9.28856L7.93376 8.9866C8.3793 8.51753 8.44403 7.72315 8.02189 7.12608L6.7609 5.3426Z"
              // fill="#1C274C"
            />
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <motion.input
            type="text"
            required
            placeholder="Name"
            variants={contactVariants}
          />
          <motion.input
            type="email"
            required
            placeholder="Email"
            variants={contactVariants}
          />
          <motion.textarea
            rows="8"
            placeholder="What you wanna say"
            variants={contactVariants}
          />
          <motion.button
            whileTap={{ background: "orangeRed" }}
            variants={contactVariants}
            type="submit"
          >
            Send
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  </div>
  );
};

export default Contact;

import "./sidebar.scss";
import Link from "../SocialLink/Link";
import ToggleButton from "./ToggleButton/ToggleButton";
import { useState } from "react";
import { motion } from "framer-motion";
import {sidebarVariants} from '../Item/Item';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "close"}>
      <motion.div className="bg" variants={sidebarVariants}>
        <Link />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;

import React from "react";
import Overview from "../Overview/Overview";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div
      initial={{ x: 1600  }}
      animate={{ x: 0,  }}
      exit={{x:1600}}
      transition={{
        type: "spring",
        // stiffness: 400,
        damping: 20, 
        x:{ duration:0.5 }
      }}
    >
      <Overview />
    </motion.div>
  );
}

export default Home;

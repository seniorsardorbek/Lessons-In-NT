import React from "react";
import UnresolvedItems from "../UnresolvedItems/UnresolvedItems";
import { motion } from "framer-motion";
function Unresolved() {
  const constraintsRef = React.useRef(null);
  return (
    <motion.div ref={constraintsRef} className="unresolved">
      <div  className="head">
        <div className="head-title">
          <h1>Unresolved tickets</h1>
          <p>Group: Support</p>
        </div>
        <button>View details</button>
      </div>
      <motion.ul drag dragConstraints={constraintsRef}>
        <UnresolvedItems text={"Waiting on Feature Request"} num={4238} />
        <UnresolvedItems text={"Awaiting Customer Response"} num={1005} />
        <UnresolvedItems text={"Awaiting Developer Fix"} num={914} />
        <UnresolvedItems text={"Pending"} num={281} />
      </motion.ul>
    </motion.div>
  );
}

export default Unresolved;

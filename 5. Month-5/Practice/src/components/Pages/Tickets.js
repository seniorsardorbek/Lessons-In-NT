import React from "react";
import { motion } from "framer-motion";

import sort from '../../images/Vectort.png'
import filter from '../../images/filter.png'
import Userlist from "../Userlist/Userlist";
import avatar from "../../images/mheader.png";

import Buttons from "../Buttons/Buttons";
function Tickets() {
  return (
    <motion.div
      initial={{ x: 1600, }}
      animate={{ x: 0, }}
      exit={{x: 1600}}
      transition={{
        type: "spring",
        // stiffness: 260,
        damping: 20,
        x: { duration: 0.5 },
      }}
      className="ticketssec"
    >
     <div className="tickets_head">
      <h1>All tickets</h1>
      <div className="tickets_buttons">
      <button>
        <img src={sort} alt="img"  /> <span>Sort</span>
      </button>
      <button>
        <img src={filter} alt="img"  /> <span>Filter</span>
      </button>
      </div>
     </div>
      <ul>
        <li className="list-head"><span>Ticket details</span> <span>Customer name</span> <span>Date</span> <span>Priority</span></li>
        <Userlist img={avatar} title={"Adding Images to Featured Posts" }update={"Updated 1 day ago"} cname={"Tom Cruise"} cactive={"on 24.05.2019"} button={<Buttons btnname={"Normal"} btnstyle={"red"}/>} />
        <Userlist img={avatar} title={"Adding Images to Featured Posts" }update={"Updated 1 day ago"} cname={"Tom Cruise"} cactive={"on 24.05.2019"} button={<Buttons btnname={"Normal"} btnstyle={"green"}/>} />
        <Userlist img={avatar} title={"Adding Images to Featured Posts" }update={"Updated 1 day ago"} cname={"Tom Cruise"} cactive={"on 24.05.2019"} button={<Buttons btnname={"Normal"} btnstyle={"yellow"}/>} />
        <Userlist img={avatar} title={"Adding Images to Featured Posts" }update={"Updated 1 day ago"} cname={"Tom Cruise"} cactive={"on 24.05.2019"} button={<Buttons btnname={"Normal"} btnstyle={"green"}/>} />
        <Userlist img={avatar} title={"Adding Images to Featured Posts" }update={"Updated 1 day ago"} cname={"Tom Cruise"} cactive={"on 24.05.2019"} button={<Buttons btnname={"Normal"} btnstyle={"red"}/>} />
        <Userlist img={avatar} title={"Adding Images to Featured Posts" }update={"Updated 1 day ago"} cname={"Tom Cruise"} cactive={"on 24.05.2019"} button={<Buttons btnname={"Normal"} btnstyle={"green"}/>} />
        <Userlist img={avatar} title={"Adding Images to Featured Posts" }update={"Updated 1 day ago"} cname={"Tom Cruise"} cactive={"on 24.05.2019"} button={<Buttons btnname={"Normal"} btnstyle={"red"}/>} />
      
      </ul>

    </motion.div>
  );
}

export default Tickets;

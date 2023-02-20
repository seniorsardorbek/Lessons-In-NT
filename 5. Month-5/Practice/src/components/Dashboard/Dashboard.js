import React from 'react'
import logo from '../../images/logo.png'
import vec1 from '../../images/Vector.png'
import vec2 from '../../images/Vector1.png'
import vec3 from '../../images/Vector2.png'
import vec4 from '../../images/Vector3.png'
import vec5 from '../../images/Vector4.png'
import vec6 from '../../images/Vector5.png'
import vec7 from '../../images/Vector6.png'
import vec8 from '../../images/Vector7.png'
import DashboardUL from '../DashboardUL/DashboardUL'



function Dashboard() {

  return (
    <div className="dashboard-head">
           <div className="dhh"> <img src={logo} alt="rasm" /> <h1>Dashboard Kit</h1></div>
        <div className='navs' >
            <DashboardUL img={vec1}   title={"Overview"} path={'/'} />
            <DashboardUL img={vec2}  title={"Tickets"}  path={"/tickets"} />
            <DashboardUL img={vec3}  title={"Overview"} path={"/home"} />
            <DashboardUL img={vec4}  title={"Overview"} path={"/home"} />
            <DashboardUL img={vec5}  title={"Overview"} path={"/home"} />
            <DashboardUL img={vec6}  title={"Overview"} path={"/home"} />
            <span className='hrr'> </span>
            <DashboardUL img={vec7} title={"Settings"} path={"/home"} />
            <DashboardUL img={vec8} title={"Subscription"} path={"/home"} />
        </div>
    </div> 
  )
}

export default Dashboard
import React from "react";
import Homepg from "./Homepg";
import DriverLogin from "./DriverLogin";
import Driverhomepage from "./Driverhomepage";

function Home() {
    return (
      <div>
        <Homepg/>
        {/* <DriverLogin/> */}
        <Driverhomepage/>
        

      </div>
    );
  }

  export default Home;
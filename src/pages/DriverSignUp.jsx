import React, { useState } from "react";
import { Link } from "react-router-dom";
import Driverhomepage from "./Driverhomepage";
import LogoParkingImg from "../components/LogoParkingImg";
import DriverLogin from "./DriverLogin";

function DriverSignUp() {
  const[ Data, setData] = useState({
    Name:"",
    Vehicle_Name:"",
    Vehicle_Number:"",
    Password:""
  })  

  const handlechange=(e)=>{
    setData({...Data, [e.target.name]:e.target.value});

    console.log(Data)
  }

  const submitform=(e)=>{
    e.preventdefault();
    Data={
      Name:Data.Name,
      Vehicle_Number:Data.Vehicle_Number,
      Vehicle_Name:Data.Vehicle_Name,
      Password:Data.Password
    }
  }

  return (
      <div className="App">
        <form onSubmit={submitform}>
          <LogoParkingImg/>
          <div class="flex justify-around ">  
            <div class="border border-cyan-600 w-1/2 rounded-2xl bg-cyan-50">
              <div class="text-3xl cursor-none font-serif font-bold m-5 text-center text-neutral-950 underline underline-offset-2"> Driver's Login </div>
              <div class="cursor-text border border-cyan-600 bg-white h-8 w-2/3 rounded-full m-3 mx-auto">
                <input class="w-4/5 my-1 mx-5" type="text" name="Name" placeholder="Name"
                onChange={handlechange} value={Data.Name} /></div>
                <div class="cursor-text border border-cyan-600 bg-white h-8 w-2/3 rounded-full m-3 mx-auto">
                <input class="w-4/5 my-1 mx-5" type="text" name="Vehicle_Name" placeholder="Vehicle Name"
                onChange={handlechange} value={Data.Vehicle_Name} /></div>
                <div class="cursor-text border border-cyan-600 bg-white h-8 w-2/3 rounded-full m-3 mx-auto">
                <input class="w-4/5 my-1 mx-5" type="text" name="Vehicle_Number" placeholder="Vehicle Number"
                onChange={handlechange} value={Data.Vehicle_Number} /></div>
              <div class="cursor-text border border-cyan-600 bg-white h-8 w-2/3 rounded-full m-3 mx-auto">
                <input class="w-4/5 my-1 mx-5" type="password" name="Password" placeholder="Password"
                onChange={handlechange} value={Data.Password} /></div>
              <div class="cursor-pointer font-serif font-bold text-center text-lg text-neutral-900 border border-cyan-600 bg-sky-400 h-8 w-1/6 rounded-full m-3 mx-auto"
                    > <Link to="/Driverhomepage"><input type="submit" name="Login" value=""/>Sign Up</Link> </div>
              <div class="text-center cursor-pointer mb-3 hover:underline">
                <Link to="/DriverLogin" class="hover text-xs text-center ">Login Instead</Link>
              </div>
    
            </div>
          </div>
        </form>
      </div>
    );
  }

  export default DriverSignUp;
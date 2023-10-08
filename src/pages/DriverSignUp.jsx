import React from "react";
import { Link } from "react-router-dom";
import Driverhomepage from "./Driverhomepage";
import LogoParkingImg from "../components/LogoParkingImg";

function DriverSignUp() {
    return (
      <div className="App">
        <LogoParkingImg/>
        <div class="flex justify-around ">  
          <div class="border border-cyan-600 w-1/2 rounded-2xl bg-cyan-50">
            <div class="text-3xl cursor-none font-serif font-bold m-5 text-center text-neutral-950 underline underline-offset-2"> Driver's Login </div>
            <div class="cursor-text border border-cyan-600 bg-white h-8 w-2/3 rounded-full m-3 mx-auto">
              <input class="w-4/5 my-1 mx-5" type="text" placeholder="Name"/></div>
              <div class="cursor-text border border-cyan-600 bg-white h-8 w-2/3 rounded-full m-3 mx-auto">
              <input class="w-4/5 my-1 mx-5" type="text" placeholder="Vehicle Name"/></div>
              <div class="cursor-text border border-cyan-600 bg-white h-8 w-2/3 rounded-full m-3 mx-auto">
              <input class="w-4/5 my-1 mx-5" type="text" placeholder="Vehicle Number"/></div>
            <div class="cursor-text border border-cyan-600 bg-white h-8 w-2/3 rounded-full m-3 mx-auto">
              <input class="w-4/5 my-1 mx-5" type="button" placeholder="Password"/></div>
            <div class="cursor-pointer font-serif font-bold text-center text-lg text-neutral-900 border border-cyan-600 bg-sky-400 h-8 w-1/6 rounded-full m-3 mx-auto"
                  > <Link to="/Driverhomepage"><input type="submit" name="Login" value=""/>Login</Link> </div>
            <div class="text-center cursor-pointer mb-3 hover:underline">
              <sub class="hover text-center ">Don't have an account? let's create new one</sub>
            </div>

          </div>
        </div>
      </div>
    );
  }

  export default DriverSignUp;
import React from "react";
import OwnerHomePage from "./OwnerHomePage";
import { Link } from "react-router-dom";
import LogoParkingImg from "../components/LogoParkingImg";
import DriverSignUp from "./DriverSignUp";

function OwnerLogin() {
    return (
      <div className="App">
        <LogoParkingImg/>
        <div class="flex justify-around ">  
        <div class="border border-cyan-600 w-1/2 rounded-2xl bg-cyan-50">
            <div class="text-3xl cursor-none font-serif font-bold m-5 text-center text-neutral-950 underline underline-offset-2"> Owner's Login </div>
            <div class="cursor-text border border-cyan-600 bg-white h-8 w-2/3 rounded-full m-3 mx-auto">
              <input class="w-4/5 my-1 mx-5" type="text" placeholder="Username"/></div>
            <div class="cursor-text border border-cyan-600 bg-white h-8 w-2/3 rounded-full m-3 mx-auto">
              <input class="w-4/5 my-1 mx-5" type="password" placeholder="Password"/></div>
            <div class="cursor-pointer font-serif font-bold text-center text-lg text-neutral-900 border border-cyan-600 bg-sky-400 h-8 w-1/6 rounded-full m-3 mx-auto"
                  > <Link to="/OwnerHomePage"><input type="submit" name="Login" value=""/>Login</Link> </div>
            <div class="text-center cursor-pointer mb-3 hover:underline">
              <Link to="/OwnerSignUp" class="text-xs text-center ">Don't have an account? let's create new one</Link>
            </div>

          </div>
        </div>
      </div>
    );
  }

  export default OwnerLogin;
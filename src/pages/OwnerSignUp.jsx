import React from "react";
import { Link } from "react-router-dom";
import OwnerHomePage from "./Driverhomepage";
import LogoParkingImg from "../components/LogoParkingImg";
import OwnerLogin from "./OwnerLogin";

function OwnerSignUp() {
    return (
      <div className="App">
        <LogoParkingImg/>
        <div class="flex justify-around ">  
          <div class="border border-cyan-600 w-1/2 rounded-2xl bg-cyan-50">
            <div class="text-3xl cursor-none font-serif font-bold m-5 text-center text-neutral-950 underline underline-offset-2"> Owner's Login </div>
            <div class="cursor-text border border-cyan-600 bg-white h-8 w-2/3 rounded-full m-3 mx-auto">
              <input class="w-4/5 my-1 mx-5" type="text" placeholder="Name"/></div>
              <div class="cursor-text border border-cyan-600 bg-white h-8 w-2/3 rounded-full m-3 mx-auto">
              <input class="w-4/5 my-1 mx-5" type="text" placeholder="Place Name"/></div>
              <div class="cursor-text border border-cyan-600 bg-white h-8 w-2/3 rounded-full m-3 mx-auto">
              <input class="w-4/5 my-1 mx-5" type="text" placeholder="Sqr. Feet"/></div>
              <div class="cursor-text border border-cyan-600 bg-white h-8 w-2/3 rounded-full m-3 mx-auto">
              <input class="w-4/5 my-1 mx-5" type="url" placeholder="Location Link"/></div>
            <div class="cursor-text border border-cyan-600 bg-white h-8 w-2/3 rounded-full m-3 mx-auto">
              <input class="w-4/5 my-1 mx-5" type="text" placeholder="Password"/></div>
            <div class="cursor-pointer font-serif font-bold text-center text-lg text-neutral-900 border border-cyan-600 bg-sky-400 h-8 w-1/6 rounded-full m-3 mx-auto"
                  > <Link to="/OwnerHomePage"><input type="submit" name="Login" value=""/>Sign Up</Link> </div>
            <div class="text-center cursor-pointer mb-3 hover:underline">
              <Link to="/OwnerLogin" class="hover text-xs text-center ">Login Instead</Link>
            </div>

          </div>
        </div>
      </div>
    );
  }

  export default OwnerSignUp;
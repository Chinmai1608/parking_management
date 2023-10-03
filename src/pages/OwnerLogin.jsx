import React from "react";
import OwnerHomePage from "./OwnerHomePage";
import { Link } from "react-router-dom";

function OwnerLogin() {
    return (
      <div className="App">
        <div class="flex flex-row justify justify-between ">
          <img class="h-48 w-1/3 object-cover -my-" 
               src="https://drive.google.com/uc?export=view&id=1JNoUoN932MJzL9wLysCHyrTYCE5f4-xJ"
               alt="Saarthi Parking logo"/>
          <img class="h- w-1/6 object-cover mr-6 " 
               src="https://drive.google.com/uc?export=view&id=1zxlipKHKqdte0bvqibKG1ocsNug2D0Ye"
               alt="Parking"/>
               {/* https://drive.google.com/file/d/1zxlipKHKqdte0bvqibKG1ocsNug2D0Ye/view?usp=sharing */}
          
        </div>
        <div class="flex justify-around ">  
          <div class="border border-cyan-600 w-1/2 rounded-2xl bg-cyan-50">
            <div class="text-3xl cursor-none font-serif font-bold m-5 text-center text-neutral-950 underline underline-offset-2"> Owner's Login </div>
            <div class="cursor-text border border-cyan-600 bg-white h-8 w-2/3 rounded-full m-3 mx-auto"
                   type="input" placeholder="Driver's Name">  </div>
            <div class="cursor-text border border-cyan-600 bg-white h-8 w-2/3 rounded-full m-3 mx-auto"
                   type="input" placeholder="Driver's Name">  </div>
            <div class="cursor-pointer font-serif font-bold text-center text-lg text-neutral-900 border border-cyan-600 bg-sky-400 h-8 w-1/6 rounded-full m-3 mx-auto"
                  > <Link to="/OwnerHomePage">Login</Link> </div>

          </div>
        </div>
      </div>
    );
  }

  export default OwnerLogin;
import React from "react";

function Home() {
    return (
      <div className="App">
        <div>
          <img class="h-48 w-48 object-cover" 
               src="https://drive.google.com/file/d/1JNoUoN932MJzL9wLysCHyrTYCE5f4-xJ/view?usp=drive_link"
               alt="Saarthi Parking"/>
               
          
        </div>
        <div class="grid grid-cols-2 m-10 align-middle">
            <div class="flex flex-row justify-center">
              <div Class=" cursor-pointer h-44 w-44 rounded-lg bg-gradient-to-r from-slate-300 via-blue-50 to-slate-300 justify-center ">
                <h1 class="m-5 text-center text-xl">
                  Book Parking Slot 
                </h1>
              </div>
            </div>
            <div class="flex flex-row justify-center">
              <div Class=" cursor-pointer h-44 w-44 rounded-lg bg-gradient-to-r from-slate-300 via-blue-50 to-slate-300 justify-center ">
                <h1 class="m-5 text-center text-xl">
                  Rent my Place
                </h1>
              </div>
            </div>          
        </div>
      </div>
    );
  }

  export default Home;
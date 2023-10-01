import React from "react";

function Home() {
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
        <div class="bg-no-repeat bg-cover bg-center h-96 flex flex-col justify-center bg-[url('https://i.pinimg.com/736x/1a/ad/63/1aad6350475e4020e1a091aacb18f727.jpg')]">          
          <div class="grid grid-cols-2 m-10 align-middle ">
              <div class="flex flex-row justify-center">
                <div Class=" cursor-pointer h-44 w-44 rounded-full bg-transparent hover:{ease-in } transition  shadow-2xl shadow-white backdrop-blur-2xl border-spacing-5  border justify-center ">
                  <h1 class="m-5 my-12 text-center text-2xl font-serif text-cyan-50 font-bold">
                    Book Parking Slot 
                  </h1>
                </div>
              </div>
              <div class="flex flex-row justify-center">
                <div Class=" cursor-pointer h-44 w-44 rounded-full bg-transparent hover:{ease-in } transition  shadow-2xl shadow-white backdrop-blur-2xl border-spacing-5  border justify-center ">
                  <h1 class="m-5 my-12 text-center text-2xl font-serif text-cyan-50 font-bold">
                    Rent my Place
                  </h1>
                </div>
              </div>          
          </div>
          
        </div>
        <div class="w-full bg-slate-800 h-6  border-t text-center text-gray-300 text-sm">
            copyright @SaarthiParking2023
        </div>
      </div>
    );
  }

  export default Home;
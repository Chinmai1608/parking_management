import React from 'react'
import { Link } from 'react-router-dom'
import Homepg from '../pages/Homepg'

const LogoParkingImg = () => {
  return (
    <div>
      <div class="flex flex-row justify justify-between ">
          <div class="h-48 w-1/3 object-cover -my-32 cursor-pointer">
          <Link to="/Homepg"><img  
               src="https://drive.google.com/uc?export=view&id=1JNoUoN932MJzL9wLysCHyrTYCE5f4-xJ"
               alt="Saarthi Parking logo"/> </Link></div>
          <img class="h- w-1/6 object-cover mr-6 " 
               src="https://drive.google.com/uc?export=view&id=1zxlipKHKqdte0bvqibKG1ocsNug2D0Ye"
               alt="Parking"/>
               {/* https://drive.google.com/file/d/1zxlipKHKqdte0bvqibKG1ocsNug2D0Ye/view?usp=sharing */}
          
        </div>
    </div>
  )
}

export default LogoParkingImg

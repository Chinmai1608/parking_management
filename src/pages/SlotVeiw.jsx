import React from 'react'
import { Link } from 'react-router-dom'

const SlotVeiw = () => {
  return (
    <div>
        <div><Link to="/Homepg">
                <img class="h-44 w-3/12 object-cover -my-" 
               src="https://drive.google.com/uc?export=view&id=1JNoUoN932MJzL9wLysCHyrTYCE5f4-xJ"
               alt="Saarthi Parking logo"/></Link>
        </div>
        <div class="h-96" >          
            <img class="h-48"
                src="https://drive.google.com/file/d/1VU2L7BatXDKSaVu4GhHABLOKTesAnoE3/view?usp=sharing"
                alt=""            
            />
        </div>
    </div>
  )
}

export default SlotVeiw

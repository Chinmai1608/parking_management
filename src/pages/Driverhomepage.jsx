import { Link } from "react-router-dom";

function Driverhomepage(){
    return (
        <div classname="App">
            <div><Link to="/Homepg">
                <img class="h-44 w-3/12 object-cover -my-" 
               src="https://drive.google.com/uc?export=view&id=1JNoUoN932MJzL9wLysCHyrTYCE5f4-xJ"
               alt="Saarthi Parking logo"/></Link>
            </div>
            <div class="grid grid-cols-2">
                <div class=" h-96 ">
                    <div class="grid grid-cols-2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d119182.2758375204!2d75.485787!3d21.0148284!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bd90fafffffffff%3A0x98d3058aff18773e!2s60%2C%20Mahatma%20Gandhi%20Rd%2C%20Jilha%20Peth%2C%20Pratap%20Nagar%2C%20Jalgaon%2C%20Maharashtra%20425001!3m2!1d21.0148482!2d75.5681887!5e0!3m2!1sen!2sin!4v1696255943797!5m2!1sen!2sin" 
                        class="m-5 border border-neutral-900 border-spacing-x-10" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div class="my-auto font-serif">
                            <div class="flex"> <div class="font-bold">Place:</div>Phule Market</div>
                            <div class="flex"> <div class="font-bold">Distance:</div>3kms</div>
                            <div class="flex"> <div class="font-bold">Time:</div>4min30sec</div>
                            <div class="cursor-pointer font-serif font-bold text-center text-neutral-900 border border-cyan-600 bg-sky-400 h-8 w-2/6 rounded-full m-3">
                                 Book a Slot </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d119182.2758375204!2d75.485787!3d21.0148284!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bd90fafffffffff%3A0x98d3058aff18773e!2s60%2C%20Mahatma%20Gandhi%20Rd%2C%20Jilha%20Peth%2C%20Pratap%20Nagar%2C%20Jalgaon%2C%20Maharashtra%20425001!3m2!1d21.0148482!2d75.5681887!5e0!3m2!1sen!2sin!4v1696255943797!5m2!1sen!2sin" 
                        class="m-5 border border-neutral-900 border-spacing-x-10" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div class="my-auto font-serif">
                            <div class="flex"> <div class="font-bold">Place:</div>Phule Market</div>
                            <div class="flex"> <div class="font-bold">Distance:</div>3kms</div>
                            <div class="flex"> <div class="font-bold">Time:</div>4min30sec</div>
                            <div class="cursor-pointer font-serif font-bold text-center text-neutral-900 border border-cyan-600 bg-sky-400 h-8 w-2/6 rounded-full m-3">
                                 Book a Slot </div>
                        </div>
                    </div>

                </div>
                <div class=" bg-cyan-800">
                    <div>
                        
                    </div>

                </div>
            </div>

        </div>

    );
}

export default Driverhomepage;
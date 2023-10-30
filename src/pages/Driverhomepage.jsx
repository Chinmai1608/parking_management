import { Link } from "react-router-dom";
import SlotVeiw from "./SlotVeiw";

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
                            <div class="flex"> <div class="font-bold">Distance:</div>9.5kms</div>
                            <div class="flex"> <div class="font-bold">Time:</div>22min</div>
                            <Link to="/SlotVeiw" class="cursor-pointer font-serif font-bold text-center text-neutral-900 border border-cyan-600 bg-sky-400 h-8 w-2/6 rounded-full m-3">
                                 Book a Slot </Link>
                        </div>
                    </div>
                    <div class="grid grid-cols-2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14898.335259636928!2d75.55024473482338!3d21.009313721531587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bd90fb97964dc83%3A0x38a10085f18640b4!2sPratap%20Nagar%2C%20Jalgaon%2C%20Maharashtra%20425001!3m2!1d21.012055999999998!2d75.5585985!5e0!3m2!1sen!2sin!4v1698664435172!5m2!1sen!2sin" 
                        class="m-5 border border-neutral-900 border-spacing-x-10" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div class="my-auto font-serif">
                            <div class="flex"> <div class="font-bold">Place:</div>Pratap Nagar</div>
                            <div class="flex"> <div class="font-bold">Distance:</div>8.2kms</div>
                            <div class="flex"> <div class="font-bold">Time:</div>21min</div>
                            <div class="cursor-pointer font-serif font-bold text-center text-neutral-900 border border-cyan-600 bg-sky-400 h-8 w-2/6 rounded-full m-3">
                                 Book a Slot </div>
                        </div>
                    </div>

                </div>
                <div class="">
                    <div class="grid grid-cols-2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8203248633276!2d75.55958607525581!3d20.999838280642223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90fb2705b101b%3A0x1216685ba57d571d!2sAll%20India%20Radio%2C%20Jalgaon!5e0!3m2!1sen!2sin!4v1698663280576!5m2!1sen!2sin" 
                        class="m-5 border border-neutral-900 border-spacing-x-10" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div class="my-auto font-serif">
                            <div class="flex"> <div class="font-bold">Place:</div>Akashwani Chowk</div>
                            <div class="flex"> <div class="font-bold">Distance:</div>8.4kms</div>
                            <div class="flex"> <div class="font-bold">Time:</div>17min</div>
                            <div class="cursor-pointer font-serif font-bold text-center text-neutral-900 border border-cyan-600 bg-sky-400 h-8 w-2/6 rounded-full m-3">
                                 Book a Slot </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59595.1088102713!2d75.4967372468463!3d21.004887772955488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90efe969eccab%3A0x456b35a801443846!2sMehrun%2C%20Tambapura%2C%20Jalgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1698664750322!5m2!1sen!2sin" 
                        class="m-5 border border-neutral-900 border-spacing-x-10" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div class="my-auto font-serif">
                            <div class="flex"> <div class="font-bold">Place:</div>Mehrun, Tambapura Jalgaon</div>
                            <div class="flex"> <div class="font-bold">Distance:</div>10.8kms</div>
                            <div class="flex"> <div class="font-bold">Time:</div>24min</div>
                            <div class="cursor-pointer font-serif font-bold text-center text-neutral-900 border border-cyan-600 bg-sky-400 h-8 w-2/6 rounded-full m-3">
                                 Book a Slot </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
}

export default Driverhomepage;
import React from 'react'
import { RiCustomerService2Fill } from "react-icons/ri"
import { MdOutlineTravelExplore } from "react-icons/md"

const Travel = () => {
    return (
        <>
            <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-20" id="travel">
                <div className="lg:col-span-2 flex flex-col justify-evenly ">
                    <div >
                        <h2 className="tex text-3xl font-semibold text-[#e309d1]">BEST VACATION PLACE</h2>
                        <p className="py-4">West Bengal is a state in the eastern region of India and is the nation's fourth-most populous.The state capital is Kolkata. The state encompasses two broad natural regions: the Gangetic Plain in the south and the sub-Himalayan and Himalayan area in the north. The tourism in West Bengal is maintained by WBTDCL, a state government owned enterprise.

                            West Bengal, located on eastern bottleneck of India stretching from the Himalayas in the north to the Bay of Bengal in the south, presents some of marvelous landscape features and natural scenic beauty. Some of India's most preferred travel destinations like; the Darjeeling Himalayan hill region in the northern extreme of the state, the highest peak of the state Sandakphu (3,636 m or 11,929 ft)and the Sundarbans mangrove forests in the extreme south.</p>
                    </div>
                    <div className="lg:col-span-2 flex   justify-evenly">
                        <div className="grid sm:grid-col-2 gap-8 py-4 ">
                            <div className="flex flex-col lg:flex-row text-center items-center">
                                <button className="p-3 my-6 border bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded"><RiCustomerService2Fill size={30} /></button>
                                <div>
                                    <h3 className="text-xl font-bold py-2 ">24/7 Service</h3>
                                    <p className="py-1">Open 24 hours </p>
                                </div>
                            </div>

                        </div>
                        <div className="grid sm:grid-col-2 gap-8 py-4 ">


                            <div className="flex flex-col lg:flex-row text-center items-center">
                                <button className="p-3 my-6 border bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded"><MdOutlineTravelExplore size={30} /></button>
                                <div>
                                    <h3 className="text-xl font-bold py-2">Search Rooms</h3>
                                    <p className="py-1">Open 24 hours </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div>
                    <div className="border border-pink-500 text-center ">
                    <p className="pt-2">Get 20% OFF</p>
                    <p className="py-4">10hrs Left</p>
                    <p className="bg-gradient-to-r from-purple-500 to-pink-500 text-white ">Book Now</p>

                    </div>
                    <form className="w-full ">
                        <div className="flex flex-col my-2">
                            <label>Destination</label>
                            <select  className="border rounded-md p-2">
                                <option value="">Kolkata</option>
                                <option value="">Darjeeling</option>
                                <option value="">Sundarbans</option>
                                <option value="">Digha</option>
                               
                                 
                            </select>
                        </div>
                        <div className="flex flex-col my-4">
                            <label>Check-in</label>
                             <input className="border rounded-md p-2" type="date"></input>
                        </div>
                        <div className="flex flex-col my-2">
                            <label>Check-out</label>
                             <input className="border rounded-md p-2" type="date"></input>
                        </div>
                        <button className="p-3 w-full my-4 border bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded" >Rates and Availability</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Travel;
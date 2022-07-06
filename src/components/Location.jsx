import React from 'react'
import pic6 from "../assets/kol6.jpg"
import pic7 from "../assets/kol12.jpg.png"
import pic8 from "../assets/kol13.jpg.png"
import pic9 from "../assets/kol14.jpg.png"
import pic1 from "../assets/kol8.jpg.png"
import pic2 from "../assets/kol2.jpg"
import Pics from "./Pics"

const Location = () => {
    return (
        <>
            <div className="max-w-[1240px] mx-auto px-4 gap-4 py-24 grid sm:grid-col-2 lg:grid-cols-3" id='location'>
            <Pics bg={pic6} text="Victoria Memorial"/>
            <Pics bg={pic7} text="Digha"/>
            <Pics bg={pic8} text="Sunderban"/>
            <Pics bg={pic9} text="Darjeeling"/>
            <Pics bg={pic1} text="Kolkata"/>
            <Pics bg={pic2} text="Dakshineswar"/>
 

            </div>
        </>
    )
}

export default Location;
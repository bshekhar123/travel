import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import pic1 from "../assets/kol1.jpg"
import pic2 from "../assets/kol11.jpg"
import pic3 from "../assets/kol3.jpg"
import pic4 from "../assets/kol4.jpg"
import pic5 from "../assets/kol5.jpg"
import pic6 from "../assets/kol6.jpg"
import pic7 from "../assets/kol12.jpg.png"
import pic8 from "../assets/kol13.jpg.png"
import pic9 from "../assets/kol14.jpg.png"
import pic10 from "../assets/kol8.jpg.png"
import pic11 from "../assets/kol2.jpg"

const Slider = () => {
    return (
        <>
            <div className="max-w-[1240px] mx-auto px-4 gap-4 py-16 relative justify-center items-center">
            <h1 className="ben text-4xl text-[#e309d1] items-center text-center font-black">BENGAL THROUGH EYES</h1>
                <Carousel className="carousel">
                    <div>
                        <img src={pic1}   /> 
                    </div>
                    <div>
                        <img src={pic2}   /> 
                    </div>
                    <div>
                        <img src={pic3}   /> 
                    </div>
                    <div>
                        <img src={pic4}   /> 
                    </div>
                    <div>
                        <img src={pic5}   /> 
                    </div>
                    <div>
                        <img src={pic6}   /> 
                    </div>
                    <div>
                        <img src={pic7}   /> 
                    </div>
                    <div>
                        <img src={pic8}   /> 
                    </div>
                    <div>
                        <img src={pic9}   /> 
                    </div>
                    <div>
                        <img src={pic10}   /> 
                    </div>
                    <div>
                        <img src={pic11}   /> 
                    </div>
                    
                </Carousel>

            </div>
        </>
    )
}

export default Slider;
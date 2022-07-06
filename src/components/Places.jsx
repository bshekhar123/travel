import React from 'react'
import pic1 from "../assets/kol1.jpg"
import pic2 from "../assets/kol11.jpg"
import pic3 from "../assets/kol3.jpg"
import pic4 from "../assets/kol4.jpg"
import pic5 from "../assets/kol5.jpg"


const Places = () => {
  return (
    <>
      <div className="max-w-[1240px] text-center mx-auto py-20" id="place">
        <h1 className="obj text-4xl text-[#e309d1]  font-semibold">BENGAL THROUGH EYES</h1>
        <div className="grid  grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
          <img className="w-full  h-full object-cover col-span-2 md:col-span-3 row-span-2  " src={pic4} alt="" />
          <img className="w-full h-full object-cover" src={pic1} alt="" />
          <img className="w-full h-full object-cover" src={pic3} alt="" />
          <img className="w-full h-full object-cover" src={pic2} alt="" />
          <img className="w-full h-full object-cover" src={pic5} alt="" />

        </div>
      </div>
    </>
  )
}

export default Places;

import React,{useState} from 'react'
import Video from "../assets/kol5.jpg"
import { AiOutlineSearch } from "react-icons/ai"
const Body = () => {
    const [inp, setInp] = useState('')
    const submitForm = (e)=>{
        e.preventDefault()
        
        window.location.href = `https://en.wikipedia.org/wiki/${inp}`;
        setInp(" ")
    }
    const changeInp =(e)=> {
        setInp(e.target.value)
    }


    return (
        <>
        <div id="body">
            <div className="w-full h-screen relative">
                <img id="" className="w-full h-full object-cover"
                    src={Video}
                />

            </div>
            <div className="w-full h-full absolute top-0 bg-black/50"></div>
            <div className="absolute top-0 h-full w-full flex flex-col justify-center text-center text-white p-4 text-4xl">
                <h1 className="textc font-light">THE STATE OF ART </h1>
                <h2 className="textc py-4">VISIT PLACES</h2>
                <form     onSubmit={submitForm} className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black  bg-gray-100/90">
                    <div >
                        <input value={inp} onChange={changeInp} type="text" className="text-2xl bg-transparent w-[300px] sm:w-[400px] focus:outline-none" placeholder="Search Places" />
                    </div>
                    
                </form>
            </div>
        </div>
        </>
    )
};

export default Body;    
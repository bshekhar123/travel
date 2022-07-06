import React from 'react'

const Pics = (props) => {
  return (
    <>
        <div>
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-md relative">
                <img className="w-full h-full object-cover" src={props.bg}/>
                <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full ">
                    <p className="left-4 bottom-4 text-2xl text-white font-bold absolute">{props.text}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Pics;
import React from 'react'

const Form = () => {
    const submitForm = ()=>{
        
    }
  return (
    <>
        <form onSubmit={this.submitForm}>
        <input type="text" className="text-2xl bg-transparent w-[300px] sm:w-[400px] focus:outline-none" placeholder="Search Places"/>
        </form>
    </>
  )
}

export default Form
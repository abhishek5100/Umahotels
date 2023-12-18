import React from 'react'
import { FaCheck } from "react-icons/fa6";

function Forms() {
  return (
    <div>

      <div className='p-4 shadow-xl h-auto max-w-full justify-evenly mx-auto mb-5 md:flex'>
        <div>
            <p >check-in</p>
            <input type="date" className='p-3 bg-white  shadow-xl border'/>
            </div>
            <div>
            <p >check-out</p>
            <input type="date" className='p-3 bg-white  shadow-xl border'/>
            </div>
        <div>
           <p>Adults</p>
        <select className='bg-white p-3 shadow-xl border '>
        <option> Adults</option>
         <option>1 Adults</option>
         <option>2 Adults</option>
         <option>3 Adults</option>
         <option>4 Adults</option>
         <option>5 Adults</option>
         <option>6 Adults</option>
         <option>7 Adults</option>
         <option>8 Adults</option>
         
        </select>
            </div>
            <div>
           <p>children</p>
        <select className='bg-white p-3 shadow-xl border'>
        <option>children</option>
         <option>1 children</option>
         <option>2 children</option>
         <option>3 children</option>
         <option>4 children</option>
         <option>5 children</option>
         <option>6 children</option>
         <option>7 children</option>
         <option>8 children</option>
         
        </select>
            </div>
       
     
        
            <div className='my-5 '>
            <button className='p-2 px-10 bg-[golden] hover:bg-slate-300 border flex items-center'> <FaCheck />Check</button>
            </div>

      </div>
    </div>
  
  )
}

export default Forms

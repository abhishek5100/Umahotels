import React from 'react'
import "./Roomdetails.css"

function Roomdetails() {
  return (
    <div>
      <div className='reservation'>
        <div className='h-[400px] flex justify-center items-center text-[3rem] bold font-serif  text-black'>
          <h1 className='text-white'>Room-Booking Details</h1>
        </div>
        {/* Reservaton form  */}

        <div className='bg-white p-[20px] md:p-[100px]'>


          <div className='bg-gray-300 h-auto md:grid grid-cols-2  gap-10'>
            <div className='p-5 col-span-2 text-2xl bold font-serif'>
              <p className=''>Your Details</p>
            </div>

            {/* Reservation details  */}

            <div className=" bg-gray-300 border col-span-1 p-3">
              <p>Firstname</p>
              <input type="text" placeholder='Firstname' className='p-3 border w-full outline-[#b0914f]' />
            </div>
            <div className=" bg-gray-300 border  col-span-1 p-3">
              <p>Lastname</p>
              <input type="text" placeholder='Lastname' className='p-3 w-full outline-[#b0914f]' />
            </div>
            <div className=" bg-gray-300 border  col-span-1 p-3">
              <p>Address1</p>
              <input type="text" placeholder='Address1' className='p-3 w-full outline-[#b0914f]' />
            </div>
            <div className=" bg-gray-300 border col-span-1 p-3">
            <p>Address2</p>
              <input type="text" placeholder='Address2' className='p-3 w-full outline-[#b0914f]' />
           
            </div>

            <div className=" bg-gray-300 border  col-span-1 p-3">
              <p>City</p>
              <input type="text" placeholder='City' className='p-3 w-full outline-[#b0914f]' />
            </div>
            <div className=" bg-gray-300 border  col-span-1 p-3">
              <p>Zip code</p>
              <input type="text" placeholder='Zip code' className='p-3 w-full outline-[#b0914f]' />
            </div>
            <div className=" bg-gray-300 border  col-span-1 p-3">
              <p>Email</p>
              <input type="text" placeholder='Email' className='p-3 w-full outline-[#b0914f]' />
            </div>
            <div className=" bg-gray-300 border  col-span-1 p-3">
              <p>Phone</p>
              <input type="text" placeholder='Phone' className='p-3 w-full outline-[#b0914f]' />
            </div>
          
            <div className='col-span-2 p-5'>
              <p>Special Requriments</p>
              <textarea placeholder='Special Requriments' className='w-full h-[200px] p-3 outline-[#b0914f]'></textarea>
            </div>
            <div className=' col-span-2 flex justify-center p-4 w-full border'>
              <button className='p-2 px-10 bg-[#b0914f] hover:text-white'>SUBMIT</button>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Roomdetails

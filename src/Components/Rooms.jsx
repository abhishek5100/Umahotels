import React from 'react'
import room1 from './images/room-1.jpg'
import room2 from './images/room-2.jpg'
import room3 from './images/room-3.jpg'
import { Link } from 'react-router-dom'



function Rooms() {
  const Data =[
    {
      src:room1,
      Name:"Delux Room",
      quality:"$250 /night",
      p1:"Lorem ipsum dolor, sit amet consectetur",
      p2:"Esse voluptatem doloremque adipisci"
    },
    {
      src:room2,
      Name:"Double Room",
      quality:"$150 /night",
      p1:"Lorem ipsum dolor, sit amet consectetur",
      p2:"Esse voluptatem doloremque adipisci"
    },
    {
      src:room3,
      name:"Superior Room",
      quality:"$350 /night",
      p1:"Lorem ipsum dolor, sit amet consectetur",
      p2:"Esse voluptatem doloremque adipisci"
    },
    {
      src:room1,
      Name:"Delux Room",
      quality:"$250 /night",
      p1:"Lorem ipsum dolor, sit amet consectetur",
      p2:"Esse voluptatem doloremque adipisci"
    },
    {
      src:room2,
      Name:"Double Room",
      quality:"$150 /night",
      p1:"Lorem ipsum dolor, sit amet consectetur",
      p2:"Esse voluptatem doloremque adipisci"
    },
    {
      src:room3,
      name:"Superior Room",
      quality:"$350 /night",
      p1:"Lorem ipsum dolor, sit amet consectetur",
      p2:"Esse voluptatem doloremque adipisci"
    },
  ]
  
    return (
      <div>
        <div className='flex shadow-inner rounded flex-col justify-center items-center my-[100px] '>
          <p className='py-2 text-[#b0914f]'> Our LUXURIOUS Rooms</p>
          <p className='bold  text-[2rem] md:text-[3rem] py-5  font-serif decoration-8'>Featured Rooms</p>
          <p  >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind <br/>
           </p>
           <p className='pb-5'>texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
        </div>
  
        {/* containers  */}
  
  
        <div className=' my-3'>
        <Link to="/Allrooms">
                  <div className=' max-w-[1250px] gap-5 mx-auto md:grid grid-cols-3'>
                
                  
  
                  {
                    Data.map((value)=>{
                      return(
                        <div className=' shadow-2xl flex flex-col justify-center items-center col-span-1 p-4'>
                        <div className=' overflow-hidden '>
                          <img src={value.src} className='hover:scale-150 duration-1000 hover:cursor-zoom-out' />
                        </div>
                            <p className='text-2xl decoration-8 font-serif py-4 bold'>{value.name}</p>
                            <p className='text-[#b0914f] bold text-[1.5rem]'>{value.quality}</p>
                            <p>{value.p1}<br />&nbsp;&nbsp;&nbsp;&nbsp;{value.p2}</p>
                            <div className='p-5'>
                          <button className='p-2 px-5 bg-[#b0914f] border text-white'>Details</button>
                        <Link to="Roomdetails"><button className='p-2 px-5 border hover:bg-slate-400  hover:rotate-180 '>Book</button></Link>
                        </div>
                       </div>
                      )
                    })
                  }
  
  

                  </div>
                  </Link>
        </div>
      </div>
  )
}

export default Rooms

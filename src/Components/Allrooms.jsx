import React, { useEffect } from 'react'
import "./Allrooms.css"
import room1 from './images/room-1.jpg'
import room2 from './images/room-2.jpg'
import room3 from './images/room-3.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';



function Allrooms() {
  useEffect(() => {
    AOS.init({ duration: 600 });
}, [])
    const Data =[
        {
          src:room1,
          name:"Delux Room",
          quality:"$250 /night",
          p1:"Lorem ipsum dolor, sit amet consectetur",
          p2:"Esse voluptatem doloremque adipisci"
        },
        {
          src:room2,
          name:"Double Room",
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
          name:"Delux Room",
          quality:"$250 /night",
          p1:"Lorem ipsum dolor, sit amet consectetur",
          p2:"Esse voluptatem doloremque adipisci"
        },
        {
          src:room2,
          name:"Double Room",
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
            name:"Delux Room",
            quality:"$250 /night",
            p1:"Lorem ipsum dolor, sit amet consectetur",
            p2:"Esse voluptatem doloremque adipisci"
          },
          {
            src:room2,
            name:"Double Room",
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
            name:"Delux Room",
            quality:"$250 /night",
            p1:"Lorem ipsum dolor, sit amet consectetur",
            p2:"Esse voluptatem doloremque adipisci"
          },
          {
            src:room2,
            name:"Double Room",
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
            name:"Delux Room",
            quality:"$250 /night",
            p1:"Lorem ipsum dolor, sit amet consectetur",
            p2:"Esse voluptatem doloremque adipisci"
          },
          {
            src:room2,
            name:"Double Room",
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
            name:"Delux Room",
            quality:"$250 /night",
            p1:"Lorem ipsum dolor, sit amet consectetur",
            p2:"Esse voluptatem doloremque adipisci"
          },
          {
            src:room2,
            name:"Double Room",
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
      <div className='Room-container'>
<div className='flex flex-col h-[500px] justify-center items-center text-white text-[3rem] md:text-[4rem]'>
      <p data-aos="fade-right">Wellcome <br />
      Our Respected Guests</p>
</div>
      <div className='bg-white'>
        <div className='flex shadow-inner rounded flex-col justify-center items-center '>
          <p className='py-2 text-[#b0914f]'> Our LUXURIOUS Rooms</p>
          <p className='bold text-[3rem] py-5  font-serif decoration-8'>Featured Rooms</p>
          <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind <br/>
           </p>
           <p className='pb-5'>texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
        </div>
  
        {/* containers  */}
  
  
        <div className='md:p-[50px]'>
 
                  <div className=' max-w-[1250px] gap-5 mx-auto md:grid grid-cols-3'>
                  {
                   Data && Data.map((value)=>{
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
                          <Link to="/Roomdetails"><button className='p-2 px-5 border hover:bg-slate-400  hover:rotate-180 '>Book</button></Link>
                        </div>
                       </div>
                      )
                    })
                  }
                  </div>
                  
        </div>
      </div>

      </div>
    </div>
  )
}

export default Allrooms

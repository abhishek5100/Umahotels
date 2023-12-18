import React from 'react'
import './Ourrestaurants.css'
import rest1 from './images/rest-1.webp'
import rest2 from './images/rest-2.webp'
import { Link } from 'react-router-dom'

function Ourrestaurants() {
    const Data = [
        {
          src: rest1,
          name: "Dark restautants",
          quality: "$250 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
        {
          src: rest2,
          name: "Double Room",
          quality: "$150 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
        {
          src: rest1,
          name: "Superior Room",
          quality: "$350 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
        {
          src: rest1,
          name: "Dark restautants",
          quality: "$250 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
        {
          src: rest2,
          name: "Double Room",
          quality: "$150 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
        {
          src: rest1,
          name: "Superior Room",
          quality: "$350 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
        {
          src: rest1,
          name: "Dark restautants",
          quality: "$250 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
        {
          src: rest2,
          name: "Double Room",
          quality: "$150 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
        {
          src: rest1,
          name: "Superior Room",
          quality: "$350 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
        {
          src: rest1,
          name: "Dark restautants",
          quality: "$250 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
        {
          src: rest2,
          name: "Double Room",
          quality: "$150 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
        {
          src: rest1,
          name: "Superior Room",
          quality: "$350 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
        {
          src: rest1,
          name: "Dark restautants",
          quality: "$250 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
        {
          src: rest2,
          name: "Double Room",
          quality: "$150 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
        {
          src: rest1,
          name: "Superior Room",
          quality: "$350 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
        {
          src: rest1,
          name: "Dark restautants",
          quality: "$250 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
        {
          src: rest2,
          name: "Double Room",
          quality: "$150 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
        {
          src: rest1,
          name: "Superior Room",
          quality: "$350 /night",
          p1: "Lorem ipsum dolor, sit amet consectetur",
          p2: "Esse voluptatem doloremque adipisci"
        },
    
      ]
  return (
    <div>
      <div className='rest-container '>
      <div>
      <div className=' bg-white  flex shadow-inner rounded flex-col justify-center items-center mt-[10px] '>
        <p className='py-2 text-[#b0914f]'> Our LUXURIOUS Restaurants</p>
        <p className='bold text-[3rem] py-5  font-serif decoration-8'>Restaurants</p>
        <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind <br />
        </p>
        <p className='pb-5'>texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
      </div>
      {/* containers  */}
      <div className=' my-3'>
        <div className=' max-w-[1250px]  gap-5 mx-auto md:grid grid-cols-3 my-[100px]  bg-white'>
          {/* // maping for restaurant datas  */}
          {
            Data && Data.map((value) => {
              return (
                <div className=' shadow-2xl flex flex-col justify-center items-center col-span-1 p-4'>
                  <div className=' overflow-hidden '>
                    <img src={value.src} className='hover:scale-150 duration-1000 hover:cursor-zoom-out' />
                  </div>
                  <p className='text-2xl decoration-8 font-serif py-4 bold'>{value.name}</p>
                  <p className='text-[#b0914f] bold text-[1.5rem]'>{value.quality}</p>
                  <p>{value.p1}<br />&nbsp;&nbsp;&nbsp;&nbsp;{value.p2}</p>
                  <div className='p-5'>
                    <button className='p-2 px-5 bg-[#b0914f] border text-white'>Details</button>
                    <Link to="/Guestfoodmenu"><button className='p-2 px-5 border hover:bg-slate-400 hover:text-white'>Menu card</button></Link>
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

export default Ourrestaurants

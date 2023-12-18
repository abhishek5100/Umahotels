import React, { useState } from 'react'
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { FaHotel } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Modal } from 'antd';




const Navbar = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };



  const [toggle, setToggle] = useState(false)

  return (
    <>

      <div className='bg-[#fff] p-2 shadow-xl my-3 sticky top-0 ... z-50'>
        <div className='max-w-[1240px] py-3 mx-auto flex justify-between items-center'>
          <div className='text-3xl font-bold text-black flex'>
            <FaHotel className='text-[2rem]' />
          <Link to="/"> UMA-Hotels</Link>
          </div>

          {
            toggle ?
              <IoMdClose onClick={() => { setToggle(!toggle) }} className=' duration-1000 text-4xl text-black md:hidden block' />
              :
              <IoIosMenu onClick={() => { setToggle(!toggle) }} className='duration-1000 text-4xl text-black md:hidden block' />
          }


          <ul className='hidden md:flex gap-10 text-black text-xl'>
            <Link to="/"><li className='hover:text-red-400 underline'>Home</li></Link>
            <Link to="/Allrooms"><li className='hover:text-red-400 hover:underline'>Rooms</li></Link>
            <Link to="./Ourrestaurants"><li className='hover:text-red-400 hover:underline'>Restaurants</li></Link>
            <li className='hover:text-red-400 hover:underline'>Events</li>
            <li className='hover:text-red-400 hover:underline'>Blogs</li>
            <li className='hover:bg-red-500 hover:text-white '><button className='p-1 rounded border border-black' onClick={showModal}>Sign up</button></li>
            <li className='hover:bg-red-500 hover:text-white '><button className='p-1 rounded border border-black' >log in</button></li>

          </ul>
          <ul className={` z-50 duration-500 md:hidden w-full  h-screen  p-4 text-white text-xl fixed  bg-black top-[70px]
       ${toggle ? `left-[0%]` : `left-[-100%]`}
       `}>
            <Link to="/"><li onClick={() => { setToggle(!toggle) }}  className='hover:text-red-400 py-5 hover:underline'>Home</li></Link>
            <Link to="/Allrooms"><li onClick={() => { setToggle(!toggle) }}   className='hover:text-red-400 py-5 hover:underline'>Rooms</li></Link>
            <Link to="./Ourrestaurants"><li onClick={() => { setToggle(!toggle) }}  className='hover:text-red-400 py-5 hover:underline'>Restaurants</li></Link>
            <li onClick={() => { setToggle(!toggle) }}  className='hover:text-red-400 py-5 hover:underline'>Events</li>
            <li onClick={() => { setToggle(!toggle) }}  className='hover:text-red-400 py-5 hover:underline'>Blogs</li>
            <li onClick={() => { setToggle(!toggle) }}  className='hover:bg-red-500 hover:text-white '><button className='p-1 rounded border border-black' onClick={showModal}>Sign up</button></li>
            <li onClick={() => { setToggle(!toggle) }}  className='hover:bg-red-500 border-white hover:text-white '><button className='p-1 rounded border border-black' >log in</button></li>

          </ul>
        </div>
      </div>





      
      <Modal title="Sign up" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
   <div className='border h-10 mt-5'>
    <input type="text" placeholder='First name' className='w-full h-full outline-none' />
   </div>
   <div className='border h-10 mt-3'>
    <input type="text"  placeholder="Last name" className='w-full h-full outline-none' />
   </div>
   <div className='border h-10 mt-3'>
    <input type="email" placeholder="Email" className='w-full h-full outline-none' />
   </div>
   <div className='border h-10 mt-3'>
    <input type="number" placeholder='Phone' className='w-full h-full outline-none' />
   </div>
      </Modal>


      
    </>
  )
}

export default Navbar

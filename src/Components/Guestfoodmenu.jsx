import React, { useEffect} from 'react'
import food1 from './images/food-1.jpg'
import food2 from './images/food-2.jpg'
import food3 from './images/food-3.jpg'
import food4 from './images/food-4.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Guestfoodmenu() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    const Data = [
        {
            src: food1,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food2,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food3,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food4,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food1,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food2,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food3,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food4,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food1,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food2,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food3,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food4,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food1,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food2,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food3,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food4,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food1,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food2,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food3,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
        {
            src: food4,
            name: "New Pizza King",
            ratingbtn: "4.3*",
            food: "Pizza, fast food",
            price: "Rs.150 for one ",
            time: "28min"
        },
       

    ]

    
    return (
        <div>
            <div className='bg-white'>
                <div className='p-5 bg-white text-2xl underline flex justify-center items-center gap-5'>
                  <Link to="/Guestfoodmenu"><p className='hover:text-red-500'>Inside guest menu</p></Link>
                  <Link to="/Outsideguestmenu"><p className='hover:text-red-500'>Outside guest menu</p></Link>
                </div>

                <div className='bg-white border-t-2  md:grid grid-cols-4  md:gap-5 md:p-[100px] p-5'data-aos="fade-right">
                    {
                        Data && Data.map((value) => {
                            return (
                                <div className="col-span-1  h-fit mt-5 " >
                                    <div className='border object-cover'>
                                        <img src={value.src} alt="" className='object-cover' />
                                        <div className='flex justify-between'>
                                            <p className='bold font-serif text-2xl'>{value.name}</p>
                                            <button className='rounded text-white px-2 bg-[green] my-2'>{value.ratingbtn}</button>
                                        </div>
                                        <div className='flex justify-between text-gray-500'>
                                            <p>{value.food}</p>
                                            <p>{value.price} <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {value.time}</p>
                                        </div>
                                        <button className='p-2 px-5 border hover:bg-[blue] hover:text-white'>Order now</button>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Guestfoodmenu

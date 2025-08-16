import SouthBlogo from '../assets/logo/Seventh-day-Adventist-Church_Logo-removebg-preview.png'
import { RxDropdownMenu } from "react-icons/rx";
import { useState } from 'react';
const menu= [

    "Home",
    "About Us",
    "Programs",
    "blog",
    "Mapping",
    "contact Us"
]

const Header = () =>{
    const [mobileMenu, openMenu] =useState(false)
    return(
        <>
        <section className="p-2 shadow bg-[var(--themeColor)]/70 backdrop-blur-sm md:bg-[var(--themeColor)]/90 items-center fixed top-0 w-full z-50">
            <div className="justify-between max-w-6xl mx-auto flex items-center px-5 md">
            <div className='grid grid-cols-2 items-center'><img src={SouthBlogo} alt="" className='h-20 cursor-pointer hover:scale-110'/><small className='text-[#FFD700] -ml-11 -mb-8 text-2xl'>South 'B' <span className='text-xs text-white'>SDA church</span></small></div>
            <ul  className=" space-x-5 text-[var(--links)] hidden md:flex">
            {menu.map((items, index) =>(
                <li  key={index} className="flex cursor-pointer text-xl hover:text-[#FFD700] transition-transform hover:-translate-y-1">{items}</li>
                ))}
         </ul>
         <RxDropdownMenu 
         onClick={()=>(openMenu(prev =>!prev))}
         className='text-white scale-180 cursor-pointer hover:text-[#FFD700] transition-colors delay-300 md:hidden'/>
         </div>
         {mobileMenu && (
            <ul className="flex flex-col bg-[var(--themeColor)] text-white space-y-4 py-4 px-5 md:hidden">
                {menu.map((items, index) => (
                <li key={index} className="text-lg cursor-pointer hover:text-[#FFD700]">
                    {items}
                </li>
                ))}
            </ul>
            )}
         

        </section>
        </>
    )

}
export default Header
import SouthBlogo from '../assets/logo/Seventh-day-Adventist-Church_Logo-removebg-preview.png'
const menu= [

    "Home",
    "About Us",
    "Programs",
    "blog",
    "Mapping",
    "contact Us"
]

const Header = () =>{
    return(
        <>
        <section className="p-2 shadow bg-[var(--themeColor)] items-center fixed top-0 w-full z-50">
            <div className="justify-between max-w-6xl mx-auto flex items-center">
            <div className='grid grid-cols-2 items-center'><img src={SouthBlogo} alt="" className='h-20 cursor-pointer hover:scale-110'/><small className='text-[#FFD700] -ml-11 -mb-8 text-2xl'>South 'B' <span className='text-xs text-white'>SDA church</span></small></div>
            <ul  className=" space-x-5 text-[var(--links)] hidden md:flex">
            {menu.map((items, index) =>(
                <li  key={index} className="flex cursor-pointer text-xl hover:text-[#FFD700]">{items}</li>
                ))}
         </ul>
         </div>
        </section>
        </>
    )

}
export default Header
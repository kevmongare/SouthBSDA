const Departments = [
    {
        firstElder:"Elder Aroni",
        word:"Lets Serve God John 3:16",
        color: 'bg-[var(--themeColor)]'
    },
     {
        firstElder:"Elder Aroni",
        word:"Lets Serve God John 3:16",
        color: 'bg-[var(--SecondaryColor)]'
    }
    ,
     {
        firstElder:"Elder Aroni",
        word:"Lets Serve God John 3:16",
        color: 'bg-[var(--themeColor)]'
    },
    ,
     {
        firstElder:"Elder Aroni",
        word:"Lets Serve God John 3:16",
        color: 'bg-[var(--SecondaryColor)]'
    }

]
const Body = () =>{
   

    return(
        <section className="flex mx-auto p-10">
           
            <div className="mx-auto text-center">
                 <h2 className="text-5xl p-10">Church Leadership</h2>
                 <p className="font-light pb-10 text-xl">Our church is Led by God choosen Leaders Here is the leadershipp of {new Date().getFullYear()}</p>
                <div className="grid grid-cols-4 space-x-4 max-w-6xl  ">
                
                    {Departments.map((items, index) =>(
                
                        <div key={index} className="hover:scale-105 cursor-pointer flex items-center transition-colors">
                            <div className={`${items?.color} p-5 h-50 shadow-lg rounded hover:bg-black hover:-translate-y-4  transition-transform duration-500 ease-in-out`}>
                                <h1>{items?.word}</h1>
                                <p className="text-gray-300">{items?.firstElder}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
           
            
        </section>
    )

}
export default Body;
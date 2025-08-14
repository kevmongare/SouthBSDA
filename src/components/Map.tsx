const Map = () =>{

return(
    <div className="bg-[#DDE5F4] p-10">
        <div className="max-w-4xl mx-auto">
            <h2 className=" text-5xl mb-4 P-15 font-['Lora']">Location</h2>
            </div>
            <div className="w-full aspect-[16/9] max-w-5xl mx-auto ">
                     <iframe
                    title="South B SDA church Map"
                       src="https://www.google.com/maps/d/embed?mid=152VGoCvQGcl7QOszeeNyarYtGjHWwEw&ehbc=2E312F"
                      width="100%"
                      height="80%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="shadow-lg ">
                      </iframe>
            
        </div>
    </div>
)
}
export default Map;
const Header ='About Us'
const BibleVerse = {
    Verse:"John 3:16",
    words:'"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life"'
}
const AboutUs =() =>{
    return(
        <section className="bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-5xl mx-auto justify-end flex">
                        <div className="shadow-white/70 shadow-lg max-w-fit  bg-[var(--themeColor)]/90 p-10  -mt-45 grid items-center text-center">
                            <h1 className="text-2xl font-bold underline ">
                            {BibleVerse.Verse}
                            </h1>
                            <h3 className="mt-2 text-2xs max-w-3xs font-light text-[#FFD700]">{BibleVerse.words}</h3>
                            <br />
                        </div>
                    </div>
                    <section className="about-us py-10 px-4 max-w-6xl mx-auto ">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl font-extrabold mb-4 P-15 -mt-10 ">{Header}</h2>
                        <p className="text-xl text-gray-700 leading-relaxed mx-auto  pl-4">
                            Welcome to <strong>South 'B' SDA Church</strong> — a Christ-centered, Bible-based community of faith rooted in love, service, and spiritual growth.
                           <br />
                            We believe in living out the teachings of Jesus by sharing His message of hope, compassion, and salvation with everyone. Whether you're new to faith, visiting Nairobi, or searching for a church to call home, we’re here for you.
                            <br /><br />
                            Join us every Sabbath for uplifting worship, inspiring messages, and warm fellowship. We’d love to meet you and grow in faith together.
                        </p>
                    </div>
                    </section>

            </div>
        </section>
    )

}
export default AboutUs;
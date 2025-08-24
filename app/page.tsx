import Image from "next/image";

export default function Home() {
  return (
   <main className="bg-[#0b3d3c] text-white min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 pt-6 flex justify-between place-items-center px-10 py-6 bg-[#104f4d] shadow-lg ">
        
        <h1 className="text-yellow-300 text-4xl font-bold">INFO NGAWI TERKINI!</h1>
        <nav className=" space-x-6">
          
          <a href="#" className="text-lg text-yellow-300 font-bold hover:text-white ">Home</a>
          <a href="#" className="text-lg text-yellow-300 font-bold hover:text-white">About</a>
          <a href="#" className="text-lg text-yellow-300 font-bold hover:text-white">Portfolio</a>
          <a href="#" className="text-lg text-yellow-300 font-bold hover:text-white">Contact</a>

        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-40">
        <div className="max-w-lg">
          <h2 className="text-6xl font-bold leading-snug">
           Halo kawan saya <span className="text-yellow-300">Muhammad Taufiqurrohman</span><br />
            
          </h2>
          <p className="mt-4 text-gray-200">
            I am new in web Developer
          </p>
          
          <button  className="mt-6 px-6 py-2 bg-yellow-300 text-black font-semibold rounded-lg hover:bg-yellow-400 hover:text-white ">
            Contact Me
          </button>
        </div>
        <div className="mt-8 md:mt-0 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBLmfdScX4KsM1at__diQVkOR7Q45bD2CoA&s"
            alt="Profile"
            className="rounded-2xl shadow-lg h-100"
          />
        </div>
      </section>

      {/* About */}
      <section className="text-center px-10 py-40 bg-[#104f4d]">
        <h2 className="text-2xl text-yellow-300 font-bold">About Me</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-200">
          Nama saya Muhammad Taufiqurrohman, seorang pelajar jurusan Rekayasa Perangkat Lunak di SMK Telkom Malang. Saya memiliki hobi bongkar pasang, perjalanan jauh, dan desain web. Harapan saya adalah menjadi seorang Front-End Developer yang handal di masa depan.
        </p>
        <button className="mt-6 px-6 py-2 bg-yellow-300 text-black font-semibold rounded-lg hover:bg-yellow-500 hover:text-white hover:shadow-lg">
          Download CV
        </button>
      </section>
      

      {/* Services */}
      <section className="px-12 py-40 bg-teal-1000 text-white">
  <h2 className="text-4xl font-bold mb-12 text-center rounded-xl">Bahasa yang saya kuasai</h2>

  <div className="grid md:grid-cols-2 gap-6">
    {/* Card 1: Web & Mobile Apps */}
    <div className="bg-[#104f4d] p-6 rounded-xl shadow-2xl text-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="Logo Web" className="mx-auto mb-3 w-auto h-20" />
     
    </div>

    {/* Card 2: UI/UX Design */}
    <div className="bg-[#104f4d] p-6 rounded-xl shadow-2xl text-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/330px-Tailwind_CSS_logo.svg.png" alt="Logo UI/UX" className="mx-auto mb-auto w-auto h-8" />
      
    </div>
  </div>
</section>

      {/* Timeline */}
      <section className="px-10 py-16 text-center bg-[#104f4d]">
        <h2 className="text-2xl font-bold mb-6">Some History of My Life</h2>
        <div className="space-y-3 text-gray-200">
          <p><span className="text-yellow-300 font-bold">2008</span> - Lahir</p>
          <p><span className="text-yellow-300 font-bold">2010</span> - TK Pembina 2</p>
          <p><span className="text-yellow-300 font-bold">2016</span> - SDN Pandanwangi 1</p>
          <p><span className="text-yellow-300 font-bold">2021</span> - SMP 24 Malang </p>
          <p><span className="text-yellow-300 font-bold">2024</span> - SMK Telkom malang</p>
        </div>
        <button className="mt-6 px-6 py-2 bg-yellow-300 text-black font-semibold rounded-lg hover:bg-yellow-400">
          Download CV
        </button>
      </section>

      {/* Newsletter */}
      <section className="px-10 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Newsletter</h2>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 w-1/2 border-0 bg-white rounded-l-lg focus:outline-none text-black"
          />
          <button className="px-6 py-2 bg-yellow-300 text-black font-semibold rounded-r-lg hover:bg-yellow-400">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-700 text-center py-6 shadow-lg">
        <p>akhir website saya</p>
      </footer>
    </main>
  );
}

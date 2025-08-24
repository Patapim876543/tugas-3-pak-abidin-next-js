import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0b3d3c] text-white min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 pt-6 flex flex-wrap items-center justify-between px-6 md:px-10 py-4 bg-[#104f4d] shadow-lg">
        <h1 className="text-yellow-300 text-2xl md:text-4xl font-bold">INFO NGAWI TERKINI!</h1>
        <nav className="flex-1 md:flex-none md:ml-6 space-x-3 md:space-x-6 mt-2 md:mt-0">
          <a href="#" className="text-sm md:text-lg text-yellow-300 font-bold hover:text-white">Home</a>
          <a href="#" className="text-sm md:text-lg text-yellow-300 font-bold hover:text-white">About</a>
          <a href="#" className="text-sm md:text-lg text-yellow-300 font-bold hover:text-white">Portfolio</a>
          <a href="#" className="text-sm md:text-lg text-yellow-300 font-bold hover:text-white">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 py-20 md:py-40">
        <div className="max-w-lg w-full">
          <h2 className="text-4xl md:text-6xl font-bold leading-snug">
            Halo kawan saya <span className="text-yellow-300">Muhammad Taufiqurrohman</span><br />
          </h2>
          <p className="mt-4 text-gray-200">
            I am new in web Developer
          </p>
          <button className="mt-6 px-6 py-2 bg-yellow-300 text-black font-semibold rounded-lg hover:bg-yellow-400 hover:text-white ">
            Contact Me
          </button>
        </div>
        <div className="mt-8 md:mt-0 w-full md:w-auto flex-shrink-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBLmfdScX4KsM1at__diQVkOR7Q45bD2CoA&s"
            alt="Profile"
            className="rounded-2xl shadow-lg w-100 max-w-sm mx-auto md:mx-0"
          />
        </div>
      </section>

      {/* About */}
      <section className="text-center md:text-left px-6 md:px-10 py-12 md:py-20 bg-[#104f4d]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8 md:gap-12">
          <div className="flex justify-center md:justify-start">
            <img
              src="./Screenshot 2025-05-21 122000.png"
              alt="Profile"
              className="rounded-2xl shadow-lg w-80 md:w-full max-w-sm object-cover"
            />
          </div>

          <div className="text-left">
            <h2 className="text-2xl text-yellow-300 font-bold mb-2">About Me</h2>
            <p className="mt-4 max-w-2xl text-gray-200">
              Nama saya Muhammad Taufiqurrohman, seorang pelajar jurusan Rekayasa Perangkat Lunak di SMK Telkom Malang.
              Saya memiliki hobi bongkar pasang, perjalanan jauh, dan desain web. Harapan saya adalah menjadi seorang Front-End Developer yang handal di masa depan.
            </p>
            <button className="mt-6 px-6 py-2 bg-yellow-300 text-black font-semibold rounded-lg hover:bg-yellow-500 hover:text-white hover:shadow-lg">
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 md:px-12 py-20 md:py-40 bg-teal-1000 text-white">
        <h2 className="text-4xl font-bold mb-12 text-center rounded-xl">Bahasa yang saya Pelajari</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Web & Mobile Apps */}
          <div className="bg-[#104f4d] p-6 rounded-xl shadow-2xl text-center flex flex-col items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="Logo Web" className="mx-auto mb-3 w-40 h-auto" />
          </div>

          {/* Card 2: UI/UX Design */}
          <div className="bg-[#104f4d] p-6 rounded-xl shadow-2xl text-center flex flex-col items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/330px-Tailwind_CSS_logo.svg.png" alt="Logo UI/UX" className="mx-auto mb-3 w-40 h-auto" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 md:px-12 py-12 md:py-20 bg-[#104f4d]">
        <div className="overflow-x-auto">
          <table className="min-w-full mx-auto text-gray-200 border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Tahun</th>
                <th className="px-4 py-2 text-left">Keterangan</th>
                <th className="px-4 py-2 text-left">Lokasi</th>
                <th className="px-4 py-2 text-left">Catatan</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-4 py-2"><span className="text-yellow-300 font-bold">2008</span></td><td className="px-4 py-2">Lahir</td><td className="px-4 py-2">Malang</td><td className="px-4 py-2 font-bold">Spawn</td></tr>
              <tr><td className="px-4 py-2"><span className="text-yellow-300 font-bold">2010</span></td><td className="px-4 py-2">TK Pembina 2</td><td className="px-4 py-2">Malang</td><td className="px-4 py-2 font-bold">Mulai TK</td></tr>
              <tr><td className="px-4 py-2"><span className="text-yellow-300 font-bold">2016</span></td><td className="px-4 py-2">SDN Pandanwangi 1</td><td className="px-4 py-2">Malang</td><td className="px-4 py-2 font-bold">Sekolah Dasar</td></tr>
              <tr><td className="px-4 py-2"><span className="text-yellow-300 font-bold">2021</span></td><td className="px-4 py-2">SMP 24 Malang</td><td className="px-4 py-2">Malang</td><td className="px-4 py-2 font-bold">Mulai smp</td></tr>
              <tr><td className="px-4 py-2"><span className="text-yellow-300 font-bold">2024</span></td><td className="px-4 py-2">SMK Telkom Malang</td><td className="px-4 py-2">Malang</td><td className="px-4 py-2 font-bold">mulai SMK hingga sekarang</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 md:px-12 py-12 md:py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Newsletter</h2>
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-2 sm:gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-full sm:w-1/2 border-0 bg-white rounded-l-lg text-black focus:outline-none"
          />
          <button className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-r-lg hover:bg-yellow-400 w-full sm:w-auto">
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
export default function HeroSection() {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      {/* Overlay gelap untuk memastikan teks jelas dibaca */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Kandungan utama hero section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Temui Rumah Idaman Anda</h1>
        <p className="text-lg md:text-2xl mb-6">Cari hartanah terbaik dengan mudah dan pantas.</p>

        {/* Borang carian ringkas */}
        <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg w-full max-w-2xl">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" placeholder="Lokasi" className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Julat Harga" className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">Cari Sekarang</button>
          </form>
        </div>
      </div>
    </div>
  );
}

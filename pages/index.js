// TokanProperty Basic Template - Next.js + Tailwind CSS

import Link from 'next/link';

export default function Home() {
  const properties = [
    {
      id: 1,
      title: 'Rumah Teres 2 Tingkat di Shah Alam',
      price: 'RM 500,000',
      imageUrl: '/rumah1.jpg',
    },
    {
      id: 2,
      title: 'Kondominium Mewah di Kuala Lumpur',
      price: 'RM 750,000',
      imageUrl: '/rumah2.jpg',
    },
    {
      id: 3,
      title: 'Rumah Banglo di Johor Bahru',
      price: 'RM 1,200,000',
      imageUrl: '/rumah3.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HEADER */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800">TokanProperty</h1>
        </div>
      </header>

      {/* HERO SECTION + SEARCH */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Temui Rumah Idaman Anda</h2>
          <p className="text-lg mb-6">Cari hartanah terbaik dari ejen berdaftar di seluruh Malaysia</p>

          <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md max-w-xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Lokasi"
                className="p-2 border border-gray-300 rounded text-black"
              />
              <input
                type="text"
                placeholder="Julat Harga (contoh: 300k-500k)"
                className="p-2 border border-gray-300 rounded text-black"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
              >
                Cari Sekarang
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* PROPERTY LIST */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Senarai Hartanah</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{property.title}</h3>
                <p className="text-gray-600">{property.price}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Lihat Butiran
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white shadow mt-8">
        <div className="container mx-auto px-6 py-4 text-center">
          <p className="text-gray-600">Hak Cipta © {new Date().getFullYear()} TokanProperty. Semua Hak Terpelihara.</p>
        </div>
      </footer>
    </div>
  );
}

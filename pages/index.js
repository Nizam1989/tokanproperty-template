export default function Home() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* HERO SECTION */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">TokanProperty.com</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Sistem untuk Agent Hartanah: Bina Microsite, Upload Listing, Auto WhatsApp, Co-Broke & Branding dalam 1 platform.
        </p>
        <a
          href="https://tally.so/r/your-form-link"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl text-lg hover:bg-gray-800 transition"
        >
          Daftar Free Trial 15 Hari
        </a>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-xl font-semibold mb-2">🖥 Microsite Ejen</h2>
            <p>Masing-masing ada web sendiri, siap dengan listing & branding.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">📱 WhatsApp Auto</h2>
            <p>Bila buyer atau owner isi form → terus masuk WhatsApp + CRM.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">🤝 Sistem Co-Broke</h2>
            <p>Setiap listing ada link co-broke → ejen lain boleh terus join close deal.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold mb-4">Jom jadi antara ejen pertama guna TokanProperty!</h2>
        <p className="text-lg mb-6">Guna free 15 hari + dapat leads automatik terus ke WhatsApp anda.</p>
        <a
          href="https://tally.so/r/your-form-link"
          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800"
        >
          Daftar Sekarang
        </a>
      </section>
    </div>
  );
}

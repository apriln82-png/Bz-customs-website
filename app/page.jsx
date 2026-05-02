export default function BZCustomsHomepage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="px-6 py-16 text-center border-b border-zinc-800">

        <img
          src="/logo.jpg"
          alt="BZ Customs Logo"
          className="mx-auto w-40 md:w-56 h-auto mb-6"
        />

        <h1 className="text-4xl md:text-6xl font-bold">
          BZ Customs
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          Precision Welding • Custom Fabrication • Metal Repairs
        </p>

        <p className="max-w-3xl mx-auto text-zinc-400 text-lg leading-relaxed mt-6">
          Serving Oklahoma City with expert welding repairs, machinery repair,
          trailer welding, custom gates, railings, wood + metal furniture,
          artistic metalwork, and dependable handyman services.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

          <a
            href="tel:4056288880"
            className="bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-2xl"
          >
            Call Now: 405-628-8880
          </a>

          <a
            href="https://instagram.com/bzwelds"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-3 rounded-2xl"
          >
            View Instagram
          </a>

        </div>
      </section>

    </main>
  );
}

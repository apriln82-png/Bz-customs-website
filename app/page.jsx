export default function BZCustomsHomepage() {

  return (

    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}

      <section className="px-6 py-16 text-center border-b border-zinc-800">

        <img

          src="/logo.jpg"

          alt="BZ Customs Logo"

          className="mx-auto w-40 md:w-56 h-auto mb-6 rounded-2x1"

        />

        <h1 className="text-4xl md:text-6xl font-bold">

          BZ Customs

        </h1>

        <p className="mt-4 text-lg text-grey-300>

          Precision Welding • Custom Fabrication • Metal Repairs

        </p>

        <p className="max-w-3xl mx-auto text-zinc-400 text-lg leading-relaxed mb-10">

          Serving Oklahoma City with expert welding repairs, machinery repair,

          trailer welding, custom gates, railings, wood + metal furniture,

          artistic metalwork, and dependable handyman services.

        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a

            href="tel:4056288880"

            className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl font-bold text-lg shadow-xl"

          >

            Call Now: 405-628-8880

          </a>

          <a

            href="https://instagram.com/bzwelds"

            target="_blank"

            className="border border-purple-500 hover:bg-purple-600/20 transition px-8 py-4 rounded-2xl font-semibold text-lg"

          >

            View Instagram @bzwelds

          </a>

        </div>

      </section>

      {/* Services */}

      <section className="px-6 py-16 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[

            "Machinery Repairs",

            "Trailer Repairs",

            "Car Welding Repairs",

            "Gates + Railings",

            "Wood + Metal Furniture",

            "Custom Art Pieces",

            "Mobile Welding",

            "Handyman Services",

            "Custom Fabrication",

          ].map((service) => (

            <div

              key={service}

              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg"

            >

              <h3 className="text-xl font-semibold">{service}</h3>

            </div>

          ))}

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="bg-zinc-950 px-6 py-16 border-y border-zinc-800">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-8">Why Choose BZ Customs</h2>

          <div className="grid md:grid-cols-3 gap-8 text-zinc-300">

            <div>

              <h3 className="font-bold text-xl mb-2">Reliable Work</h3>

              <p>Strong repairs built to last with quality craftsmanship.</p>

            </div>

            <div>

              <h3 className="font-bold text-xl mb-2">Fast Response</h3>

              <p>Quick scheduling and dependable communication.</p>

            </div>

            <div>

              <h3 className="font-bold text-xl mb-2">Custom Solutions</h3>

              <p>Every job is tailored to your equipment and project needs.</p>

            </div>

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="px-6 py-20 text-center">

        <h2 className="text-4xl font-bold mb-6">Get a Free Quote</h2>

        <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto">

          Need welding repairs, fabrication work, custom gates, trailer repair,

          or a one-of-a-kind metal project? Contact BZ Customs today.

        </p>

        <div className="space-y-3 text-xl">

          <p><strong>Call or Text:</strong> 405-628-8880</p>

          <p><strong>Instagram:</strong> @bzwelds</p>

          <p><strong>Location:</strong> Oklahoma City, Oklahoma</p>

        </div>

      </section>

    </main>

  );

}

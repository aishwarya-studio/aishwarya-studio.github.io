export default function AishwaryaArtsPortfolio() {
  const galleryItems = [
    {
      title: 'Traditional Rangoli',
      image:
        'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Bridal Mehendi',
      image:
        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Chitrakala Artwork',
      image:
        'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Handmade Crafts',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const services = [
    'Bridal Mehendi Designs',
    'Festival Rangoli Art',
    'Wedding Decorations',
    'Customized Handmade Gifts',
    'Traditional Art Workshops',
    'Creative Event Decorations',
  ];

  const testimonials = [
    {
      name: 'Priya S.',
      feedback:
        'Her rangoli designs became the highlight of our Diwali celebration.',
    },
    {
      name: 'Neha R.',
      feedback:
        'Beautiful mehendi artwork with elegant detailing and creativity.',
    },
    {
      name: 'Aman K.',
      feedback:
        'Amazing handmade decorations that added beauty to our family event.',
    },
  ];

  return (
    <div className="bg-orange-50 text-gray-800 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-orange-700">
          Aishwarya Arts Studio
        </h1>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-orange-600">
            Home
          </a>
          <a href="#about" className="hover:text-orange-600">
            About
          </a>
          <a href="#portfolio" className="hover:text-orange-600">
            Portfolio
          </a>
          <a href="#services" className="hover:text-orange-600">
            Services
          </a>
          <a href="#contact" className="hover:text-orange-600">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-orange-100 to-pink-100 py-24 px-8 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold text-orange-800 leading-tight">
            Bringing Indian Tradition to Life Through Art & Creativity
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Rangoli Designs • Bridal Mehendi • Chitrakala Artwork • Handmade
            Crafts
          </p>

          <p className="mt-4 text-gray-600">
            Elegant traditional artwork crafted with passion, culture and
            creativity.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-2xl shadow-lg transition">
              View Portfolio
            </button>

            <button className="border border-orange-600 text-orange-700 hover:bg-orange-100 px-6 py-3 rounded-2xl transition">
              Book a Service
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
            alt="Artist"
            className="rounded-3xl shadow-xl h-[450px] object-cover w-full"
          />

          <div>
            <h3 className="text-4xl font-bold text-orange-700 mb-6">
              About Aishwarya
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              I am a passionate traditional artist specializing in Rangoli
              design, Mehendi art, Chitrakala drawing and handmade crafts.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              My artistic journey began through festivals, weddings and family
              celebrations where I discovered my love for Indian traditional
              art and handmade creativity.
            </p>

            <p className="text-gray-700 leading-relaxed">
              My mission is to preserve traditional art forms while blending
              them with modern elegance and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="py-20 px-8 bg-gradient-to-b from-orange-50 to-pink-50"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-orange-700 mb-12">
            Portfolio Gallery
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-5 text-center">
                  <h4 className="text-xl font-semibold text-orange-700">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-orange-700 mb-12">
            Services Offered
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-orange-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition"
              >
                <h4 className="text-xl font-semibold text-orange-700">
                  {service}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8 bg-pink-50">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-orange-700 mb-12">
            Client Testimonials
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-md"
              >
                <p className="text-gray-700 italic leading-relaxed">
                  “{testimonial.feedback}”
                </p>

                <h4 className="mt-6 font-semibold text-orange-700">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-orange-700 mb-6">
            Let’s Create Something Beautiful Together
          </h3>

          <p className="text-gray-700 mb-10 leading-relaxed">
            Whether you are looking for bridal mehendi, festive rangoli,
            handmade crafts or customized artistic creations, I would love to
            connect with you.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-orange-50 p-6 rounded-3xl shadow-md">
              <h4 className="font-bold text-orange-700 mb-3">Location</h4>
              <p>Bengaluru, Karnataka, India</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-3xl shadow-md">
              <h4 className="font-bold text-orange-700 mb-3">Contact</h4>
              <p>+91 XXXXX XXXXX</p>
              <p>hello@aishwaryaartsstudio.com</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-3xl shadow-md">
              <h4 className="font-bold text-orange-700 mb-3">Social Media</h4>
              <p>Instagram: @aishwaryaartsstudio</p>
              <p>LinkedIn: Aishwarya Arts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-700 text-white py-10 text-center px-6">
        <h4 className="text-2xl font-bold">Aishwarya Arts Studio</h4>

        <p className="mt-3 text-orange-100">
          Traditional Art • Creativity • Culture • Celebration
        </p>

        <p className="mt-4 text-sm text-orange-200">
          © 2026 Aishwarya Arts Studio. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

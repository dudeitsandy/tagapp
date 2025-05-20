const Home = () => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src="/images/landing1.jpg" 
          alt="TAG Barbershop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">
            Premium Grooming
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
          <img 
            src="/images/landing2.jpg" 
            alt="Barbershop Service" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
          <img 
            src="/images/landing3.jpg" 
            alt="Barbershop Interior" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="aspect-square overflow-hidden rounded-lg shadow-lg md:col-span-2 lg:col-span-1">
          <img 
            src="/images/landing4.jpg" 
            alt="Barbershop Style" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4 py-8">
        <h2 className="text-4xl font-bold text-gray-800">
          Experience Premium Grooming
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Book your appointment today and discover why TAG Barbershop is the choice for distinguished gentlemen.
        </p>
        <button className="mt-4 px-8 py-3 bg-barbershop-blue text-white rounded-lg hover:bg-blue-700 transition-colors">
          Book Now
        </button>
      </section>
    </div>
  )
}

export default Home 
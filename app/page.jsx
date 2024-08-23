import Head from 'next/head';
import Image from 'next/image';

import Header from './Components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tony & Slay Logistics</title>
        <meta name="description" content="With you on the road - Tony & Slay, your trusted logistics partner." />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="hero-section text-white h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">Tony & Slay</h1>
          <p className="text-xl mb-8">With you on the road - Your trusted logistics partner.</p>
          <a href="#services" className="bg-yellow-500 text-green-600 px-6 py-3 rounded-full font-semibold">Learn More</a>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Car Leasing</h3>
              <p>Choose from a wide range of vehicles to meet your specific needs.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Goods Transportation</h3>
              <p>Reliable and timely delivery of goods across Tanzania.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Bus Services</h3>
              <p>Safe and comfortable bus travel on key routes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-12">Our Fleet</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Example Fleet Image */}
            <div className="relative">
              <Image src="/fleet1.jpg" alt="Fleet 1" layout="fill" objectFit="cover" className="rounded-lg shadow-md" />
              <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white">Toyota Land Cruiser</h3>
            </div>
            <div className="relative">
              <Image src="/fleet2.jpg" alt="Fleet 2" layout="fill" objectFit="cover" className="rounded-lg shadow-md" />
              <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white">Mercedes Benz Sprinter</h3>
            </div>
            <div className="relative">
              <Image src="/fleet3.jpg" alt="Fleet 3" layout="fill" objectFit="cover" className="rounded-lg shadow-md" />
              <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white">Isuzu FTR Truck</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <p>&quot;Tony &amp; Slay helped us move our goods safely and on time. Excellent service!&quot;</p>
              <h4 className="text-green-600 mt-4 font-semibold">- John Doe, CEO of XYZ Ltd.</h4>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <p>&quot;Their bus services are top-notch! I always choose Tony &amp; Slay for my travels.&quot;</p>
              <h4 className="text-green-600 mt-4 font-semibold">- Jane Smith, Frequent Traveler</h4>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <p>&quot;Leasing a car from Tony &amp; Slay was smooth and easy. Highly recommended!&quot;</p>
              <h4 className="text-green-600 mt-4 font-semibold">- Ahmed Ali, Business Owner</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Tony & Slay. All rights reserved.</p>
          <div className="mt-4">
            <a href="#services" className="text-yellow-500 hover:text-yellow-300 mx-2">Services</a>
            <a href="#contact" className="text-yellow-500 hover:text-yellow-300 mx-2">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

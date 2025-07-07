import React from 'react'

const Footer = () => {
  return (
    <div>
        

<footer className="bg-[url('/images/footer-bg-1.jpg')] bg-cover bg-no-repeat text-white py-30 px-10 md:px-16 ">
  <div className="grid md:grid-cols-4 gap-10">
    {/* Logo and Description */}
    <div>
      <div className="mb-4">
        <img src="/images/logo.png" alt="Logo" className="h-8" />
      </div>
      <p className="text-sm leading-relaxed mb-4">
        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation.
      </p>
      <a href="#contact" className="text-sm text-white underline hover:text-green-400 transition">Get in Touch ➞</a>
    </div>

    {/* Business Hours */}
    <div>
      <h4 className="text-lg font-semibold mb-4 border-l-4 border-lime-500 pl-2">Business Hours</h4>
      <p className="text-sm mb-2">Monday – Friday: 9am to 20pm</p>
      <p className="text-sm mb-2">Saturday: 9am to 17pm</p>
      <p className="text-sm mt-4 font-semibold">Vacations:</p>
      <p className="text-sm">All Sunday Days</p>
      <p className="text-sm">All Official Holidays</p>
    </div>

    {/* Practice Areas */}
    <div>
      <h4 className="text-lg font-semibold mb-4 border-l-4 border-lime-500 pl-2">Practice Areas</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-green-400">About Us</a></li>
        <li><a href="#" className="hover:text-green-400">Services</a></li>
        <li><a href="#" className="hover:text-green-400">Blog</a></li>
        <li><a href="#" className="hover:text-green-400">Home</a></li>
        <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h4 className="text-lg font-semibold mb-4 border-l-4 border-lime-500 pl-2">Newsletter</h4>
      <p className="text-sm mb-4">Don’t miss to subscribe to our news feeds, kindly fill the form below.</p>
      <div className="flex">
        <input
          type="email"
          placeholder="EMAIL ADDRESS"
          className="flex-1 p-2 text-black bg-white "
        />
        <button className="bg-lime-500 p-4 text-white font-semibold">JOIN</button>
      </div>
    </div>
  </div>
</footer>


    </div>
  )
}

export default Footer
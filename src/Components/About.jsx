import React from 'react'

const About = () => {
  return (
   <div className="about-container bg-gray-100 p-10 rounded-lg shadow-lg ">
    <div className='flex items-center justify-center mb-8'>
      <h1 className='text-4xl font-bold text-green-700 mr-4'>About Us</h1>
      <div className="aboutLine bg-green-700 w-16 h-1"></div>
    </div>

  <div className="about-content flex flex-col md:flex-row items-center justify-center">
    <div className="about-text text-gray-700 text-lg leading-relaxed md:w-1/2 mb-6 md:mb-0 px-4">
      <p>
        Welcome to our company! We are dedicated to delivering the best services
        to our customers with a focus on quality, innovation, and reliability.
        Our mission is to exceed expectations and make a positive impact in our
        industry.
      </p>
      <p className="mt-4">
        Join us as we continue our journey of growth and excellence. We value
        transparency, creativity, and teamwork in everything we do.
      </p>
    </div>
    <div className="aboutImg md:w-1/2 flex justify-center">
      <img
        className="rounded-3xl w-3/4 h-auto shadow-md"
        src="https://i.pinimg.com/originals/69/dd/46/69dd468f5e56f1a8b82b7dc3fd68acdc.jpg"
        alt="About Us"
      />
    </div>
  </div>
</div>

  )
}

export default About

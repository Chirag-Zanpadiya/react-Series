import React from "react";

import myphoto from '/myphoto.png'

import { FaLaptopCode, FaMobile, FaRocket, FaShoppingCart, FaLock, FaChartLine } from "react-icons/fa";

const services = [
  { title: "Website Development", description: "Fully responsive & custom web development for businesses.", icon: <FaLaptopCode className="w-10 h-10 text-blue-600" /> },
  { title: "Website Security & Maintenance", description: "SSL, security patches, & bug fixes for stable performance.", icon: <FaLock className="w-10 h-10 text-blue-600" /> },
  { title: "SEO & Digital Marketing", description: "Boost online presence with SEO & social media marketing.", icon: <FaChartLine className="w-10 h-10 text-blue-600" /> },
];

function Service() {
  return (
    // <div>
    //   <section class="bg-gray-900 text-white py-16 px-6 min-h-screen">
    //     <div class="max-w-6xl mx-auto text-center py-16 flex justify-center items-center">
    //       {/* <!-- About Me --> */}
    //       <h2 class="text-4xl font-bold mb-4 text-orange-400">About Me</h2>
    //       <p class="text-lg text-gray-300 max-w-2xl mx-auto">
    //         I'm <span class="text-orange-400 font-semibold">ZCATechX</span>, a
    //         passionate web developer and tech enthusiast. I specialize in
    //         frontend development, competitive programming, and web technologies.
    //       </p>
    //     </div>

    //     {/* <!-- Services Section --> */}
    //     <div class="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    //       {/* <!-- Service 1: Web Development --> */}
    //       <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
    //         <div class="text-orange-400 text-5xl mb-4">💻</div>
    //         <h3 class="text-2xl font-semibold mb-2">Web Development</h3>
    //         <p class="text-gray-300">
    //           I build modern, responsive websites using HTML, CSS, JavaScript,
    //           React, and Tailwind CSS.
    //         </p>
    //       </div>

    //       {/* <!-- Service 2: Competitive Programming --> */}
    //       <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
    //         <div class="text-orange-400 text-5xl mb-4">🏆</div>
    //         <h3 class="text-2xl font-semibold mb-2">Competitive Programming</h3>
    //         <p class="text-gray-300">
    //           I solve algorithmic problems using C++, focusing on data
    //           structures, LeetCode, and problem-solving techniques.
    //         </p>
    //       </div>

    //       {/* <!-- Service 3: More Skills --> */}
    //       <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
    //         <div class="text-orange-400 text-5xl mb-4">🚀</div>
    //         <h3 class="text-2xl font-semibold mb-2">Frontend Projects</h3>
    //         <p class="text-gray-300">
    //           I develop UI/UX-focused web applications and interactive
    //           interfaces with modern tech stacks.
    //         </p>
    //       </div>

    //       <div className="max-w-40 max-h-56 rounded-full bg-red-100 relative flex items-center justify-center">
    //         <a href={myphoto} >
    //           <img src={myphoto} alt="myphoto" className="rounded-full" />
    //         </a>
            
    //       </div>
    //     </div>
    //   </section>
    // </div>
<>
<section className="py-12 bg-black dark:bg-black min-h-screen mt-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
          Our Web Development Services
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-12">
          We offer high-quality, custom web solutions to help businesses grow.
        </p>
        <div className="grid grid-cols-1 md:grid-col2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-6 bg-white dark:bg-gray-800 shadow rounded-lg flex flex-col items-center text-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
</>
  

    
  );
}

export default Service;

import React from "react";
import FloatingIcons from "../components/FloatingIcons";
import ceo from "../images/ceo_2.jpg";
import ceo_3 from "../images/ceo_3.jpg";

import "../styles/CEO.css";

function CEO() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-96">
          <img
            src={ceo}
            alt="CEO Leadership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl">
            
            </div>
          </div>
        </div>

        {/* CEO Image Gallery Section */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        

          {/* Profile Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 p-12">
              {/* CEO Image with Badge */}
              <div className="relative">
                <img
                   src={ceo_3}
                  alt="CEO Profile"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#EE3E36] text-black px-8 py-2 rounded-full shadow-md">
                  <span className="font-semibold ">CEO Since 2015</span>
              
                </div>
              </div>

              {/* Profile Details */}
              <div className="space-y-6">
                <h1 className="text-4xl font-bold text-[#EE3E36] mb-4">
                  Gize Shwork Tessema
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                Whether your company is a multination or a smaller enterprise serving international markets, our customer service department understands your needs and determined to make the seemingly impossible become possible. It takes a lot of passion to transfer ideas into effective solutions and even more to turn those in to products and services which contribute to your success. It is this passion for solution that has made us one of the leading company in East Africa
Rising to challenges like these is precisely what our team does every day, everywhere in the world. That’s because our passion is to find better and smaller ways of doing this is driving force behind our business.     </p>

                {/* Achievements Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-[#EE3E36] font-bold text-xl">East Africa</h3>
                    <p className="text-gray-600">Regional Operations</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-[#EE3E36] font-bold text-xl">Client-Centered</h3>
                    <p className="text-gray-600">Efficient Service</p>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Image Sections */}
       
        </div>
      </main>

      <FloatingIcons />
      <br />
      <br />
    </div>
  );
}

export default CEO;

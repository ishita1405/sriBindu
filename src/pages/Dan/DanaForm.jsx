import React from "react";
import danImg from "../../assets/Dan/dan2.jpg"; // use your image

const DanaForm = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-24 items-center">

        {/* ================= LEFT FORM ================= */}
        <div className="bg-white rounded-2xl shadow-xl p-10 w-[380px]">

          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Enter your Name & Contact
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
            />

            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
            />

            <input
              type="email"
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
            />

            <input
              type="number"
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
            />

            <div>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
              />
              <p className="text-xs text-gray-600 mt-2">
                Add your dan date
              </p>
            </div>

            {/* QR Button */}
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-md hover:opacity-95 transition">
              QR Scanner
            </button>

            {/* File Upload */}
            <div>
              <input
                type="file"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-50"
              />
              <p className="text-xs text-gray-600 mt-2">
                Add your payment screenshot
              </p>
            </div>

            {/* Submit Button */}
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-md hover:opacity-95 transition">
              Submit
            </button>

          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="flex justify-center md:justify-end">
          <img
            src={danImg}
            alt="Dana Image"
            className="rounded-2xl h-[80vh] shadow-2xl w-[550px] object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default DanaForm;
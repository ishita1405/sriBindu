import React from "react";

import vid1 from "../../assets/Shivling/video1.mp4";
import vid2 from "../../assets/Shivling/video2.mp4";
import vid3 from "../../assets/Shivling/video3.mp4";
import vid4 from "../../assets/Shivling/video4.mp4";
import vid5 from "../../assets/Shivling/video5.mp4";

const ShivlingVideoGallery = () => {

  const videos = [vid1, vid2, vid3, vid4, vid5];

  return (
    <div className="bg-gray-100 py-14 px-6">

      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-amber-800 mb-12">
        ShivLing Stahpana Video
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <video
              src={video}
              controls
              className="w-full h-[420px] object-cover"
            />
          </div>
        ))}

      </div>

    </div>
  );
};

export default ShivlingVideoGallery;
import React from "react";

import video1 from "../../assets/Video/Video1.mp4";
import video2 from "../../assets/Video/Video2.mp4";
import video3 from "../../assets/Video/Video3.mp4";
import video4 from "../../assets/Video/Video4.mp4";
import video5 from "../../assets/Video/Video5.mp4";
import video6 from "../../assets/Video/Video6.mp4";
import video7 from "../../assets/Video/Video7.mp4";

const videos = [
  { id: 1, title: "Tulsi Archana", src: video1 },
  { id: 2, title: "Katha vachak Pundarik Goswami", src: video2 },
  { id: 3, title: "Mangala Aarti", src: video3 },
  { id: 4, title: "Shreekhand malai Aarti", src: video4 },
  { id: 5, title: "Sankalp (Archana)", src: video5 },
  { id: 6, title: "Makhan aarti", src: video6 },
  { id: 7, title: "Morning shringar aarti", src: video7 },
];

const VideoGallery = () => {
  return (
    <div className="min-h-screen bg-gray-200 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-md overflow-hidden w-[280px]"
            >
              <video
                src={video.src}
                controls
                className="w-full h-[350px] object-cover"
              />

              <div className="py-3 text-center border-t">
                <p className="text-sm font-semibold text-orange-700">
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default VideoGallery;
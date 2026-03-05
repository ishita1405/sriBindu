import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "B Sivaraman",
    location: "Hyderabad, Telangana",
    review:
      "Excellent service, very satisfying experience. God bless you.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Rohini Sharma",
    location: "Mumbai, Maharashtra",
    review:
      "Perfectly booking the puja. Very happy with service.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Anuj Verma",
    location: "Delhi, India",
    review:
      "Very smooth booking experience. Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 4,
    name: "Ani",
    location: "Chennai, Tamil Nadu",
    review:
      "Excellent service experience.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

const Reviews = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h2 className="text-4xl font-bold mb-12">
          Reviews from our{" "}
          <span className="text-orange-500">Devotees</span>
        </h2>

        {/* Review Cards */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="min-w-[320px] bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <p className="text-gray-600 mb-4 leading-relaxed">
                {item.review}
              </p>

              {/* Stars */}
              <div className="flex text-green-500 mb-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
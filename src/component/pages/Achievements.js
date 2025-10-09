import React from 'react';


const Achievements = () => {
  // Dummy achievement data
  const achievements = [
    {
      id: 1,
      title: "Best College Award",
      description:
        "Received the Best College Award for outstanding academic performance and community contribution in 2024.",
      date: "March 2024",
      image:
        "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "National Level Science Fair",
      description:
        "Students from our science department secured 1st place in the National Level Science Fair 2023.",
      date: "December 2023",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "Sports Championship",
      description:
        "Our college football team won the inter-collegiate championship for the third consecutive year.",
      date: "October 2023",
      image:
        "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      title: "Cultural Festival Winner",
      description:
        "Students won multiple prizes in the state-level cultural fest for dance, music, and drama categories.",
      date: "August 2023",
      image:
        "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
            🎓 College Achievements
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <p className="text-blue-600 font-medium text-sm">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Achievements;

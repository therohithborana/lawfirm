import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Senior Attorney',
      image: '/images/john-doe.jpg',
      description: 'Specializes in corporate law and business litigation with over 20 years of experience.',
    },
    {
      name: 'Jane Smith',
      role: 'Family Law Expert',
      image: '/images/jane-smith.jpg',
      description: 'Dedicated to helping families navigate complex legal matters with compassion and expertise.',
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4 font-['Playfair_Display']">
            Our Team
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto font-['Open_Sans']">
            Meet our team of experienced attorneys dedicated to providing exceptional legal services.
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2 font-['Playfair_Display']">
                  {member.name}
                </h3>
                <p className="text-red-600 font-semibold mb-4 font-['Open_Sans']">
                  {member.role}
                </p>
                <p className="text-neutral-600 font-['Open_Sans']">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 
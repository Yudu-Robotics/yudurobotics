export default function TeamGrid() {
  // Sample data for team members
  const teamMembers = [
    {
      name: "Sandeep",
      title: "Founder & CEO",
      imgSrc: "assets/home/Image (1).webp",
    },
    {
      name: "Varun",
      title: "Engineering Manager",
      imgSrc: "assets/home/Image (2).webp",
    },
    {
      name: "Abhijith",
      title: "Product Manager",
      imgSrc: "assets/home/Image (3).webp",
    },
    {
      name: "Dhanesh",
      title: "Frontend Developer",
      imgSrc: "assets/home/Image (4).webp",
    },
    {
      name: "Goutham",
      title: "Backend Developer",
      imgSrc: "assets/home/Image (5).webp",
    },
    {
      name: "Pavan",
      title: "Product Designer",
      imgSrc: "assets/home/Image (6).webp",
    },
    {
      name: "Arjun",
      title: "UX Researcher",
      imgSrc: "assets/home/Image (7).webp",
    },
    {
      name: "Aishwarya",
      title: "Customer Success",
      imgSrc: "assets/home/Image (8).webp",
    },
  ];

  return (
    <div className="container mx-auto">
      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* Mapping through the team members */}
        {teamMembers.map((member, index) => (
          <div key={index} className="text-start">
            <div className="">
              <img src={member.imgSrc} alt={member.name} className="w-full " />
            </div>
            <h3 className="text-xl font-tthoves-medium mt-4">{member.name}</h3>
            <p className="text-primary">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

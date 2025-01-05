const blogData = [
  {
    id: "1",
    title: "Royal Enfield Classic 350 Review",
    content: `
      <section id="contact" className="py-16 bg-black text-gray-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-neon-green mb-8">
          Get In Touch
        </h2>
        <p className="mb-4 text-lg">
          Call us now or send an email to start your adventure.
        </p>
        <p className="font-bold text-yellow-400 text-lg mb-6">
          <span>
            <a href="tel:+917378753636">Phone: (+91) 73787-53636</a>
          </span>{" "}
          |{" "}
          <span>
            <a href="mailto:contact@hinjawadibike.com">
              Email: contact@hinjawadibike.com
            </a>
          </span>
        </p>
          <a
                    href="tel:+917378753636"
                  >
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-bold text-lg hover:bg-black hover:text-yellow-400 border border-yellow-400 transition">
          Call Now
        </button></a>
      </div>
    </section>
    `,
    images: ["/images/classic350-1.jpg", "/images/classic350-2.jpg"],
    publishDate: "2024-03-15",
    category: "Cruiser",
    author: "Bike Expert",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "KTM Duke 390 Performance Review",
    content: `
      The KTM Duke 390 is a high-performance street fighter that delivers exceptional power and handling.
      
      ### Key Features
      - 373cc Liquid-Cooled Engine
      - Advanced Ride-by-Wire
      - Traction Control System
      
      ### Riding Experience
      The Duke 390 offers razor-sharp handling and explosive acceleration, making it perfect for aggressive riders.
      
      ### Maintenance Tips
      - Oil change every 5000km
      - Regular brake pad inspection
      - Coolant level check monthly
    `,
    images: ["/images/duke390-1.jpg", "/images/duke390-2.jpg"],
    publishDate: "2024-03-16",
    category: "Sport",
    author: "Performance Expert",
    readTime: "6 min",
  },
  {
    id: "3",
    title: "Honda CB350 RS First Ride",
    content: `
      The Honda CB350 RS combines retro styling with modern technology for a unique riding experience.
      
      ### Key Features
      - 348cc Air-Cooled Engine
      - LED Lighting
      - Dual Channel ABS
      
      ### Riding Experience
      Smooth power delivery and comfortable ergonomics make it ideal for daily commuting and weekend rides.
      
      ### Maintenance Tips
      - Regular service every 6000km
      - Chain lubrication bi-weekly
      - Tire pressure monitoring
    `,
    images: ["/images/cb350-1.jpg", "/images/cb350-2.jpg"],
    publishDate: "2024-03-17",
    category: "Modern Classic",
    author: "Motorcycle Reviewer",
    readTime: "4 min",
  },
];

export default blogData;

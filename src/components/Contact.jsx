import React from 'react'

const Contact = () => {
  return (
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
  );
}

export default Contact;
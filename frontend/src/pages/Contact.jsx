import ContactForm from '../components/ContactForm';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'john.doe@example.com',
      link: 'mailto:john.doe@example.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+1 (123) 456-7890',
      link: 'tel:+11234567890'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'New York, NY',
      link: null
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/johndoe',
      link: 'https://linkedin.com/in/johndoe'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-primary-50 to-white">
        <div className="section-padding">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            I'm currently seeking internship opportunities for Summer/Fall 2024.
            Feel free to reach out for collaborations, opportunities, or just to connect!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="section-padding">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-3 bg-primary-100 rounded-lg">
                        <info.icon className="text-primary-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-primary-600 hover:text-primary-700 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Availability */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Availability</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Open to internship opportunities
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Available for freelance projects
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Remote or on-site positions
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>

              {/* Response Time */}
              <div className="mt-8 p-6 bg-primary-50 rounded-xl">
                <div className="flex items-center">
                  <div className="text-primary-600 text-2xl mr-4">💬</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Response Time</h3>
                    <p className="text-gray-600">
                      I typically respond within 24 hours. For urgent matters, please mention "URGENT" in your message.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
import { useState } from 'react';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your backend API endpoint
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/contact`,
        formData
      );

      if (response.data.success) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
              placeholder="Your name"
            />
          </div>
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-4 text-gray-400" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Your message here..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <FiSend />
              <span>Send Message</span>
            </>
          )}
        </button>

        {/* Status Message */}
        {submitStatus && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
import React, { useState } from "react";
import img1 from "../assets/Images/contact.png";

const Contact = () => {
  // State for form data and submission status
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Simulate form submission (e.g., API call)
      console.log("Form submitted:", formData);
      setSubmitted(true);
      // Reset form after submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
      // Reset submission status after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-[#18181B] mb-4">Get in Touch</h2>
            <p className="text-[#666666] text-lg mb-8">
              Our friendly team would love to hear from you.
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                Thank you for your message! We’ll get back to you soon.
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#267AFF] ${
                      errors.firstName ? "border-red-500" : "border-[#BDBDBD]"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#267AFF] ${
                      errors.lastName ? "border-red-500" : "border-[#BDBDBD]"
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#267AFF] ${
                    errors.email ? "border-red-500" : "border-[#BDBDBD]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#267AFF] ${
                    errors.phone ? "border-red-500" : "border-[#BDBDBD]"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#267AFF] ${
                    errors.message ? "border-red-500" : "border-[#BDBDBD]"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#267AFF] text-white py-4 rounded-lg font-bold hover:bg-[#1e6ad1] transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Image */}
          <div className="w-full md:w-1/2">
            <img
              src={img1}
              alt="Contact"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
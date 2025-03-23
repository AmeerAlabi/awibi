import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What services does AWIBI offer?",
    answer: "AWIBI provides web development, marketing, and business consulting services to help businesses thrive in the digital space.",
  },
  {
    question: "How can I contact AWIBI?",
    answer: "You can reach us via email at info@awibi.com or call us at +123 456 7890.",
  },
  {
    question: "Does AWIBI offer custom solutions?",
    answer: "Yes, we provide tailored solutions to meet the specific needs of each client, ensuring optimal results.",
  },
  {
    question: "Does AWIBI offer custom solutions?",
    answer: "Yes, we provide tailored solutions to meet the specific needs of each client, ensuring optimal results.",
  },
  {
    question: "Does AWIBI offer custom solutions?",
    answer: "Yes, we provide tailored solutions to meet the specific needs of each client, ensuring optimal results.",
  },
  {
    question: "Does AWIBI offer custom solutions?",
    answer: "Yes, we provide tailored solutions to meet the specific needs of each client, ensuring optimal results.",
  },
  {
    question: "Does AWIBI offer custom solutions?",
    answer: "Yes, we provide tailored solutions to meet the specific needs of each client, ensuring optimal results.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto  mt-[20px] px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#FF5959] to-[#335CF4] text-transparent bg-clip-text ">FAQ</h2>
      <p className=" text-[18px] font-[500] text-[#5d5d5d] mb-[15px]  text-center "> Find answers to common questions about Pecuniary. <br /> Need more help? Contact us anytime.</p>

      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-[1px] px-4 py-2 border-gray-300 mb-4">
            <button
              className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <FaMinus className="text-[#335CF4]" />
              ) : (
                <FaPlus className="text-[#335CF4]" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-300 ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="pb-4 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Us Button */}
      <div className="text-center mt-8">
        <Link
          to="/contact"
          className="bg-[#015AD0] text-white px-6 py-3   hover:bg-[#2b4dc4] transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default FAQ;

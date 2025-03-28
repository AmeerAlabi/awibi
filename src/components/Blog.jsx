import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../assets/Images/blog1.png";
import img2 from "../assets/Images/blog2.png";
import img3 from "../assets/Images/blog3.png";

const blogs = [
  {
    id: 1,
    image: img1,
    date: "12 Dec, 2024",
    title: "AI Applications in Medical Diagnostics",
    description:
      "In today’s healthcare landscape, AI-powered diagnostic tools are revolutionizing how clinicians identify and treat conditions.",
    content: `
      Artificial Intelligence (AI) is transforming the field of medical diagnostics, offering unprecedented accuracy and efficiency in identifying diseases. From detecting early signs of cancer to predicting cardiovascular events, AI-powered tools are becoming indispensable in modern healthcare.

      ### How AI is Changing Diagnostics
      AI algorithms, particularly those based on machine learning and deep learning, can analyze vast amounts of medical data—such as imaging scans, lab results, and patient records—faster and often more accurately than human clinicians. For example, AI models have been trained to detect abnormalities in X-rays, MRIs, and CT scans with a level of precision that rivals or exceeds that of radiologists.

      ### Real-World Applications
      - **Cancer Detection**: AI systems like Google’s DeepMind have shown remarkable success in identifying breast cancer in mammograms, reducing false positives and negatives.
      - **Diabetic Retinopathy**: AI tools can screen for diabetic retinopathy by analyzing retinal images, helping prevent blindness in diabetic patients.
      - **Predictive Analytics**: AI can predict the likelihood of diseases like heart attacks by analyzing patterns in patient data, enabling early intervention.

      ### Challenges and Future Directions
      Despite its promise, AI in diagnostics faces challenges, including data privacy concerns, the need for diverse training datasets, and regulatory hurdles. However, as technology advances and more healthcare providers adopt AI, the potential for improved patient outcomes is immense. The future of medical diagnostics lies in the seamless integration of AI with human expertise, ensuring that technology enhances rather than replaces the human touch in healthcare.
    `,
  },
  {
    id: 2,
    image: img2,
    date: "12 Dec, 2024",
    title: "The Role of Remote Patient Monitoring in Modern Healthcare",
    description:
      "Remote patient monitoring (RPM) is reshaping healthcare by enabling continuous care outside traditional clinical settings.",
    content: `
      Remote Patient Monitoring (RPM) is a game-changer in modern healthcare, allowing patients to receive continuous care from the comfort of their homes. By leveraging wearable devices, mobile apps, and telehealth platforms, RPM enables healthcare providers to monitor patients’ vital signs and health metrics in real time.

      ### What is Remote Patient Monitoring?
      RPM involves the use of digital technologies to collect health data—such as heart rate, blood pressure, glucose levels, and oxygen saturation—from patients in one location and transmit it to healthcare providers in another. This data is then analyzed to make informed decisions about a patient’s care.

      ### Benefits of RPM
      - **Improved Access to Care**: RPM is particularly beneficial for patients in rural or underserved areas who may struggle to access regular medical care.
      - **Chronic Disease Management**: For patients with conditions like diabetes, hypertension, or heart disease, RPM allows for continuous monitoring, reducing the risk of complications.
      - **Reduced Hospitalizations**: By catching potential issues early, RPM can prevent hospital admissions, saving costs for both patients and healthcare systems.
      - **Patient Empowerment**: RPM encourages patients to take an active role in managing their health, as they can track their own data and communicate with their providers.

      ### Challenges and the Road Ahead
      While RPM offers significant benefits, it also comes with challenges, such as ensuring data security, integrating RPM systems with existing healthcare workflows, and addressing disparities in access to technology. As RPM technology continues to evolve, it has the potential to bridge gaps in healthcare delivery, making care more accessible, efficient, and personalized.
    `,
  },
  {
    id: 3,
    image: img3,
    date: "12 Dec, 2024",
    title: "Personalized Medicine: The Intersection of Data and Patient Care",
    description:
      "The era of one-size-fits-all medicine is giving way to treatment approaches tailored to individual patient characteristics.",
    content: `
      Personalized medicine, also known as precision medicine, is revolutionizing healthcare by tailoring treatments to the unique genetic, environmental, and lifestyle factors of each patient. This approach moves away from the traditional one-size-fits-all model, offering more effective and targeted care.

      ### What is Personalized Medicine?
      Personalized medicine uses advanced technologies—like genomics, big data analytics, and AI—to understand the specific characteristics of a patient’s condition. By analyzing a patient’s genetic makeup, doctors can identify the most effective treatments and predict how a patient will respond to certain drugs.

      ### Key Examples of Personalized Medicine
      - **Cancer Treatment**: Oncologists use genetic profiling to identify mutations in a patient’s tumor, allowing them to prescribe targeted therapies that are more effective and have fewer side effects.
      - **Pharmacogenomics**: This field studies how genes affect a person’s response to drugs, helping doctors choose medications that are most likely to work for a specific patient.
      - **Rare Diseases**: For patients with rare genetic disorders, personalized medicine can lead to the development of custom therapies that address the root cause of the disease.

      ### The Role of Data in Personalized Medicine
      The success of personalized medicine relies heavily on data. Electronic health records, genomic sequencing, and wearable devices provide the raw data needed to create individualized treatment plans. However, this also raises concerns about data privacy and the ethical use of genetic information.

      ### The Future of Personalized Medicine
      As technology advances, personalized medicine is expected to become more widespread, offering hope for better outcomes in a wide range of conditions. However, challenges such as high costs, limited access to advanced diagnostics, and the need for more research must be addressed to make personalized medicine a reality for all patients.
    `,
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="bg-gradient-to-r from-[#FF5959] to-[#335CF4] text-transparent bg-clip-text text-4xl md:text-5xl font-extrabold mb-4">
            Latest in Health Tech
          </h2>
          <p className="text-[#666666] text-lg">
            Stay updated with the latest on our blog. Here are the latest headlines:
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              {/* Blog Content */}
              <div className="p-6">
                {/* Date */}
                <p className="text-sm text-[#666666] mb-2">{blog.date}</p>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#18181B] mb-3">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-[#666666] mb-4">{blog.description}</p>

                {/* Read More Button */}
                <Link to={`/blog/${blog.id}`}>
                  <div className="flex items-center text-[#267AFF] hover:text-[#1e6ad1] transition">
                    <span className="mr-2 font-semibold">Read more</span>
                    <FaArrowRight />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
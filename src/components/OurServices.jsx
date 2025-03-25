import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import serv1 from "../assets/Images/serv1.png"
import serv2 from "../assets/Images/serv2.png"
import serv3 from "../assets/Images/serv3.png"
import serv from "../assets/Images/serv.png"

const services = [
  {
    title: "Electronic Health Record (EHR) System",
    description:
      "Our flagship EHR platform provides healthcare professionals with seamless access to patient information, enabling better clinical decision-making and improved care coordination. The system offers secure storage of patient medical histories, diagnoses, medications, and treatment plans with real-time updates that synchronize instantly across facilities. We've designed the interface to be intuitive and user-friendly, requiring minimal training for busy healthcare staff, and included offline capabilities to ensure functionality in areas with limited connectivity.",
    image: serv1,
    ctaText: "Request EHR Demo",
    ctaLink: "/request-demo",
    ctaColor: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "Technology Infrastructure Development",
    description:
      "We build the foundations for sustainable digital healthcare ecosystems. This includes network installation to ensure reliable connectivity in healthcare facilities, hardware provision to supply necessary devices for accessing digital health services, system integration to connect existing healthcare systems with our EHR platform, and scalable solutions that can grow alongside community needs.",
    image: serv2,
    ctaText: "Consult on Infrastructure Needs",
    ctaLink: "/consult",
    ctaColor: "bg-red-500 hover:bg-red-600",
  },
  {
    title: "Community Health Initiatives",
    description:
      "We believe technology should serve everyone in the community, regardless of location or resources. Our mobile health units bring digital healthcare solutions directly to remote areas, while our community education programs work to improve health literacy and digital adoption. We've developed specialized preventive care tools to help manage chronic conditions and implemented health data collection systems that monitor population health to address emerging community needs.",
    image: serv3,
    ctaText: "Contact Us",
    ctaLink: "/contact",
    ctaColor: "bg-blue-500 hover:bg-blue-600",
  },
]

const OurServices = () => {
  return (
    <section className="bg-[white]  text-white py-16">
        <img src={serv} alt="" className="" />
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold">Our Services</h2>
        
      </div>

      <div className="container p-[30px] mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} mb-24 gap-[90px]`}
          >
            <div className="w-full lg:w-1/2">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h3
                className={`text-3xl font-bold mb-6 ${
                  index === 0 ? "text-black" : index === 1 ? "text-black" : "text-black"
                }`}
              >
                {service.title}
              </h3>
              <p className="text-black mb-8 leading-relaxed">{service.description}</p>
              <div>
                <Link to={service.ctaLink}>
                  <button
                    className={`px-6 py-3 text-white font-medium  transition flex items-center gap-2 ${
                      index === 0
                        ? "bg-green-500 hover:bg-green-600"
                        : index === 1
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-blue-500 hover:bg-blue-600"
                    }`}
                  >
                    {service.ctaText}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurServices


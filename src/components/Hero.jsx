import { FiUsers, FiFileText, FiBox } from "react-icons/fi";
import img1 from "../assets/Images/hero3.png";
import img2 from "../assets/Images/bg5.jpg";

// Reusable Card Component
const Card = ({ children, className = "", ...props }) => (
  <div
    className={`overflow-hidden  ${className}`}
    {...props}
  >
    {children}
  </div>
);

// Reusable Button Component
const Button = ({ children, className = "", variant = "primary", ...props }) => (
  <button
    className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
      variant === "primary"
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default function GridSection() {
  return (
    <div className="mt-10 py-10 bg-[#F5F9FF]">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-[#1A1A1A]">
          Transforming <span className="text-[#4169E1]">Healthcare</span> in Africa
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-[#4A4A4A] leading-relaxed">
          Shaping the future of healthcare in Africa through technology, innovation and empowerment.
        </p>
        <Button className="bg-[#4169E1] px-8 py-3 text-lg hover:bg-[#4169E1]/90">
          Explore our services
        </Button>
      </section>

      {/* Grid Section */}
      <section className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Image Card */}
          <Card className="md:col-span-2 h-[300px]">
            <img
              src={img1}
              alt="EHR illustration"
              className="w-full h-full object-cover "
            />
          </Card>

          {/* Awibi Community Card */}
          <Card className="bg-[#335CF4] text-white flex flex-col justify-between p-6">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <FiUsers className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Awibi Community</h3>
              <p className="text-white/90 text-base leading-relaxed">
                An open community of enthusiasts, students, researchers, and professionals.
              </p>
            </div>
            <Button variant="outline" className="mt-4">
              Become a member
            </Button>
          </Card>

          {/* EHR Card */}
          <Card className="bg-[#335CF4] text-white flex flex-col justify-between p-6">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <FiFileText className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Electronic Health Record (EHR)</h3>
              <p className="text-white/90 text-base leading-relaxed">
                Providing access to electronic health records (EHR) for health and diagnostic centers, making quality healthcare more efficient and accessible.
              </p>
            </div>
            <Button variant="outline" className="mt-4">
              Learn more
            </Button>
          </Card>

          {/* Partners Card */}
          <Card className="bg-gradient-to-br from-[#FF6F61] to-[#D84A9F] text-white flex flex-col items-center justify-center p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
              <FiBox className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-4xl font-extrabold">120+</h3>
            <p className="mt-2 text-xl font-medium">Partners</p>
          </Card>

          {/* Second Image Card */}
          <Card className="h-[350px]">
            <img
              src={img2}
              alt="Consultations illustration"
              className="w-full h-full object-cover"
            />
          </Card>
        </div>
      </section>
    </div>
  );
}
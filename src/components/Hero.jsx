import { FiUsers, FiFileText, FiBox } from "react-icons/fi";
import img1 from "../assets/Images/hero1.png";
import img2 from "../assets/Images/img2.jpeg";

// Reusable Card Component
const Card = ({ children, className = "", ...props }) => (
  <div className={`overflow-hidden rounded-lg ${className}`} {...props}>
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
    <div className="mt-10">
      {/* Hero Section */}
      <section className="container mt-[100px] mx-auto px-6 py-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Transforming <span className="text-[#4169E1]">Healthcare</span> in Africa
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-black">
          Shaping the future of healthcare in Africa through technology, innovation, and empowerment.
        </p>
        <Button className="bg-[#4169E1] px-8 h-[50px] text-lg hover:bg-[#4169E1]/90">
          Explore our services
        </Button>
      </section>

      {/* Grid Section */}
      <section className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image Card */}
          <Card className="sm:col-span-2 lg:col-span-2">
            <img src={img1} alt="EHR illustration" className="w-full h-full object-cover rounded-lg" />
          </Card>

          {/* Community Card */}
          <Card className="bg-blue-600 text-white flex flex-col justify-center p-6">
            <div className="space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <FiUsers className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Awibi Community</h3>
              <p className="text-white/80">
                An open community of enthusiasts, students, and professionals.
              </p>
              <Button variant="outline" className="mt-4">
                Become a member
              </Button>
            </div>
          </Card>

          {/* EHR Card */}
          <Card className="bg-[#335CF4] text-white h-[350px] flex flex-col justify-center p-6">
            <div className="space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <FiFileText className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Electronic Health Record (EHR)</h3>
              <p className="text-white/80">
                Improving healthcare accessibility through digital records.
              </p>
              <Button variant="outline" className="mt-4">
                Learn more
              </Button>
            </div>
          </Card>

          {/* Partners Card */}
          <Card className="bg-red-400 h-[350px] text-white flex flex-col items-center justify-center p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
              <FiBox className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-4xl font-bold">120+</h3>
            <p className="mt-2 text-xl">Partners</p>
          </Card>

          {/* Second Image Card */}
          <Card className="sm:col-span-2 h-[350px] lg:col-span-1">
            <img src={img2} alt="Consultations illustration" className="w-full h-full object-cover rounded-lg" />
          </Card>
        </div>
      </section>
    </div>
  );
}

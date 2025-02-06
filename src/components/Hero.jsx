import { FiUsers, FiFileText, FiBox, FiActivity } from "react-icons/fi";
import img1 from '../assets/Images/hero1.png';
import img2 from '../assets/Images/img2.jpeg';

// Reusable Card Component
const Card = ({ children, className = "", ...props }) => (
  <div
    className={`overflow-hidden rounded-lg ${className}`}
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
    <div className=" mt-[60px]">

<section className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">
          Transforming <span className="text-[#4169E1]">Healthcare</span> in Africa
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-black">
          Shaping the future of healthcare in Africa through technology, innovation and empowerment
        </p>
        <Button  className="bg-[#4169E1]   px-8 h-[50px] text-lg hover:bg-[#4169E1]/90">
          Explore our services
        </Button>
      </section>

  <section className="mx-auto md:w-[1150px] w-full mt-[5px] max-w-7xl px-4 py-12">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Community Card */}
        <Card className=" h-[300px] rounded-lg col-span-2">
          <img
            src={img1}
            alt="EHR illustration"
            className="h-full w-full object-cover rounded-lg"
          />
        </Card>

        {/* Awibi Community Card */}
        <Card className="bg-blue-600 h-[300px] text-white">
          <div className="p-8">
            <div className="space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <FiUsers className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Awibi Community</h3>
              <p className="text-white/80">
                An open community ecosystem of enthusiasts, students, researchers, and professionals.
              </p>
              <Button variant="outline" className="mt-4">
                Become a member
              </Button>
            </div>
          </div>
        </Card>

        {/* EHR Card */}
        <Card className="bg-[#335CF4] h-[300px] text-white">
          <div className="p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
              <FiFileText className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Electronic Health Record (EHR)</h3>
            <p className="text-white/80">
              Providing access to electronic health records (EHR) for health and diagnostic centers, making quality healthcare more efficient and accessible.
            </p>
            <Button variant="outline" className="mt-4">
              Learn more
            </Button>
          </div>
        </Card>

        {/* Partners Card */}
        <Card className="bg-red-400 h-[300px h-[300px] text-white">
          <div className="p-8 flex flex-col items-center justify-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
              <FiBox className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-4xl font-bold">120+</h3>
            <p className="mt-2 text-xl">Partners</p>
          </div>
        </Card>

        {/* Consultations Card */}
        <Card className=" h-[300px] ">
          <img
            src={img2}
            alt="Consultations illustration"
            className="h-full w-full object-cover rounded-lg"
          />
        </Card>
      </div>

      {/* Logos Section */}
      
    </section>
    </div>
  );
}
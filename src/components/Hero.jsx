import { FiUsers, FiFileText, FiBox, FiActivity } from "react-icons/fi"
improt img

const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg shadow-md overflow-hidden ${className}`}>{children}</div>
)

const Button = ({ children, className = "", variant = "primary", ...props }) => (
  <button
    className={`px-4 py-2 rounded-md font-medium ${
      variant === "primary" ? "bg-blue-600 text-white" : "border border-gray-300 text-gray-700"
    } ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default function GridSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Community Card */}


        <Card className="col-span-2">
          <div className="p-6 grid md:grid-cols-2 gap-4">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="EHR illustration"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          {/* </div> */}
        </Card>


        {/* EHR Card */}

        <Card className="bg-blue-600 text-white">
          <div className="p-6 grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <FiUsers className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Awibi Community</h3>
              <p className="text-white/80">
                An open community ecosystem of enthusiasts, students, researchers and professionals.
              </p>
              <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
                Become a member
              </Button>
            </div>
            <div className="relative hidden md:block">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Community illustration"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </Card>

       

        {/* Partners Card */}
        <Card className="bg-red-400 text-white">
          <div className="p-6 flex flex-col items-center justify-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
              <FiBox className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-4xl font-bold">120+</h3>
            <p className="mt-2 text-xl">Partners</p>
          </div>
        </Card>

        {/* Training Card */}
        <Card>
          <div className="p-6 space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <FiUsers className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Training</h3>
            <p className="text-sm text-gray-600">
              Professional development and specialized training programs for healthcare professionals.
            </p>
            <Button variant="outline">Learn more</Button>
          </div>
        </Card>

        {/* Consultations Card */}
        <Card>
          <div className="p-6 space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <FiActivity className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Consultations</h3>
            <p className="text-sm text-gray-600">Bridging the gap in health tech training and expertise.</p>
            <Button variant="outline">Learn more</Button>
          </div>
        </Card>
      </div>

      {/* Logos Section */}
      <div className="mt-12 bg-blue-600 px-6 py-8 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {["Washington Post", "TechCrunch", "Bloomberg", "Gizmodo", "Forbes"].map((logo) => (
            <div key={logo} className="flex items-center justify-center">
              <span className="text-white font-semibold">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


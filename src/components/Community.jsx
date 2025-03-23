import { Link } from "react-router-dom"
import bg from '../assets/Images/bg3.png';


export default function Community() {
  return (
    <section className="relative  bg-blue-600 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-white p-8 md:p-16 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">AWIBI MEDTECH Group</h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-xl">
            A vibrant open network of enthusiasts, students, researchers, and professionals driving the future of
            healthcare through technology, education, and innovation.
          </p>
          <div>
            <Link to="/community">
              <button
                className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-blue-50 transition-colors duration-300"
                aria-label="Join our Community"
              >
                Join our Community
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image - Takes up full height */}
        <div className="w-full md:w-1/2">
          <img
            src={bg}
            alt="Healthcare professionals using medical technology"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}


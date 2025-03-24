import bg from '../assets/Images/bg3.png';

export default function New() {
  return (
    <section className="relative mt-[70px] bg-[] h-screen w-full bg-cover bg-center bg-no-repeat">
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full md:h-[500px] object-cover z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute h-full md:h-[500px] inset-0 bg-gradient-to-r from-transparent to-blue-900/100 z-10" />

      {/* Content */}
      <div className="w-full md:w-1/2 text-white p-8 md:p-16 flex flex-col justify-center bg-transparent">
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

    </section>
  );
}
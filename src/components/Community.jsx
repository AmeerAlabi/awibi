import bg from '../assets/Images/bg3.png';

export default function Community() {
  return (
    <section className="relative bg-gray-100 mt-[10px] mb-0 h-screen w-full bg-cover bg-center bg-no-repeat">
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full md:h-[500px] object-cover z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute h-full md:h-[500px] inset-0 bg-gradient-to-r from-blue-900/100 to-transparent z-10" />

      {/* Content */}
      <div className="relative md:h-[500px] h-full flex items-center justify-start z-20">
        <div className="w-full max-w-2xl px-4 md:px-8 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Transforming Healthcare with AwibiEHR
          </h1>

          <p className="text-base md:text-xl mb-8 opacity-90 leading-relaxed">
          An open community ecosystem of enthusiasts, students, researchers and professionals to drive health tech education, research and innovation in Africa.
          </p>

          <button
            className="bg-white text-blue-600 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors duration-200"
            aria-label="Discover AwibiEHR"
          >
           Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
}
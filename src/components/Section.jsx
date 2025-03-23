import bg from '../assets/Images/bg3.png';

export default function Hero() {
  return (
    <section className="relative bg-[#D2E1FA21] h-screen w-full bg-cover bg-center bg-no-repeat">
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full md:h-[500px] object-cover z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute h-full md:h-[500px] inset-0 bg-gradient-to-r from-transparent to-blue-900/100 z-10" />

      {/* Content */}
      <div className="relative md:h-[500px] h-full flex items-center justify-end z-20">
        <div className="w-full max-w-2xl px-4 md:px-8 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Transforming Healthcare with AwibiEHR
          </h1>

          <p className="text-base md:text-xl mb-8 opacity-90 leading-relaxed">
            A secure, patient-centric, and efficiently designed solution—your records don't have to be a barrier to quality care.
          </p>

          <button
            className="bg-white cursor-pointer text-blue-600 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors duration-200"
            aria-label="Discover AwibiEHR"
          >
            Discover AwibiEHR
          </button>
        </div>
      </div>
    </section>
  );
}
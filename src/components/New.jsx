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
      <div className="relative md:h-[500px] h-full flex items-center justify-end z-20">
        <div className="w-full max-w-2xl px-4 md:px-8 text-white">
          <h1 className="text-3xl md:text-xl font-bold mb-2 leading-tight">What’s new?</h1>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
          Latest In HealthTech
          </h1>

          <p className="text-base md:text-xl mb-8 opacity-90 leading-relaxed">
          Discover what’s new in healthtech with the latest news, trends and innovations!
          </p>

          {/* <button
            className="bg-white text-blue-600 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors duration-200"
            aria-label="Discover AwibiEHR"
          >
            Discover AwibiEHR
          </button> */}
        </div>
      </div>
    </section>
  );
}
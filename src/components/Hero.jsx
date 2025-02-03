import React from "react";

const HeroSection = () => {
  return (
    <section className="px-6 mt-[400px] py-12">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px]">
        {/* First Large Image (3 cols, 2 rows) */}
        <div className="bg-gray-300 col-span-3 row-span-2 flex items-center justify-center border border-dashed border-gray-500">
          <p className="text-gray-700">Image 1 (3x2)</p>
        </div>

        {/* Small Image beside it (1 col, 1 row) */}
        <div className="bg-gray-300 col-span-1 row-span-1 flex items-center justify-center border border-dashed border-gray-500">
          <p className="text-gray-700">Image 2 (1x1)</p>
        </div>

        {/* Second Row - First Image (2 cols, 1 row) */}
        <div className="bg-gray-300 col-span-2 row-span-1 flex items-center justify-center border border-dashed border-gray-500">
          <p className="text-gray-700">Image  (2x1)</p>
        </div>

        {/* Second Row - Second Image (1 col, 1 row) */}
        <div className="bg-gray-300 col-span-1 row-span-1 flex items-center justify-center border border-dashed border-gray-500">
          <p className="text-gray-700">Image 4 (1x1)</p>
        </div>

        {/* Second Row - Third Image (1 col, 3 rows) */}
        <div className="bg-gray-300 col-span-1 row-span-2 flex items-center justify-center border border-dashed border-gray-500">
          <p className="text-gray-700">Image 5 (1x2)</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

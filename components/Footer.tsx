import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black ">
      {/* Black banner style footer */}
      <div className="bg-black text-white w-full py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end md:items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6">9808183365</h2>
            <div className="text-xs tracking-widest uppercase space-y-1">
              <p className="font-bold text-white">Just suishi</p>
              <p className="text-gray-400">uk london 100</p>
              <p className="text-gray-400">Houston, TX 77027</p>
            </div>
          </div>

          <div className="mt-12 md:mt-0 text-right">
            <p className="text-xs uppercase tracking-widest font-bold mb-4">
              Business Hours
            </p>
            <div className="text-[10px] tracking-wider text-gray-400 space-y-2">
              <p>
                <span className="text-white">Sun - Th:</span> 10:30 am to 10:15
                pm
              </p>
              <p>
                <span className="text-white">Fri:</span> 10:30 am to 11 pm
              </p>
              <p>
                <span className="text-white">Sat:</span> 9 am to 11 pm
              </p>
            </div>

            <div className="mt-8 flex justify-end items-end">
              <span className="font-serif text-2xl italic text-white">
                order now
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

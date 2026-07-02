import heroHouse from "../../assets/images/hero/hero-house.png";

function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#FBF5EF]">
      {/* Background Image */}
      <img
        src={heroHouse}
        alt="Hero"
        className="absolute bottom-0 left-0 w-full h-full object-cover object-center"
      />

      {/* Cream Overlay */}
      <div className="absolute inset-0 bg-[#FBF5EF]/15"></div>

      {/* Left Fog */}
      <div className="absolute -left-24 top-52 w-[320px] h-[320px] rounded-full bg-white/35 blur-[80px]" />

      {/* Right Fog */}
      <div className="absolute -right-20 top-44 w-[320px] h-[320px] rounded-full bg-white/60 blur-[100px]" />

      {/* Bottom Left Fog */}
      <div className="absolute -left-16 bottom-8 w-[250px] h-[180px] rounded-full bg-white/70 blur-[80px]" />

      {/* Bottom Right Fog */}
      <div className="absolute -right-12 bottom-12 w-[250px] h-[180px] rounded-full bg-white/70 blur-[80px]" />

      {/* Background Waves */}
      <div className="absolute top-20 left-0 w-full opacity-20">
        <svg
          viewBox="0 0 1440 220"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120C180 80 260 180 430 150C620 120 720 40 900 80C1080 120 1230 180 1440 120"
            fill="none"
            stroke="#D7C1B2"
            strokeWidth="2"
          />
          <path
            d="M0 170C170 120 310 210 470 180C650 150 770 70 980 120C1180 170 1280 200 1440 160"
            fill="none"
            stroke="#D7C1B2"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Left Stats */}
      {/* Left Stats */}
      <div className="absolute left-[45px] top-[170px] z-20 hidden lg:flex flex-col w-[150px]">
        {/* 150+ */}
        <div className="relative border-b border-black pb-6">
          <div className="flex items-start gap-3">
            <span className="mt-3 h-[6px] w-[6px] rounded-full bg-[#DDD8D3]" />

            <div>
              <h3 className="text-[34px] font-bold leading-none text-[#DDD8D3]">
                150+
              </h3>

              <p className="mt-1 text-[11px] leading-4 text-[#CFC8C2]">
                Completed <br /> Projects
              </p>
            </div>
          </div>
        </div>

        {/* 10+ */}
        <div className="relative border-b border-black py-6">
          <div className="flex items-start gap-3">
            <span className="mt-3 h-[6px] w-[6px] rounded-full bg-[#9A948F]" />

            <div>
              <h3 className="text-[34px] font-bold leading-none text-[#8B847D]">
                10+
              </h3>

              <p className="mt-1 text-[11px] leading-4 text-[#A39C95]">
                Years of <br /> Experience
              </p>
            </div>
          </div>
        </div>

        {/* 500+ */}
        <div className="relative pt-6">
          <div className="flex items-start gap-3">
            <span className="mt-3 h-[6px] w-[6px] rounded-full bg-black" />

            <div>
              <h3 className="text-[34px] font-bold leading-none text-black">
                500+
              </h3>

              <p className="mt-1 text-[11px] leading-4 text-[#555]">
                Happy <br /> Clients
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center pt-24">
        <h1 className="font-serif font-black leading-[0.85] text-center">
          <span className="block text-[#22211F] text-[96px]">Build Your</span>

          <span className="block text-[#B07A69] text-[96px]">Dream Home</span>
        </h1>

        {/* Search Capsule */}
        <div className="mt-8 bg-white rounded-full shadow-xl flex items-center p-2">
          <span className="px-12 text-[#8D8D8D] text-sm">
            with Modern Design
          </span>

          <button className="bg-[#1F1D1B] text-white rounded-full px-9 py-3 font-medium">
            Search Now
          </button>
        </div>
      </div>
{/* ================= Find Properties ================= */}
<div className="absolute left-1/2 -translate-x-1/2 bottom-[30px] z-30 w-[620px] rounded-[24px] bg-[#F8EFE6] shadow-[0_20px_40px_rgba(0,0,0,0.12)] px-8 py-6">

  <h2 className="text-center text-[22px] font-bold text-[#2B2724] mb-5">
    Find Properties
  </h2>

  <div className="flex items-center gap-3">

    {/* City */}
    <select className="flex-1 h-[42px] rounded-full bg-[#E8DDD2] px-4 text-[13px] text-[#8A817A] outline-none border-none">
      <option>📍 City</option>
      <option>Lahore</option>
      <option>Karachi</option>
      <option>Islamabad</option>
    </select>

    {/* Properties */}
    <select className="flex-1 h-[42px] rounded-full bg-[#E8DDD2] px-4 text-[13px] text-[#8A817A] outline-none border-none">
      <option>🏠 Properties</option>
      <option>House</option>
      <option>Apartment</option>
      <option>Villa</option>
    </select>

    {/* Bedroom */}
    <select className="flex-1 h-[42px] rounded-full bg-[#E8DDD2] px-4 text-[13px] text-[#8A817A] outline-none border-none">
      <option>🛏 Bedroom</option>
      <option>1 Bedroom</option>
      <option>2 Bedroom</option>
      <option>3 Bedroom</option>
      <option>4 Bedroom</option>
    </select>

    {/* Search */}
    <button className="w-[42px] h-[42px] rounded-full bg-[#B57C66] text-white flex items-center justify-center hover:bg-[#A56D59] transition">
      ⌕
    </button>

  </div>

</div>
    </section>
  );
}

export default HeroSection;

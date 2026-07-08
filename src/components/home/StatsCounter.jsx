import house from "../../assets/images/stats/about-house.png";
import family1 from "../../assets/images/stats/family1.png";
import family2 from "../../assets/images/stats/family2.png";
import modernHomes from "../../assets/images/stats/waterfront-home.png";
const stats = [
  ["30+", "Satisfied Clients", false],
  ["5k+", "Happy Customers", false],
  ["07+", "Years of Experience", false],
  ["33+", "Projects Successfully", true],
];

function StatsCounter() {
  return (
    <section className="w-full bg-[#FBF0E6] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* ================= TOP: Heading + Paragraph ================= */}
        <div className="grid lg:grid-cols-2 gap-10 mb-10 items-start">
          <h2 className="text-[2.35rem] lg:text-[2.5rem] font-extrabold leading-[1.15] text-[#241C1A]">
            Your Trusted Real <br />
            Estate Advisors
          </h2>
          <div className="flex justify-end">
            <p className="w-full max-w-[430px] text-[13px] leading-[22px] font-normal text-[#444444]">
              Find your perfect property with our expert real estate solutions.
              We help families and investors discover modern homes, luxury
              apartments,and premium living spaces with complete trust and
              transparency.
            </p>
          </div>
        </div>

        {/* ================= MIDDLE: Stats grid + Image collage ================= */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* ---- Stats Grid ---- */}
          <div className="grid grid-cols-2 grid-rows-2 gap-5 max-w-[460px] h-full">
            {stats.map(([n, t, highlight]) => (
              <div
                key={t}
                className={`${
                  highlight ? "bg-[#B8694A] text-white" : "bg-white"
                } rounded-[28px] p-8 border ${
                  highlight ? "border-[#B8694A]" : "border-[#ECDFD6]"
                } h-full flex flex-col justify-center`}
              >
                <h3
                  className={`text-4xl lg:text-5xl font-extrabold leading-none ${
                    highlight ? "text-white" : "text-[#B8694A]"
                  }`}
                >
                  {n}
                </h3>
                <p className="mt-4 text-base font-medium">{t}</p>
              </div>
            ))}
          </div>

          {/* ---- Image Collage ---- */}
          <div className="relative w-full max-w-[460px] mx-auto lg:mx-0 lg:ml-auto">
            {/* Top wide house image */}
            <div className="w-full h-[190px] rounded-2xl overflow-hidden">
              <img
                src={house}
                alt="Modern house"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom two family images */}
            <div className="grid grid-cols-2 gap-3.5 mt-3.5">
              <div className="h-[150px] rounded-2xl overflow-hidden">
                <img
                  src={family1}
                  alt="Happy family"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[150px] rounded-2xl overflow-hidden">
                <img
                  src={family2}
                  alt="Happy family"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Circular logo badge sitting on the seam */}
            <div className="absolute left-1/2 top-[165px] -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full bg-[#B8694A] border-[4px] border-[#FBF0E6] shadow-md flex flex-col items-center justify-center z-10">
              <svg
                width="20"
                height="14"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 15L8 4L12 10L15 6L23 15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[6px] font-bold tracking-wider text-white mt-1 leading-none">
                GOLDHOUSE
              </span>
              <span className="text-[4.5px] tracking-[2px] text-white/90 leading-none mt-[2px]">
                REAL ESTATE
              </span>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM: Heading + Paragraph ================= */}
        <div className="grid lg:grid-cols-2 gap-10 mt-20 items-start">
          <h2 className="text-[2.35rem] lg:text-[2.5rem] font-extrabold leading-[1.15] text-[#241C1A]">
            Modern Homes Built <br />
            with Smart Technology
          </h2>

          <div className="flex justify-end">
            <p className="w-full max-w-[430px] text-[13px] leading-[22px] font-normal text-[#444444]">
              We specialize in designing and building stylish, durable, and
              energy-efficient homes. Our expert team focuses on quality
              construction, elegant interiors, and comfortable living spaces
              tailored to your lifestyle.
            </p>
          </div>
        </div>
        {/* ================= Wide House Image ================= */}
        <div className="mt-14 w-full">
          <div className="overflow-hidden rounded-[30px]">
            <img
              src={modernHomes}
              alt="Modern Homes"
              className="block w-full h-[260px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsCounter;

import heroHouse from "../../assets/images/hero/hero-house.png";

function HeroSection() {
  return (
    <section
      className="relative h-screen w-full bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${heroHouse})` }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        {/* Heading, Button, Search Bar yahan aayenge */}
      </div>
    </section>
  );
}

export default HeroSection;
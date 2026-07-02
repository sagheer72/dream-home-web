function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-12 py-6">
        {/* Logo - Text Only */}
        <div className="flex flex-col items-center leading-none">
          <span className="text-2xl">⛰️</span>
          <span className="font-bold text-sm tracking-wide text-[#2B2725]">
            GOLDHOUSE
          </span>
          <span className="text-[9px] tracking-widest text-[#8a8580]">
            REAL ESTATE
          </span>
        </div>

        {/* Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#2B2725]">
          <li className="cursor-pointer hover:text-[#B07A69] transition">
            Home
          </li>
          <li className="text-[#B07A69]">•</li>
          <li className="cursor-pointer hover:text-[#B07A69] transition">
            About Us
          </li>
          <li className="text-[#B07A69]">•</li>
          <li className="cursor-pointer hover:text-[#B07A69] transition">
            Projects
          </li>
          <li className="text-[#B07A69]">•</li>
          <li className="cursor-pointer hover:text-[#B07A69] transition">
            Services
          </li>
          <li className="text-[#B07A69]">•</li>
          <li className="cursor-pointer hover:text-[#B07A69] transition">
            Pricing
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-[#2B2725]">
          <span className="flex items-center gap-1 cursor-pointer text-sm font-medium">
            EN <span className="text-xs">▾</span>
          </span>
          <span className="cursor-pointer text-lg">⌕</span>
          <span className="cursor-pointer text-xl">☰</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

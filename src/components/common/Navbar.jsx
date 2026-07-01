function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <div className="cursor-pointer">Logo</div>

      <ul className="flex gap-8">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Pricing</li>
      </ul>

      <div className="flex gap-4">
        <span className="cursor-pointer">EN</span>
        <span className="cursor-pointer">⌕</span>
        <span className="cursor-pointer">☰</span>
      </div>
    </nav>
  );
}

export default Navbar;
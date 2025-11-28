const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo / Nombre */}
        <div className="font-semibold tracking-tight">
          <span className="text-indigo-400">GR</span> Portafolio
        </div>

        {/* Links */}
        <ul className="flex gap-6 text-sm">
          <li>
            <a href="#home" className="hover:text-indigo-400 transition-colors">
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-indigo-400 transition-colors">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#lab" className="hover:text-indigo-400 transition-colors">
              Lab
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

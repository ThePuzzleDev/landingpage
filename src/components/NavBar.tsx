const NavBar = () => {
    return (
      <nav className="sticky z-50 h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white transition-all">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            {/* Logo and Text (horizontally aligned) */}
            <a href="/" className="flex items-center z-40 font-bold text-black text-xl sm:text-lg md:text-2xl lg:text-3xl">
              <img
                src="/images/puzzle.png"
                alt="The Puzzle Dev"
                className="w-8 h-8 mr-2 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
               <span className="hidden md:inline text-lg lg:text-xl">
                The Puzzle Dev
                </span>
            </a>
  
            {/* Nav Links */}
            <div className="h-full flex items-center space-x-4">
              <a
                href="#services"
                className="text-black hover:text-gray-700 transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-black hover:text-gray-700 transition-colors duration-300"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="text-black hover:text-gray-700 transition-colors duration-300"
              >
                Contacts
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
  
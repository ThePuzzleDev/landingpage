const NavBar = () => {
    return (
        <nav className="sticky z-50 h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white transition-all">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <a href="/" className="flex z-40 font-bold text-black text-xl" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      The Puzzle Dev
                    </a>
                    <div className="h-full flex items-center space-x-4">
                        <a href="#services" className="text-black hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: 'Open Sans, sans-serif' }}>Services</a>
                        <a href="#portfolio" className="text-black hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: 'Open Sans, sans-serif' }}>Portfolio</a>
                        <a href="#contact" className="text-black hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: 'Open Sans, sans-serif' }}>Contacts</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default NavBar;

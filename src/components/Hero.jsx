const Hero = () => {
  const menuItems = [
    { id: 1, title: "About" },
    { id: 2, title: "Careers" },
    { id: 3, title: "Events" },
    { id: 4, title: "Products" },
    { id: 5, title: "Supports" },
  ];
  return (
    <div id="hero">
      <nav className=" max-w-6xl mx-auto px-6 py-12 ">
        {/* logo container/nav */}
        <div className="flex items-center justify-between font-bold text-white">
          <img src="/logo.png" alt="logo" className="rounded-full h-16" />
          {/* menu */}
          <div className="hidden h-10 md:flex md:space-x-8">
            {menuItems.map(({ id, title }) => {
              return (
                <div
                  key={id}
                  className=" mx-1 hover:border-b group-hover:border-blue-50"
                >
                  <a href="#">{title}</a>
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* humbergerMenu */}
      <div className="md:hidden ">
        <button
          id="menu_btn"
          type="button"
          className=" z-40 block hamburger md:hidden focus:outline-none" 
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>


      {/* more to the hamburger menu  */}

      <div id="menu" className="absolute  top-0 left-0 bottom-0 flex-col self-end  w-full min-h-screen py-1 pt-40 pl-8 space-y-3 text-white bg-black hidden">
        <a href="#"> About</a>
        <a href="#"> Career</a>
        <a href="#"> Events</a>
        <a href="#"> Product</a>
      </div>
      {/* mobile menu */}
      <div className=" max-w-lg m-4 mt-24 mb-24 p-4 text-4xl text-white border-2 md:p-10 md:text-6xl md:max-w-lg md:mx-auto ">
        Impressive Experience that Deliver
      </div>
    </div>
  );
};

export default Hero;

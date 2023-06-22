const Feature = () => {
  return (
    <div>
      <div className="relative flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
        <img src="/desktop/image-interactive.jpg" alt="pic" />
        {/* text-container */}
        <div className="top-48 pr-0 md:absolute md:right-0 md:py-20 md:pl-20 bg-white">
          <h2 className="max-w-lg mt-10 mb-6 text-4xl text-center text-gray-900 md:text-5xl md:mt-0 md:text-left">
            The leader in interactive VR
          </h2>
          <p className="max-w-md text-center md:text-left">
            Founded in 2011 , loopstudio has been producing world class virtual
            reality project for some of the best company
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;

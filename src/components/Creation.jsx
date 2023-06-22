const Creation = () => {
  const picItems = [
    { id: 1, image: "/desktop/image-deep-earth.jpg", title: "Deep Earth" },
    { id: 2, image: "/desktop/image-night-arcade.jpg", title: "night Arcade" },
    { id: 3, image: "/desktop/image-pocket-borealis.jpg", title: "pocket borealis" },
    { id: 4, image: "/desktop/image-fisheye.jpg", title: "night Arcade" },
    
  ];
  return (
    <div>
      <div className="max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        {/* creation header */}
        <div className="flex justify content-center items-center md:justify-between mb-20 ">
          <h2 className="text-4xl text-center md:text-left md:text-5xl">
            Our Creation
          </h2>
          <button className="hidden btn md:block">See All</button>
        </div>
        {/* items container */}
        <div className="flex flex-col justify-between items-center w-full space-y-6 text-2xl text-white md:flex-row md:space-y-0 md:space-x-8">
          {picItems.map(({ id, image, title }) => {
            return (
              <div key={id} className="relative md:w-1/4 overflow-hidden ">
                <img
                  src={image}
                  alt=""
                  className="w-full duration-200 md:block"
                />
                <h5 className="absolute px-6 w-52 bottom-4 md:bottom-8 md:px-8">
                  {title}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Creation;

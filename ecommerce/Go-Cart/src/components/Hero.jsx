const Hero = () => {
  const heroBoxData = [
    { title: "over 1000+", desc: "Trending Styles" },
    { title: "99%", desc: "Customer Statisfaction rate" },
    { title: "24/7", desc: "shopping convienice" },
    { title: "30-day", desc: "Hassle-Free Returns " },
  ];
  return (
    <div className="py-10 px-5 bg-gray-800/10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px] container m-auto">
        {/* text images */}
        <div className="flex-1">
          <div className="space-y-5">
          {/* text */}
            <div>
                {/* title */}
            <h1 className="h1 uppercase">Elevate your style with klothink</h1>
            {/* desc */}
            <p className="p">
              Explore a world of fashion at Klothink, where trends meet
              affordability. Immerse yourself in the latest styles and seize
              exclusive promotions.
            </p>
            </div>
            {/* buttons */}
            <div className="space-x-5">
              <button className="btn bg-yellow-300 hover:bg-yellow-600/50">
                Shop Now
              </button>
              <button className="btn bg-gray-300/50 hover:bg-gray-600/50">
                Contact Us
              </button>
            </div>
          </div>
          {/* box container */}
         <div className="my-10 border-[6px] border-solid border-white/50 rounded-md">
         <div className="m-1 grid grid-cols-2 gap-x-2 gap-y-3 bg-white/50 p-2 rounded-md ">
            {heroBoxData.map((item, index) => (
                <div key={index} className="bg-white rounded-md w-full py-2 px-3 text-center capitalize">
                  <h2 className="h2">{item.title}</h2>
                  <p className="p">{item.desc}</p>
                </div>
            ))}
          </div>
         </div>
        </div>
        {/* images */}
        <div className="flex-1 w-1/2 max-w-[550px] ">
          <img src="/dog-yellow.jpg" alt="jacket" className="object-cover rounded-ss-[50%] rounded-se-[50%] rounded-es-[50px] rounded-ee-[50px]"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;

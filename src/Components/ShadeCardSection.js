const ShadeCardSection = ({theme}) => {
    const rightClass=`flex flex-col items-center justify-center py-8 text-center ${theme==='light'?'bg-blue-50 text-black':'bg-slate-900 text-white'}`;
    const aClass=`btn mt-6 px-6 py-2 border rounded-lg  ${theme==='light'?'border-black text-black hover:bg-blue-900':'border-white text-white hover:bg-blue-900'}`;
    return (
      <div className="container-fluid p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* Left Image Section */}
          <div className="w-full" >
            <img
              src="images/bake2.jpg"
              alt="left picture"
              className="w-full  w-auto"
              style={{height:'90vh'}}
            />
          </div>
  
          {/* Right Content Section */}
          <div className={rightClass}>
            <h1 className="font-bold text-3xl">Buy Any Item Instantly</h1>
            <p className="text-lg mt-4">
              Click on the button to view all of them
            </p>
            <a href="#" className={aClass}>
              View All
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ShadeCardSection;
  
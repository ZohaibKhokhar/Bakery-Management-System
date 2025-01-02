const Cakes = ({ theme }) => {
  const cakeClasss = `container-fluid flex flex-col items-center ${
    theme === "light" ? "bg-blue-50" : "bg-slate-900"
  }`;

  return (
    <div
      className={cakeClasss}
      style={{ padding: "50px 0px", fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Title */}
      <h2 className="text-4xl font-bold mb-0 text-gray-500">Heavenly Bites</h2>

      {/* Images and Text */}
      <div className="flex flex-wrap justify-around items-center w-full gap-8 md:flex-nowrap">
        {/* Cake Image 1 */}
        <div className="flex flex-col items-center w-full sm:w-auto">
          <img
            src="/images/choco4.png"
            alt="Cake 1"
            className="rounded-lg transition-all duration-300"
            style={{ maxWidth: "320px", height: "350px" }}
          />
          <p className="mt-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-medium">
            Chocolate Delight
          </p>
        </div>

        {/* Cake Image 2 */}
        <div className="flex flex-col items-center w-full sm:w-auto">
          <img
            src="/images/choco5.png"
            alt="Cake 2"
            className="rounded-lg transition-all duration-300"
            style={{ maxWidth: "350px", height: "360px" }}
          />
          <p className="mt-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 font-medium">
            Vanilla Bliss
          </p>
        </div>

        {/* Cake Image 3 */}
        <div className="flex flex-col items-center w-full sm:w-auto">
          <img
            src="/images/choco3.png"
            alt="Cake 3"
            className="rounded-lg transition-all duration-300"
            style={{ maxWidth: "330px", height: "360px" }}
          />
          <p className="mt-0 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 font-medium">
            Berry Cheesecake
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cakes;

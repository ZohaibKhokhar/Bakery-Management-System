const Footer2 = ({theme}) => {
    const aClass=`text-gray-600 hover:underline`; 
    const footerclass=`${theme==='light'?'bg-slate-900':'bg-blue-900'}`;
    const h5Class=`text-lg font-semibold ${theme==='light'?'':'text-gray-500'}`;
    return (
      <footer className={footerclass}>
        <div className="container mx-auto px-4 py-16">
          {/* Stay in Touch Section */}
          <div className="flex flex-wrap bg-gray-200 p-6 rounded-lg">
            <div className="w-full md:w-1/2 px-3">
              <h3 className="text-lg font-bold">Stay in touch</h3>
              <p>Subscribe to our mailing list to get the latest updates about our products & services!</p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-end px-3">
              <div className="flex items-center w-full md:w-2/3">
                <input
                  type="email"
                  className="form-input w-full rounded-l-lg border border-gray-300 p-2"
                  placeholder="Enter your email"
                  aria-label="Email"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
                  Subscribe
                </button>
              </div>
              <small className="text-gray-600 mt-2">We care about your data in our privacy policy</small>
            </div>
          </div>
  
          <hr className="my-8 border-gray-300" />
  
          {/* Footer Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* My Account Section */}
            <div>
              <h5 className={h5Class}>My Account</h5>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className={aClass}>
                    Sign in
                  </a>
                </li>
                <li>
                  <a href="#" className={aClass}>
                    Create account
                  </a>
                </li>
                <li>
                  <a href="#" className={aClass}>
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className={aClass}>
                    Wish list
                  </a>
                </li>
                <li>
                  <a href="#" className={aClass}>
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className={aClass}>
                    Privacy Policy & Terms
                  </a>
                </li>
                <li>
                  <a href="#" className={aClass}>
                    Payment
                  </a>
                </li>
                <li>
                  <a href="#" className={aClass}>
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Buy Paints Section */}
            <div>
              <h5 className={h5Class}>Click here to Buy Paints</h5>
              <ul className="mt-4 space-y-0">
                <li>
                  <a href="#" className="text-gray-600 hover:underline" >
                    For Residential Spaces
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    For Commercial Spaces
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    For Institutional Spaces
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    For Industrial Spaces
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Get Advice Section */}
            <div>
              <h5 className={h5Class}>Get Advice</h5>
              <p className="mt-4 text-gray-600">
                To have free advice from our Professional Team about your paint requirements, click the link below:
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Master Paints Free Color Advisory
              </a>
            </div>
  
            {/* Contact Information */}
            <div className="text-sm">
              <h5 className={h5Class}>Master Paints Industries (Pvt.) Ltd.</h5>
              <p className="mt-4">
                Contact Number:{" "}
                <a href="tel:+9242111333465" className="text-blue-500 hover:underline">
                  +92 42 111 333 465
                </a>
              </p>
              <p>Office Timing: Mon-Sat 10am – 6pm</p>
              <p>
                For Sales Inquiries:{" "}
                <a href="mailto:sales@masterpaints.com" className="text-blue-500 hover:underline">
                  sales@masterpaints.com
                </a>
              </p>
              <p>
                Office Location:{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  View on map
                </a>
              </p>
              <h6 className="mt-4 text-lg">Get the app</h6>
              <div className="flex gap-2 mt-2">
                <button className="bg-gray-800 text-white px-4 py-2 text-sm rounded hover:bg-gray-700">
                  Get App
                </button>
                <button className="bg-gray-800 text-white px-4 py-2 text-sm rounded hover:bg-gray-700">
                  App Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer2;
  
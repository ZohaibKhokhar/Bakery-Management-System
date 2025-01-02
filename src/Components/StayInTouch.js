const StayInTouch = ({theme}) => {
    const stayClass=`stay-in-touch p-5 ${theme==='light'?'bg-white ':'bg-gray-800 text-gray-400'}`;
    const formClass=`flex flex-wrap  p-6 rounded-lg ${theme==='light'?'bg-blue-50':'bg-slate-900'}`;
    return ( 
         <div className={stayClass}>
              {/* Stay in Touch Section */}
           <div className={formClass}>
           <div className="w-full md:w-1/2 px-3 py-3">
             <h3 className="text-lg font-bold">Stay in touch</h3>
             <p>Subscribe to our mailing list to get the latest updates about our products & services!</p>
           </div>
           <div className="w-full md:w-1/2 flex flex-col items-end px-3 py-3">
             <div className="flex items-center w-full md:w-2/3">
               <input
                 type="email"
                 className="form-input w-full rounded-l-lg border border-blue-500 p-2"
                 placeholder="Enter your email"
                 aria-label="Email"
               />
               <button className="bg-blue-900 text-white px-4 py-2 rounded-r-lg hover:bg-blue-800">
                 Subscribe
               </button>
             </div>
             <small className="mt-2">We care about your data in our privacy policy</small>
           </div>
         </div>
         </div>
 
     );
}
 
export default StayInTouch;
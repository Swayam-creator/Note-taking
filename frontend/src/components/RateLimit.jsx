import { ZapIcon } from "lucide-react";

const RateLimit=()=>{
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
         <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md">
         <div className="flex flex-col md:flex-row items-center p-6">
        <div className="  bg-primary/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
          <ZapIcon/>
        </div>
        <div className=" flex-1 text-center md:text-left">
        <h3 className="text-xl font-bold mb-2">Rate Limit Reached</h3>
        <p className="text-[0.8rem] mb-1">
            You have made too many requests in a short period.Please wait a moment.
        </p>
        <p className="text-[1rem] text-base-content">
            Try again in a few seconds for the best experience.
        </p>
        </div>
         </div>
         </div>
        </div>
    )
}
export default RateLimit;
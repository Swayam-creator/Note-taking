import { Link } from "react-router";
import {PlusIcon} from "lucide-react"
const NavBar=()=>{
    return (
        <header className=" fixed top-0 w-full h-[5rem] bg-amber-300
        border-b border-base-content/10">
        {/* Logo */}
         <div className="mx-auto max-w-6xl p-4">
         <div className="flex items-center justify-between">
            <h1 className="text-5xl font-bold text-base-300 font-mono tracking-tighter" >NoteTaking</h1>
           <div className="flex items-center gap-4">
            <Link data-theme="halloween" to={"/create-page"} className="btn btn-primary rounded-md">
    <PlusIcon className=" size-6"/>
            <span className="text-[1.5rem] p-3">Create</span>
            </Link>
           </div>
         </div>
         </div>
        </header>
    )
}
export default NavBar;
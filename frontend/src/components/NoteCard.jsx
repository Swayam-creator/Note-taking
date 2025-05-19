import { DeleteIcon, PenSquare, PenSquareIcon, Trash2Icon } from "lucide-react"
import { Link, useNavigate } from "react-router"
import { formatDate } from "../lib/util"
import api from "../lib/axios"
import toast from "react-hot-toast"
const NoteCard = ({note,setNotes}) => {
    const navigate=useNavigate();
    const handleDelete=async(e,id)=>{
        e.preventDefault();
        if(!window.confirm("Do you really want to delete this message!!")) return;
     try {
        const response=await api.delete(`/notes/${id}`); 
        setNotes((prev)=>prev.filter(note=>note._id!==id));
        
            toast.success("Note deleted successfully");
       
     } catch (error) {
        console.log("Error");
        toast.error("Error deleting the note")
     }
    }
    const updateHandler=()=>{
       navigate(`/notes/${id}`);
    }
    
  return (
    <Link to={`/note/${note._id}`}
    className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-4 hover:border-8 hover:rounded-b-3xl border-solid border-[#e5ff00]"
     >
     <div className="card-body">
       <h3 className="card-title text-base-content">{note.title}</h3>
       <p className="text-base-content/70 line-clamp-3" >{note.content}</p>
       <div className="card-actions justify-between items-center mt-4">
       <span className="text-[1rem] text-base-content/60 " >
        {formatDate(new Date(note.createdAt))}
       </span>
       <div className="flex items-center gap-1">
        <PenSquareIcon className="size-6"
         onClick={(e)=>updateHandler(e,note._id)}   
        />
       </div>
       <button>
        <Trash2Icon className="size-6" onClick={(e)=>handleDelete(note._id)}/>
       </button>
       </div>
     </div>
    </Link>
  )
}

export default NoteCard

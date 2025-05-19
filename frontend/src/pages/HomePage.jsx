import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import RateLimit from "../components/RateLimit";
import api from "../lib/axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";
const HomePage=()=>{
    const [isRateLimited,setIsRateLimited]=useState(false);
    const [notes,setNotes]=useState([]);
    const [loading,setLoading]=useState();
     useEffect(()=>{
      const fetchNotes=async() =>{
        try {
            const res=await api.get("/notes");
            console.log(res.data);
            setNotes(res.data);
            setIsRateLimited(false);
            toast.success("Welcome");
        } catch (error) {
            console.error(error.response.status);
            if(error.response.status===429){
                setIsRateLimited(true);
            }
            else{
                toast.error("Error fetching data");
            }
        }
        finally{
            setLoading(false);
        }
      }
      fetchNotes();
     },[])
    return (
        <div className="min-h-screen">
           <NavBar className="fixed top-0" />
           {isRateLimited && <RateLimit/>}
         <div className="max-w-7xl mx-auto p-4 mt-6"> 
           {loading && <div className="text-center text-white">Loading...</div>}
         </div>
         {notes.length==0 && !isRateLimited &&<NotesNotFound/>}
         {notes.length>0 && !isRateLimited && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5 my-[5rem]">
             {
                notes.map((note)=>(
                    <NoteCard className="mt-5" key={note._id} note={note} setNotes={setNotes} />
                ))
             }
            </div>
         )}
        </div>
    )
};
export default HomePage;
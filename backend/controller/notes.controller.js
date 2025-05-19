import Notes from "../models/notes.model.js";

// get controller starts here
export async function getAllPost(req,res){
   try {
     const notes = await Notes.find({}).sort({createdAt:-1});
     res.status(200).json(notes);
   } catch (error) {
     res.status(404).json({message:"Unable to find notes"});
   }
}
// get controller ends here
// ------------------------------------
// create controller  starts here
export async function createPost(req,res){
   try {
    const {title , content}=req.body;
    console.log(req.body);
    if(!title || !content){
        return res.status(400).json({message:"All fields are required",success:true});
    }
    const note=new Notes({
        title:title,
        content:content
    });
    const newNote=await note.save();
    res.status(201).json(newNote);
   } catch (error) {
     return res.status(500).json({message:"Internal server error"})
   }
}
// create controller ends here
// ------------------------------------
// Update controller starts here
export async function updatePost(req,res){
   try {
     const { title ,content  } = req.body;
     const updatedNote=await Notes.findByIdAndUpdate(
        req.params.id,
        {title:title},
        {content:content},
        {new : true},
    );
    if(!updatedNote){
        return res.status(404).json({message:"Updated Note not found"});
    }
   res.status(200).json(updatedNote);
   } catch (error) {
    return res.status(400).json({message:"Error in Update Controller"});
   }
}
// Update controller ends here
// ------------------------------------
// Delete controller starts here
export async function deletePost(req,res){
 try {
    const deleteNotes=await Notes.findByIdAndDelete(
        req.params.id
    )
    if(!deleteNotes){
        return res.status(404).json({message:"Note not found"});
    }
    res.status(200).json({message:"Note delete successfully"});
 } catch (error) {
    return res.status(400).json({message:"Error in delete Controller"});
 }
}
// Delete controller ends here
// ------------------------------------
// get controller by Id starts here
export async function getPostById(req,res){
    try {
     const data = await Notes.findById(req.params.id);
     if(!data){
        return res.status(404).json({message:"Note not found"});
     }
     res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({message:"Error in Get by Id controller "})
    }
}
// get controller by Id ends here
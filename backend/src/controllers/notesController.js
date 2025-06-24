import Note from "../models/Note.js";

export async function getAllNotes(req,res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({message: "Internal server error", error: error.message});
        console.error("Error fetching notes:", error);
    }
}

export async function createNote(req,res) {
    try {
        const { title, content } = req.body;
        const note = new Note({
            title,
            content});

        const savedNote = await note.save();
        res.status(201).json(savedNote);   
    } catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}

export async function updateNote(req,res) {
    try {
        const {title, content} = req.body;
        const updateNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});
        if (!updateNote) {
            return res.status(404).json({message: "Note not found"});
        }
        res.status(200).json(updateNote);
    } catch (error) {
        console.error("Error updating note:", error);
        res.status(500).json({message: "Internal server error", error: error.message}); 
        
    }
}

export async function deleteNote(req,res) {
    try {
        const deleteNone = await Note.findByIdAndDelete(req.params.id, {new: true});
        if (!deleteNone) {
            return res.status(404).json({message: "Note not found"});
        }
        res.status(200).json({message: "Note deleted successfully"});
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({message: "Internal server error", error: error.message});
        
    }
}
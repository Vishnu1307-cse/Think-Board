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
        const newNonte = new Note({
            title,
            content});

        await newNonte.save();
        res.status(201).json({message: "Note created successfully", note: newNonte});   
    } catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}

export async function updateNote(req,res) {
    res.status(201).json({message:"Note updated successfully"});
}

export async function deleteNote(req,res) {
    res.status(200).json({message:"Note deleted successfully"});
}
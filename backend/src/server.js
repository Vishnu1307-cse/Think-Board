import express from 'express';

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';

const app = express();

connectDB();

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/notes", notesRoutes);


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
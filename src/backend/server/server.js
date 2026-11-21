import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import auth from '../routes/auth.js';
import farming from '../routes/farming.js';
import product from '../routes/product.js';
import training from '../routes/training.js';
import users from '../routes/users.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.SERVER_PORT || 3000;

console.log("host",process.env.DB_HOST)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.resolve(__dirname,"../../../public");

app.use(express.static(publicPath));

app.get("/", (req,res)=>{
    res.sendFile(path.join(publicPath,"index.html"));
})

app.use('/auth',auth)
app.use('/farminginfo',farming)
app.use('/product',product)
app.use('/training',training)
app.use('/user',users)


app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})

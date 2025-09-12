import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors'
const app = express();

const port = process.env.PORT || 4000;

// Allow multiple origins
const allowdOrigins = ['http://localhost:5173']

// Middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowdOrigins, Credentials: true}));


app.get('/', (req,res) => 
    res.send("API is Working"));


app.listen(port,()=>{
    console.log(`Server is Running On http://localhost:${port}`);
})
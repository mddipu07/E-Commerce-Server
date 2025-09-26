import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import connectDB from './configs/db.js';
import 'dotenv/config';
import userRouter from './routes/userRoute.js';
import sellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './configs/cloudinary.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/orderRoute.js';
import { stripeWebhooks } from './controllers/orderController.js';


const app = express();
const port = process.env.PORT || 4000;

// allow multiple origin here
const allowdOrigins = ['https://e-commerce-client-beige-eight.vercel.app','https://e-commerce-server-vert-six.vercel.app']

app.post('/stripe',express.raw({type: 'application/json'}), stripeWebhooks)

// Middleware configuration

app.use(cors({origin: allowdOrigins, credentials: true}));
app.use(cookieParser());
app.use(express.json());

// connect Database
await connectDB()
await connectCloudinary()


app.get('/', (req,res) => 
    res.send("API is Working"));

app.use('/api/user', userRouter)
app.use('/api/seller', sellerRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/address',addressRouter)
app.use('/api/order',orderRouter)


app.listen(port,()=>{
    console.log(`Server is Running On http://localhost:${port}`);
})
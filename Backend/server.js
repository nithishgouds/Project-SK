const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const db=require('./db');
const authRoutes=require('./authRoutes');



const app=express();

dotenv.config();


app.use(cors());
app.use(express.json());


app.use('/api/auth',authRoutes);

const PORT=process.env.PORT || 3001;

app.listen(PORT,()=>
{
    console.log("server is running...")
});

const express=require('express');
const router=express.Router();
const db=require('./db');



router.post('/signin',(req,res)=>
{
    const {mobile}=req.body;


    if(!mobile || mobile.length<10)
    {
        console.log('enter valid mobile number');
        return res.status(400).json({error:'Enter valid mobile number'});
    }

    db.query('INSERT INTO users (mobile) VALUES (?)',[mobile],(err,result)=>{
        if(err)
        {
            if(err.code==='ER_DUP_ENTRY')
            {
                return res.status(409).json({error:'Mobile number already exists'});
            }
            return res.status(500).json({error:'Database error'});
        }
        res.json({message:'Mobile number added successfully',userID:result.insertId});
    });
});
module.exports=router;
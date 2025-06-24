const mysql=require('mysql2');
const dotenv=require('dotenv');
dotenv.config();

const connection=mysql.createConnection({
    host:'localhost',
    user:process.env.user,
    password:process.env.password,
    database:process.env.DB_NAME
});

connection.connect(err=>{
    if(err)
    {
        throw err;
    }
    console.log('Connection is Successful');
});

module.exports=connection;
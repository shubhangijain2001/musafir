const express = require("express")
const client = require('./connection.js')
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require('cors')
app.use(cors())

app.listen(5000, ()=>{
    console.log("Sever is now listening at port 5000");
})
client.connect(err=>{
    if(err) console.log(err)
    else console.log('Database connected')
})
console.log('jooo')
app.get('/users', (req, res)=>{
    //console.log("bsfhdguys");
    client.query(`Select * from users`, (err, result)=>{
        //console.log('dhsguyugy');
        if(!err){
           res.send(result.rows);
            console.log(result.rows);
            //console.log('fuhfsadi')
        }
        else{
            console.log(err)
        }
        
    });

})
//signup
app.post('/users', (req, res)=> {
    const user = req.body;
    console.log(user);
    let insertQuery = `insert into users(name, email, password) 
    values('${user.name}','${user.email}','${user.password}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            console.log(result.rows)
            res.status(201).send(result.rows)


        }
        else{ 
            console.log(err)
            res.send('user already exist') }
    })
    client.end;
})

//login
app.post('/login',(req,res)=>{
    const { email,password} =req.body
    console.log(email,password)
    client.query(`Select * from users where email='${email}' and password='${password}'`,(err, result)=>{
        if(!err){
            console.log(result.rows)
            res.status(201).send(result.rows);
        }
        else{
            console.log(err)
            res.send('invalid user or password')
        }
    });
})
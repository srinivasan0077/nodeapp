const Express=require("express");

const app=Express()

const port=3000

var value=0

app.get("/",(req,res)=>{
     res.json(value);
})

app.get("/increase",(req,res)=>{
      value+=1;
      res.json(value);
})

app.listen(process.env.PORT || port)


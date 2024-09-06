const express=require("express");
const app=express()

const multer=require('multer')
const storage=multer.diskStorage({
    destination: (req,file,cb)=>{
        return cb(null,'./uploads',)
    },
    filename: (req,file,cb)=>{
        return cb(null,`${Date.now()}-${file.originalname}`)
    } ,
})
const upload=multer({storage})

app.set('view engine','ejs')
app.use(express.urlencoded({extends:true}))

app.post("/upload",upload.fields([{name:'file'},{name:'file1'}]),(req,res)=>{
        console.log(req.body)
        console.log(req.file)
        res.redirect("/")
})
app.get("/",(req,res)=>{
    res.render('home')
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/contact",(req,res)=>{
    res.render('contact')
})
app.get("/gallery",(req,res)=>{
    res.render('gallery')
})

app.listen(3000,()=>{
    console.log("ok")
})
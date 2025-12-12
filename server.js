const dotenv = require('dotenv')
dotenv.config()
const express = require("express")
const app = express()
const fs = require("fs")
const path = require("path");
const axios = require("axios");
const cors = require("cors")

PORT = 4000;

app.use(cors({
    origin: "http://localhost:4000", 
    credentials: true,
}),
)

app.use(express.static(path.join(__dirname,"public")))
async function fetchData() {
    try {
        const [postsRes, usersRes]= await Promise.all([axios.get("https://jsonplaceholder.typicode.com/posts"),
            axios.get("https://jsonplaceholder.typicode.com/users")])
        console.log("fetched data");
        const data = {posts : postsRes.data , users: usersRes.data}
        // console.log(data);
        fs.writeFileSync("data.json",JSON.stringify(data,null,2))
        console.log("data cached");
        
        
        
        // console.log(res.data);
        
    } catch (error) {
        console.error(error.message)
    }
}

app.get('/api/posts',(req,res)=>{
    const data = JSON.parse(fs.readFileSync("data.json"))
    res.json(data.posts)
})

app.get('/api/posts/:id',(req,res)=>{
    const data = JSON.parse(fs.readFileSync("data.json"))
    const post= data.posts.find(p => p.id === parseInt(req.params.id))
    if(!post) return res.status(404).json({error : "Post Not Found"})
    const user = data.users.find( u => u.id === post.userId)
    res.json({...post , username:user? user.name : "unknown"})
})


app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
    fetchData();
});
const express = require("express");
const app = express();
const logic=require('./logic');

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
let Logic=new logic();

/**
 * PATH DIRECTION
 */
app.get("/", (req, res) => { 
    res.render("login", {
        titleName: "Login",
    })  
})


app.get("/dashboard",async (req,res)=>{
  
  if(Logic.isUserLogin()){
    Logic.getRecentTaskCompleted();
    // console.log(Logic.getRecentTask());
    // console.log(Logic.getRecentTask()[0].Area);
    res.render("index",{
      titleName:"DevOps Panel",
      recentTask:Logic.getRecentTask(),
    });
  }else{
    res.redirect("/");
  } 
});


app.get("/taskSheet",(req,res)=>{
  if(Logic.isUserLogin()){
    res.render("task-sheet",{
      titleName:"DevOps Panel TaskSheet"
    });
  }else{
    res.redirect("/");
  } 
});

app.get("/userSheet",(req,res)=>{
  if(Logic.isUserLogin()){
    res.render("user-sheet",{
      titleName:"DevOps Panel UserSheet"
    });
  }else{
    res.redirect("/");
  }
});

app.get("/signOut",(req,res)=>{
  Logic.signOut();
  res.redirect("/");
});

app.listen(8082, () => {
  console.log("server started on port 8082");
});
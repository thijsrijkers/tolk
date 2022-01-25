//To holding users information 
const socketsStatus = {};

//config and set handlebars to express
const customHandlebars = handlebars.create({ layoutsDir: "./views" });

app.engine("handlebars", customHandlebars.engine);
app.set("view engine", "handlebars");

//enable user access to public folder 
app.use("/files", express.static("public"));

app.get("/home" , (req , res)=>{
    res.render("index");
});

http.listen(3000, () => {
  console.log("the app is run in port 3000!");
});


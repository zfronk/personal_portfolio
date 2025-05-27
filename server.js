const express = require("express"); // Library that prevents reinventing the wheel and working with "http modules"
const app = express(); // Initialize the app object!
const PORT = 8024; // The port server will be running on!
const path = require("path"); // In built lib module helps in working with os paths!

// For any request made check if they match the file names in the public directory throw the file and close the route
app.use(express.static(path.join(__dirname, "public"))); // Path.join just completes the directory name

// If a request is made that doesn't match the files in public throw the index html page!
app.get("*", (req, res) =>{
	res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(PORT, ()=>{
	console.log(`Server listening on port ${PORT} at http://localhost:${PORT}`);
})	

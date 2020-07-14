const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
	const data = {
          name:"Foo Bar", 
          image: "https://i.pravatar.cc/300",
          email:"foobar@gmail.com"
    }
	res.render("index.ejs", {data: JSON.stringify(data)});
});

var port = process.env.port || 3000;

app.listen(port, '0.0.0.0', function() {
      console.log("Server starting on localhost:" + port);
});
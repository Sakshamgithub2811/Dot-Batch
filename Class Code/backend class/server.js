const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("server started  at 3000");
});

app.get("/", (request, response) => {
    response.send("helo ji kaise ho sare");
});

app.post("/api/cars", (request, response) => {
    const { name, brand } = request.body;
    console.log(name);
    console.log(brand);
    response.send("cars submitted data succesfuuluy");
});

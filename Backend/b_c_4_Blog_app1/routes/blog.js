const express = require("express");
const router = express.Router();

//import controller

const {dummyLink} = require("../controllers/L ikeController");

//mapping

router.get("/dummyroute",dummyLink);
//exports
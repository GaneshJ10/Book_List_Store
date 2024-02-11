const express = require("express");
const Usermodel = require("../models/UserModel")
const router = express.Router();


router.post("/sign", async (req, res) => {
    try {
        // const { username, password } = req.body;

        const newUser = {
            username: req.body.username,
            password: req.body.password,
          
          };
        if (!newUser.username) {
            return res.status(400).json({ message: "Username is required." });
        }
        const account =  await Usermodel.findOne({ username: req.body.username });
     
      if (account) {
        console.log("user already exists")
        return res.status(400).json({ message: 'user already exists' });
      }
        
        
         await Usermodel.create(newUser);
          return res.status(201).json({ message: "User created successfully." });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
    }
);



router.post("/auth", async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingUser = await Usermodel.findOne({ username });

        if (existingUser) {
            if(password==existingUser.password)
            {
                return res.json({message:"SuccessFully Login"})
            }
            else{
                return res.json({message:"Wrong Password"})
            }
    
            
        }
        else{
            return res.json({message:"userid is wrong enter correct user id"})
        }    
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});


module.exports = router;

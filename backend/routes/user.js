import { Router } from "express";
import { userregschema } from "../zod.js";
import { Account, User } from "../db.js";
import jwt, { decode } from "jsonwebtoken";
import { JWTPASSWORD } from "./config.js";
import { authMiddleware } from "../middlewares/auth.js";

export const userRouter = Router();

userRouter.post("/signup", async function (req, res) {
  const uservalidation = userregschema.safeParse(req.body);

  if (uservalidation.success) {
    const user = await User.find({ username: uservalidation.data.username });
    console.log(user);
    if (user.length > 0) {
      return res.status(411).json({
        msg: "User already exists",
      });
    } else {
      const usercreated=await User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
      });
      
      // const users = await User.find({ username: req.body.username });

      const userid = usercreated._id;
      await Account.create({
        userid:userid,
        balance:1+Math.random()*10000

      })

      const token = jwt.sign(
        { userid:userid,username:req.body.username},
        JWTPASSWORD
      );

      res.status(200).json({
        userId: userid,
        token: token,
      });
    }
  } else {
    res.status(411).json({
      msg: "Invalid Data inputs provided",
    });
  }
}); //app/v1/user/signup

userRouter.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const userverified = await User.find({
    username: username,
    password: password,
  });

  if (userverified.length == 0) {
    res.status(411).json({
      msg: "invalid username or password",
    });
  } else {
    const token = jwt.sign(
      { userid: userverified[0]._id, username: username },
      JWTPASSWORD
    );
    res.status(200).json({
      token: token,
    });
  }
});

userRouter.put("/profile", authMiddleware, async (req, res) => {
  const { password, firstname, lastname,username } = req.body;

  const user = await User.updateOne(
    { _id: req.userid },
    { password: password, firstname: firstname, lastname: lastname,username:username }
  );
 
  res.status(200).json({
    msg: "Updated succesfully",
  });
});

userRouter.get("/bulk",async(req,res)=>{
  const filter=req.query.filter||"";
  const users= await User.find({
    $or:[{
      firstname:{
        "$regex":filter
      }

    },
  {
    lastname:{
      "$regex":filter
    }
  },{
    username:{
      "$regex":filter
    }
  }]
  })

const userss=users.map(u=>({
      firstname:u.firstname,
      lastname:u.lastname,
      username:u.username,
      _id:u._id
    }))  
  res.status(200).json({
    user:userss
  })
})

userRouter.get('/profile',authMiddleware,async(req,res)=>{
 const user=await User.find({_id:req.userid});
 if(user){
  return res.json({
    user:user[0]
  })
 }else{
  return res.json({
    "msg":"No user found",
  })
 }

})
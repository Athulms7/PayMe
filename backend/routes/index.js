import { Router } from "express";
import { userRouter } from "./user.js";
export const mainRouter=Router();
import { accountRouter } from "./account.js";

mainRouter.use("/user",userRouter);
mainRouter.use("/account",accountRouter);



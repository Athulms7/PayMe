import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
import { Account, User } from "../db.js";
import { transactionschema } from "../zod.js";
import mongoose from "mongoose";
import crypto from "crypto";
const id = crypto.randomBytes(20).toString('hex');

export const accountRouter = Router();

accountRouter.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({ userid: req.userid });
  if (!account) {
    return res.status(404).json({ error: "Account not found" });
  }
  const user=await User.findOne({_id:req.userid})
  res.status(200).json({
    balance: account.balance,
    user:user
  });
});

accountRouter.post("/transfer", authMiddleware, async (req, res) => {
  const transaction = transactionschema.safeParse(req.body);
  if (!transaction.success) {
    return res.status(400).json({ error: "Invalid transaction schema" });
  }

  const { toaccount, amount } = req.body;
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const sender = await Account.findOne({ userid: req.userid }).session(session);
    if (!sender || sender.balance < amount) {
      await session.abortTransaction();
      return res.status(400).json({ error: "Insufficient balance or sender not found" });
    }
    console.log(toaccount)
    const receiver = await Account.findOne({ userid: toaccount }).session(session);
    console.log(receiver);
    if (!receiver) {
      await session.abortTransaction();
      return res.status(400).json({ error: "Receiver not found" });
    }

    await Account.updateOne(
      { userid: req.userid },
      { $inc: { balance: -amount } }
    ).session(session);

    await Account.updateOne(
      { userid: toaccount },
      { $inc: { balance: amount } }
    ).session(session);

    await session.commitTransaction();
    const update=await Account.findOne({userid:req.userid})
    res.status(200).json({ msg: "Transaction completed",update:update.balance,tid:id });
  } catch (err) {
    await session.abortTransaction();
    res.status(500).json({ error: "Transaction failed", details: err.message });
  } finally {
    session.endSession();
  }
});

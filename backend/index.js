import express from "express"
import cors from "cors"
import {mainRouter} from './routes/index.js'
export const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", mainRouter);
app.listen(3001, () => {
  console.log("Port runnning on 3001");
});



app.get("/health",(req,res)=>{
    res.status(200).json({
        "msg":"Server OKKK...."
    })
})

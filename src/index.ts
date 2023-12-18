import express from "express"
import cors from 'cors';


import { utils } from "./utils/index"

const app=express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))





app.listen(utils.PORT,()=>{
    console.log(`Server started at ${utils.PORT}`);
    
})
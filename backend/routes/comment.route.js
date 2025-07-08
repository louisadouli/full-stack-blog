import express from "express"

const router = express.Router()

router.get("/", (req, res)=>{
    res.status(200).send("another test")
})

export default router
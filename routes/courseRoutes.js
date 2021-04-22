const express = require("express")
const courseModel = require("../models/course")
const router = express.Router()




router.get('/',async (req,res)=>{
    try{
        const result = await courseModel.find()
        res.send(result)
      }catch(e){
          console.log(e.message)
      }
    
})

router.post('/',async (req,res)=>{

    const newCourse = new courseModel({
        name:req.body.name,
        author:req.body.author,
        tags:req.body.tags,
        isPublished:req.body.isPublished

    }) 

  try{
      const result = await newCourse.save()
      res.send(result)
    }catch(e){
        console.log(e.message)
    }

})


router.delete('/:id',async (req,res)=>{
    try{
        const result = await courseModel.deleteOne({_id:req.params.id})
        res.send(result)
    }catch(e){
        res.send(e.message)
    }
})

router.put('/:id',async (req,res)=>{
    try{
        const updatedCourse = await courseModel.findById(req.params.id)
        if (!updatedCourse) return 
        updatedCourse.set({
            name : req.body.name,
            author:req.body.author,
            tags:req.body.tags,
            isPublished:req.body.isPublished
        })
        result = await updatedCourse.save()
        res.send(result)
    }catch(e){
        res.send(e.message)
    }
})

module.exports = router


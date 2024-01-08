const express = require('express')
const mongoose =require('mongoose')
const cors=require('cors')
const Product =require('./models/BookModels')

const app=express()
app.use(express.json())
app.use(cors())
  app.listen(7001,()=>{
    console.log('server is rannig')
  })

app.get('/',(req,res)=>{
    console.log(req)
    return res.send('server is ranning')
})

app.get('/products', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/products/:id',async(req,res)=>{
    try {
        const {id}=req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

app.post('/products',async(req,res)=>{
   try {
    const product = await Product.create(req.body)
    res.status(200).json(product)
   } catch (error) {
    console.log(error.massage)
    res.status(500).json({message:error.message})
    
   }
})
app.put('/products/:id',async(req,res)=>{
    try {
        const {id}=req.params
        const product = await Product.findByIdAndUpdate(id,req.body)

        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
        
    }
})
app.delete('/products/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

  
    
mongoose.connect('mongodb+srv://amineromdhane77:aminossamaros@samarinos.8irscoh.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('MD is ranning')
}).catch((err)=>{
    console.log(err)
})
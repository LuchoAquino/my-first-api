const express = require("express");

const router = express.Router();

const userSchema = require("../models/user");

// Create user
router.post('/users', (req,res)=>{ //req --> peticion  ---- res--> respuesta
    const user = userSchema(req.body); //Para crear un usuario con los datos q llegan desde el cuerpo de la petición
    user
        .save() // Guarda DB en MongoDB 
        .then((data)=> res.json(data)) // retorna una promesa (si recibe una rpta q la responda con esos datos)
        .catch((error)=> res.json({message:error}));
});

// Get all user
router.get('/users', (req,res)=>{
    userSchema
        .find() // Encuentra DB en MongoDB 
        .then((data)=> res.json(data)) // retorna una promesa (si recibe una rpta q la responda con esos datos)
        .catch((error)=> res.json({message:error}));
});

// Get a user
router.get('/users/:id', (req,res)=>{
    const {id}= req.params;
    userSchema
        .findById(id) // Encuentra DB en MongoDB 
        .then((data)=> res.json(data)) // retorna una promesa (si recibe una rpta q la responda con esos datos)
        .catch((error)=> res.json({message:error}));
});


// Update a user
router.put('/users/:id', (req,res)=>{
    const {id}= req.params;
    const {name, age, email} = req.body;
    userSchema
        .updateOne({_id: id},{$set:{name, age, email}}) // Encuentra DB en MongoDB 
        .then((data)=> res.json(data)) // retorna una promesa (si recibe una rpta q la responda con esos datos)
        .catch((error)=> res.json({message:error}));
});

// Delete a user
router.delete('/users/:id', (req,res)=>{
    const {id}= req.params;
    userSchema
        .deleteOne({_id:id}) // Encuentra DB en MongoDB 
        .then((data)=> res.json(data)) // retorna una promesa (si recibe una rpta q la responda con esos datos)
        .catch((error)=> res.json({message:error}));
});


module.exports = router;
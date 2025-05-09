
import Post from "../models/Users.js";
import User from "../models/Users.js";
//Logica 1 recuperar todos los usurairos de comgo con el modelo uSer
export const getAllPosts = async (req,res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Logica (2) Crear post de mongo con el modelo User
export const createPost = async (req,res) => {
    const{title, description, user}= req.body
  
    //verificacion de existencia del usuario
    const userId= await User.findById(user)
    if(!userId){
        return res.status(404).jsom({message: `el usuario es ${user} no existe`})
    }
     

    const post= new Post({
        title,
        description,
        user:userId,
    })


    try {
        await post.save()
        res.status(200).json({message: 'Post creado exitosamente'});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
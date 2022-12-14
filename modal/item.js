import mongoose from 'mongoose';



const itemSchema = new mongoose.Schema({

    googleId: {
        type: String,
        required:true
    },
    itemname: {
        
        type: String,
        required:true
    },
    price:{
        type: String,
        required:true
    },
   
  


})

const item = mongoose.model('item', itemSchema);

export default item;
import mongoose from 'mongoose';



const storeSchema = new mongoose.Schema({

    googleId: {
        type: String,
        required:true
    },
    CanteenName: {
        type: String,
        required:true
    
    },
    myFile:{
        type:String
    },
    collegeName:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    Mobile:{
        type: String,
        required:true
    },
  


})

const store = mongoose.model('store', storeSchema);

export default store;
import store from "../modal/Store.js";
import item from "../modal/item.js";


export const addStore = async (request, response) => {
    try {
         let exist = await store.findOne({ googleId: request.body.googleId });
         let myFile =(request.file) ? request.file.filename:null;
         let {  CanteenName ,collegeName, googleId, address, Mobile}=request.body;
        if(!CanteenName || !collegeName || !googleId || !address || !Mobile){
            response.status(500).json(error,"Please fill the data properly");
        }
        if(Mobile.length<10 || CanteenName.length<5 || collegeName.length<5 || address.length<10){
            response.status(500).json(error,"Mobile no. error");
        }
       
        
        if(exist) {
            if(myFile){
                const update = await store.updateOne(exist,{CanteenName ,collegeName, googleId, address,myFile, Mobile})
                response.status(200).json(update);
            }
            else{
                const update = await store.updateOne(exist,{CanteenName ,collegeName, googleId, address, Mobile})
                response.status(200).json(update);
            }
        }else{
            const newuser=new store({CanteenName ,collegeName, googleId, address,myFile, Mobile})
            await newuser.save();
            response.status(200).json(newuser);
        }
        
        }  catch (error) {
            console.log(error);
        response.status(500).json(error);
    }
}

export const getStore = async (request, response) => {
    try {
        const id=request.params.googleId;
     
        const data={googleId:id}
        const user = await store.findOne(data);
        response.status(200).json(user);
    }
    catch (error) {
        response.status(500).json(error);
    }
}
export const getallStores = async (request, response) => {
    try {
        const user = await store.find({});
        response.status(200).json(user);
    }
    catch (error) {
        response.status(500).json(error);
    }
}
export const getwithcollege = async (request, response) => {
    try {
        const id=request.params.inputValue
   
      
        const data={collegeName:id }
        
         const user = await store.find(data );

         response.status(200).json(user )
        }
    catch (error) {
        response.status(500).json(error);
    }
}

export const deletecanteen = async (request, response) => {
    try {
        const id=request.params.googleId;
     
        const data={googleId:id}
        const user = await store.deleteOne(data);
        const alldata = await item.deleteMany(data);
        response.status(200).json(user && alldata);

       
    }
    catch (error) {
        response.status(500).json(error);
    }
}

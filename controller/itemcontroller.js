import item from "../modal/item.js";






export const additem = async (request, response) => {

    try {
        let { itemname ,googleId,price} = request.body
        let data = { itemname: itemname }
        let itemexist = await item.findOne(data);
        if (itemexist) {

            const updateitem = await item.updateOne(itemexist,{ itemname ,googleId,price});
            response.status(200).json(updateitem)

        } else {
            const newItem = new item(request.body);
            await newItem.save();


            response.status(200).json(newItem);

        }


    } catch (error) {
        response.status(500).json(error);
    }
}
export const getitem = async (request, response) => {
    try {
        const id = request.params.googleId;

        const data = { googleId: id }
        const user = await item.find(data);
        response.status(200).json(user);
    }
    catch (error) {
        response.status(500).json(error);
    }
}
export const deleteitem = async (request, response) => {
    try {
        const id = request.params.itemname;

        const data = { itemname: id }
        const user = await item.deleteOne(data);
        response.status(200).json(user);
    }
    catch (error) {
        response.status(500).json(error);
    }
}



export const getitemswithcollege = async (request, response) => {
    try {
        const id = request.params.googleId;

        const data = { googleId: id }
        const user = await item.find(data);
        response.status(200).json(user);

    }
    catch (error) {
        response.status(500).json(error);
    }
}
// export const getallStores = async (request, response) => {
//     try {


//         const user = await item.find({});
//         response.status(200).json(user);
//     }
//     catch (error) {
//         response.status(500).json(error);
//     }
// }
// export const getwithcollege = async (request, response) => {
//     try {
//         const id=request.params.inputValue;
//         const data={collegeName:id}

//         const user = await item.find(data);
//         response.status(200).json(user);
//     }
//     catch (error) {
//         response.status(500).json(error);
//     }
// }
// export const deletecanteen = async (request, response) => {
//     try {
//         const id=request.params.googleId;

//         const data={googleId:id}
//         const user = await item.deleteOne(data);
//         response.status(200).json(user);
//     }
//     catch (error) {
//         response.status(500).json(error);
//     }
// }

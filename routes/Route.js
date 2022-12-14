import express from 'express';

import { addUser, getUsers } from '../controller/userController.js';
import { payNow } from '../controller/paymentcontroller.js';
import { addStore,getStore,getallStores,getwithcollege, deletecanteen } from '../controller/storecontroller.js';
import { additem, getitem,deleteitem,getitemswithcollege } from '../controller/itemcontroller.js';

import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now() + '-' + file.originalname)
  }
})
const upload = multer({ storage: storage })




const route = express.Router();


route.post('/add', addUser);
route.get('/users', getUsers);
route.get('/order/:totalPrice', payNow);
route.post('/store',upload.single('myFile'),addStore);
route.get('/allstore/:googleId', getStore);
route.get('/deletecanteen/:googleId', deletecanteen);
route.get('/getallstore', getallStores);
route.get('/getwithcollege/:inputValue', getwithcollege);
route.get('/getitemswithcollege/:googleId', getitemswithcollege);
route.post('/item', additem);
route.get('/allitems/:googleId', getitem);
route.get('/deleteitem/:itemname', deleteitem);




export default route;
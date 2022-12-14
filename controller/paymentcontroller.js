import Razorpay from 'razorpay'
import dotenv from 'dotenv';
dotenv.config();
const key_id=process.env.key_id
const key_secret = process.env.key_secret
var instance = new Razorpay({  key_id,  key_secret});

export const payNow = async (request, response) => {
    const {totalPrice}=request.params;
    const amount=totalPrice*100;
    const currency='INR';
    const receipt='123';
    const notes='notes';
    instance.orders.create({amount, currency, receipt, notes},(error,order)=>{
        if(error){
            return response.status(500).json(error);
        }
        return response.status(200).json(order)
    }
    )
}
import {models, model, Schema} from "mongoose";

const OrderSchema = new Schema({
    line_items:Object,
    name:String,
    email:String,
    city:String,
    postalCode:String,
    streetAddress:String,
    province:String,
    phoneNumber: Number,
    paid:Boolean,
}, {
    timestamps: true,
});

export const Order = models?.Order || model('Order', OrderSchema);
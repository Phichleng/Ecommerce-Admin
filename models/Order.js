import {models, model, Schema} from "mongoose";

const OrderSchema = new Schema({
    line_items: Object,
    Name: String,
    email: String,
    streetAddress: String,
    city: String,
    province: String,
    phone: Number,
    paid: Boolean,
}, {
    timestamps: true,
});

export const Order = models?.Order || model('Order', OrderSchema);
import mongoose, {model, models, Schema} from "mongoose";


const ImageSlideSchema = new Schema({
    name: {type:String,required:true},
    images: [{type:String}],
});


export const ImageSlide = models?.ImageSlide || model('ImageSlide', ImageSlideSchema);
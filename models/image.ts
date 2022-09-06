import { Schema, model, Model } from 'mongoose';

let imageSchema = new Schema({
    src : {
        type : String,
        required : true
    }
})

let Image : Model<any> = model('Image', imageSchema);

export default Image;
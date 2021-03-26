const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    switc:{
        type:Boolean,
       default:false
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = Item = mongoose.model('item',ItemSchema);
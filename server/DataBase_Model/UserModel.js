const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    image:{
    type:String,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    
    },
    phone: {
        type: String,
    
    },
    role: {
        type: String,
        default: 'user',
    },
    favorites: {
        type: Array,
        default: [],
    },
    userCollection: {
        type: Array,
        default: [],
    },
    cart: [{
        cartId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cart',
        },
    }],
    userOrders:{
        type: Array,
        default: []
    },

    
});

const UserSchemaModel = mongoose.model('User', UserSchema);

module.exports = UserSchemaModel;

import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    productName: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    offerPrice: {
        type: Number,
        required: true
    },
    initialStockCount: {
        type: Number,
        required: true
    },
    saleCount: {
        type: Number,
        default: 0
    },
    description: {
        type:String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    tags: [
        {
            type: String,
            required: true,
        }
    ],
    feature: {
        type: Boolean,
        default: false,
    },
    gallery: [
        {
            type: String,
        }
    ],
    countStocks: {
        type: Number,
        default: 100,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
    }
}, {
    versionKey: false,
    timestamps: true,
});

export default mongoose.model("products", productSchema);
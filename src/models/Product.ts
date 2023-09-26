import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    inverter: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;

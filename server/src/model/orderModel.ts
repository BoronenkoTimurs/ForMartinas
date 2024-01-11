import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
  customer: {
    type: String,
    require: true,
  },
  cityFrom: {
    type: String,
    require: true,
  },
  cityTo: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const OrderModel = mongoose.model("Order", OrderSchema);

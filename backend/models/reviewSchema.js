import mongoose from "mongoose";

const reviewSchema= new mongoose.Schema({
    name: String,
    message: String
})
export const Review = mongoose.model("Review", reviewSchema);



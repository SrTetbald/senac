import { Schema } from "mongoose";

export const HeroSchema = new Schema ({
    name: {type: String, required: true},
    power: {type: String, required: true},
    age: {type: Number, required: true}
})
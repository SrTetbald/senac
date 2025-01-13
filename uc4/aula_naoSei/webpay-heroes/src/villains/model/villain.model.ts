import { Schema } from "mongoose";

export const VillainSchema = new Schema ({
    name: {type: String, required: true},
    power: {type: String, required: true},
    age: {type: Number, required: true}
})
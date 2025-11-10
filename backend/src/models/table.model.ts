import mongoose, { Schema } from "mongoose";
import { User } from "./auth.model";

const TableSchema = new mongoose.Schema(
  {
    tableNo: {
      type: Number,
      required: true,
    },
    floorNumber: {
      type: Number,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
  },
  {
    timestamps: true,
  }
);

export const Table = mongoose.model("Table", TableSchema);

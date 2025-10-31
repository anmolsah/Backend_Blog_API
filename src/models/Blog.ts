import mongoose, { Document, Schema, Model, Types } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  imageUrl?: string;
  author: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema<IBlog> = new Schema<IBlog>(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    content: {
      type: String,
      require: true,
    },
    imageUrl: {
      type: String,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Blog: Model<IBlog> = mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;

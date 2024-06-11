import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    eindat: {
      type: String,
      required: false,
    },
    author: {
      type: String,
      required: false,
    },
    keyw: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);

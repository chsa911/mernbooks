import mongoose from 'mongoose';
//dask10
const bookSchema = mongoose.Schema(
  {
    eindat: {
      type: Date,
      required: true,
    },
    autor: {
      type: String,
      required: true,
    },
    keyw: {
      type: String,
      required: true,
    },
  kwp: {
        type: Number,
        required: true,
      },
   verl: {
          type: String,
          required: true,
        },
   seit: {
          type: Number,
          required: true,
        },
pos: {
          type: String,
          required: true,
        },
farbe: {
          type: String,
          required: true,
        },
zahl: {
          type: Number,
          required: true,
        },

  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);

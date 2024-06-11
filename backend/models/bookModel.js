import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    eindat: {
      type: Date,
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
  kwp: {
        type: Number,
        required: false,
      },
   verl: {
          type: String,
          required: false,
        },
   seit: {
          type: Number,
          required: false,
        },
pos: {
          type: String,
          required: false,
        },
farbe: {
          type: String,
          required: false,
        },
zahl: {
          type: Number,
          required: false,
        },

  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);

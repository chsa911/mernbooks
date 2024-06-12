import Book from "../models/bookModel.js";
import { errorHandler } from "../utils/error.js";

export const getBooks = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;

    const startIndex = parseInt(req.query.startIndex) || 0;

    let pos = req.query.pos;

    if (pos === undefined || pos === "false") {
      pos = { $in: [false, true] };
    }

    let farbe = req.query.farbe;

    if (farbe === undefined || farbe === "false") {
      farbe = { $in: [false, true] };
    }

    let zahl = req.query.zahl;

    if (zahl === undefined || zahl === "false") {
      zahl = { $in: [false, true] };
    }


    const searchTerm = req.query.searchTerm || "";

    const sort = req.query.sort || "createdAt";

    const order = req.query.order || "desc";

    const listings = await Listing.find({
      name: { $regex: searchTerm, $options: "i" },
      pos,
      farbe,
      zahl,
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};

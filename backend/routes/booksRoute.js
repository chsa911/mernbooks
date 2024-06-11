import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route for Save a new Book
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.eindat ||
      !request.body.autor ||
      !request.body.keyw ||
      !request.body.kwp ||
      !request.body.verl ||
      !request.body.seit ||
      !request.body.pos ||
      !request.body.farbe  ||
      !request.body.zahl

    ) {
      return response.status(400).send({
        message: 'Send all required fields: eingabedatum , autor, keyword, keywordposition, verlag, seiten'
      });
    }
    const newBook = {
      eindat: request.body.eindat,
      autor: request.body.autor,
      keyw: request.body.keyw,
      kwp: request.body.kwp,
      verl: request.body.verl,
      seit: request.body.seit,
      pos: request.body.pos,
      farbe: request.body.farbe,
      zahl: request.body.zahl,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
router.get('/', async (request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Book.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Book
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.eindat ||
      !request.body.autor ||
      !request.body.keyw ||
      !request.body.kwp ||
      !request.body.verl ||
      !request.body.seit ||
      !request.body.pos ||
      !request.body.farbe ||
      !request.body.zahl

    ) {
      return response.status(400).send({
        message: 'Send all required fields: eingabedatum, autor, keyword, keywordposition, verlag, seiten '
              });
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;

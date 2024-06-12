import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
   //dask10
          <th className='border border-slate-600 rounded-md'>Eingabedatum</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Autor
          </th>
         <th className='border border-slate-600 rounded-md max-md:hidden'>
            Keyword
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Keywordposition
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Verlag
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Seiten
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Position
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Farbe
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Zahl
          </th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
  //dask10
              <td className='border border-slate-700 rounded-md text-center'>
              {book.eindat}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.autor}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.keyw}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.kwp}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.verl}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.seit}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.pos}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.farbe}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.zahl}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;

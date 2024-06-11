import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const [eindat, setEindat] = useState('');
  const [author, setAuthor] = useState('');
  const [keyw, setKeyw] = useState('');
  const [kwp, setKwp] = useState('');
  const [verl, setVerl] = useState('');
  const [seit, setSeit] = useState('');
  const [pos, setPos] = useState('');
  const [farbe, setFarbe] = useState('');
  const [zahl, setZahl] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      eindat,
      author,
      keyw,
      kwp,
      verl,
      seit,

    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

      return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Eingabedatum</label>
          <input
            type='date'
            value={eindat}
            onChange={(e) => setEindat(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'

          />
        </div>
   <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Autor</label>
          <input
            type='string'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'

          />
        </div>

   <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Keyword</label>
          <input
            type='string'
            value={keyw}
            onChange={(e) => setKeyw(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'

          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Keywordpostion</label>
          <input
            type='number'
            value={kwp}
            onChange={(e) => setKwp(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Verlag</label>
          <input
            type='text'
            value={verl}
            onChange={(e) => setVerl(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Seiten</label>
          <input
            type='number'
            value={seit}
            onChange={(e) => setSeit(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateBooks
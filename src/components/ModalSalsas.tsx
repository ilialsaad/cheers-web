// import { useState } from 'react';

import { AdditionButton } from '../ui/AdditionButton';
import { SubtractionButton } from '../ui/SubtractionButton';

export const ModalSalsas = () => {
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [street, setStreet] = useState('');
  // const [number, setNumber] = useState('');
  // const [piso, setPiso] = useState('');
  return (
    <>
      <div className='absolute bg-gray-950/[0.92] inset-0 overflow-hidden'>
        <div className='flex justify-center'>
          <form className='mt-8 mb-auto pt-20 pb-0 bg-[#1E1E1E] p-4 rounded-2xl'>
            <legend className='uppercase mb-8 pb-4 border-none text-6xl text-yellow-300 '>Elije tu salsa</legend>

            <div className='space-y-4 '>
              <div className='text-2xl columns-2'>
                <SubtractionButton />
                <span className='text-2xl m-2'>0</span>
                <AdditionButton />

                <h1 className='text-4xl'>BM</h1>
                <p className='text-lg'>Mayonesa, Mostaza, Ketchup, Pepinillos y cebolla</p>
              </div>

              <div className='text-2xl columns-2'>
                <SubtractionButton />
                <span className='text-2xl m-2'>0</span>
                <AdditionButton />

                <h1 className='text-4xl'>Sweet B</h1>
                <p className='text-lg'>Ketchup, Vinagre y salsa de soja</p>
              </div>

              <div className='text-2xl columns-2'>
                <SubtractionButton />
                <span className='text-2xl m-2'>0</span>
                <AdditionButton />

                <h1 className='text-4xl'>Jason's</h1>
                <p className='text-lg'>Mayonesa y Barbacoa, Ketchup, Pepinillos y cebolla</p>
              </div>

              <div className='flex items-center justify-center mt-8 p-4'>
                <button className='bg-yellow-400 rounded-lg text-2xl p-2 w-3/6'>Siguiente</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

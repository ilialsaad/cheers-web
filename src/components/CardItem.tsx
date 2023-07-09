import fotitoPollo from '../img/Fotito_Pollo.png';
import { AdditionButton } from '../ui/AdditionButton';
import { CartIcon } from '../ui/CartIcon';
import { SubtractionButton } from '../ui/SubtractionButton';

export const CardItem = () => {
  return (
    <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-950'>
      <img className='w-full' src={fotitoPollo} alt='Sunset in the mountains' />
      <div className='px-6 py-4'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-4xl mb-2 text-yellow-300'>Mix</h1>
          <span className='text-xl'>$1400</span>
        </div>
        <p className='text-gray-200 text-base'>300gr de pollo rebozado</p>
      </div>

      <div className='px-6 pt-4 pb-2 flex items-center'>
        <SubtractionButton />
        <span className='text-2xl text-white m-2'>0</span>
        <AdditionButton />
        <div className='text-gray-300 bg-gray-600 rounded-lg p-2 mx-36'>
          <CartIcon />
        </div>
      </div>
    </div>
  );
};

import { CartIcon } from '../ui/CartIcon';
import { CardItem } from './CardItem';

export const Order = () => {
  return (
    <div>
      <div className='flex items-center justify-center bg-white'>
        <div className='columns-2 space-y-4 p-6'>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>

      <div className='flex items-center justify-center bg-white'>
        <button className='p-1 px-6 text-4xl bg-yellow-400 text-black rounded-xl border-2 border-black my-16'>
          <div className='inline-flex items-baseline gap-4'>
            <CartIcon />
            <p className='font-semibold font-sans ml-2'>Quiero mi bajón</p>
          </div>
        </button>
      </div>
    </div>
  );
};

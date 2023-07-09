import Pollo from '../img/Pollo.svg';
import Texto from '../img/Texto.svg';

export const HomePage = () => {
  return (
    <>
      <div className='flex justify-center bg_main'>
        <div className='flex flex-col items-center justify-end mx-8'>
          <img src={Texto} alt='Texto' className='mb-4' />
        </div>
        <div className='flex flex-col items-center justify-end mx-8'>
          <img src={Pollo} alt='Pollo' className='mb-4' />
        </div>
      </div>
    </>
  );
};

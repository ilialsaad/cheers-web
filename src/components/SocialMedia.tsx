import Facebook from '../img/facebook.svg';
import Seguilo from '../img/seguilo.svg';
import Arrows from '../img/arrows.svg';
import Whatsapp from '../img/whatsapp.svg';
import Instagram from '../img/instagram.svg';

export const SocialMedia = () => {
  return (
    <>
      <div className='flex items-center justify-between bg-yellow-main'>
        <div className='flex flex-row items-center justify-center mx-8'>
          <div className='flex flex-row items-center justify-center'>
            <img src={Seguilo} alt='Texto' className='mb-4' />
          </div>
          <div className='flex flex-row items-center justify-center mx-8'>
            <img src={Arrows} alt='Pollo' className='mb-4' />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center mx-8'>
          <ul className='flex flex-row items-center justify-center'>
            <li className='mx-4'>
              <img src={Whatsapp} alt='Twitter' className='mb-4' />
            </li>
            <li className='mx-4'>
              <img src={Instagram} alt='Instagram' className='mb-4' />
            </li>
            <li className='mx-4'>
              <img src={Facebook} alt='Facebook' className='mb-4' />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

import roundLogo from '../img/roundLogo.svg';

export const BottomMain = () => {
  return (
    <>
    <div className='flex items-center justify-end bg-header-bottom'>
      <div className='flex flex-col items-center justify-center mx-8'>
        <img src={roundLogo} alt='Logo' className='mb-4' />
      </div>
    </div>
  </>
  );
};

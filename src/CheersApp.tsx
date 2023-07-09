import { useState } from 'react';

import { About } from './components/About';
import { Banner } from './components/Banner';
import { BottomMain } from './components/BottomMain';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ModalData } from './components/ModalData';
import { SocialMedia } from './components/SocialMedia';
import { HomePage } from './pages/HomePage';
import { ModalSalsas } from './components/ModalSalsas';
import { Order } from './components/Order';

export const CheersApp = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className='container__header h-screen flex flex-col'>
        <nav>
          <Header />
        </nav>

        <div className='flex justify-center z-50'>{modal && <ModalSalsas />}</div>
        <div className='flex justify-center z-50'>{modal && <ModalData />}</div>

        <main>
          <HomePage />
          <BottomMain />
          <SocialMedia />
          <About />
          <Banner />
          <Order />
          <Footer />
        </main>
      </div>
    </>
  );
};

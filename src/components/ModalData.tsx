import { useState } from 'react';
import Styles from './Modal.module.css';
// import CloseButton from '../assets/cerrar.svg';

export const ModalData = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [piso, setPiso] = useState('');

  return (
    <>
      <div className='absolute bg-gray-950/[0.92] inset-0 overflow-hidden'>
        {/* <div className={Styles.closeModal}>
          <img src={CloseButton} alt='Cerrar' />
        </div> */}

        <form className={Styles.form}>
          <legend>Tus Datos</legend>

          <div className={Styles.field}>
            <label htmlFor='name'>Nombre y Apellido</label>
            <input
              type='text'
              className='bg-black'
              style={{ borderBottom: 'solid 2px #d9e351' }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={Styles.field}>
            <label htmlFor='phone'>Télefono</label>
            <input
              type='text'
              className='bg-black'
              style={{ borderBottom: 'solid 2px #d9e351' }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className={Styles.field}>
            <label htmlFor='street'>Calle</label>
            <input
              type='text'
              className='bg-black'
              style={{ borderBottom: 'solid 2px #d9e351' }}
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>

          <div className={Styles.field}>
            <label htmlFor='number'>Número</label>
            <input
              type='text'
              className='bg-black'
              style={{ borderBottom: 'solid 2px #d9e351' }}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div className={Styles.field}>
            <label htmlFor='piso'>Piso</label>
            <input
              type='text'
              className='bg-black'
              style={{ borderBottom: 'solid 2px #d9e351' }}
              value={piso}
              onChange={(e) => setPiso(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
};

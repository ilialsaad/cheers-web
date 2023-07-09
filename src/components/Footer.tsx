import roundLogo from '../img/roundLogo.svg';

export const Footer = () => {
  return (
    <>
    <div>
      <div
        style={{ backgroundColor: "yellow", width: "100vw", height: "15vh" }}
        className="flex flex-col items-center justify-center"
      >
        <p style={{ fontSize: '50px', fontWeight: 'bold' }} className="text-black bold">MATANDO EL BAJON EST.2019</p>
      </div>
      <div
        style={{ backgroundColor: "black", width: "100vw", height: "40vh" }}
        className="flex flex-col items-center justify-center"
      >
        <img
          src={roundLogo}
          alt="round_logo"
          className="mt-9 h-[107px] w-[107px] flex-shrink"
        />
        <p 
        style={{ }}
        // className={`mt-5 text-white ${montserrat.className}`}
        >
          marca registrada Cheer's pollo frito - 2019
        </p>
      </div>
    </div>
  </>
  );
};

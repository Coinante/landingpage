
import { Contact, HowToPlay, Home, AboutUs } from './components';
import assets from './assets';
import styles from './styles/Global';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar.js';

 

const App = () => {
  return (
    <>
    <Navbar
    />

    <div>
        <Routes>
          <Route path="/" element={
            <Home 
        title="Coinante: Stake your Crypto, win the Pot!"
        description="Win up to ten times your money in just 5 minutes using cryptocurrency. It's like the lottery, but way better!!"
        showBtn
        mockupImg={assets.crypto}
        banner="banner"
      />
          } />
          <Route path="/howtoplay" element={
            <HowToPlay 
        title="How to play"
        description=" Step Three: Buy Some BNB"
        description2=" Step One: Create a MetaMask Wallet       "
        description3=" Step Two: Connect your MetaMask Wallet  to the Binance Smart Chain"
        description4=" Step Four: Enter the Raffle             "
        mockupImg={assets.dice}
        reverse
      />
          } />
          <Route path="/contact" element={<AboutUs
          title="Contact Us"
        description="contact@coinante.io"
        banner="banner"
          />} />
           <Route path="/aboutus" element={<AboutUs
            title="Coinante "
        description=" is a new Cryptocurrency game where you can Stake your Crypto (BNB for now) into a pot and win the Pot! You can Win up to ten times your money in just 5 minutes using cryptocurrency. It's like the lottery, but way better!!"
        banner="banner"
           />} />
        </Routes>
      </div>

      

      
  
      

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}> {" "}
        <span className="bold"></span>
        </p>
      </div>


    </>
  );
}

export default App;

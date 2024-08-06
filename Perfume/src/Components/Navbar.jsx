import React, { useState, useRef } from 'react';
import './Navbar.css';
import image from '../assets/b.png';
import image1 from '../assets/i5.jpg';
import Background from './Background';
import play1 from '../assets/play_icon.png';
import pause from '../assets/pause_icon.png';
import Text from './Text';
import Login from './Login';
import ProductGrid from './ProductGrid';
import arrowDown from '../assets/down.png';
import { useNavigate } from 'react-router-dom';
import { IonIcon } from 'react-ionicons';
import { cartOutline, personCircleOutline } from 'ionicons/icons';


const Navbar = () => {
  const data = [
    { text1: "Scent Your Story", text2: "With Elegance" },
    { text1: "Unveil Your Essence", text2: "One Spritz at a Time." },
    { text1: "Where Fragrance", text2: "Meets Your Identity" },
  ];

  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);
  const [account, setAccount] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const productGridRef = useRef(null);

  const scrollToProductGrid = () => {
    if (productGridRef.current) {
      productGridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigate = useNavigate();
  const goToCart = () => {
    navigate('/cart');
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    scrollToProductGrid();
  };

  const gotocontact=()=>{
    navigate('/contact');
  }

  const gotoabout=()=>{
    navigate('/About');
  }

  return (
    <>
      <div className='header'>
        <img src={image} alt="Logo" />
        <ul>
          <li onClick={() => handleCategoryClick(null)}>Home</li>
          <li onClick={() => handleCategoryClick('Men')}>Mens</li>
          <li onClick={() => handleCategoryClick('Women')}>Womens</li>
          <li onClick={() => handleCategoryClick('Unisex')}>Unisex</li>
          <li onClick={gotocontact}>Contact</li>
          <li onClick={gotoabout}>About</li>
        </ul>
        <div className="icon">
        <IonIcon icon={cartOutline} onClick={goToCart} />
<IonIcon
  icon={personCircleOutline}
  onClick={() => setAccount(!account)}
/>

        </div>
      </div>
            
      {account ? (
        <Login />
      ) : (
        <>
          <div className="img">
            <Background play={play} count={count} setCount={setCount} />
            <div className="text-overlay">
              <Text data={data[count]} />
        
              <div className="dot-play">
                <ul className="dots">
                  <li onClick={() => setCount(0)} className={count === 0 ? 'hero-dots orange' : 'hero-dots'}></li>
                  <li onClick={() => setCount(1)} className={count === 1 ? 'hero-dots orange' : 'hero-dots'}></li>
                  <li onClick={() => setCount(2)} className={count === 2 ? 'hero-dots orange' : 'hero-dots'}></li>
                </ul>
              </div>
              <div className="play2">
                <img onClick={() => setPlay(!play)} src={play ? pause : play1} alt="Play/Pause" />
              </div>
            </div>
          </div>

          <div className="scroll-button" onClick={scrollToProductGrid}>
            <img src={arrowDown} alt="Scroll Down" />
          </div>

          <div className="another-section" ref={productGridRef}>
            <ProductGrid selectedCategory={selectedCategory} />
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;

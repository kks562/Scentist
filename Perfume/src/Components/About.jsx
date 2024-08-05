import React from 'react';
import './About.css';

    import mainImg from '../assets/b.png'; 
import cardImg from '../assets/i1.png';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const home=()=>{
      navigate('/');
    }
  return (
    
    <div className="responsive-container-block bigContainer">
              <ion-icon name="arrow-back" style={{ fontSize: '50px', position: 'absolute', left: '10px', top: '10px' }} onClick={home}/>

      <div className="responsive-container-block Container">
        <div className="imgContainer">
          <img className="mainImg" src={mainImg} alt="Main" />
        </div>
        <div className="responsive-container-block textSide">
          <p className="text-blk heading">About Us</p>
          <p className="text-blk subHeading">
          At Scentist, we believe that a fragrance is more than just a scent; it's an expression of identity, a memory, and a journey. Our mission is to curate and create perfumes that capture the essence of beauty, elegance, and individuality.          </p>
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div className="cardImgContainer">
                <img className="cardImg" src={cardImg} alt="Card" />
              </div>
              <div className="cardText">
                <p className="text-blk cardHeading">Value</p>
                <p className="text-blk cardSubHeading">
                Quality: We source the finest ingredients from around the world to ensure that our fragrances are of the highest quality.
Sustainability.
            </p>
              </div>
            </div>
          ))}
          <a href="#services">
            <button className="explore">Explore our Services</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

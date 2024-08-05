import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Grid, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [animateCartIcon, setAnimateCartIcon] = useState(false);
  const itemCount = cart.length;

  useEffect(() => {
    axios.get('http://localhost:3001/perfumes')
      .then(response => {
        const fetchedProduct = response.data.find((p) => p.id === id);
        if (fetchedProduct) {
          setProduct(fetchedProduct);
        } else {
          setError('Product not found');
        }
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, [id]);

  const handleClick = () => {
    if (product) {
      addToCart({
        image: product.image,
        name: product.name,
        price: product.price
      });
      setAnimateCartIcon(true);
      setTimeout(() => setAnimateCartIcon(false), 500); 
    }
  };

  const gotopayment = () => {
    navigate(`/payment`);
  };

  const previousPage = () => {
    navigate(`/`);
  };

  const handleClick1 = () => {
    navigate(`/cart`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    product && (
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: 'auto', maxWidth: '800px', margin: 'auto', position: 'relative', top: '180px', right: '90px' }}
              initial={{ opacity: 0, x: -900 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ position: 'relative' }}>
              <motion.div
                style={{ position: 'relative', width: '100%', maxWidth: '600px' }}
                animate={animateCartIcon ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <ion-icon
                  name="arrow-back"
                  style={{
                    position: 'absolute',
                    top: '40px',
                    right: '1270px',
                    fontSize: '38px',
                    color: 'black',
                    cursor: 'pointer'
                  }}
                  onClick={previousPage}
                />
                <ion-icon
                  name="cart-outline"
                  style={{
                    position: 'absolute',
                    top: '49px',
                    right: '-100px',
                    fontSize: '38px',
                    color: 'black',
                    cursor: 'pointer'
                  }}
                  onClick={handleClick1}
                />
                {itemCount > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '25px',
                    right: '-120px',
                    background: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '4px 8px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}>
                    {itemCount}
                  </span>
                )}
              </motion.div>
            </div>
            <Typography
              variant="h4"
              sx={{ position: 'relative', top: '90px', left: '140px', color: 'black' }}
            >
              {product.name}
            </Typography>
            <Typography
              variant="h6"
              sx={{ position: 'relative', top: '100px', left: '140px', color: 'black' }}
              color="textSecondary"
            >
              {product.brand}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ position: 'relative', top: '110px', left: '140px', color: 'black' }}
            >
              {product.description}
            </Typography>
            <Typography
              variant="h5"
              sx={{ position: 'relative', top: '120px', left: '140px', color: 'black', fontSize: '37px' }}
            >
              {product.price}
            </Typography>
            <Typography
              variant="body1"
              sx={{ position: 'relative', top: '140px', left: '140px', color: 'black', fontSize: '25px' }}
              dangerouslySetInnerHTML={{ __html: product.Highlights }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ position: 'relative', top: '306px', backgroundColor: 'Orange', marginLeft: '130px', padding: '30px', fontWeight: 'bold', fontSize: '18px',width: '100%' }}
              onClick={handleClick}
            >
              Add to Cart
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{ position: 'relative', top: '80px', marginLeft: '130px', padding: '30px', fontWeight: 'bold', backgroundColor: "orangered", fontSize: '18px',width: '100%'}}
              onClick={gotopayment}
            >
              Buy Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    )
  );
};

export default ProductDetail;

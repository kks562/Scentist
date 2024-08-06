import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Grid, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';
import axios from 'axios';
import { IonIcon } from 'react-ionicons';
import { cartOutline, arrowBack } from 'ionicons/icons';

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
        const fetchedProduct = response.data.find(p => p.id === id);
        if (fetchedProduct) {
          setProduct(fetchedProduct);
        } else {
          setError('Product not found');
        }
        setLoading(false);
      })
      .catch(() => {
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

  const gotopayment = () => navigate('/payment');
  const previousPage = () => navigate('/');
  const handleClick1 = () => navigate('/cart');

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
              style={{ width: '100%', height: 'auto', maxWidth: '800px', margin: 'auto' }}
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
                <IonIcon
                  icon={arrowBack}
                  style={{
                    position: 'absolute',
                    top: '40px',
                    left: '0',
                    fontSize: '38px',
                    color: 'black',
                    cursor: 'pointer'
                  }}
                  onClick={previousPage}
                />
                <IonIcon
                  icon={cartOutline}
                  style={{
                    position: 'absolute',
                    top: '49px',
                    right: '0',
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
                    right: '40px',
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
            <Typography variant="h4" sx={{ color: 'black', mb: 2 }}>
              {product.name}
            </Typography>
            <Typography variant="h6" sx={{ color: 'black', mb: 2 }}>
              {product.brand}
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: 'black', mb: 2 }}>
              {product.description}
            </Typography>
            <Typography variant="h5" sx={{ color: 'black', mb: 2 }}>
              {product.price}
            </Typography>
            <Typography variant="body1" sx={{ color: 'black', mb: 2 }} dangerouslySetInnerHTML={{ __html: product.Highlights }} />
            <Button
              variant="contained"
              color="primary"
              sx={{ backgroundColor: 'Orange', mb: 2, width: '100%' }}
              onClick={handleClick}
            >
              Add to Cart
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ backgroundColor: 'orangered', width: '100%' }}
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

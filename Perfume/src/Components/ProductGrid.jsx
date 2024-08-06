import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ selectedCategory }) => {
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/perfumes')
      .then(response => {
        setPerfumes(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const filteredPerfumes = selectedCategory
    ? perfumes.filter(product => product.gender === selectedCategory)
    : perfumes;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching perfumes: {error.message}</p>;
  }

  return (
    <div className="a">
      <motion.div
        className="product-grid"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" align="center">
            BEST SELLER'S
          </Typography>
          <Grid container spacing={4}>
            {filteredPerfumes.map((product) => (
              <Grid item xs={12} sm={6} md={3} lg={3} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </motion.div>
    </div>
  );
};

export default ProductGrid;

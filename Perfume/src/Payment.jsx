import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./Payment.css";

const Payment= () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const onSubmit = data => {
    console.log(data);
    alert('Payment Successful!');
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="payment-container">
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="payment-method-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <div>
            <label>
              <input
                type="radio"
                value="creditCard"
                checked={paymentMethod === 'creditCard'}
                onChange={handlePaymentMethodChange}
              />
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                value="upi"
                checked={paymentMethod === 'upi'}
                onChange={handlePaymentMethodChange}
              />
              UPI
            </label>
            <label>
              <input
                type="radio"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={handlePaymentMethodChange}
              />
              Cash on Delivery
            </label>
          </div>
        </div>

        {paymentMethod === 'creditCard' && (
          <>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" {...register('name', { required: true })} />
              {errors.name && <span>This field is required</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" {...register('email', { required: true })} />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input id="cardNumber" {...register('cardNumber', { required: true })} />
              {errors.cardNumber && <span>This field is required</span>}
            </div>

            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input id="expiryDate" type="month" {...register('expiryDate', { required: true })} />
              {errors.expiryDate && <span>This field is required</span>}
            </div>

            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input id="cvv" {...register('cvv', { required: true })} />
              {errors.cvv && <span>This field is required</span>}
            </div>
          </>
        )}

        {paymentMethod === 'upi' && (
          <div className="form-group">
            <label htmlFor="upiId">UPI ID</label>
            <input id="upiId" {...register('upiId', { required: true })} />
            {errors.upiId && <span>This field is required</span>}
          </div>
        )}

        {paymentMethod === 'cod' && (
          <div className="form-group">
            <label htmlFor="codAddress">Address</label>
            <input id="codAddress" {...register('codAddress', { required: true })} />
            {errors.codAddress && <span>This field is required</span>}
          </div>
        )}

        <button type="submit" className="payment-button">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;

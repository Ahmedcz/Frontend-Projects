import React, { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [order, setOrder] = useState('');
 
 const handleSubmit = (e) => {
   e.preventDefault();
   alert(`Order Successful! Your order was ${order}. Please show your confirmation number for pickup.`)
 }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="name" id="name" value={name} onChange={(e)=> setName(e.target.value)}/>
        <label htmlFor="name">Name</label>

        <input type="text" name="phone" id="phone" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
        <label htmlFor="phone">Phone</label>

        <input type="text" name="address" id="address" value={address} onChange={(e)=> setAddress(e.target.value)}/>
        <label htmlFor="address">Address</label>

        <input type="text" name="order" id="order" value={order} onChange={(e)=> setOrder(e.target.value)}/>
        <label htmlFor="order">Order</label>

        <button type="submit">Submit Order</button>
      </div>

      // Optional: Display inputs in real time 
      {name && (
        <div>
          <h2>Current Name:</h2>
          <p>{name}</p>
        </div>
      )}

      {phone && (
        <div>
          <h2>Current Phone:</h2>
          <p>{phone}</p>
        </div>
      )}

      {address && (
        <div>
          <h2>Current Address:</h2>
          <p>{address}</p>
        </div>
      )}

      {order && (
        <div>
          <h2>Current Order:</h2>
          <p>{order}</p>
        </div>
      )}

    </form>
 

  );
}

export default FoodOrderForm;
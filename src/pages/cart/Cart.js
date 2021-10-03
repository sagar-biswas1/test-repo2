import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';

const Cart = () => {

const [items, setItems]=useState([])

const { cart } = useContext(MyContext);

useEffect(() => {
   setItems(cart)
}, [cart])

console.log(cart,'dfsdfdf')

    return (
      <div>
        {items?.map((p) => (
          <div class="card mb-3 bg-light p-2 mx-5">
            <div class="row g-0">
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{p.title}</h5>
                  <p class="card-text">{p.description}</p>
                  <p class="card-text">
                    <small class="text-muted">{p.publishedAt}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Cart;
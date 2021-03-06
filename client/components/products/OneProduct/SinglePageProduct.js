import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { orderActions, productActions } from '../../../store/ActionsCreators';
import { getMoney, getStars } from '../../../utils/utils';

const SinglePageProduct = (props) => {
  const { id } = useParams();
  const history = useHistory();

  if (isNaN(id)) {
    history.push('/products');
    return <></>;
  }

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const token = window.localStorage.getItem('token');

  useEffect(() => {
    async function fetchData() {
      //* Fetch the product using it's id
      await dispatch(productActions.fetchProduct(id, token));
    }
    fetchData();
  }, []);

  //* Used to update header cart number
  async function updateHeader(cart) {
    await dispatch(orderActions.updateHeader(cart));
  }

  //* Get the information required to complete this component
  const userId = useSelector((state) => state.auth.id);
  const { product } = useSelector((state) => state.products);
  const { imageUrl, name, rating, price, stock, description } = product;

  // TODO: after add to cart redierct to all products again

  return (
    <div className='singlePage'>
      <div className='imp'>
        <div>
          <img id='productImage' src={imageUrl} />
        </div>
        <div className='productInfo'>
          <div>
            <h1>{name}</h1>
            <h2>Cost: ${getMoney(price)}</h2>
            <div>
              <label>Rating: </label>
              {getStars(rating).map((each) => each)}
            </div>
            <label>Quantity</label>
            {/* <select name="Quantity">{getOptions(stock)}</select> */}
            <Select
              className='singlepage-quantity'
              defaultValue={{ value: 1, label: 1 }}
              options={getOptions(stock)}
              onChange={(event) => {
                setQuantity(event.value);
              }}
            />
          </div>
          <div
            className='addToCart'
            onClick={async () => {
              const response = await handleAddToCart(
                product,
                quantity,
                userId,
                updateHeader
              );
              toast.success(response);
            }}
          >
            Add To Cart
          </div>
        </div>
      </div>
      <div className='aboutItem'>
        <h1>About this item</h1>
        <div className='desBox'>
          <div className='description'>Description {description}</div>
          <div className='description'>Reviews</div>
        </div>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

//* Get the quantity options for the quantity selector
function getOptions(stock) {
  const options = [];
  for (let i = 1; i < stock + 1; i++) options.push({ value: i, label: i });
  return options;
}

//* If a user clicks add tocart
async function handleAddToCart(product, quantity, userId, updateHeader, token) {
  //* If the product is out of stock
  if (product.stock === 0) return 'That item is out of stock!';

  //* User is not logged in
  if (userId === undefined) {
    try {
      //* Get the order from localStorage
      const order = JSON.parse(localStorage.getItem('cart'));

      //* They have no order as of current
      if (order === null) {
        const cart = { [product.id]: quantity };
        localStorage.setItem('cart', JSON.stringify(cart));
        updateHeader(cart);
        return `${quantity}x ${product.name} has been added to your cart!`;
      }
      const prior = quantity;
      //* Get the new quantity
      quantity = order[product.id] ? order[product.id] + quantity : quantity;
      //* update their current
      const cart = { ...order, [product.id]: quantity };
      localStorage.setItem('cart', JSON.stringify(cart));
      updateHeader(cart);
      return `${prior}x ${product.name} added! (${quantity} total)`;
      //* If there was err
    } catch (error) {
      return `Item was not added to your cart!`;
    }
  } else {
    //* User is logged in
    try {
      const body = {
        productId: product.id,
        price: product.price,
        quantity: quantity,
        addition: true,
      };
      const token = await window.localStorage.getItem('token');
      await axios.post(`/api/orders/${userId}`, body, {
        headers: {
          authorization: token,
        },
      });
      updateHeader({});
      return `${quantity}x ${product.name} has been added to your cart!`;
    } catch (error) {
      return `Item was not added to your cart!`;
    }
  }
}

export default SinglePageProduct;

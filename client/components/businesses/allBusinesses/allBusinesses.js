import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { businessActions } from '../../../store/ActionsCreators';

  //* Update the products in view
const businesses=()=>{
  return (
    <div className='product-page'>
      <h1>All Businesses</h1>
      <ul>
        {}
        <li>

        </li>
        <li>

        </li>
      </ul>
     </div>
)
  }
export default businesses;

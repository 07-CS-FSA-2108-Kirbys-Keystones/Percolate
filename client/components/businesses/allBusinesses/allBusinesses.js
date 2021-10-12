import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { businessActions } from '../../../store/ActionsCreators';


  //* Update the products in view
const Businesses=()=>{

  const { businesses } = useSelector((state) => state.businesses);
  const dispatch = useDispatch();
  const [currentBusinesses, setCurrentBusinesses] = useState(undefined);

  useEffect(() => {
    setCurrentBusinesses(businesses)
   }, [])



  return (
    <div className='product-page'>
      <h1>All Businesses</h1>
      <ul>
        {currentBusinesses.forEach(business=>{
          <li>{business.name}</li>
        })}
      </ul>
     </div>
)
  }
export default Businesses;

import React, { Component, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { fetchBusinesses } from "../../../store/businessActions";

//* Update the products in view
// const Businesses = () => {
//   const { businesses } = useSelector((state) => state.businesses);
//   const dispatch = useDispatch();
//   console.log(businesses);
//   const [currentBusinesses, setCurrentBusinesses] = useState([]);

//   useEffect(() => {
//     dispatch(fetchBusinesses());
//     const setBusinesses = async () => {
//       await setCurrentBusinesses(businesses);
//     };
//     setBusinesses();
//     console.log(currentBusinesses);
//   }, []);

//   return (
//     <div className="product-page">
//       <h1>All Businesses</h1>
//       <ul>
//         {currentBusinesses.forEach((business) => {
//           <li>{business.name}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

class Businesses extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
      this.props.fetchBusinesses();
      console.log("businesses", this.props.businesses);
  }

  render() {
    if (this.props.businesses.businesses.length){
    return (<div>
      {this.props.businesses.businesses.map(business=><div>{business.name}</div>)}
      </div>);
    }
    else{
      return(<div>hiiii</div>)
    }
  }
}

const mapState = (state) => {
  return {
    businesses: state.businesses,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
  };
};

export default connect(mapState, mapDispatch)(Businesses);

import React from 'react';
//import PropTypes from 'prop-types';

const ProductItem = ({product}) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <h1>{product.price}</h1>
    </div>
  )
}

export default ProductItem

/*ProductItem.PropTypes = {
    product: PropTypes.string.isRequired
}*/
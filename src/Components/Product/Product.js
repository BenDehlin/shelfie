import React from 'react'
import {Link} from 'react-router-dom'

function Product(props){
  const {product, deleteProduct} = props
  const {id, name, price, img} = product
  return(
    <section className="product-container">
      <div>
        <img src={img} />
      </div>
      <div className="product-data">
        <div className="product-info">
          <p>Name: {name}</p>
          <p>Price: ${price}</p>
        </div>
        <div className="buttons">
        <Link to={`/form/${id}`}><button>Edit</button></Link>
        <a><button
          onClick={() => deleteProduct(id)}
        >Delete</button></a>
        </div>
      </div>
    </section>
  )
}

export default Product
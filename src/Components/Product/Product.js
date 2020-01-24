import React from 'react'
import {Link} from 'react-router-dom'

function Product(props){
  const {product, deleteProduct} = props
  const {id, name, price, img} = product
  return(
    <section className="product">
      <img src={img} />
      <h1>Name: {name}</h1>
      <h1>Price: {price}</h1>
      <div className="buttons">
      <Link to={`/form/${id}`}><button>Edit</button></Link>
      <a><button
        onClick={() => deleteProduct(id)}
      >Delete</button></a>
      </div>
    </section>
  )
}

export default Product
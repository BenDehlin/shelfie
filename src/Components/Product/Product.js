import React from 'react'
import {Link} from 'react-router-dom'

function Product(props){
  const {product, deleteProduct, productToEdit} = props
  const {id, name, price, img} = product
  return(
    <section className="product">
      <img src={img} />
      <h1>{name}</h1>
      <h1>{price}</h1>
      <div className="buttons">
      <Link to={`/form/${id}`}><button>Edit</button></Link>
      <button
        onClick={() => deleteProduct(id)}
      >Delete</button>
      </div>
    </section>
  )
}

export default Product
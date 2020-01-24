import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state = {
      inventory: [],
      id: ''
    }
    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount(){
    this.getInventory()
  }

  getInventory(){
    axios.get('/api/inventory').then(results => {
      this.setState({inventory: results.data})
    }).catch(err => console.log(err))
  }

  deleteProduct = (id) => {
    axios.delete(`/api/product/${id}`).then(results => {
      this.props.getInventory()

    }).catch(err => console.log(err))
  }

  deleteProduct = (id) => {
    axios.delete(`/api/product/${id}`).then(results => {
      this.setState({inventory: results.data})
    }).catch(err => console.log(err))
  }

  productToEdit=(id)=>{
    this.setState({id: id})
    this.props.history.push(`/form/${id}`)
  }

  render(){

    // const {productToEdit} = this.props
    return(

  <section className="list">
    {
    this.state.inventory.length === 0 && 
    <div>
      <button
        onClick={() => this.props.history.push('/form')}
      >Create New</button>
    </div>}
    {
    this.state.inventory.map(element => (
      <Product productToEdit={this.productToEdit} key={element.id} product={element} deleteProduct={this.deleteProduct} />
      ))
    }
  </section>
    )
  }

}
export default Dashboard